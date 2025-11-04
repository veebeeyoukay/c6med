# C6Med LLC Incident Response Plan

**Document Version:** 1.0
**Effective Date:** [DATE]
**Last Review Date:** [DATE]
**Next Review Date:** [DATE + 1 YEAR]
**Document Owner:** Chief Executive Officer
**Document Classification:** Confidential

---

## 1. Purpose and Scope

### 1.1 Purpose
This Incident Response Plan (IRP) provides a structured approach for C6Med LLC to detect, respond to, and recover from security incidents while minimizing impact to pharmaceutical client operations, protecting sensitive data, and maintaining compliance with contractual and regulatory requirements.

### 1.2 Scope
This plan covers:
- All security incidents affecting C6Med systems, data, or operations
- Incidents involving client data (Novartis, Novo Nordisk, Regeneron, etc.)
- Physical and cyber security incidents
- Privacy breaches and data loss events
- Third-party incidents affecting C6Med
- Incidents occurring in any work location (office, home, travel)

### 1.3 NIST CSF Alignment
This plan implements the following NIST CSF 2.0 controls:
- RS.MA-1: The incident response plan is executed
- RS.AN-1: Notifications are sent to relevant parties
- RS.MI-1: Incidents are contained
- RS.MI-2: Incidents are eradicated
- RC.RP-1: The recovery plan is executed
- IM.1-5: Improvements based on lessons learned

## 2. Incident Response Team (IRT)

### 2.1 Team Structure

**Incident Response Coordinator (Primary)**
- Name: [Security Coordinator Name]
- Role: Lead incident response activities
- Contact: [Phone] [Email]
- Backup: [CEO]

**Executive Sponsor**
- Name: [CEO Name]
- Role: Executive decisions, external communications
- Contact: [Phone] [Email]
- Backup: [Designated Executive]

**Technical Lead**
- Name: [IT Administrator/Consultant]
- Role: Technical investigation and remediation
- Contact: [Phone] [Email]
- Backup: [Designated Technical Resource]

**Communications Lead**
- Name: [Designated Employee]
- Role: Internal and client communications
- Contact: [Phone] [Email]
- Backup: [Designated Backup]

### 2.2 Extended Team Members
- Legal Counsel: [External Legal Contact]
- Cyber Insurance: [Insurance Contact]
- Forensics Consultant: [If contracted]
- PR Consultant: [If needed]
- Law Enforcement: Local FBI Cyber Crime Unit

### 2.3 Responsibilities Matrix

| Role | Detection | Containment | Eradication | Recovery | Lessons Learned |
|------|-----------|-------------|-------------|----------|-----------------|
| IR Coordinator | Lead | Lead | Lead | Lead | Lead |
| Executive | Informed | Approve | Approve | Approve | Review |
| Technical Lead | Support | Execute | Execute | Execute | Input |
| Communications | Informed | Notify | Update | Communicate | Document |
| All Employees | Report | Support | Support | Support | Participate |

## 3. Incident Classification

### 3.1 Severity Levels

**CRITICAL (Severity 1)**
- Complete system compromise
- RESTRICTED data breach confirmed
- Ransomware with operational impact
- Client data exposure
- Regulatory violation likely
- **Response Time**: Immediate (within 1 hour)

**HIGH (Severity 2)**
- Partial system compromise
- CONFIDENTIAL data potentially exposed
- Service disruption affecting clients
- Malware detected but contained
- Repeated targeted attacks
- **Response Time**: Within 2 hours

**MEDIUM (Severity 3)**
- Limited security impact
- INTERNAL data affected
- Suspicious activity detected
- Single user account compromise
- Policy violation with security implications
- **Response Time**: Within 4 hours

**LOW (Severity 4)**
- Minimal security impact
- Failed attack attempts
- Minor policy violations
- Spam/phishing (unsuccessful)
- **Response Time**: Within 24 hours

### 3.2 Incident Types

**Data Breach**
- Unauthorized access to sensitive data
- Data exfiltration
- Accidental disclosure
- Lost/stolen devices with data

**Malware/Ransomware**
- Virus/trojan/worm infection
- Ransomware encryption
- Rootkit/backdoor discovery
- Cryptomining malware

**Account Compromise**
- Stolen credentials
- Unauthorized access
- Privilege escalation
- Account takeover

**System Compromise**
- Server breach
- Network intrusion
- Website defacement
- Database compromise

**Physical Security**
- Theft of equipment
- Unauthorized facility access
- Document exposure/loss
- Environmental incidents

**Availability**
- Denial of Service (DoS)
- System failures
- Service disruptions
- Data corruption

## 4. Incident Response Process

### 4.1 Phase 1: PREPARATION

**Ongoing Activities:**
- Maintain current IRP documentation
- Regular team training and awareness
- Tools and resources ready
- Contact lists updated quarterly
- Incident tracking system maintained
- Logging and monitoring enabled

**Preparedness Checklist:**
- [ ] IRP documented and distributed
- [ ] Team contacts current
- [ ] Communication templates ready
- [ ] Evidence collection tools available
- [ ] Backup systems verified
- [ ] Insurance policy reviewed
- [ ] Legal counsel identified
- [ ] Client notification procedures confirmed

### 4.2 Phase 2: DETECTION AND ANALYSIS

**Detection Sources:**
- Employee reports
- Security tools alerts
- Client notifications
- Third-party warnings
- Unusual system behavior
- Failed login attempts
- Data loss prevention alerts

**Initial Analysis Steps:**
1. Document initial report
   - Date/time of discovery
   - Reporter information
   - Initial observations
   - Systems affected

2. Preliminary assessment
   - Verify incident is real
   - Determine incident type
   - Assess initial scope
   - Classify severity level

3. Evidence preservation
   - Screenshot errors/alerts
   - Preserve logs
   - Document timeline
   - Maintain chain of custody

**Analysis Documentation:**
Use Incident Report Form (Appendix A) to capture:
- Incident details
- Affected systems/data
- Timeline of events
- Initial impact assessment
- Evidence collected

### 4.3 Phase 3: CONTAINMENT

**Immediate Containment (All Incidents):**
1. Isolate affected systems
2. Disable compromised accounts
3. Block malicious IPs/domains
4. Preserve evidence
5. Prevent spread

**Short-Term Containment:**
- Implement temporary fixes
- Increase monitoring
- Change passwords
- Apply emergency patches
- Backup critical data

**Long-Term Containment:**
- Remove backdoors
- Rebuild systems if needed
- Implement additional controls
- Update security tools
- Strengthen defenses

**Containment Decision Matrix:**

| Scenario | Action | Authority |
|----------|--------|-----------|
| Active data exfiltration | Disconnect immediately | Any employee |
| Ransomware execution | Isolate, don't power off | IR Coordinator |
| Account compromise | Disable account | Security Coordinator |
| Client data involved | Isolate and notify | CEO approval |

### 4.4 Phase 4: ERADICATION

**Eradication Activities:**
1. Remove malware/malicious code
2. Delete unauthorized accounts
3. Close vulnerabilities
4. Apply patches and updates
5. Strengthen configurations
6. Remove attack artifacts

**Verification Steps:**
- Scan systems for remaining threats
- Verify patches applied
- Confirm vulnerabilities addressed
- Review logs for suspicious activity
- Test security controls

### 4.5 Phase 5: RECOVERY

**Recovery Process:**
1. Restore from clean backups
2. Rebuild compromised systems
3. Re-enable accounts (with new credentials)
4. Restore normal operations
5. Implement additional monitoring
6. Verify system integrity

**Recovery Validation:**
- Systems functioning normally
- No signs of compromise
- Performance acceptable
- Users can access resources
- Security controls operational

**Monitoring Period:**
- Enhanced monitoring for 30 days
- Daily review of logs
- User activity monitoring
- Performance metrics tracking
- Threat indicator watching

### 4.6 Phase 6: POST-INCIDENT ACTIVITIES

**Lessons Learned Meeting:**
- Conducted within 1 week
- All IRT members participate
- Document what worked/didn't work
- Identify improvement opportunities
- Update procedures

**Post-Incident Report:**
- Executive summary
- Timeline of events
- Root cause analysis
- Impact assessment
- Actions taken
- Recommendations
- Cost analysis

**Follow-Up Actions:**
- Update IRP based on lessons
- Implement security improvements
- Additional training if needed
- Policy updates
- Third-party assessment (if warranted)

## 5. Communication Procedures

### 5.1 Internal Communications

**Initial Notification Chain:**
1. Discovering employee → Security Coordinator
2. Security Coordinator → CEO
3. CEO → Affected departments
4. IR Coordinator → IRT members

**Status Updates:**
- CRITICAL: Every hour
- HIGH: Every 2 hours
- MEDIUM: Every 4 hours
- LOW: Daily

### 5.2 External Communications

**Client Notification Requirements:**

| Condition | Timeframe | Method | Approver |
|-----------|-----------|--------|----------|
| Client data confirmed breached | Within 24 hours | Phone + Email | CEO |
| Client data possibly affected | Within 48 hours | Email | CEO |
| Service disruption >4 hours | Within 4 hours | Email | IR Coordinator |
| Resolved incident summary | Within 72 hours | Email | CEO |

**Regulatory Notifications:**
- HIPAA breach: Within 60 days
- State breach laws: Per requirements (typically 72 hours)
- Cyber insurance: Within 24 hours
- Law enforcement: When criminal activity suspected

**Notification Templates:**
See Appendix B for:
- Client breach notification
- Employee notification
- Vendor notification
- Regulatory filing templates

### 5.3 Media and Public Relations
- No employee speaks to media without approval
- All media inquiries directed to CEO
- Prepared statement templates ready
- Legal review before any public statement
- Coordinate with client PR teams

## 6. Specific Incident Playbooks

### 6.1 Ransomware Playbook

**Immediate Actions:**
1. DO NOT pay ransom without consultation
2. Isolate but don't power off infected systems
3. Disconnect network shares
4. Identify ransomware variant
5. Check for decryption tools
6. Contact cyber insurance

**Recovery Strategy:**
- Restore from backups if available
- Rebuild systems if necessary
- Negotiation only with expert assistance
- Law enforcement notification
- Document all evidence

### 6.2 Data Breach Playbook

**Immediate Actions:**
1. Stop ongoing data loss
2. Identify what data was accessed
3. Determine how breach occurred
4. Identify affected individuals/clients
5. Preserve evidence
6. Begin notification timeline

**Specific Considerations:**
- Pharmaceutical data: Immediate client notification
- Employee data: Legal consultation required
- Financial data: Banking partners notified
- Credentials: Force password resets

### 6.3 Business Email Compromise (BEC)

**Immediate Actions:**
1. Reset compromised account password
2. Enable MFA if not already
3. Check email rules and forwarding
4. Review sent items for fraudulent messages
5. Notify contacts of compromise
6. Check for financial fraud attempts

### 6.4 Lost/Stolen Device

**Immediate Actions:**
1. Attempt remote wipe if possible
2. Change all account passwords
3. Notify clients if their data affected
4. File police report if stolen
5. Contact insurance
6. Document device contents/access

### 6.5 Physical Security Incident

**Immediate Actions:**
1. Ensure personnel safety first
2. Contact law enforcement if crime
3. Secure the scene
4. Document what's missing/affected
5. Review access logs/cameras if available
6. Change physical/digital access codes

## 7. Evidence Collection and Handling

### 7.1 Evidence Types
- System logs (Windows, application, security)
- Network logs (firewall, router, IDS)
- Email headers and content
- File system artifacts
- Memory dumps
- Screenshots
- Physical evidence

### 7.2 Collection Procedures
1. Document everything
2. Use write-blockers for drives
3. Create bit-for-bit copies
4. Hash evidence files
5. Maintain chain of custody
6. Store securely

### 7.3 Chain of Custody
Document for each piece of evidence:
- Description
- Collection date/time/method
- Collector name
- Transfer records
- Storage location
- Access log

## 8. Resources and Tools

### 8.1 Internal Resources
- Incident tracking spreadsheet
- Communication templates
- Contact lists
- Network diagrams
- Asset inventory
- Backup locations
- Recovery procedures

### 8.2 External Resources

**Emergency Contacts:**
- FBI Cyber Crime: [Local office number]
- Cyber Insurance Hotline: [Number]
- Legal Counsel: [Contact]
- Forensics Firm: [Contact]
- PR Firm: [Contact]

**Online Resources:**
- CISA Incident Response: us-cert.cisa.gov
- NIST Computer Security Incident Guide
- Have I Been Pwned: haveibeenpwned.com
- VirusTotal: virustotal.com
- MITRE ATT&CK: attack.mitre.org

### 8.3 Tools
- Incident response laptop (clean, updated)
- USB drives for evidence
- Digital forensics tools
- Network analysis tools
- Malware analysis sandbox
- Password managers
- Encryption tools

## 9. Training and Testing

### 9.1 Training Requirements

**All Employees:**
- Annual incident reporting training
- Recognizing security incidents
- Proper escalation procedures
- Data protection responsibilities

**IRT Members:**
- Quarterly tabletop exercises
- Annual IRP walkthrough
- Role-specific training
- Tool familiarization

### 9.2 Testing Schedule

| Test Type | Frequency | Participants | Focus |
|-----------|-----------|--------------|--------|
| Tabletop Exercise | Quarterly | IRT | Different scenario each time |
| Communications Test | Semi-annual | All | Contact verification |
| Technical Test | Annual | IT Team | Tool validation |
| Full Simulation | Annual | All | End-to-end response |

### 9.3 Exercise Scenarios
- Ransomware attack
- Client data breach
- Insider threat
- Business email compromise
- Physical theft
- Service outage

## 10. Maintenance and Review

### 10.1 Regular Updates
**Quarterly:**
- Contact information
- Vendor contacts
- Tool inventory
- Threat landscape review

**Annually:**
- Full IRP review
- Lessons learned integration
- Regulatory changes
- Industry best practices

### 10.2 Triggers for Immediate Update
- Significant incident occurrence
- Major organizational change
- New client requirements
- Regulatory changes
- Technology changes
- Merger/acquisition

## 11. Appendices

### Appendix A: Incident Report Form
[Detailed form template]

### Appendix B: Communication Templates
[Notification templates for various scenarios]

### Appendix C: Contact Lists
[Detailed contact information]

### Appendix D: Decision Trees
[Visual flowcharts for common scenarios]

### Appendix E: Evidence Collection Checklist
[Step-by-step evidence procedures]

### Appendix F: Vendor Management
[Vendor contact and SLA information]

## 12. Compliance Considerations

### 12.1 Regulatory Requirements
- HIPAA breach notification rules
- State data breach laws
- GDPR (if applicable)
- Client contractual requirements

### 12.2 Insurance Requirements
- Notification timeframes
- Documentation requirements
- Covered services
- Claim procedures

## 13. Document Control

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| 1.0 | [DATE] | [NAME] | Initial plan creation |

---

**Plan Approval:**

_____________________________
Chief Executive Officer
Date: ________________

_____________________________
Security Coordinator
Date: ________________

**Emergency Contact Card**
(Print and distribute to all employees)

**To Report a Security Incident:**
1. Security Coordinator: [Phone]
2. CEO: [Phone]
3. Email: security@c6med.com
4. After hours: [Emergency contact]

**Remember:** When in doubt, report it!