# Technical Training Workbook
## Hands-On Exercises and Practice Scenarios for C6Med Security Implementation

---

## Introduction

This workbook provides structured hands-on exercises to reinforce the concepts covered in the Technical Implementation Training Guide. Each exercise includes realistic scenarios, step-by-step instructions, validation criteria, and troubleshooting guides.

**How to Use This Workbook:**
1. Complete exercises in order (they build upon each other)
2. Document your results in the provided templates
3. Use the validation checklists to verify success
4. Note any issues encountered for discussion
5. Keep completed exercises as reference materials

**Required Resources:**
- Administrator access to C6Med M365 environment
- Test user accounts for exercises
- Access to a Windows and Mac device
- Note-taking tools

---

## Exercise Set 1: Device Management and Enrollment

### Exercise 1.1: Windows Device Enrollment

**Scenario:** Sarah Chen, a new clinical staff member, has just joined C6Med. She has a personal Windows 11 laptop that needs to be configured for work use.

**Objective:** Successfully enroll Sarah's device in Microsoft Intune and verify compliance.

**Pre-Exercise Setup:**
- [ ] Create test user account: sarah.chen@c6med.com
- [ ] Assign Microsoft 365 E3 license
- [ ] Ensure Intune is configured with basic compliance policies

**Step-by-Step Instructions:**

1. **Initial Device Check**
   ```
   Record current device state:
   - Windows Version: _____________
   - BitLocker Status: _____________
   - Windows Defender Status: _____________
   - Current User Account Type: _____________
   ```

2. **Enroll Device in Intune**
   - Go to Settings > Accounts > Access work or school
   - Click "Connect"
   - Enter: sarah.chen@c6med.com
   - Complete authentication
   - Accept terms and conditions

   **Checkpoint:** Take screenshot of enrollment confirmation

3. **Verify Enrollment in Admin Portal**
   - Sign in to endpoint.microsoft.com as admin
   - Navigate to Devices > All devices
   - Locate Sarah's device

   ```
   Record device details:
   - Device Name: _____________
   - Compliance Status: _____________
   - Last Check-in: _____________
   - Assigned Policies: _____________
   ```

4. **Force Sync and Verify Policies**
   - On Sarah's device: Settings > Accounts > Access work or school
   - Click on the account > Info > Sync

   **Expected Results:**
   - [ ] BitLocker encryption enabled
   - [ ] Windows Defender real-time protection on
   - [ ] Firewall enabled
   - [ ] Automatic updates configured

**Troubleshooting Guide:**

| Issue | Solution | Notes |
|-------|----------|-------|
| Enrollment fails (0x80180014) | Clear browser cache, use different browser | |
| Policies not applying | Force sync, wait 15 minutes, check again | |
| BitLocker not enabling | Check TPM status, may need manual enablement | |
| Cannot find device in portal | Check enrollment restrictions, verify license | |

**Exercise Validation:**
- [ ] Device appears in Intune portal
- [ ] Compliance status shows "Compliant"
- [ ] All security policies applied
- [ ] User can access M365 services
- [ ] Screenshot evidence collected

**Notes/Issues Encountered:**
_________________________________
_________________________________
_________________________________

---

### Exercise 1.2: Mac Device Configuration

**Scenario:** Dr. James Wilson uses a MacBook Pro for his clinical work. Configure his device with appropriate security controls.

**Objective:** Manually configure Mac security settings and document compliance.

**Configuration Checklist:**

```bash
# Run these commands in Terminal and record results

# 1. Check FileVault Status
sudo fdesetup status
Result: _____________

# 2. Enable FileVault (if not enabled)
sudo fdesetup enable
Recovery Key: _____________ (STORE SECURELY!)

# 3. Check Firewall Status
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate
Result: _____________

# 4. Enable Firewall (if needed)
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on
Result: _____________

# 5. Enable Automatic Updates
sudo defaults write /Library/Preferences/com.apple.SoftwareUpdate AutomaticCheckEnabled -bool true
sudo defaults write /Library/Preferences/com.apple.SoftwareUpdate AutomaticDownload -bool true

# 6. Verify Gatekeeper
spctl --status
Result: _____________
```

**Manual Configuration Steps:**

1. **System Preferences Security Check**
   - System Preferences > Security & Privacy
   - General Tab:
     - [ ] Require password immediately after sleep
     - [ ] Show message when screen is locked
   - FileVault Tab:
     - [ ] FileVault is On
   - Firewall Tab:
     - [ ] Firewall is On
     - [ ] Stealth mode enabled
   - Privacy Tab:
     - [ ] Review app permissions

2. **Time Machine Setup**
   - System Preferences > Time Machine
   - Select Backup Disk
   - [ ] Automatic backups enabled
   - [ ] Show Time Machine in menu bar

   **Test Backup:**
   - Create test file: backup_test.txt
   - Wait for backup
   - Delete file
   - Enter Time Machine and verify file exists

**Validation Checklist:**
- [ ] FileVault enabled and recovery key stored
- [ ] Firewall active with stealth mode
- [ ] Automatic updates configured
- [ ] Time Machine configured and tested
- [ ] Screen lock set to 5 minutes
- [ ] All settings documented

---

## Exercise Set 2: Microsoft 365 Security Configuration

### Exercise 2.1: Configure DLP Policy

**Scenario:** C6Med needs to prevent sensitive patient information from being shared externally via email or uploaded to personal cloud storage.

**Objective:** Create and test a DLP policy that detects and blocks sensitive information.

**Step 1: Create DLP Policy**

1. Navigate to compliance.microsoft.com
2. Go to Data Loss Prevention > Policies
3. Create new policy:

```
Policy Configuration:
Name: C6Med Patient Information Protection
Description: Prevents sharing of SSN, health records, and patient data

Locations:
[✓] Exchange email
[✓] SharePoint sites
[✓] OneDrive accounts
[✓] Microsoft Teams

Sensitive Info Types:
[✓] U.S. Social Security Number (SSN)
[✓] Credit Card Number
[✓] Health Records (HIPAA)
[✓] Custom: Patient ID Format (if applicable)

Actions:
- External sharing: Block
- Internal sharing: Audit only
- User notification: Yes
- Admin alert: Yes
- Incident report: Generate

Testing:
[ ] Enable in test mode first
[ ] Run for 24 hours
[ ] Review matches
[ ] Enable enforcement
```

**Step 2: Test DLP Policy**

Create test documents with fake sensitive data:

```
Test Document 1: Email Test
Subject: Test DLP Detection
Body:
Patient: John Doe
SSN: 123-45-6789 (FAKE - TEST ONLY)
Diagnosis: Test condition
Treatment: Test medication

Expected Result: [BLOCKED/WARNED]
Actual Result: _____________
```

```
Test Document 2: File Upload Test
Filename: patient_test_data.xlsx
Content:
Name | SSN | Credit Card | Notes
Test User | 111-22-3333 | 4532-1234-5678-9012 | Test data only

Upload Location: Personal OneDrive
Expected Result: [BLOCKED/WARNED]
Actual Result: _____________
```

**Step 3: Review DLP Alerts**

1. Go to compliance.microsoft.com > Reports
2. View DLP policy matches
3. Document findings:

```
DLP Test Results:
Total Matches: _____________
False Positives: _____________
True Positives: _____________
Missed Detections: _____________

Action Items:
1. _____________
2. _____________
3. _____________
```

**Validation:**
- [ ] Policy created successfully
- [ ] Test emails blocked appropriately
- [ ] File uploads detected
- [ ] Alerts received by admin
- [ ] Users received notifications
- [ ] No legitimate business blocked

---

### Exercise 2.2: SharePoint Security Configuration

**Scenario:** Configure the "Client Contracts" SharePoint site with appropriate security controls.

**Objective:** Create a secure SharePoint site with proper permissions and auditing.

**Step 1: Create Site**

```
Site Details:
Name: Client Contracts
URL: https://c6med.sharepoint.com/sites/ClientContracts
Template: Team Site (no M365 Group)
Privacy: Private
```

**Step 2: Configure Permissions**

1. **Remove Default Permissions**
   - Site Settings > Site Permissions
   - Stop Inheriting Permissions
   - Remove "Everyone except external users"

2. **Create Security Groups**
   ```
   Group Name: C6Med-Contracts-Owners
   Permission Level: Full Control
   Members: [CEO, Legal Counsel]

   Group Name: C6Med-Contracts-Members
   Permission Level: Edit
   Members: [Account Managers]

   Group Name: C6Med-Contracts-Visitors
   Permission Level: Read
   Members: [All Staff]
   ```

3. **Test Permissions**

   | Test User | Expected Access | Test Result | Pass/Fail |
   |-----------|-----------------|-------------|-----------|
   | CEO | Full Control | _________ | _____ |
   | Account Manager | Edit | _________ | _____ |
   | Clinical Staff | Read Only | _________ | _____ |
   | External User | No Access | _________ | _____ |

**Step 3: Enable Auditing**

```powershell
# Enable audit logging for the site
Set-SPOSite -Identity https://c6med.sharepoint.com/sites/ClientContracts `
            -DisableCompanyWideSharingLinks "true" `
            -SharingCapability "ExistingExternalUserSharingOnly"

# Configure audit settings
Set-SPOTenant -EnableAuditLog $true
```

**Step 4: Apply Sensitivity Labels**

1. Create/Apply Label:
   - Name: "C6Med Confidential - Contracts"
   - Encryption: Yes
   - Access: Authenticated users only
   - Watermark: "CONFIDENTIAL"
   - Track and revoke: Enabled

2. Test Label Application:
   - Upload test document
   - Apply sensitivity label
   - Share with external email (should fail)
   - Download and verify watermark

**Validation Checklist:**
- [ ] Site created with correct URL
- [ ] Permissions properly configured
- [ ] External sharing disabled
- [ ] Audit logging enabled
- [ ] Sensitivity labels working
- [ ] Test users have correct access

---

## Exercise Set 3: User Access Management

### Exercise 3.1: New User Onboarding

**Scenario:** Maria Rodriguez joins C6Med as a Clinical Research Coordinator. Complete her full onboarding process.

**User Details:**
```
Name: Maria Rodriguez
Email: maria.rodriguez@c6med.com
Department: Clinical
Role: Research Coordinator
Start Date: [Today's Date]
Manager: Dr. Wilson
```

**Onboarding Checklist:**

**Phase 1: Account Creation**
- [ ] Create user account in M365 admin center
- [ ] Assign E3 license
- [ ] Generate temporary password: _____________
- [ ] Document in onboarding log

**Phase 2: Group Memberships**
```
Add to following groups:
[ ] All Staff (Distribution)
[ ] Clinical Team (Security)
[ ] Research Team (M365)
[ ] SharePoint - Clinical Sites (Permission)
```

**Phase 3: Access Configuration**
```powershell
# PowerShell commands to execute
# Record output for each command

# 1. Enable mailbox
Enable-Mailbox -Identity maria.rodriguez@c6med.com
Output: _____________

# 2. Set mailbox features
Set-CASMailbox -Identity maria.rodriguez@c6med.com `
               -OwaEnabled $true `
               -ActiveSyncEnabled $true
Output: _____________

# 3. Configure OneDrive
Request-SPOPersonalSite -UserEmails maria.rodriguez@c6med.com
Output: _____________

# 4. Add to SharePoint sites
Add-SPOUser -Site https://c6med.sharepoint.com/sites/Clinical `
            -LoginName maria.rodriguez@c6med.com `
            -Group "Clinical Members"
Output: _____________
```

**Phase 4: Security Configuration**
- [ ] MFA registration email sent
- [ ] Password manager invitation sent
- [ ] Device enrollment instructions sent
- [ ] Security training assigned

**Phase 5: Verification**
```
Verification Tests:
[ ] Can sign in to portal.office.com
[ ] MFA prompts on second login
[ ] Can access email
[ ] Can access SharePoint Clinical site
[ ] OneDrive provisioned (5GB minimum)
[ ] Appears in Global Address List
```

**Phase 6: Welcome Communication**
```
Send welcome email with:
[ ] Temporary password (separate email)
[ ] Setup instructions link
[ ] Training requirements
[ ] IT support contact
[ ] First week checklist
```

**Completion Sign-off:**
- Onboarding completed by: _____________
- Date/Time: _____________
- Issues encountered: _____________
- Follow-up required: _____________

---

### Exercise 3.2: User Termination Process

**Scenario:** John Smith, a contractor, has completed his project and needs to be offboarded from all systems.

**Termination Details:**
```
Name: John Smith
Email: john.smith@c6med.com
Last Day: [Today]
Type: Planned Departure
Data Retention: 30 days
Manager: Sarah Chen
```

**Immediate Actions (Within 1 Hour):**

```powershell
# Execute these commands and record results

# 1. Block sign-in
Set-MsolUser -UserPrincipalName john.smith@c6med.com -BlockCredential $true
Timestamp: _____________

# 2. Revoke all sessions
Revoke-AzureADUserAllRefreshToken -ObjectId [UserObjectId]
Timestamp: _____________

# 3. Convert mailbox to shared
Set-Mailbox -Identity john.smith@c6med.com -Type Shared
New Shared Mailbox: _____________

# 4. Set forwarding to manager
Set-Mailbox -Identity john.smith@c6med.com `
            -ForwardingAddress sarah.chen@c6med.com `
            -DeliverToMailboxAndForward $false
Forwarding confirmed: _____________

# 5. Remove from all groups
Get-DistributionGroup |
    Remove-DistributionGroupMember -Member john.smith@c6med.com -Confirm:$false
Groups removed from: _____________
```

**Within 24 Hours:**

- [ ] Remove from SharePoint sites
  ```
  Sites removed from:
  1. _____________
  2. _____________
  3. _____________
  ```

- [ ] Remove from Dropbox
  - User deactivated: _____________
  - Files transferred to: _____________

- [ ] Wipe company data from devices
  - Device 1: _____________
  - Device 2: _____________

**Within 7 Days:**

- [ ] Archive OneDrive content
  - Archive location: _____________
  - Size of archive: _____________

- [ ] Export mailbox to PST
  - PST location: _____________
  - Export completed: _____________

- [ ] Remove licenses
  - Licenses removed: _____________
  - Cost savings: $_____________

**30-Day Final Actions:**

- [ ] Delete user account
- [ ] Purge from recycle bin
- [ ] Update documentation
- [ ] Close termination ticket

**Validation Checklist:**
- [ ] Cannot sign in to any service
- [ ] Email forwarding working
- [ ] Manager has access to shared mailbox
- [ ] No active sessions remain
- [ ] Audit log shows all actions
- [ ] Documentation complete

---

## Exercise Set 4: Multi-Factor Authentication

### Exercise 4.1: MFA Deployment and Testing

**Scenario:** Deploy MFA to a pilot group of 3 users before company-wide rollout.

**Pilot Group:**
1. Test User 1 (Admin): admin.test@c6med.com
2. Test User 2 (Standard): standard.test@c6med.com
3. Test User 3 (External): contractor.test@c6med.com

**Phase 1: Configure MFA Settings**

```
Azure AD > Security > Authentication Methods

Configure methods:
[ ] Microsoft Authenticator - Primary
[ ] SMS - Backup only
[ ] Voice Call - Disabled
[ ] Email - Disabled

Settings:
[ ] Require number matching: Yes
[ ] Show location in app: Yes
[ ] Show app name: Yes
```

**Phase 2: Enable MFA for Pilot Group**

```powershell
# Create pilot group
New-MsolGroup -DisplayName "MFA-Pilot" `
              -Description "MFA pilot testing group"

# Add users to group
Add-MsolGroupMember -GroupId [GroupId] -GroupMemberType User `
                    -GroupMemberObjectId [User1ObjectId]

# Enable MFA for group
$auth = New-Object -TypeName Microsoft.Online.Administration.StrongAuthenticationRequirement
$auth.RelyingParty = "*"
$auth.State = "Enabled"

Get-MsolGroupMember -GroupId [GroupId] | ForEach-Object {
    Set-MsolUser -UserPrincipalName $_.EmailAddress `
                 -StrongAuthenticationRequirements $auth
}
```

**Phase 3: User Enrollment Testing**

For each pilot user, complete:

**User 1: Admin Test**
```
Enrollment Process:
1. Sign in to portal.office.com
2. Prompted for MFA setup: [Y/N] _____
3. Authenticator app setup: [Success/Fail] _____
4. Backup phone added: [Y/N] _____
5. Test notification received: [Y/N] _____
6. Number matching works: [Y/N] _____

Issues encountered: _____________
Time to complete: _____ minutes
```

**User 2: Standard Test**
```
[Repeat same process]
Issues encountered: _____________
Time to complete: _____ minutes
```

**User 3: Contractor Test**
```
[Repeat same process]
Issues encountered: _____________
Time to complete: _____ minutes
```

**Phase 4: Scenario Testing**

Test these scenarios for each user:

| Scenario | User 1 | User 2 | User 3 | Notes |
|----------|--------|--------|--------|-------|
| Normal browser login | _____ | _____ | _____ | |
| Mobile app login | _____ | _____ | _____ | |
| New device login | _____ | _____ | _____ | |
| International IP login | _____ | _____ | _____ | |
| Legacy app access | _____ | _____ | _____ | |
| Password reset with MFA | _____ | _____ | _____ | |

**Phase 5: Recovery Testing**

Simulate lost phone scenario:

1. User reports lost phone
2. Admin actions taken:
   ```powershell
   # Reset MFA for user
   Set-MsolUser -UserPrincipalName test.user@c6med.com `
                -StrongAuthenticationMethods @()
   ```
3. User re-enrolls with new device
4. Time to resolution: _____ minutes

**Rollout Readiness Checklist:**
- [ ] All pilot users enrolled successfully
- [ ] All test scenarios passed
- [ ] Recovery process documented
- [ ] Help desk trained
- [ ] User guide created
- [ ] Communication plan ready

---

### Exercise 4.2: MFA Troubleshooting Practice

**Scenario Set:** Practice resolving common MFA issues.

**Issue 1: User Cannot Receive Push Notifications**

```
User: Sarah Chen
Issue: "I'm not getting the approval prompt on my phone"

Troubleshooting Steps:
1. [ ] Verify phone has internet connection
2. [ ] Check app notification settings
3. [ ] Try manual code entry instead
4. [ ] Reinstall authenticator app
5. [ ] Re-register device

Resolution: _____________
Time to resolve: _____ minutes
```

**Issue 2: Repeated MFA Prompts**

```
User: Dr. Wilson
Issue: "It keeps asking me to authenticate every few minutes"

Troubleshooting Steps:
1. [ ] Check browser settings (cookies/cache)
2. [ ] Verify "Stay signed in" option
3. [ ] Check conditional access policies
4. [ ] Review sign-in logs for issues
5. [ ] Test different browser

Resolution: _____________
Root cause: _____________
```

**Issue 3: International Travel Access**

```
User: CEO
Issue: "I'm traveling to Europe next week, how do I ensure access?"

Preparation Steps:
1. [ ] Add international phone number
2. [ ] Generate offline codes
3. [ ] Test VPN access
4. [ ] Create temporary exception (if needed)
5. [ ] Document support contact

Preventive measures taken: _____________
```

---

## Exercise Set 5: Password Management

### Exercise 5.1: Deploy Password Manager

**Scenario:** Deploy 1Password to the pilot group and migrate their existing passwords.

**Deployment Steps:**

**Step 1: Initial Setup**
```
1Password Admin Setup:
[ ] Create business account
[ ] Configure team name: C6Med
[ ] Set up billing
[ ] Enable SSO with M365
[ ] Configure security policies

Policies configured:
- Master password minimum: _____ characters
- Two-factor required: [Y/N]
- Session timeout: _____ minutes
- Clipboard clearing: _____ seconds
```

**Step 2: Vault Structure Creation**

Create these vaults and assign permissions:

| Vault Name | Purpose | Access Group | Test Result |
|------------|---------|--------------|-------------|
| IT Systems | Admin credentials | IT Admins only | _____ |
| Client Accounts | Shared client logins | All Staff | _____ |
| Software Licenses | License keys | Managers | _____ |
| Finance | Banking/cards | Finance + Exec | _____ |

**Step 3: User Onboarding**

For each pilot user:

```
User 1 Onboarding:
[ ] Invitation sent
[ ] Account created
[ ] Master password set (strength: _____/5)
[ ] MFA enabled on 1Password
[ ] Browser extension installed
[ ] Mobile app configured
[ ] Training completed
Time to complete: _____ minutes

User 2 Onboarding:
[Repeat checklist]

User 3 Onboarding:
[Repeat checklist]
```

**Step 4: Password Migration**

```
Migration Checklist:
[ ] Export passwords from browser
[ ] Clean up duplicates
[ ] Import to 1Password
[ ] Organize into vaults
[ ] Delete from browser storage
[ ] Verify all passwords work

Statistics:
- Passwords migrated: _____
- Weak passwords found: _____
- Duplicate passwords: _____
- Shared accounts identified: _____
```

**Step 5: Shared Password Test**

Create and test shared credential:

```
Shared Account Details:
Service: Test SharePoint Site
URL: https://c6med.sharepoint.com/sites/test
Username: shared.test@c6med.com
Password: [Generated 20+ characters]
Vault: Client Accounts

Access Test:
[ ] User 1 can access
[ ] User 2 can access
[ ] User 3 cannot access (not in vault)
[ ] Password history tracked
[ ] Audit log shows access
```

**Validation:**
- [ ] All users onboarded successfully
- [ ] Passwords migrated and organized
- [ ] Sharing working correctly
- [ ] Audit logging functional
- [ ] Users comfortable with daily use

---

## Exercise Set 6: Security Monitoring

### Exercise 6.1: Configure Security Alerts

**Scenario:** Set up comprehensive security monitoring with automated alerts.

**Alert Configuration:**

Create these alerts in M365 Security Center:

**Alert 1: Mass Download Detection**
```
Name: Unusual File Download Activity
Trigger: >50 files in 1 hour
Severity: High
Recipients: security@c6med.com
Test: Download 51 test files
Result: Alert received [Y/N] _____
Time to alert: _____ minutes
```

**Alert 2: External Sharing**
```
Name: External Sharing Detected
Trigger: Any external share
Severity: Medium
Recipients: security@c6med.com
Test: Share test file externally
Result: Alert received [Y/N] _____
Details in alert: _____________
```

**Alert 3: Admin Changes**
```
Name: Administrative Change Detected
Trigger: Admin role assignment
Severity: High
Recipients: security@c6med.com, ceo@c6med.com
Test: Add test user to admin role
Result: Alert received [Y/N] _____
Response time: _____ minutes
```

**Alert 4: Impossible Travel**
```
Name: Impossible Travel Detected
Trigger: Sign-ins from distant locations
Severity: Critical
Recipients: security@c6med.com
Test: Use VPN to simulate
Result: Alert received [Y/N] _____
Auto-response triggered: [Y/N] _____
```

### Exercise 6.2: Incident Response Simulation

**Scenario:** Suspected account compromise detected for user account.

**Initial Alert:**
```
Alert: Impossible travel detected
User: john.doe@c6med.com
Location 1: New York - 2:00 PM
Location 2: London - 2:30 PM
Risk Level: High
```

**Response Actions:**

**Minute 0-5: Immediate Response**
```
Actions Taken:
[ ] Alert acknowledged at: _____
[ ] User account blocked at: _____
[ ] Sessions revoked at: _____
[ ] Manager notified at: _____

Commands executed:
1. _____________
2. _____________
3. _____________
```

**Minute 5-30: Investigation**
```
Investigation Steps:
[ ] Sign-in logs reviewed
  - Suspicious IPs: _____________
  - Suspicious times: _____________

[ ] Recent activities checked
  - Files accessed: _____________
  - Emails sent: _____________
  - Shares created: _____________

[ ] User contacted
  - Legitimate travel: [Y/N] _____
  - Device recognized: [Y/N] _____
```

**Minute 30-60: Remediation**
```
If Compromise Confirmed:
[ ] Password reset forced
[ ] MFA re-enrollment required
[ ] Device wiped remotely
[ ] Audit of accessed data
[ ] Check for persistence

If False Positive:
[ ] Document reason
[ ] Unblock account
[ ] Update detection rules
[ ] Communicate with user
```

**Post-Incident:**
```
Documentation:
- Incident ticket #: _____________
- Root cause: _____________
- Data exposed: _____________
- Remediation steps: _____________
- Lessons learned: _____________
- Policy updates needed: _____________
```

---

## Exercise Set 7: Patch Management

### Exercise 7.1: Windows Update Management

**Scenario:** Configure and test Windows update policies for C6Med devices.

**Configuration Tasks:**

**Task 1: Configure Update Policies**

```powershell
# Run these commands and document results

# Install PSWindowsUpdate module
Install-Module PSWindowsUpdate -Force
Result: _____________

# Check current update status
Get-WindowsUpdate
Updates available: _____
Critical updates: _____
Security updates: _____

# Configure automatic updates
$UpdateSettings = @{
    AutomaticUpdates = "Enabled"
    ScheduledInstallDay = "Sunday"
    ScheduledInstallTime = "03:00"
    NoAutoRebootWithLoggedOnUsers = $true
}

# Apply settings (document each)
Setting 1 applied: [Y/N] _____
Setting 2 applied: [Y/N] _____
Setting 3 applied: [Y/N] _____
```

**Task 2: Update Compliance Check**

Test on 3 devices:

| Device | Last Update | Days Since | Compliance Status | Action Required |
|--------|-------------|------------|-------------------|-----------------|
| Device1 | _____ | _____ | _____ | _____ |
| Device2 | _____ | _____ | _____ | _____ |
| Device3 | _____ | _____ | _____ | _____ |

**Task 3: Manual Update Process**

```
For one non-compliant device:
1. [ ] Run Windows Update manually
2. [ ] Document updates installed:
   - KB_______ : _____________
   - KB_______ : _____________
   - KB_______ : _____________
3. [ ] Restart required: [Y/N]
4. [ ] Time to complete: _____ minutes
5. [ ] Issues encountered: _____________
```

### Exercise 7.2: Application Update Audit

**Scenario:** Audit and update third-party applications across C6Med devices.

**Application Inventory:**

| Application | Current Version | Latest Version | Update Required | Method |
|-------------|----------------|----------------|-----------------|--------|
| Chrome | _____ | _____ | [Y/N] | Auto/Manual |
| Adobe Reader | _____ | _____ | [Y/N] | Auto/Manual |
| Zoom | _____ | _____ | [Y/N] | Auto/Manual |
| Dropbox | _____ | _____ | [Y/N] | Auto/Manual |
| 1Password | _____ | _____ | [Y/N] | Auto/Manual |

**Update Process:**

For each application requiring update:

```
Application: _____________
Update Steps:
1. [ ] Backup current settings
2. [ ] Download latest version
3. [ ] Close application
4. [ ] Run installer
5. [ ] Verify functionality
6. [ ] Document version change

Time required: _____ minutes
User disruption: Minimal/Moderate/Significant
```

---

## Exercise Set 8: Backup and Recovery

### Exercise 8.1: Complete Backup Verification

**Scenario:** Perform quarterly backup verification for all critical systems.

**Email Backup Test:**

```
Test Setup:
1. Create email with unique identifier
   Subject: BACKUP_TEST_[DATE]_[TIME]
   Body: Contains test data and timestamp
   Attachments: Test document

2. Send to: backup.test@c6med.com

3. Delete email completely (including Deleted Items)

4. Recovery Process:
   [ ] Access Recoverable Items folder
   [ ] Locate test email
   [ ] Restore to inbox
   [ ] Verify all content intact

   Recovery time: _____ minutes
   Data integrity: Complete/Partial/Failed
```

**SharePoint Document Test:**

```
Test Setup:
1. Create document: BackupTest_[DATE].docx
2. Make 3 edits (creating versions):
   Version 1: _____________
   Version 2: _____________
   Version 3: _____________

3. Delete document

4. Recovery Process:
   [ ] Check first-stage recycle bin
   [ ] Check second-stage recycle bin
   [ ] Restore document
   [ ] Access version history
   [ ] Restore Version 1

Results:
   All versions recovered: [Y/N]
   Time to restore: _____ minutes
```

**OneDrive Sync Test:**

```
Test Process:
1. Create local file: SyncTest_[DATE].txt
   Content: _____________
   Location: OneDrive folder

2. Verify cloud sync:
   [ ] File appears online
   [ ] Sync time: _____ seconds

3. Delete local file

4. Restore from cloud:
   [ ] Access OneDrive online
   [ ] Download file
   [ ] Verify content matches

5. Test selective sync:
   [ ] Unsync folder
   [ ] Re-sync folder
   [ ] Verify all files present
```

### Exercise 8.2: Disaster Recovery Drill

**Scenario:** Simulate complete account compromise requiring full recovery.

**Affected User:** disaster.test@c6med.com

**Phase 1: Initial Response (0-15 minutes)**
```
Actions:
[ ] Account disabled: Time _____
[ ] Sessions revoked: Time _____
[ ] Password reset: Time _____
[ ] MFA reset: Time _____
[ ] Devices wiped: Time _____
```

**Phase 2: Assessment (15-60 minutes)**
```
Data Assessment:
[ ] Emails accessed: _____ items
[ ] Files downloaded: _____ files
[ ] External shares: _____ shares
[ ] Calendar exposed: [Y/N]
[ ] Contacts exported: [Y/N]
```

**Phase 3: Recovery (1-4 hours)**
```
Recovery Steps:
[ ] Create new secure account
[ ] Restore mailbox from backup
[ ] Restore OneDrive files
[ ] Rebuild permissions
[ ] Re-provision devices
[ ] Update all dependent systems

Recovery Metrics:
- Total downtime: _____ hours
- Data recovered: _____%
- Data lost: _____________
- Cost estimate: $_____
```

**Phase 4: Lessons Learned**
```
Document:
1. What worked well: _____________
2. What failed: _____________
3. Process improvements: _____________
4. Training needs: _____________
5. Tool gaps: _____________
```

---

## Final Assessment

### Comprehensive Skills Check

Complete this final assessment to validate readiness for managing C6Med security:

**Technical Skills Checklist:**

| Skill Area | Self-Rating (1-5) | Validated By | Date |
|------------|------------------|--------------|------|
| Device enrollment (Intune) | _____ | _____ | _____ |
| Manual device configuration | _____ | _____ | _____ |
| M365 user management | _____ | _____ | _____ |
| SharePoint permissions | _____ | _____ | _____ |
| MFA configuration | _____ | _____ | _____ |
| MFA troubleshooting | _____ | _____ | _____ |
| Password manager admin | _____ | _____ | _____ |
| Security alert response | _____ | _____ | _____ |
| Audit log analysis | _____ | _____ | _____ |
| Patch management | _____ | _____ | _____ |
| Backup verification | _____ | _____ | _____ |
| Incident response | _____ | _____ | _____ |

**Scenario Response Time Goals:**

| Scenario | Target Time | Your Time | Pass/Fail |
|----------|------------|-----------|-----------|
| Disable compromised account | <5 min | _____ | _____ |
| Enroll new device | <30 min | _____ | _____ |
| Complete user onboarding | <60 min | _____ | _____ |
| Respond to security alert | <15 min | _____ | _____ |
| Restore deleted file | <30 min | _____ | _____ |
| Reset user MFA | <10 min | _____ | _____ |

**Knowledge Check Questions:**

1. What is the first action when detecting account compromise?
   Your answer: _____________

2. How often should shared passwords be rotated?
   Your answer: _____________

3. What is the RPO for email backups?
   Your answer: _____________

4. Name three signs of a compromised account:
   1. _____________
   2. _____________
   3. _____________

5. What is the command to force a Windows Update check?
   Your answer: _____________

---

## Training Completion Certificate

```
This certifies that

_________________________________
(Name)

Has successfully completed the
C6Med Technical Implementation Training

Covering:
✓ Device Management & Security
✓ Microsoft 365 Administration
✓ User Access Management
✓ Multi-Factor Authentication
✓ Password Management
✓ Security Monitoring
✓ Patch Management
✓ Backup & Recovery

Date: _____________
Trainer: _____________
Score: _____/100
```

---

## Appendix: Quick Reference Commands

### PowerShell Commands
```powershell
# User Management
Set-MsolUser -UserPrincipalName user@c6med.com -BlockCredential $true
Get-MsolUser -All | Where-Object {$_.BlockCredential -eq $true}

# MFA Management
Get-MsolUser -All | Where-Object {$_.StrongAuthenticationRequirements.State -eq $null}
Set-MsolUser -UserPrincipalName user@c6med.com -StrongAuthenticationRequirements @()

# License Management
Get-MsolAccountSku
Set-MsolUserLicense -UserPrincipalName user@c6med.com -RemoveLicenses "c6med:SPE_E3"

# Audit Logs
Search-UnifiedAuditLog -StartDate (Get-Date).AddDays(-7) -EndDate (Get-Date) -ResultSize 5000

# SharePoint
Connect-SPOService -Url https://c6med-admin.sharepoint.com
Get-SPOSite -Limit All
```

### Bash Commands (macOS)
```bash
# Security Status
sudo fdesetup status
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate
spctl --status

# Updates
softwareupdate --list
softwareupdate --install --recommended

# Time Machine
tmutil status
tmutil latestbackup
```

---

## Resources and Support

**Internal Resources:**
- Security Team Email: security@c6med.com
- IT Support: itsupport@c6med.com
- Emergency Contact: [Phone Number]

**External Resources:**
- Microsoft 365 Admin Help: https://admin.microsoft.com/AdminPortal/Home#/support
- Microsoft Security Center: https://security.microsoft.com
- 1Password Support: https://support.1password.com

**Documentation:**
- Security Policies: [SharePoint Link]
- Incident Response Plan: [SharePoint Link]
- Network Diagrams: [SharePoint Link]

---

**Workbook Version:** 1.0
**Last Updated:** November 2024
**Next Review:** February 2025

*This workbook is a living document. Please submit feedback and suggestions to improve future versions.*