import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  Folder, 
  File, 
  ChevronRight, 
  ChevronDown, 
  X, 
  Download,
  LogOut,
  Menu,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import type { ImperativePanelHandle } from 'react-resizable-panels';
import { cn } from '@/lib/utils';

interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  path: string;
  content?: string;
  children?: FileItem[];
}

interface Tab {
  id: string;
  name: string;
  content: string;
  path: string;
  filePath: string;
}

export default function Dashboard() {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarPanelRef = useRef<ImperativePanelHandle>(null);
  const [fileStructure, setFileStructure] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);
  const [loadingFiles, setLoadingFiles] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Fetch file structure on mount
    const fetchFileStructure = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/documents/tree');
        if (!response.ok) {
          throw new Error('Failed to load documents');
        }
        const data = await response.json();
        setFileStructure(data);
        // Expand all root folders by default
        const rootIds = data.map((item: FileItem) => item.id);
        setExpandedFolders(new Set(rootIds));
      } catch (err: any) {
        setError(err.message || 'Failed to load documents');
        console.error('Error fetching file structure:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFileStructure();
  }, [isAuthenticated, navigate]);

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  const findFileById = (items: FileItem[], id: string): FileItem | null => {
    for (const item of items) {
      if (item.id === id) return item;
      if (item.children) {
        const found = findFileById(item.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  const getFilePath = (items: FileItem[], id: string, path: string[] = []): string[] | null => {
    for (const item of items) {
      const currentPath = [...path, item.name];
      if (item.id === id) return currentPath;
      if (item.children) {
        const found = getFilePath(item.children, id, currentPath);
        if (found) return found;
      }
    }
    return null;
  };

  const openFile = async (fileId: string) => {
    const file = findFileById(fileStructure, fileId);
    if (!file || file.type !== 'file') return;

    // Check if file is already open
    const existingTab = tabs.find(tab => tab.id === fileId);
    if (existingTab) {
      setActiveTabId(fileId);
      return;
    }

    // Add to loading set
    setLoadingFiles(prev => new Set(prev).add(fileId));

    try {
      const path = getFilePath(fileStructure, fileId) || [];
      const response = await fetch(`/api/documents/file?path=${encodeURIComponent(file.path)}`);
      
      if (!response.ok) {
        throw new Error('Failed to load file content');
      }

      const data = await response.json();
      const newTab: Tab = {
        id: fileId,
        name: file.name,
        content: data.content || 'No content available',
        path: path.join(' / '),
        filePath: file.path,
      };

      setTabs([...tabs, newTab]);
      setActiveTabId(fileId);
    } catch (err: any) {
      console.error('Error loading file:', err);
      const path = getFilePath(fileStructure, fileId) || [];
      const newTab: Tab = {
        id: fileId,
        name: file.name,
        content: `Error loading file: ${err.message}`,
        path: path.join(' / '),
        filePath: file.path,
      };
      setTabs([...tabs, newTab]);
      setActiveTabId(fileId);
    } finally {
      setLoadingFiles(prev => {
        const newSet = new Set(prev);
        newSet.delete(fileId);
        return newSet;
      });
    }
  };

  const closeTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);
    
    if (activeTabId === tabId) {
      setActiveTabId(newTabs.length > 0 ? newTabs[newTabs.length - 1].id : null);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const downloadFile = (tab: Tab) => {
    // Try to download the actual file if available, otherwise download content
    const fileUrl = `/documents/${tab.filePath}`;
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = tab.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const isMarkdownFile = (filename: string) => {
    return filename.toLowerCase().endsWith('.md') || filename.toLowerCase().endsWith('.markdown');
  };

  const renderFileContent = (content: string, filename: string) => {
    if (isMarkdownFile(filename)) {
      // For markdown, we'll render it as formatted text (could be enhanced with a markdown renderer)
      return (
        <div className="prose prose-sm max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-c6-dark bg-gray-50 p-4 rounded-lg border">
            {content}
          </pre>
        </div>
      );
    }
    return (
      <pre className="text-sm text-c6-dark whitespace-pre-wrap font-mono bg-gray-50 p-4 rounded-lg border">
        {content}
      </pre>
    );
  };

  const renderFileTree = (items: FileItem[], level = 0) => {
    if (items.length === 0) {
      return (
        <div className="px-4 py-2 text-sm text-c6-dark/60">
          No files found
        </div>
      );
    }

    return items.map((item) => {
      const isLoading = loadingFiles.has(item.id);
      return (
        <div key={item.id}>
          <div
            className={cn(
              "flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-100 cursor-pointer transition-colors",
              level > 0 && "ml-4"
            )}
            style={{ paddingLeft: `${level * 16 + 8}px` }}
            onClick={() => {
              if (item.type === 'folder') {
                toggleFolder(item.id);
              } else {
                openFile(item.id);
              }
            }}
          >
            {item.type === 'folder' ? (
              <>
                {expandedFolders.has(item.id) ? (
                  <ChevronDown className="h-4 w-4 text-c6-dark/60" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-c6-dark/60" />
                )}
                <Folder className="h-4 w-4 text-c6-primary" />
              </>
            ) : (
              <>
                <div className="w-4" />
                {isLoading ? (
                  <Loader2 className="h-4 w-4 text-c6-dark/60 animate-spin" />
                ) : (
                  <File className="h-4 w-4 text-c6-dark/60" />
                )}
              </>
            )}
            <span className="text-sm text-c6-dark">{item.name}</span>
          </div>
          {item.type === 'folder' && expandedFolders.has(item.id) && item.children && (
            <div>{renderFileTree(item.children, level + 1)}</div>
          )}
        </div>
      );
    });
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              if (sidebarOpen) {
                sidebarPanelRef.current?.collapse();
              } else {
                sidebarPanelRef.current?.expand();
              }
            }}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-lg font-semibold text-c6-dark">C6Med Dashboard</h1>
            <p className="text-xs text-c6-dark/60">Document Management</p>
          </div>
        </div>
        <Button
          variant="outline"
          onClick={handleLogout}
          className="flex items-center gap-2"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="min-h-0">
          {/* Sidebar - File Explorer */}
          <ResizablePanel
            ref={sidebarPanelRef}
            defaultSize={20}
            minSize={15}
            maxSize={40}
            collapsible={true}
            collapsedSize={0}
            onCollapse={() => setSidebarOpen(false)}
            onExpand={() => setSidebarOpen(true)}
            className="bg-white border-r border-gray-200"
          >
            <div className="h-full flex flex-col">
              <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-c6-dark">File Explorer</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => sidebarPanelRef.current?.collapse()}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <ScrollArea className="flex-1">
                <div className="p-2">
                  {loading ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="h-6 w-6 animate-spin text-c6-primary" />
                      <span className="ml-2 text-sm text-c6-dark/60">Loading documents...</span>
                    </div>
                  ) : error ? (
                    <div className="px-4 py-2 text-sm text-red-600">
                      {error}
                    </div>
                  ) : (
                    renderFileTree(fileStructure)
                  )}
                </div>
              </ScrollArea>
            </div>
          </ResizablePanel>
          
          <ResizableHandle withHandle />

          {/* Main Content Area */}
          <ResizablePanel defaultSize={sidebarOpen ? 80 : 100} minSize={60}>
            <main className="h-full flex flex-col overflow-hidden">
              {!sidebarOpen && (
                <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-r-lg rounded-l-none border-r border-t border-b border-gray-200 bg-white shadow-sm"
                    onClick={() => sidebarPanelRef.current?.expand()}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
              {/* Tabs */}
              {tabs.length > 0 && (
                <div className="bg-gray-100 border-b border-gray-200">
                  <div className="flex items-center gap-1 px-2 overflow-x-auto">
                    {tabs.map((tab) => (
                      <div
                        key={tab.id}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 border-b-2 transition-colors cursor-pointer group",
                          activeTabId === tab.id
                            ? "border-c6-primary bg-white"
                            : "border-transparent hover:bg-gray-200"
                        )}
                        onClick={() => setActiveTabId(tab.id)}
                      >
                        <span className="text-sm text-c6-dark whitespace-nowrap">{tab.name}</span>
                        <button
                          onClick={(e) => closeTab(tab.id, e)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:bg-gray-300 rounded"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* File Content */}
              <div className="flex-1 overflow-auto">
                {activeTab ? (
                  <div className="h-full flex flex-col">
                    <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-c6-dark/60">{activeTab.path}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => downloadFile(activeTab)}
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                    <ScrollArea className="flex-1">
                      <div className="p-6">
                        {renderFileContent(activeTab.content, activeTab.name)}
                      </div>
                    </ScrollArea>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <File className="h-16 w-16 text-c6-dark/20 mx-auto mb-4" />
                      <p className="text-c6-dark/60">No file selected</p>
                      <p className="text-sm text-c6-dark/40 mt-2">
                        Click on a file in the explorer to view its contents
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </main>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

