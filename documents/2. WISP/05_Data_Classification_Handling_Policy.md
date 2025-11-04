# C6Med LLC Data Classification and Handling Policy

**Document Version:** 1.0
**Effective Date:** [DATE]
**Last Review Date:** [DATE]
**Next Review Date:** [DATE + 1 YEAR]
**Document Owner:** Chief Executive Officer
**Document Classification:** Internal Use Only

---

## 1. Purpose and Scope

### 1.1 Purpose
This Data Classification and Handling Policy establishes a framework for categorizing C6Med LLC's information assets based on sensitivity and criticality, and defines appropriate handling requirements to protect pharmaceutical client data, maintain regulatory compliance, and preserve competitive advantage.

### 1.2 Scope
This policy applies to:
- All data created, received, maintained, or transmitted by C6Med
- All employees, contractors, and third parties handling C6Med data
- All forms of data: electronic, physical, verbal
- All storage locations: cloud services, local devices, physical files
- All data lifecycle phases: creation, processing, storage, transmission, disposal

### 1.3 NIST CSF Alignment
This policy implements the following NIST CSF 2.0 controls:
- ID.AM-5: Resources are prioritized based on classification and criticality
- PR.DS-1: Data-at-rest is protected
- PR.DS-2: Data-in-transit is protected
- PR.DS-5: Protections against data leaks are implemented
- PR.IP-6: Data is destroyed according to policy

## 2. Data Classification Framework

### 2.1 Classification Levels

C6Med uses four data classification levels, from highest to lowest sensitivity:

#### 2.1.1 RESTRICTED (Highest Sensitivity)
**Definition:** Data requiring the highest level of protection due to regulatory requirements, contractual obligations, or severe business impact if disclosed.

**Examples:**
- Pharmaceutical clinical trial data
- Drug development proprietary information
- Patient/healthcare provider personal information
- Pre-launch product information
- Client strategic plans and confidential communications
- Financial account credentials
- Employee Social Security numbers

**Business Impact if Compromised:**
- Severe client relationship damage
- Regulatory violations and fines
- Loss of major contracts
- Legal liability
- Competitive disadvantage

#### 2.1.2 CONFIDENTIAL
**Definition:** Sensitive business data that could harm C6Med or clients if disclosed but with less severe impact than Restricted data.

**Examples:**
- Medical communications strategies
- Project proposals and pricing
- Employee personnel records
- Internal financial reports
- Vendor contracts
- Business development plans
- Client contact databases

**Business Impact if Compromised:**
- Moderate client relationship impact
- Competitive disadvantage
- Privacy violations
- Operational disruption

#### 2.1.3 INTERNAL
**Definition:** Data intended for internal use that would not cause significant harm if disclosed but should not be publicly shared.

**Examples:**
- Internal policies and procedures
- General correspondence
- Meeting notes (non-confidential)
- Organizational charts
- Internal announcements
- Training materials

**Business Impact if Compromised:**
- Minor embarrassment
- Limited operational impact
- Minimal competitive impact

#### 2.1.4 PUBLIC
**Definition:** Information intended for or suitable for public disclosure.

**Examples:**
- Marketing materials
- Public website content
- Press releases
- Published case studies (approved)
- General company information

**Business Impact if Compromised:**
- No adverse impact

### 2.2 Default Classification
When classification is unclear:
- Err on the side of higher classification
- New data defaults to INTERNAL until classified
- Client data defaults to RESTRICTED until verified
- Consult Security Coordinator for guidance

## 3. Data Ownership and Responsibilities

### 3.1 Data Owner
- Typically the department head or project manager
- Determines data classification
- Defines access requirements
- Approves data sharing
- Ensures compliance with policy

### 3.2 Data Custodian
- IT administrator or designated employee
- Implements technical controls
- Manages storage and backup
- Monitors access and usage
- Reports incidents to Data Owner

### 3.3 Data User
- All employees accessing data
- Handles data per classification requirements
- Reports misclassification or incidents
- Complies with access restrictions
- Protects data from unauthorized disclosure

## 4. Handling Requirements by Classification

### 4.1 RESTRICTED Data Handling

**Storage:**
- Encrypted at rest (AES-256 minimum)
- Cloud storage: Only approved platforms with encryption
- Local storage: Prohibited on personal devices
- Physical: Locked cabinet/safe
- Backup: Encrypted and access-controlled

**Transmission:**
- Encrypted in transit (TLS 1.2 minimum)
- Email: Encrypted or secure file transfer
- Prohibited: Personal email, unsecured messaging
- Physical: Tracked shipping, signature required

**Access:**
- Need-to-know basis only
- MFA required
- Access logged and monitored
- Quarterly access review
- Written authorization required

**Disposal:**
- Electronic: Secure deletion with overwriting
- Physical: Cross-cut shredding or certified destruction
- Verification of destruction required
- Certificate of destruction retained

### 4.2 CONFIDENTIAL Data Handling

**Storage:**
- Encryption strongly recommended
- Cloud storage: Approved platforms only
- Local storage: Encrypted devices preferred
- Physical: Locked drawer/cabinet
- Backup: Protected and access-controlled

**Transmission:**
- Secure channels preferred
- Email: Encryption for sensitive items
- Avoided: Public Wi-Fi without VPN
- Physical: Sealed envelope, internal mail

**Access:**
- Business need required
- Standard authentication
- Access reviewed semi-annually
- Manager approval for access

**Disposal:**
- Electronic: Secure deletion
- Physical: Strip-cut shredding minimum
- Disposal logged

### 4.3 INTERNAL Data Handling

**Storage:**
- Standard security controls
- Cloud storage: Approved platforms
- Local storage: Password-protected devices
- Physical: Desk or cabinet
- Backup: Standard procedures

**Transmission:**
- Standard company channels
- Email: Internal or encrypted for external
- Caution: Public networks
- Physical: Inter-office mail

**Access:**
- General employee access
- Standard authentication
- Annual access review
- Self-service where appropriate

**Disposal:**
- Electronic: Standard deletion
- Physical: Recycling bin or basic shredding
- No special requirements

### 4.4 PUBLIC Data Handling

**Storage:**
- No special requirements
- Any approved platform
- Public folders acceptable

**Transmission:**
- Any channel acceptable
- No encryption required
- Public sharing allowed

**Access:**
- No restrictions
- May be posted publicly

**Disposal:**
- Standard disposal
- No special requirements

## 5. Data Handling Procedures

### 5.1 Data Creation and Classification
1. Creator assigns initial classification
2. Consider regulatory requirements
3. Apply appropriate marking/labeling
4. Store in appropriate location
5. Set access controls per classification

### 5.2 Data Labeling Requirements

**Electronic Documents:**
- Header/footer classification marking
- Filename indication (e.g., "RESTRICTED_")
- Metadata tags where supported
- Email subject line marking for sensitive data

**Physical Documents:**
- Cover sheet for RESTRICTED
- Header/footer on each page
- Envelope marking for mailing
- Color coding: Red (Restricted), Orange (Confidential)

**Structured Data (Databases):**
- Field/column classification
- Schema documentation
- Access control lists
- Audit logging enabled

### 5.3 Data Sharing

**Internal Sharing:**
- Verify recipient's need-to-know
- Use approved collaboration platforms
- Maintain classification markings
- Track access and downloads

**External Sharing:**
- Data Owner approval required for Confidential/Restricted
- Non-disclosure agreement required
- Secure transmission methods
- Time-limited access where possible
- Document sharing in data register

### 5.4 Data in Transit

**Email:**
- RESTRICTED: Encrypted email or secure portal
- CONFIDENTIAL: Encryption recommended
- INTERNAL: Standard email acceptable
- PUBLIC: Any method

**File Transfer:**
- RESTRICTED: SFTP, encrypted portal
- CONFIDENTIAL: Secure methods preferred
- INTERNAL: Standard transfer acceptable
- PUBLIC: Any method

**Physical Media:**
- RESTRICTED: Encrypted USB, tracked shipping
- CONFIDENTIAL: Password-protected media
- INTERNAL: Standard precautions
- PUBLIC: No restrictions

## 6. Client Data Handling

### 6.1 Pharmaceutical Client Requirements
All data from Novartis, Novo Nordisk, Regeneron, and other pharmaceutical clients:
- Defaults to RESTRICTED classification
- Segregated by client (no commingling)
- Subject to Master Service Agreement terms
- Additional client-specific requirements applied
- Retention per contract requirements
- Return or certified destruction at project end

### 6.2 Medical Information
- HIPAA considerations even if not covered entity
- De-identification where possible
- Minimum necessary principle
- Extra precautions for patient data
- Adverse event data handled as RESTRICTED

### 6.3 Regulatory Submissions
- FDA submission materials: RESTRICTED
- Published materials: Classification may change
- Embargoed information: RESTRICTED until release
- Audit trails maintained

## 7. Data Retention and Disposal

### 7.1 Retention Periods

| Data Type | Classification | Retention Period |
|-----------|---------------|------------------|
| Client project data | RESTRICTED | Per contract (typically 7 years) |
| Financial records | CONFIDENTIAL | 7 years |
| Employee records | CONFIDENTIAL | 7 years post-termination |
| Email | Various | 3 years standard |
| System logs | INTERNAL | 1 year |
| Marketing materials | PUBLIC | Until obsolete |

### 7.2 Disposal Methods

**Electronic Data:**
- RESTRICTED: DoD 5220.22-M standard (3-pass overwrite)
- CONFIDENTIAL: Secure deletion tools
- INTERNAL/PUBLIC: Standard deletion

**Physical Media:**
- Hard drives: Physical destruction or degaussing
- USB drives: Physical destruction for RESTRICTED
- CDs/DVDs: Physical shredding
- Mobile devices: Factory reset plus verification

**Paper Documents:**
- RESTRICTED: Cross-cut shredding, certified destruction
- CONFIDENTIAL: Strip-cut shredding minimum
- INTERNAL: Basic shredding
- PUBLIC: Recycling acceptable

### 7.3 Disposal Documentation
- Certificate of destruction for RESTRICTED data
- Disposal log maintained
- Vendor certificates retained
- Compliance verification

## 8. Cloud Storage and BYOD Considerations

### 8.1 Approved Cloud Platforms

| Platform | Restricted | Confidential | Internal | Public |
|----------|-----------|--------------|----------|--------|
| SharePoint | Yes* | Yes | Yes | Yes |
| Dropbox Business | Yes* | Yes | Yes | Yes |
| OneDrive | No | Yes | Yes | Yes |
| Personal Cloud | No | No | No | Yes |

*With additional encryption and controls

### 8.2 Personal Device Handling
- RESTRICTED data: Prohibited on personal devices
- CONFIDENTIAL: Encrypted containers required
- INTERNAL: Standard BYOD controls
- PUBLIC: No restrictions
- Remote wipe capability required for business data

## 9. Data Loss Prevention (DLP)

### 9.1 Technical Controls
- Email filtering for sensitive data patterns
- Cloud platform DLP policies
- Endpoint protection monitoring
- Network monitoring where feasible

### 9.2 Administrative Controls
- Regular training on data handling
- Clear desk/screen policy
- Visitor access restrictions
- Confidentiality agreements

### 9.3 Data Breach Response
- Immediate notification to Security Coordinator
- Containment actions within 2 hours
- Impact assessment by classification
- Client notification per contracts
- Regulatory reporting as required

## 10. International Data Transfer

### 10.1 Requirements
- Verify destination country regulations
- Ensure equivalent protection levels
- Contractual safeguards in place
- Encryption for all transfers
- Documentation of transfer justification

### 10.2 Restrictions
- RESTRICTED data: CEO approval required
- CONFIDENTIAL: Manager approval required
- Consider data residency requirements
- Client approval for their data

## 11. Training and Awareness

### 11.1 Initial Training
- Data classification overview
- Handling requirements by level
- Client-specific requirements
- Common scenarios and examples

### 11.2 Ongoing Awareness
- Annual refresher training
- Updates on policy changes
- Lessons learned from incidents
- Best practices sharing

## 12. Compliance and Monitoring

### 12.1 Compliance Monitoring
- Quarterly data classification audits
- Annual handling practices review
- Incident analysis for trends
- Client compliance verification

### 12.2 Key Performance Indicators
- Percentage of data properly classified
- Number of data incidents by classification
- Time to detect and respond to incidents
- Training completion rates

### 12.3 Violations
**Consequences based on severity:**
- Unintentional mishandling: Coaching and retraining
- Negligent handling: Written warning
- Intentional misuse: Disciplinary action including termination
- Data breach: Potential legal action

## 13. Related Documents

- Information Security Policy
- Acceptable Use Policy
- Incident Response Plan
- Remote Work/BYOD Policy
- Vendor Management Policy

## 14. Definitions

- **Data at Rest**: Data stored on any device or media
- **Data in Transit**: Data moving between systems
- **Data in Use**: Data being processed or viewed
- **Encryption**: Cryptographic transformation of data
- **Need-to-Know**: Required for job function

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