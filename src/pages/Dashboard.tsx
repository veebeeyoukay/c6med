import { useState, useEffect } from 'react';
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
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  content?: string;
  children?: FileItem[];
}

interface Tab {
  id: string;
  name: string;
  content: string;
  path: string;
}

// File Explorer Root Directory
// All files displayed in the file explorer should be placed in: /documents/
// This is the root folder located at: /Volumes/dev/C6Med/c6med.com/documents/
const FILE_EXPLORER_ROOT = '/documents';

// Mock file structure
const mockFileStructure: FileItem[] = [
  {
    id: '1',
    name: 'Medical Communications',
    type: 'folder',
    children: [
      {
        id: '1-1',
        name: 'Case Studies',
        type: 'folder',
        children: [
          {
            id: '1-1-1',
            name: 'Oncology Program.pdf',
            type: 'file',
            content: 'This is a comprehensive case study about our oncology education program that reached over 5,000 oncologists...',
          },
          {
            id: '1-1-2',
            name: 'Cardiovascular Launch.pdf',
            type: 'file',
            content: 'Details about our cardiovascular treatment launch support and educational content for cardiologists...',
          },
        ],
      },
      {
        id: '1-2',
        name: 'Presentations',
        type: 'folder',
        children: [
          {
            id: '1-2-1',
            name: 'Q4 2024 Review.pptx',
            type: 'file',
            content: 'Quarterly review presentation covering all medical communications initiatives...',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Client Documents',
    type: 'folder',
    children: [
      {
        id: '2-1',
        name: 'Pharma Co A',
        type: 'folder',
        children: [
          {
            id: '2-1-1',
            name: 'Project Proposal.docx',
            type: 'file',
            content: 'Project proposal for medical education program including timeline, budget, and deliverables...',
          },
          {
            id: '2-1-2',
            name: 'Meeting Notes.pdf',
            type: 'file',
            content: 'Meeting notes from client discussions regarding strategic communications approach...',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Resources',
    type: 'folder',
    children: [
      {
        id: '3-1',
        name: 'Templates',
        type: 'folder',
        children: [
          {
            id: '3-1-1',
            name: 'Medical Education Template.docx',
            type: 'file',
            content: 'Standard template for medical education content creation...',
          },
        ],
      },
      {
        id: '3-2',
        name: 'Guidelines.pdf',
        type: 'file',
        content: 'Internal guidelines for pharmaceutical communications compliance and best practices...',
      },
    ],
  },
];

export default function Dashboard() {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['1', '2', '3']));
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
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

  const openFile = (fileId: string) => {
    const file = findFileById(mockFileStructure, fileId);
    if (!file || file.type !== 'file') return;

    // Check if file is already open
    const existingTab = tabs.find(tab => tab.id === fileId);
    if (existingTab) {
      setActiveTabId(fileId);
      return;
    }

    const path = getFilePath(mockFileStructure, fileId) || [];
    const newTab: Tab = {
      id: fileId,
      name: file.name,
      content: file.content || 'No content available',
      path: path.join(' / '),
    };

    setTabs([...tabs, newTab]);
    setActiveTabId(fileId);
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
    const blob = new Blob([tab.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = tab.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderFileTree = (items: FileItem[], level = 0) => {
    return items.map((item) => (
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
              <File className="h-4 w-4 text-c6-dark/60" />
            </>
          )}
          <span className="text-sm text-c6-dark">{item.name}</span>
        </div>
        {item.type === 'folder' && expandedFolders.has(item.id) && item.children && (
          <div>{renderFileTree(item.children, level + 1)}</div>
        )}
      </div>
    ));
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
            onClick={() => setSidebarOpen(!sidebarOpen)}
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
        {/* Sidebar - File Explorer */}
        <aside
          className={cn(
            "bg-white border-r border-gray-200 transition-all duration-300",
            sidebarOpen ? "w-64" : "w-0 overflow-hidden"
          )}
        >
          {sidebarOpen && (
            <div className="h-full flex flex-col">
              <div className="px-4 py-3 border-b border-gray-200">
                <h2 className="text-sm font-semibold text-c6-dark">File Explorer</h2>
              </div>
              <ScrollArea className="flex-1">
                <div className="p-2">
                  {renderFileTree(mockFileStructure)}
                </div>
              </ScrollArea>
            </div>
          )}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden">
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
                    <pre className="text-sm text-c6-dark whitespace-pre-wrap font-mono bg-gray-50 p-4 rounded-lg border">
                      {activeTab.content}
                    </pre>
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
      </div>
    </div>
  );
}

