# C6Med LLC Access Control Policy

**Document Version:** 1.0
**Effective Date:** [DATE]
**Last Review Date:** [DATE]
**Next Review Date:** [DATE + 1 YEAR]
**Document Owner:** Chief Executive Officer
**Document Classification:** Internal Use Only

---

## 1. Purpose and Scope

### 1.1 Purpose
This Access Control Policy establishes requirements for managing user access to C6Med LLC's information systems and data, ensuring that only authorized individuals can access resources necessary for their roles while protecting sensitive pharmaceutical client information from unauthorized disclosure.

### 1.2 Scope
This policy applies to:
- All C6Med employees and contractors
- All information systems including Microsoft Office 365, SharePoint, Dropbox, Teams
- All data repositories and applications
- Physical and logical access controls
- Third-party access to C6Med resources
- Access from all locations including remote/home offices

### 1.3 NIST CSF Alignment
This policy implements the following NIST CSF 2.0 controls:
- PR.AC-1: Identities and credentials are managed for authorized devices and users
- PR.AC-3: Remote access is managed
- PR.AC-4: Access permissions are managed, incorporating least privilege
- PR.AC-6: Identities are proofed and bound to credentials
- PR.AC-7: Users, devices, and assets are authenticated

## 2. Access Control Principles

### 2.1 Least Privilege
Users receive only the minimum access necessary to perform their assigned duties.

### 2.2 Separation of Duties
Critical functions are distributed among multiple individuals where feasible for an 8-person organization.

### 2.3 Need-to-Know Basis
Access to sensitive pharmaceutical client data is restricted to those with legitimate business requirements.

### 2.4 Default Deny
Access is denied by default and explicitly granted based on business justification.

### 2.5 Regular Review
Access rights are reviewed quarterly and adjusted as roles change.

## 3. Roles and Responsibilities

### 3.1 Chief Executive Officer
- Approve access for senior roles and sensitive resources
- Review and approve access control procedures
- Authorize emergency access procedures

### 3.2 Security Coordinator
- Manage day-to-day access requests
- Conduct quarterly access reviews
- Maintain access control documentation
- Monitor for unauthorized access attempts
- Coordinate with system administrators

### 3.3 Managers/Project Leads
- Define access requirements for team members
- Approve access requests for direct reports
- Review team access quarterly
- Report access changes needed due to role changes

### 3.4 All Employees
- Protect assigned credentials
- Request access only for legitimate business needs
- Report unauthorized access immediately
- Acknowledge access responsibilities

## 4. User Account Management

### 4.1 Account Creation
**Requirements:**
- Written authorization from manager/CEO
- Completed background check (where applicable)
- Signed Acceptable Use Policy
- Security awareness training scheduled

**Process:**
1. Manager submits access request form
2. Security Coordinator reviews for completeness
3. Account created with appropriate permissions
4. User notified with initial credentials
5. User completes first login and password change

### 4.2 Account Types

**Standard User Accounts:**
- Default for all employees
- Access to basic productivity tools
- Limited administrative rights

**Privileged Accounts:**
- System administration functions
- Requires CEO approval
- Additional monitoring and controls
- Separate from standard user accounts

**Service Accounts:**
- Non-interactive system accounts
- Strong password/key management
- Documented ownership and purpose
- Annual review required

**Guest/Temporary Accounts:**
- Time-limited (maximum 90 days)
- Specific project-based access
- Requires sponsor and expiration date
- Automatic deactivation at expiration

### 4.3 Account Modifications
- Role changes trigger access review within 48 hours
- Access additions require manager approval
- Privilege escalations require CEO approval
- All changes documented in access log

### 4.4 Account Deactivation

**Immediate Deactivation Required for:**
- Employment termination
- Extended leave (>30 days)
- Security policy violations
- Suspicious activity detection

**Deactivation Process:**
1. HR/Manager notifies Security Coordinator immediately
2. All system access disabled within 2 hours
3. Company data retrieved from personal devices
4. Physical access revoked (if applicable)
5. Account retained for 90 days (audit purposes) then deleted

## 5. Authentication Requirements

### 5.1 Multi-Factor Authentication (MFA)
**Required for:**
- All Microsoft Office 365 accounts
- Administrative access to any system
- Access to Restricted data
- Remote access to company resources
- Financial system access

**Acceptable MFA Methods:**
- Microsoft Authenticator app (preferred)
- SMS text message (backup only)
- Hardware security keys (for high-privilege accounts)

### 5.2 Authentication Strength
- Passwords must meet complexity requirements (see Password Policy)
- Biometric authentication acceptable for device unlock
- Certificate-based authentication for system-to-system connections
- No shared accounts or credentials permitted

## 6. Authorization and Access Rights

### 6.1 Access Matrix

| Role | Email/Teams | SharePoint | Dropbox | Client Data | Admin Access |
|------|------------|------------|---------|-------------|--------------|
| CEO | Full | Full | Full | All Clients | Yes |
| Project Manager | Full | Project Folders | Project Folders | Assigned Clients | No |
| Medical Writer | Full | Project Folders | Project Folders | Assigned Projects | No |
| Administrator | Full | Full | Full | As Needed | System Only |
| Contractor | Limited | Specific Folders | Specific Folders | Specific Projects | No |

### 6.2 Client Data Access
- Access granted per project assignment only
- Client data segregation enforced
- Access logged and auditable
- Removed immediately upon project completion

### 6.3 Privileged Access Management
- Administrative access limited to 2 designated individuals
- Privileged actions logged and reviewed monthly
- Emergency access procedure documented
- Privileged passwords/keys in secure storage

## 7. Access Control Implementation

### 7.1 Microsoft Office 365
- Azure AD for identity management
- Conditional access policies enforced
- Groups-based permission management
- Guest access restricted and monitored

### 7.2 SharePoint
- Site-level permissions aligned with projects
- Document libraries restricted by client
- External sharing disabled by default
- Version control and audit logs enabled

### 7.3 Dropbox
- Business account with enterprise controls
- Folder permissions by project/client
- Link sharing restricted and time-limited
- Two-factor authentication mandatory

### 7.4 Microsoft Teams
- Private channels for client projects
- Guest access disabled
- File sharing through approved channels only
- Meeting recordings access-controlled

## 8. Access Reviews and Auditing

### 8.1 Quarterly Access Reviews
**Process:**
1. Security Coordinator generates access reports
2. Managers review team member access
3. Unnecessary access identified and removed
4. Privileged access specifically validated
5. Review documented and retained

### 8.2 Annual Comprehensive Review
- All user accounts validated
- Service accounts reviewed
- Inactive accounts identified and disabled
- Compliance with least privilege verified
- Access policies updated as needed

### 8.3 Audit Logging
**Logged Events:**
- All authentication attempts (success/failure)
- Privilege escalations
- Access to Restricted data
- Account creations/modifications/deletions
- Permission changes

**Log Retention:**
- Security logs retained for 1 year minimum
- Audit logs protected from modification
- Regular review for anomalies

## 9. Remote Access Controls

### 9.1 Remote Work Requirements
- MFA required for all remote access
- Secure Wi-Fi (WPA2/WPA3) required
- VPN for accessing sensitive resources (when implemented)
- Screen lock after 5 minutes inactivity
- Privacy screens recommended for public spaces

### 9.2 BYOD Access Controls
- Device must meet security requirements (see BYOD Policy)
- Company data accessible only through approved apps
- Local data storage prohibited
- Remote wipe capability required
- Regular security posture verification

## 10. Physical Access Controls

### 10.1 Home Office Security
- Dedicated workspace when possible
- Locked storage for sensitive documents
- Screen positioning to prevent viewing
- Secure document disposal (shredding)
- Visitor awareness during video calls

### 10.2 Document Security
- Client documents secured when not in use
- Clean desk policy encouraged
- Sensitive materials not left in vehicles
- Proper disposal through shredding

## 11. Third-Party Access

### 11.1 Vendor Access Requirements
- Business justification required
- Time-limited access only
- NDA/confidentiality agreement required
- Minimum necessary access granted
- Activity monitored and logged

### 11.2 Client Access
- Specific project resources only
- Segregated from other client data
- Access reviewed at project milestones
- Revoked at project completion

## 12. Emergency Access Procedures

### 12.1 Break-Glass Process
For critical situations requiring emergency access:
1. Contact CEO or designated alternate
2. Document business justification
3. Grant temporary elevated access
4. Monitor all activities
5. Review and revoke after emergency
6. Conduct post-incident review

### 12.2 Account Recovery
- Self-service password reset via MFA
- Manager verification for locked accounts
- Security Coordinator backup for critical access
- Documented recovery procedures

## 13. Compliance and Violations

### 13.1 Compliance Monitoring
- Monthly review of privileged access logs
- Quarterly user access certification
- Annual policy compliance assessment
- Regular penetration testing (when feasible)

### 13.2 Violation Handling
**Unauthorized Access Attempts:**
- First offense: Warning and retraining
- Second offense: Access suspension pending review
- Malicious intent: Immediate termination and legal action

**Policy Non-Compliance:**
- Coaching and documentation
- Formal warning for repeated issues
- Access restriction or termination for serious violations

## 14. Related Documents

- Information Security Policy
- Password and Authentication Policy
- Acceptable Use Policy
- Remote Work/BYOD Policy
- Incident Response Plan

## 15. Document Control

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| 1.0 | [DATE] | [NAME] | Initial policy creation |

---

**Approval:**

_____________________________
Chief Executive Officer
Date: ________________

_____________________________
Security Coordinator
Date: ________________