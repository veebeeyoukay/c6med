# Technical Standard Operating Procedures (SOPs)
## Quick Reference Guide for C6Med Security Operations

---

## Table of Contents

1. [Daily Security Operations](#daily-security-operations)
2. [User Account Management](#user-account-management)
3. [Device Management](#device-management)
4. [Incident Response](#incident-response)
5. [Backup and Recovery](#backup-and-recovery)
6. [Security Monitoring](#security-monitoring)
7. [Patch Management](#patch-management)
8. [Emergency Procedures](#emergency-procedures)

---

## Daily Security Operations

### SOP-001: Daily Security Check (15 minutes)

**Purpose:** Ensure all security systems are operational and identify any overnight incidents.

**Frequency:** Every business day morning by 9:00 AM

**Procedure:**

1. **Check Microsoft 365 Service Health** (2 minutes)
   ```
   Navigate to: https://admin.microsoft.com
   → Admin Centers → Health → Service health

   Check for:
   ✓ Service incidents
   ✓ Service advisories
   ✓ Message center updates

   If issues found: Document and notify affected users
   ```

2. **Review Security Alerts** (5 minutes)
   ```
   Navigate to: https://security.microsoft.com
   → Incidents & alerts → Alerts

   Filter: Last 24 hours
   Priority: High and Critical only

   For each alert:
   - Note alert type and affected user
   - Determine if immediate action required
   - Create ticket if investigation needed
   ```

3. **Check Backup Status** (3 minutes)
   ```powershell
   # Quick backup status check
   Get-SPOSite -Limit All | Select-Object Title, LastContentModifiedDate
   Get-MailboxStatistics -Identity * | Select-Object DisplayName, LastLogonTime
   ```

4. **Verify Critical Systems** (5 minutes)
   - [ ] Email flow working (send test email)
   - [ ] SharePoint accessible
   - [ ] OneDrive syncing
   - [ ] MFA service operational

**Output:** Daily security status email to management

---

## User Account Management

### SOP-002: New User Provisioning

**Purpose:** Standardize user creation process ensuring security compliance.

**Required Information:**
- Full Name
- Email address preference
- Department
- Manager
- Start date
- Role/permissions needed

**Procedure:**

```powershell
# Step 1: Create User Account
$UserDetails = @{
    FirstName = "John"
    LastName = "Doe"
    DisplayName = "John Doe"
    UserPrincipalName = "john.doe@c6med.com"
    UsageLocation = "US"
}

New-MsolUser @UserDetails -Password "TempP@ss2024!"

# Step 2: Assign License
Set-MsolUserLicense -UserPrincipalName "john.doe@c6med.com" `
                    -AddLicenses "c6med:SPE_E3"

# Step 3: Add to Groups
Add-MsolGroupMember -GroupId "[AllStaff-GroupId]" `
                    -GroupMemberObjectId "[User-ObjectId]"

# Step 4: Configure Mailbox
Enable-Mailbox -Identity "john.doe@c6med.com"
Set-CASMailbox -Identity "john.doe@c6med.com" `
               -OwaEnabled $true `
               -ActiveSyncEnabled $true

# Step 5: Send Welcome Email (template below)
```

**Welcome Email Template:**
```
Subject: Welcome to C6Med - Account Setup Instructions

Welcome [Name],

Your C6Med account is ready. Here's what you need to do:

1. Sign in at: https://portal.office.com
   Username: [username]
   Temporary password: [Sent separately]

2. Set up MFA: https://aka.ms/mfasetup

3. Install required apps:
   - Microsoft Authenticator (phone)
   - OneDrive (computer)
   - Outlook (optional)

Need help? Contact: itsupport@c6med.com

Welcome aboard!
IT Team
```

**Checklist:**
- [ ] Account created
- [ ] License assigned
- [ ] Groups configured
- [ ] Email enabled
- [ ] MFA requirement set
- [ ] Welcome email sent
- [ ] Manager notified

---

### SOP-003: User Termination

**Purpose:** Secure and compliant offboarding process.

**Immediate Actions (Within 1 Hour):**

```powershell
# URGENT: Disable Account
$User = "departed.user@c6med.com"

# 1. Block sign-in
Set-MsolUser -UserPrincipalName $User -BlockCredential $true

# 2. Revoke sessions
Revoke-AzureADUserAllRefreshToken -ObjectId (Get-AzureADUser -ObjectId $User).ObjectId

# 3. Reset password (prevents cached credential use)
Set-MsolUserPassword -UserPrincipalName $User `
                     -NewPassword (New-Guid).ToString()

# 4. Convert mailbox to shared
Set-Mailbox -Identity $User -Type Shared

# 5. Set forwarding to manager
Set-Mailbox -Identity $User `
            -ForwardingAddress "manager@c6med.com" `
            -DeliverToMailboxAndForward $false

# 6. Remove from all groups
Get-DistributionGroup |
    Remove-DistributionGroupMember -Member $User -Confirm:$false
```

**24-Hour Actions:**
- [ ] Remove SharePoint permissions
- [ ] Revoke Dropbox access
- [ ] Wipe mobile devices
- [ ] Document data transferred

**7-Day Actions:**
- [ ] Archive OneDrive
- [ ] Export mailbox to PST
- [ ] Remove licenses
- [ ] Create termination report

---

### SOP-004: Password Reset

**Purpose:** Secure password reset process with identity verification.

**Identity Verification Requirements:**
1. Manager approval (email)
2. Security question (if set)
3. Phone verification (last 4 digits)

**Procedure:**

```powershell
# Step 1: Verify identity (document verification method)
$User = "user@c6med.com"
$VerificationMethod = "Manager approval via email"

# Step 2: Generate secure temporary password
$TempPassword = "C6Med-" + (Get-Random -Minimum 1000 -Maximum 9999) + "!Temp"

# Step 3: Reset password
Set-MsolUserPassword -UserPrincipalName $User `
                     -NewPassword $TempPassword `
                     -ForceChangePassword $true

# Step 4: Clear MFA if needed (document reason)
Set-MsolUser -UserPrincipalName $User `
             -StrongAuthenticationMethods @()

# Step 5: Notify user via alternate method
# Send to personal email or call user
```

**Documentation Required:**
- Ticket number: _______
- Verification method: _______
- Reset time: _______
- MFA reset: [Y/N]
- Next login forced: [Y/N]

---

## Device Management

### SOP-005: Device Enrollment - Windows

**Purpose:** Standardize Windows device enrollment in Intune.

**Pre-requisites:**
- Windows 10/11 Pro or Enterprise
- Internet connection
- User has M365 license

**Procedure:**

1. **Prepare Device**
   ```
   Settings → Update & Security → Windows Update
   → Check for updates → Install all updates
   → Restart if required
   ```

2. **Enable Security Features**
   ```
   Settings → Update & Security → Device Encryption
   → Turn on (if available)

   Windows Security → Virus & threat protection
   → Turn on all protections
   ```

3. **Enroll in Intune**
   ```
   Settings → Accounts → Access work or school
   → Connect → Enter C6Med email
   → Complete authentication
   → Accept terms

   Wait 10-15 minutes for policies to apply
   ```

4. **Verify Enrollment**
   ```powershell
   # On device
   dsregcmd /status

   # In admin portal
   https://endpoint.microsoft.com
   → Devices → All devices → Search for device
   ```

**Success Indicators:**
- ✓ Device appears in Intune
- ✓ Compliance status: Compliant
- ✓ BitLocker enabled
- ✓ Windows Defender active
- ✓ Updates configured

---

### SOP-006: Device Compliance Check

**Purpose:** Weekly verification of device compliance.

**Frequency:** Every Monday morning

**Procedure:**

```powershell
# Generate compliance report
Connect-MSGraph
$Devices = Get-IntuneManagedDevice

$Report = foreach ($Device in $Devices) {
    [PSCustomObject]@{
        DeviceName = $Device.deviceName
        User = $Device.userPrincipalName
        OS = $Device.operatingSystem
        ComplianceState = $Device.complianceState
        LastSync = $Device.lastSyncDateTime
        Encrypted = $Device.isEncrypted
    }
}

$Report | Export-Csv "WeeklyCompliance_$(Get-Date -Format 'yyyyMMdd').csv"
```

**Action Matrix:**

| Compliance State | Action Required | Timeline |
|-----------------|-----------------|----------|
| Compliant | None | N/A |
| Non-compliant | Email user with requirements | 24 hours |
| Unknown | Force sync, re-check | Same day |
| Error | Contact user for troubleshooting | Same day |

**Escalation:**
- Day 1: Email user
- Day 3: Email user + manager
- Day 7: Restrict access
- Day 14: Full block

---

## Incident Response

### SOP-007: Account Compromise Response

**Purpose:** Immediate response to suspected account compromise.

**Severity Levels:**
- **Critical:** Admin account or executive
- **High:** Access to sensitive data
- **Medium:** Standard user account
- **Low:** Limited access account

**Immediate Response (0-5 minutes):**

```powershell
# CRITICAL: Stop the breach
$CompromisedUser = "user@c6med.com"

# 1. Disable account immediately
Set-MsolUser -UserPrincipalName $CompromisedUser -BlockCredential $true

# 2. Revoke all tokens
Revoke-AzureADUserAllRefreshToken -ObjectId (Get-AzureADUser -ObjectId $CompromisedUser).ObjectId

# 3. Force password reset
Set-MsolUserPassword -UserPrincipalName $CompromisedUser `
                     -NewPassword (New-Guid).ToString()

# 4. Document initial response
$IncidentLog = @"
Incident Time: $(Get-Date)
User: $CompromisedUser
Action Taken: Account disabled, sessions revoked, password reset
Responder: $env:USERNAME
"@
```

**Investigation (5-30 minutes):**

```powershell
# Check recent activity
Search-UnifiedAuditLog -UserIds $CompromisedUser `
                      -StartDate (Get-Date).AddDays(-7) `
                      -EndDate (Get-Date) `
                      -ResultSize 5000 |
    Export-Csv "Incident_Activity_Log.csv"

# Check mail forwarding
Get-Mailbox -Identity $CompromisedUser |
    Select-Object ForwardingAddress, ForwardingSmtpAddress

# Check inbox rules
Get-InboxRule -Mailbox $CompromisedUser

# Check recent sign-ins
Get-AzureADAuditSignInLogs -Filter "userPrincipalName eq '$CompromisedUser'"
```

**Recovery (30-60 minutes):**
1. Remove malicious inbox rules
2. Reset MFA registration
3. Check for data exfiltration
4. Reset password again
5. Re-enable account with monitoring
6. Notify user of incident

---

### SOP-008: Malware Detection Response

**Purpose:** Respond to malware detection on C6Med devices.

**Initial Response:**

1. **Isolate Device** (Immediate)
   - Disconnect from network
   - Disable WiFi/Ethernet
   - Do NOT shut down (preserves memory)

2. **Document Incident**
   ```
   Date/Time: _______
   Device: _______
   User: _______
   Malware name: _______
   Detection source: _______
   Symptoms observed: _______
   ```

3. **Run Full Scan**
   ```powershell
   # Windows Defender scan
   Start-MpScan -ScanType FullScan -AsJob

   # Check results
   Get-MpThreatDetection | Select-Object -First 10
   ```

4. **Remediation Steps**
   - [ ] Quarantine detected files
   - [ ] Update definitions
   - [ ] Run second opinion scanner
   - [ ] Check for persistence
   - [ ] Review recent downloads
   - [ ] Check other devices

**Post-Incident:**
- Update security awareness training
- Review detection gaps
- Implement additional controls if needed

---

## Backup and Recovery

### SOP-009: Email Recovery

**Purpose:** Restore deleted or lost emails.

**Recovery Options by Age:**

| Deletion Age | Recovery Method | Success Rate |
|-------------|-----------------|--------------|
| <30 days | Deleted Items folder | 100% |
| 30-90 days | Recoverable Items | 95% |
| >90 days | Litigation Hold (if enabled) | Varies |

**Procedure:**

```powershell
# Option 1: User-initiated recovery
# User can recover from Outlook:
# Deleted Items → Recover Deleted Items from Server

# Option 2: Admin recovery
$Mailbox = "user@c6med.com"

# Search Recoverable Items
Search-Mailbox -Identity $Mailbox `
               -SearchDumpsterOnly `
               -SearchQuery "Subject:'Important Document'" `
               -TargetMailbox "admin@c6med.com" `
               -TargetFolder "RecoveredItems"

# Option 3: Restore all recently deleted
Restore-RecoverableItems -Identity $Mailbox `
                        -FilterStartTime (Get-Date).AddDays(-7) `
                        -FilterEndTime (Get-Date)
```

**Documentation:**
- Recovery request ticket: _______
- Items recovered: _______
- Recovery method used: _______
- Time to recovery: _______

---

### SOP-010: SharePoint File Recovery

**Purpose:** Restore deleted or previous versions of SharePoint files.

**Version History Recovery:**

1. Navigate to document library
2. Click "..." next to file
3. Select "Version History"
4. Choose version to restore
5. Click "Restore"

**Recycle Bin Recovery:**

```powershell
# First-stage recycle bin (user deleted)
Connect-SPOService -Url https://c6med-admin.sharepoint.com

# List deleted items
Get-SPORecycleBinItem -Site https://c6med.sharepoint.com/sites/sitename

# Restore specific item
Restore-SPORecycleBinItem -Site https://c6med.sharepoint.com/sites/sitename `
                         -Identity [ItemId]

# Second-stage recycle bin (admin only)
# Access via SharePoint Admin Center
# Site → Recycle Bin → Second-stage recycle bin
```

**Recovery Timelines:**
- First-stage recycle: 93 days
- Second-stage recycle: 93 days
- Version history: 500 versions or 30 days
- Total possible recovery: 186 days

---

## Security Monitoring

### SOP-011: Weekly Security Review

**Purpose:** Comprehensive weekly security assessment.

**Schedule:** Every Friday afternoon

**Review Checklist:**

```powershell
# 1. User Account Audit
Get-MsolUser -All | Where-Object {
    $_.BlockCredential -eq $false -and
    $_.LastPasswordChangeTimestamp -lt (Get-Date).AddDays(-90)
} | Select-Object DisplayName, LastPasswordChangeTimestamp

# 2. MFA Status Check
Get-MsolUser -All | Where-Object {
    $_.StrongAuthenticationRequirements.State -eq $null
} | Select-Object DisplayName, UserPrincipalName

# 3. Guest Account Review
Get-AzureADUser -Filter "UserType eq 'Guest'" |
    Select-Object DisplayName, Mail, CreatedDateTime

# 4. Admin Role Audit
Get-MsolRoleMember -RoleObjectId (Get-MsolRole -RoleName "Global Administrator").ObjectId

# 5. Failed Sign-ins
Search-UnifiedAuditLog -Operations "UserLoginFailed" `
                      -StartDate (Get-Date).AddDays(-7) `
                      -EndDate (Get-Date) |
    Group-Object -Property UserIds |
    Where-Object {$_.Count -gt 10}
```

**Report Template:**
```markdown
# Weekly Security Report - [Date]

## Summary
- Total users: ___
- Active users (7 days): ___
- Security incidents: ___
- Compliance rate: ___%

## Concerns
1. [Issue 1]
2. [Issue 2]

## Actions Taken
1. [Action 1]
2. [Action 2]

## Recommendations
1. [Recommendation 1]
2. [Recommendation 2]

Next review: [Date]
```

---

### SOP-012: Alert Investigation

**Purpose:** Standardize investigation of security alerts.

**Investigation Framework:**

```powershell
# Alert Investigation Script
param(
    [string]$UserPrincipalName,
    [datetime]$IncidentTime
)

# Step 1: User Activity (±2 hours of incident)
$Activities = Search-UnifiedAuditLog -UserIds $UserPrincipalName `
    -StartDate $IncidentTime.AddHours(-2) `
    -EndDate $IncidentTime.AddHours(2) `
    -ResultSize 1000

# Step 2: Sign-in Analysis
$SignIns = Get-AzureADAuditSignInLogs -Filter "userPrincipalName eq '$UserPrincipalName'" |
    Where-Object {$_.CreatedDateTime -ge $IncidentTime.AddHours(-24)}

# Step 3: Email Analysis
$SentItems = Get-MailboxFolderStatistics -Identity $UserPrincipalName `
    -FolderScope SentItems |
    Select-Object ItemsInFolder, FolderSize

# Step 4: File Access
$FileAccess = Search-UnifiedAuditLog -Operations FileAccessed,FileDownloaded `
    -UserIds $UserPrincipalName `
    -StartDate $IncidentTime.AddHours(-2) `
    -EndDate $IncidentTime.AddHours(2)

# Generate investigation report
$Report = @{
    User = $UserPrincipalName
    IncidentTime = $IncidentTime
    TotalActivities = $Activities.Count
    SignInCount = $SignIns.Count
    EmailsSent = $SentItems.ItemsInFolder
    FilesAccessed = $FileAccess.Count
}

$Report | ConvertTo-Json | Out-File "Investigation_$(Get-Date -Format 'yyyyMMdd_HHmmss').json"
```

**Decision Matrix:**

| Finding | Risk Level | Action |
|---------|-----------|--------|
| Normal patterns | Low | Close alert |
| Unusual location | Medium | Contact user |
| Mass download | High | Disable account |
| Data exfiltration | Critical | Immediate response |

---

## Patch Management

### SOP-013: Monthly Patch Cycle

**Purpose:** Ensure all devices receive critical updates monthly.

**Schedule:**
- Week 1: Microsoft Patch Tuesday assessment
- Week 2: Test patches on pilot group
- Week 3: Deploy to all devices
- Week 4: Compliance verification

**Procedure:**

```powershell
# Week 1: Assessment
Get-WindowsUpdate -MicrosoftUpdate |
    Where-Object {$_.Categories -contains "Security Updates"} |
    Export-Csv "MonthlyPatches_$(Get-Date -Format 'yyyyMM').csv"

# Week 2: Pilot Deployment
$PilotDevices = @("Device1", "Device2", "Device3")
foreach ($Device in $PilotDevices) {
    Invoke-Command -ComputerName $Device -ScriptBlock {
        Install-WindowsUpdate -AcceptAll -AutoReboot
    }
}

# Week 3: Full Deployment
Get-IntuneManagedDevice | ForEach-Object {
    Sync-IntuneManagedDevice -managedDeviceId $_.id
}

# Week 4: Verification
$Compliance = Get-IntuneManagedDevice |
    Select-Object deviceName, complianceState, lastSyncDateTime |
    Where-Object {$_.lastSyncDateTime -lt (Get-Date).AddDays(-7)}

$Compliance | Export-Csv "PatchCompliance_$(Get-Date -Format 'yyyyMM').csv"
```

**Non-Compliance Actions:**
1. Day 1-3: Email reminder
2. Day 4-7: Manager notification
3. Day 8-14: Access restriction warning
4. Day 15+: Conditional access block

---

### SOP-014: Emergency Patch Deployment

**Purpose:** Rapid deployment of critical security patches.

**Trigger:** Zero-day vulnerability or critical security bulletin

**Procedure:**

1. **Assessment** (30 minutes)
   - Review vulnerability details
   - Identify affected systems
   - Determine business impact

2. **Communication** (15 minutes)
   ```
   Email Template:
   Subject: URGENT: Critical Security Update Required

   A critical security update must be installed immediately.

   Action Required:
   1. Save all work
   2. Click Start → Settings → Update
   3. Install all updates
   4. Restart when prompted

   Deadline: [Time]

   Contact IT support with any issues.
   ```

3. **Deployment** (1-2 hours)
   ```powershell
   # Force immediate update
   Get-IntuneManagedDevice | ForEach-Object {
       Invoke-IntuneManagedDeviceAction -managedDeviceId $_.id `
                                       -actionName syncDevice
   }

   # Monitor progress
   Get-IntuneManagedDevice |
       Select-Object deviceName, complianceState, lastSyncDateTime |
       Out-GridView -Title "Update Progress"
   ```

4. **Verification** (1 hour)
   - Check all critical devices updated
   - Test functionality
   - Document completion

---

## Emergency Procedures

### SOP-015: Complete System Compromise

**Purpose:** Response to organization-wide security breach.

**IMMEDIATE ACTIONS (0-15 minutes):**

1. **Isolate Network**
   - Disconnect internet (if possible)
   - Disable remote access
   - Stop email flow

2. **Preserve Evidence**
   - Do NOT reboot systems
   - Document everything
   - Start recording times

3. **Emergency Contacts**
   ```
   Order of Contact:
   1. CEO: [Phone]
   2. Legal Counsel: [Phone]
   3. Cyber Insurance: [Phone]
   4. Microsoft Support: 1-800-642-7676
   ```

4. **Lock Down Accounts**
   ```powershell
   # Disable all non-admin accounts
   Get-MsolUser -All |
       Where-Object {$_.DisplayName -notlike "*admin*"} |
       ForEach-Object {
           Set-MsolUser -UserPrincipalName $_.UserPrincipalName `
                       -BlockCredential $true
       }
   ```

**ASSESSMENT (15-60 minutes):**
- Identify entry point
- Determine data affected
- List compromised accounts
- Check backup integrity

**COMMUNICATION:**
- Internal: Staff notification
- External: Customer notification (if required)
- Legal: Regulatory requirements
- PR: Media response (if needed)

---

### SOP-016: Disaster Recovery Activation

**Purpose:** Restore operations after major incident.

**Activation Criteria:**
- Complete data loss
- Ransomware encryption
- Natural disaster
- Extended service outage

**Recovery Priority Order:**

1. **Priority 1 - Critical (0-4 hours)**
   - Email service
   - Authentication (AD/Azure AD)
   - Executive access

2. **Priority 2 - Essential (4-8 hours)**
   - SharePoint/OneDrive
   - Financial systems
   - Client data access

3. **Priority 3 - Important (8-24 hours)**
   - Remaining user accounts
   - Non-critical applications
   - Archive access

**Recovery Procedures:**

```powershell
# Phase 1: Restore Authentication
# Verify Azure AD accessible
Test-MsolDomain -DomainName "c6med.com"

# Phase 2: Restore Email
# Check Exchange Online status
Get-Mailbox -ResultSize Unlimited |
    Test-MAPIConnectivity

# Phase 3: Restore Data
# Verify SharePoint sites
Get-SPOSite -Limit All |
    Select-Object Title, Status

# Phase 4: User Communication
Send-MailMessage -To "all@c6med.com" `
                 -Subject "System Restoration Update" `
                 -Body "Services are being restored. Status: [Update]" `
                 -Priority High
```

---

## Quick Reference Cards

### Card 1: Emergency Contacts

```
SECURITY EMERGENCY CONTACTS
═══════════════════════════
Incident Commander: [Name] - [Phone]
CEO: [Name] - [Phone]
IT Lead: [Name] - [Phone]
Legal: [Firm] - [Phone]
Insurance: [Company] - [Phone]
Microsoft: 1-800-642-7676
═══════════════════════════
After Hours:
On-Call: [Phone]
Escalation: [Phone]
```

### Card 2: Critical Commands

```powershell
# EMERGENCY COMMANDS
# ==================

# Disable User
Set-MsolUser -UserPrincipalName user@c6med.com -BlockCredential $true

# Revoke Sessions
Revoke-AzureADUserAllRefreshToken -ObjectId [ObjectId]

# Force Sync
Start-ADSyncSyncCycle -PolicyType Delta

# Check Service Health
Get-MsolCompanyInformation

# Audit Search
Search-UnifiedAuditLog -StartDate (Get-Date).AddHours(-1) -EndDate (Get-Date)
```

### Card 3: Service URLs

```
ADMIN PORTALS
═════════════
M365 Admin: https://admin.microsoft.com
Security: https://security.microsoft.com
Compliance: https://compliance.microsoft.com
Azure AD: https://portal.azure.com
Exchange: https://admin.exchange.microsoft.com
SharePoint: https://c6med-admin.sharepoint.com
Intune: https://endpoint.microsoft.com

SUPPORT
═══════
M365 Support: https://admin.microsoft.com/support
Service Health: https://status.office365.com
```

### Card 4: Incident Priorities

```
INCIDENT PRIORITY MATRIX
════════════════════════
P1 - CRITICAL (15 min response)
- Ransomware/malware
- Admin account compromise
- Data breach
- Complete service outage

P2 - HIGH (1 hour response)
- User account compromise
- Suspicious activity
- Partial outage
- Failed backups

P3 - MEDIUM (4 hour response)
- Policy violations
- Non-critical failures
- Performance issues

P4 - LOW (24 hour response)
- User questions
- Minor issues
- Documentation updates
```

---

## Appendix: Troubleshooting Guides

### Common Issues Quick Fixes

**MFA Not Working**
```powershell
# Reset MFA
Set-MsolUser -UserPrincipalName user@c6med.com `
             -StrongAuthenticationMethods @()
# User must re-enroll
```

**Cannot Access SharePoint**
```powershell
# Check permissions
Get-SPOUser -Site [SiteURL] -LoginName user@c6med.com
# Add if missing
Add-SPOUser -Site [SiteURL] -LoginName user@c6med.com -Group "Members"
```

**Email Not Syncing**
```powershell
# Check mailbox status
Get-Mailbox -Identity user@c6med.com | FL
# Fix common issues
Set-CASMailbox -Identity user@c6med.com -ActiveSyncEnabled $true
```

**Device Not Compliant**
```powershell
# Force compliance check
Sync-IntuneManagedDevice -managedDeviceId [DeviceId]
# Check specific issues
Get-IntuneManagedDevice -managedDeviceId [DeviceId] |
    Select-Object complianceState, complianceGracePeriodExpirationDateTime
```

---

## Document Information

**Version:** 1.0
**Last Updated:** November 2024
**Next Review:** February 2025
**Owner:** C6Med IT Security Team
**Classification:** Internal Use Only

**Change Log:**
- v1.0 - Initial release (November 2024)

**Feedback:**
Please report errors or suggestions to: security@c6med.com

---

*These SOPs are living documents and should be updated based on operational experience and changing requirements.*