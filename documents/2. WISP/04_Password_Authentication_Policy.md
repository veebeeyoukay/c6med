# C6Med LLC Password and Authentication Policy

**Document Version:** 1.0
**Effective Date:** [DATE]
**Last Review Date:** [DATE]
**Next Review Date:** [DATE + 1 YEAR]
**Document Owner:** Chief Executive Officer
**Document Classification:** Internal Use Only

---

## 1. Purpose and Scope

### 1.1 Purpose
This Password and Authentication Policy establishes standards for creating, protecting, and managing passwords and authentication methods to protect C6Med LLC's information systems and sensitive pharmaceutical client data from unauthorized access.

### 1.2 Scope
This policy applies to:
- All C6Med employees, contractors, and third parties
- All passwords and authentication methods for C6Med systems
- All devices used to access C6Med resources (company and personal)
- All applications and platforms including Office 365, SharePoint, Dropbox, Teams
- Service accounts and application passwords

### 1.3 NIST CSF Alignment
This policy implements the following NIST CSF 2.0 controls:
- PR.AC-1: Identities and credentials are managed
- PR.AC-7: Users, devices, and assets are authenticated
- PR.IP-11: Cybersecurity is included in human resources practices
- IA-5: Authenticator management per NIST 800-63B guidelines

## 2. Password Requirements

### 2.1 Password Complexity Standards

**Minimum Requirements for All Passwords:**
- Length: Minimum 12 characters (14+ recommended)
- Must contain at least 3 of the following 4 categories:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special characters (!@#$%^&*()_+-=[]{}|;:,.<>?)
- Cannot contain username or email address
- Cannot contain company name (C6Med) or client names
- Cannot be a common password from known breach lists

**Enhanced Requirements for Privileged Accounts:**
- Minimum 16 characters
- Must use all 4 character categories
- Changed every 90 days
- Cannot be reused for 12 iterations

### 2.2 Password Best Practices
**Recommended Approaches:**
- Use passphrases: combine 4+ unrelated words
- Example: "Coffee!Bicycle7Purple$Notebook"
- Use password manager to generate and store unique passwords
- Never use personal information (birthdays, names, addresses)
- Create unique passwords for every account
- Consider using first letters of a memorable sentence plus numbers/symbols

### 2.3 Prohibited Password Practices
**Users MUST NOT:**
- Use the same password across multiple systems
- Share passwords with anyone, including IT support
- Write passwords on sticky notes or unsecured documents
- Store passwords in browsers without master password protection
- Use passwords that have been involved in known breaches
- Transmit passwords via unencrypted email or chat
- Use dictionary words or simple substitutions (e.g., p@ssw0rd)

## 3. Password Management

### 3.1 Initial Password Assignment
- System-generated temporary passwords provided for new accounts
- Temporary passwords must be changed on first login
- Temporary passwords expire after 48 hours
- Temporary passwords sent via secure channel (not email)

### 3.2 Password Changes

**Mandatory Change Requirements:**
- Upon first login
- Every 180 days for standard accounts
- Every 90 days for privileged accounts
- Immediately if compromise suspected
- When requested by Security Coordinator

**Password History:**
- Cannot reuse last 6 passwords (standard accounts)
- Cannot reuse last 12 passwords (privileged accounts)
- Minimum 1 day between password changes

### 3.3 Password Storage

**Approved Methods:**
- Enterprise password manager (when implemented)
- Personal password manager with strong master password
- Encrypted files with separate authentication

**Prohibited Storage Methods:**
- Plain text files
- Spreadsheets (even if password-protected)
- Email messages
- Physical notebooks or sticky notes
- Browser password storage without master password

### 3.4 Password Recovery

**Self-Service Reset:**
- Available via Microsoft Office 365 portal
- Requires pre-configured MFA method
- Security questions not recommended

**Assisted Reset Process:**
1. User contacts Security Coordinator
2. Identity verified through multiple factors
3. Temporary password issued
4. User must change password immediately
5. Incident logged for audit

## 4. Multi-Factor Authentication (MFA)

### 4.1 MFA Requirements

**Mandatory MFA Implementation:**
- All Microsoft Office 365 accounts
- All cloud storage platforms (SharePoint, Dropbox)
- Any system containing Restricted data
- All administrative/privileged access
- Remote access to any company resources
- Financial systems and applications

### 4.2 Acceptable MFA Methods

**Primary Methods (Preferred):**
- Microsoft Authenticator app
- Other TOTP apps (Google Authenticator, Authy)
- Hardware security keys (FIDO2/WebAuthn)

**Backup Methods:**
- SMS text message (only as backup)
- Voice call verification (only as backup)
- Backup codes (stored securely)

**Unacceptable Methods:**
- Email-based verification (not true MFA)
- Security questions alone
- Biometrics alone without additional factor

### 4.3 MFA Implementation Guidelines

**Setup Requirements:**
- Configure at least 2 different MFA methods
- Test both methods during setup
- Store backup codes securely
- Update phone numbers immediately if changed

**Usage Requirements:**
- MFA required for every login to critical systems
- Cannot be shared or delegated
- Report lost/stolen MFA devices immediately
- Re-verification required for sensitive operations

## 5. Authentication Standards by System Type

### 5.1 System Classification and Requirements

| System Type | Password Requirements | MFA Required | Session Timeout |
|------------|---------------------|--------------|-----------------|
| Email/Office 365 | 12+ characters | Yes | 8 hours |
| Cloud Storage | 12+ characters | Yes | 4 hours |
| Client Data Access | 14+ characters | Yes | 2 hours |
| Financial Systems | 14+ characters | Yes | 1 hour |
| Administrative Access | 16+ characters | Yes | 30 minutes |
| Low-Risk Systems | 12+ characters | Recommended | 8 hours |

### 5.2 Session Management
- Automatic lock after 5 minutes of inactivity
- Re-authentication required after timeout
- Sessions terminated at end of workday
- No persistent sessions for sensitive systems

## 6. Service Account and API Key Management

### 6.1 Service Account Passwords
- Minimum 20 characters
- Randomly generated
- Changed annually or on personnel changes
- Stored in secure, encrypted location
- Access limited to designated administrators

### 6.2 API Keys and Tokens
- Treated as passwords for security purposes
- Unique keys for each integration
- Rotated every 90 days where possible
- Never embedded in code or scripts
- Stored in secure configuration files or vaults

## 7. Third-Party Authentication

### 7.1 Single Sign-On (SSO)
- Microsoft Azure AD as primary identity provider
- SSO preferred for integrated applications
- MFA enforced at SSO level
- Regular review of SSO-connected applications

### 7.2 Federated Authentication
- Approved for client system access where required
- Must maintain C6Med security standards
- Additional logging and monitoring required
- Regular certification of federated connections

## 8. Biometric Authentication

### 8.1 Acceptable Uses
- Device unlock (fingerprint, Face ID)
- Secondary authentication factor
- Physical access control (when applicable)

### 8.2 Requirements
- Must be combined with knowledge factor (password/PIN)
- Fallback authentication method required
- Biometric data never shared with third parties
- Opt-in basis only

## 9. Password Security Monitoring

### 9.1 Breach Monitoring
- Regular checks against known breach databases
- Immediate password reset if breach detected
- User notification within 24 hours
- Investigation of potential impact

### 9.2 Failed Authentication Monitoring
- Account lockout after 5 failed attempts
- 30-minute lockout period
- Alert Security Coordinator after 3 lockouts
- Investigation of patterns or anomalies

### 9.3 Suspicious Activity Indicators
- Login from unusual locations
- Multiple simultaneous sessions
- Access outside normal hours
- Rapid succession of password changes

## 10. Emergency Access Procedures

### 10.1 Break-Glass Accounts
- Secured emergency access accounts maintained
- Complex passwords in sealed envelopes
- Dual control required for access
- Full audit of any usage
- Password changed immediately after use

### 10.2 Incident Response Authentication
- Pre-established verification procedures
- Out-of-band communication for verification
- Documented chain of custody
- Post-incident password reset for affected accounts

## 11. User Responsibilities

### 11.1 Individual Requirements
All users must:
- Create compliant passwords
- Protect passwords from disclosure
- Change passwords when required
- Report suspected compromises immediately
- Complete security awareness training
- Use MFA where required
- Log out when leaving workstation

### 11.2 Acknowledgment
Users must acknowledge:
- Understanding password requirements
- Responsibility for password security
- Consequences of policy violations
- Requirement to report incidents

## 12. Compliance and Enforcement

### 12.1 Compliance Monitoring
- Quarterly password policy audit
- Annual MFA enrollment verification
- Regular testing of password complexity
- Review of authentication logs

### 12.2 Non-Compliance Consequences
**First Violation:**
- Warning and required training
- Password immediate reset required

**Second Violation:**
- Written warning
- Increased monitoring
- Manager notification

**Severe/Repeated Violations:**
- Account suspension
- Disciplinary action up to termination
- Potential legal action for intentional breaches

## 13. Password Security Awareness

### 13.1 Training Topics
- Password creation best practices
- Recognizing phishing attempts
- Proper password storage
- MFA setup and usage
- Social engineering awareness
- Incident reporting procedures

### 13.2 Ongoing Communication
- Monthly security tips
- Breach notification alerts
- Policy update announcements
- Simulated phishing exercises

## 14. Technical Controls

### 14.1 System Enforcement
- Password complexity enforced technically where possible
- Automated password expiration
- Account lockout mechanisms
- MFA enforcement through conditional access
- Password history enforcement

### 14.2 Recommended Tools
- Password managers: Bitwarden, 1Password, LastPass
- MFA apps: Microsoft Authenticator, Authy
- Breach monitoring: Have I Been Pwned integration
- Security keys: YubiKey, Google Titan

## 15. Exceptions

### 15.1 Exception Process
- Written request to Security Coordinator
- Business justification required
- Compensating controls identified
- CEO approval required
- Time-limited (maximum 90 days)
- Documented and tracked

### 15.2 Legacy System Exceptions
- Systems unable to meet requirements documented
- Additional monitoring implemented
- Upgrade plan developed
- Regular review of exceptions

## 16. Related Policies

- Information Security Policy
- Access Control Policy
- Acceptable Use Policy
- Incident Response Plan
- Remote Work/BYOD Policy

## 17. Document Control

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