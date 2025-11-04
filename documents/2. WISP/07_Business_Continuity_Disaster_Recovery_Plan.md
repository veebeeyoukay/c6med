# C6Med LLC Business Continuity and Disaster Recovery Plan

**Document Version:** 1.0
**Effective Date:** [DATE]
**Last Review Date:** [DATE]
**Next Review Date:** [DATE + 1 YEAR]
**Document Owner:** Chief Executive Officer
**Document Classification:** Confidential

---

## 1. Purpose and Scope

### 1.1 Purpose
This Business Continuity and Disaster Recovery (BC/DR) Plan ensures C6Med LLC can maintain essential pharmaceutical medical communications services during disruptions, recover critical operations quickly, and meet contractual obligations to clients including Novartis, Novo Nordisk, and Regeneron during adverse events.

### 1.2 Scope
This plan addresses:
- All C6Med business operations and services
- Technology systems and infrastructure
- Remote workforce continuity
- Client deliverable protection
- Third-party dependencies
- Natural disasters, technical failures, and human-caused disruptions
- Short-term (hours/days) and extended (weeks) disruptions

### 1.3 NIST CSF Alignment
This plan implements the following NIST CSF 2.0 controls:
- RC.RP-1: Recovery plan is executed during disruptions
- RC.IM-1: Recovery plans incorporate lessons learned
- RC.CO-1: Communications during recovery operations
- ID.BE-5: Resilience requirements for critical services
- PR.IP-9: Response and recovery plans are tested

## 2. Business Continuity Organization

### 2.1 Crisis Management Team (CMT)

**Crisis Manager (Primary)**
- Name: [CEO Name]
- Role: Overall crisis management and decisions
- Contact: [Phone] [Email]
- Backup: [Designated Executive]

**Operations Coordinator**
- Name: [Operations Manager/Lead]
- Role: Coordinate operational recovery
- Contact: [Phone] [Email]
- Backup: [Designated Backup]

**Technology Recovery Lead**
- Name: [IT Administrator/Consultant]
- Role: IT systems recovery
- Contact: [Phone] [Email]
- Backup: [Technical Resource]

**Communications Coordinator**
- Name: [Designated Employee]
- Role: Internal and external communications
- Contact: [Phone] [Email]
- Backup: [Designated Backup]

### 2.2 Recovery Team Responsibilities

| Role | Initial Response | Recovery Operations | Return to Normal |
|------|-----------------|-------------------|------------------|
| Crisis Manager | Activate plan, make decisions | Oversee recovery | Approve return |
| Operations | Assess impact | Coordinate work resumption | Verify operations |
| Technology | Assess IT impact | Restore systems | Validate systems |
| Communications | Notify stakeholders | Provide updates | Final communications |
| All Employees | Report status | Execute assigned tasks | Resume normal duties |

## 3. Business Impact Analysis (BIA)

### 3.1 Critical Business Functions

**Priority 1: Client Project Delivery (RTO: 24 hours, RPO: 4 hours)**
- Medical writing and content development
- Regulatory submission support
- Client communications and meetings
- Project management and coordination

**Priority 2: Business Operations (RTO: 48 hours, RPO: 24 hours)**
- Financial operations and invoicing
- Employee payroll and benefits
- Vendor management
- New business development

**Priority 3: Administrative Functions (RTO: 72 hours, RPO: 48 hours)**
- HR administration
- Marketing activities
- Internal reporting
- Training and development

### 3.2 Critical Resources and Dependencies

**Technology Systems:**
- Microsoft Office 365 (Email, Teams, SharePoint)
- Dropbox Business
- Internet connectivity
- Personal devices (BYOD)
- VPN access (if implemented)

**Human Resources:**
- Minimum 60% staff for client delivery
- Key subject matter experts
- Project managers
- Client relationship managers

**Third-Party Dependencies:**
- Microsoft cloud services
- Internet service providers
- Telecommunications providers
- Banking services
- Insurance carriers

### 3.3 Maximum Tolerable Downtime (MTD)

| Function | MTD | Financial Impact | Client Impact | Regulatory Impact |
|----------|-----|-----------------|---------------|-------------------|
| Client project work | 48 hours | High | Severe | Potential |
| Email/communications | 24 hours | Medium | High | Low |
| File access (SharePoint/Dropbox) | 24 hours | Medium | High | Low |
| Financial systems | 72 hours | Medium | Low | Medium |
| Administrative systems | 5 days | Low | Low | Low |

## 4. Risk Assessment and Scenarios

### 4.1 Threat Categories

**Natural Disasters:**
- Severe weather (hurricanes, tornadoes, floods)
- Earthquakes
- Wildfires
- Pandemic/epidemic

**Technology Failures:**
- Cloud service outages
- Internet/network failures
- Cyber attacks (ransomware, DDoS)
- Data corruption or loss

**Human Factors:**
- Key person unavailability
- Workplace violence
- Labor disputes
- Errors and omissions

**External Factors:**
- Power outages
- Telecommunications failure
- Supply chain disruption
- Regulatory changes

### 4.2 Risk Matrix

| Threat | Likelihood | Impact | Risk Level | Primary Mitigation |
|--------|-----------|--------|------------|-------------------|
| Cloud service outage | Medium | High | High | Multi-cloud strategy, backups |
| Ransomware | Medium | Very High | High | Backups, security controls |
| Power outage (local) | High | Low | Medium | Remote work capability |
| Key person loss | Medium | High | High | Cross-training, documentation |
| Internet outage | Medium | High | High | Mobile hotspots, redundancy |
| Natural disaster | Low | Very High | Medium | Remote work, geographic distribution |

## 5. Continuity Strategies

### 5.1 Workspace Continuity

**Primary Strategy: Distributed Remote Work**
- All employees equipped for home-based work
- No single point of failure
- Geographic distribution reduces local impact

**Alternate Work Locations:**
- Primary: Employee home offices
- Secondary: Co-working spaces
- Tertiary: Coffee shops/public spaces with Wi-Fi
- Emergency: Relative/friend locations

**Requirements for Remote Work:**
- Reliable internet (minimum 25 Mbps)
- Backup internet option (mobile hotspot)
- Secure Wi-Fi configuration
- Adequate workspace
- Power backup (UPS recommended)

### 5.2 Technology Continuity

**Data Protection:**
- Real-time sync to cloud (SharePoint/Dropbox)
- No local-only data storage
- Version control enabled
- Deleted item retention (30 days minimum)

**System Redundancy:**
- Primary: Microsoft 365 cloud services
- Secondary: Dropbox for file backup
- Email: Web access if desktop clients fail
- Communications: Teams primary, phone backup

**Access Continuity:**
- Password manager for credential backup
- MFA backup codes stored securely
- Emergency access procedures documented
- Account recovery procedures tested

### 5.3 Communications Continuity

**Communication Cascade:**
1. Microsoft Teams (primary)
2. Email
3. Mobile phones/SMS
4. Personal email (emergency only)
5. Social media (company updates)

**Client Communications:**
- Designated liaison for each major client
- Backup contacts identified
- Communication templates prepared
- Status update schedule defined

### 5.4 Vendor and Supply Chain

**Critical Vendor List:**
- Microsoft: [Account manager contact]
- Dropbox: [Support contact]
- Internet/Telecom: [Provider contacts]
- Insurance: [Agent contact]
- Banking: [Relationship manager]

**Vendor Failure Mitigation:**
- SLA monitoring
- Alternative vendors identified
- Escalation procedures documented
- Regular vendor performance reviews

## 6. Response Procedures

### 6.1 Initial Response (0-4 hours)

**Hour 0-1: Immediate Actions**
1. Ensure personnel safety
2. Initial damage assessment
3. Activate CMT if needed
4. Document incident details

**Hour 1-2: Situation Assessment**
- Determine scope of impact
- Identify affected systems/operations
- Estimate duration
- Resource availability check

**Hour 2-4: Initial Communications**
- Notify all employees
- Initial client notifications if impact >2 hours
- Update company website/social media
- Contact critical vendors

### 6.2 Continuity Operations (4-24 hours)

**Activation Decision Matrix:**

| Impact Level | Duration | Activation Level | Authority |
|--------------|----------|------------------|-----------|
| 1-2 employees | <4 hours | No activation | Manager handles |
| Multiple employees | <8 hours | Partial activation | Operations Coordinator |
| System-wide | >8 hours | Full activation | CEO |
| Client impact | Any | Immediate review | CEO |

**Continuity Actions:**
1. Establish emergency operations center (virtual)
2. Deploy alternate work procedures
3. Redirect communications
4. Implement manual processes if needed
5. Track time and expenses

### 6.3 Extended Operations (24+ hours)

**If disruption extends beyond 24 hours:**
- Daily CMT meetings
- Resource reallocation
- Client priority negotiations
- Vendor emergency support
- Staff welfare checks
- Financial impact assessment

## 7. Disaster Recovery Procedures

### 7.1 Data Recovery

**Recovery Priority Order:**
1. Client project files (active projects first)
2. Email and communications
3. Financial records
4. Administrative data

**Recovery Sources:**
- Primary: Cloud service native recovery
- Secondary: Cross-platform backups (SharePoint↔Dropbox)
- Tertiary: Local device caches
- Last resort: Client/vendor copies

**Recovery Procedures:**

**SharePoint Recovery:**
1. Check service status at admin.microsoft.com
2. Use version history for file recovery
3. Restore from recycle bin (93 days)
4. Contact Microsoft support if needed
5. Restore from Dropbox backup if necessary

**Dropbox Recovery:**
1. Check status.dropbox.com
2. Use version history (30-180 days)
3. Restore deleted files
4. Contact Dropbox support
5. Restore from SharePoint if needed

### 7.2 System Recovery

**Email/Office 365:**
- Service monitoring: admin.microsoft.com
- Automatic failover to alternate data centers
- Local Outlook cache for recent emails
- Web access as backup to desktop clients

**Teams/Communications:**
- Automatic Microsoft redundancy
- Phone calls as backup
- Email for async communication
- Zoom/WebEx as alternates if needed

### 7.3 Workspace Recovery

**Home Office Disruption:**
- Relocate to alternate location
- Use mobile devices temporarily
- Co-working space activation
- Hotel business center if traveling

**Equipment Failure:**
- Next-day replacement via vendor
- Local electronics store for immediate needs
- Borrowing from other employees
- Insurance claim for damaged equipment

## 8. Return to Normal Operations

### 8.1 Recovery Validation

**Before Declaring Recovery:**
- [ ] All critical systems operational
- [ ] Data integrity verified
- [ ] Communications restored
- [ ] Staff availability confirmed
- [ ] Client deliverables on track
- [ ] Vendor services restored

### 8.2 Transition Process

1. **Gradual Transition**
   - Test systems thoroughly
   - Pilot with non-critical operations
   - Monitor for stability
   - Phase in normal operations

2. **Communication**
   - Notify all stakeholders of recovery
   - Update status to "operational"
   - Thank participants
   - Document timeline

3. **Documentation**
   - Record all decisions made
   - Document workarounds used
   - Calculate financial impact
   - Capture lessons learned

### 8.3 Post-Incident Activities

**Within 1 Week:**
- Hot wash meeting with CMT
- Initial after-action report
- Immediate fixes implemented
- Employee feedback collected

**Within 1 Month:**
- Comprehensive review
- BC/DR plan updates
- Training needs identified
- Cost analysis completed
- Client feedback incorporated

## 9. Plan Testing and Maintenance

### 9.1 Testing Schedule

| Test Type | Frequency | Duration | Participants |
|-----------|-----------|----------|--------------|
| Call tree test | Quarterly | 1 hour | All employees |
| Tabletop exercise | Semi-annual | 2 hours | CMT |
| Data recovery test | Quarterly | 2 hours | IT lead |
| Full simulation | Annual | 4 hours | All |
| Vendor verification | Annual | 1 hour | Ops coordinator |

### 9.2 Test Scenarios

**Quarterly Rotation:**
- Q1: Cloud service outage
- Q2: Ransomware attack
- Q3: Natural disaster
- Q4: Extended power/internet outage

### 9.3 Plan Maintenance

**Quarterly Updates:**
- Contact information
- Vendor contacts
- Client requirements
- Technology changes

**Annual Review:**
- Full plan review
- BIA update
- Risk assessment refresh
- Lesson learned integration
- Regulatory changes

**Triggered Updates:**
- After any activation
- Significant organizational change
- New client with specific requirements
- Technology platform changes
- Vendor changes

## 10. Training and Awareness

### 10.1 Training Requirements

**All Employees:**
- Annual BC/DR awareness training
- Role-specific responsibilities
- Communication procedures
- Remote work best practices
- Data backup responsibilities

**CMT Members:**
- Semi-annual tabletop exercises
- Decision-making scenarios
- Communication practice
- Tool familiarization

### 10.2 Awareness Activities
- BC/DR tip of the month
- Backup verification reminders
- Emergency contact updates
- Home office preparedness tips
- Lessons learned sharing

## 11. Resource Requirements

### 11.1 Financial Reserves
- Target: 3 months operating expenses
- Quick access to funds
- Credit line established
- Insurance coverage adequate

### 11.2 Emergency Supplies (Home Office)
**Recommended for Each Employee:**
- Battery backup (UPS)
- Mobile hotspot
- External hard drive
- First aid kit
- Flashlight and batteries
- Emergency contact card

### 11.3 Documentation Repository
**Maintain Current Copies of:**
- BC/DR plan
- Contact lists
- Network diagrams
- Vendor contracts
- Insurance policies
- Client requirements
- Recovery procedures

## 12. Key Performance Indicators

### 12.1 BC/DR Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Plan currency | 100% current | Quarterly review |
| Test completion | 100% on schedule | Annual summary |
| RTO achievement | Meet 100% RTOs | Test results |
| RPO achievement | Meet 100% RPOs | Test results |
| Training completion | 100% annually | Training records |
| Contact accuracy | >95% valid | Quarterly verification |

### 12.2 Continuous Improvement
- Track all incidents and near-misses
- Analyze trends
- Benchmark against industry
- Implement improvements
- Document changes

## 13. Appendices

### Appendix A: Contact Lists
[Detailed contact information for all stakeholders]

### Appendix B: Activation Checklists
[Step-by-step checklists for various scenarios]

### Appendix C: Communication Templates
[Pre-drafted communications for various situations]

### Appendix D: Recovery Procedures
[Detailed technical recovery steps]

### Appendix E: Vendor Information
[Vendor contacts, SLAs, and escalation procedures]

### Appendix F: Floor Plans and Network Diagrams
[Visual references for infrastructure]

### Appendix G: Regulatory Requirements
[Compliance obligations during disasters]

## 14. Quick Reference Guide

### Emergency Activation

**To Activate BC/DR Plan:**

1. **Assess Situation**
   - Is anyone hurt? Call 911
   - What is affected?
   - How long will it last?

2. **Contact Crisis Manager**
   - Primary: [CEO Phone]
   - Backup: [Alternate Phone]

3. **Gather CMT**
   - Teams emergency channel
   - Conference bridge: [Number]

4. **Initial Actions**
   - Employee safety check
   - Client notifications
   - System assessment
   - Communication plan

**Remember:** Safety first, then operations!

## 15. Document Control

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| 1.0 | [DATE] | [NAME] | Initial plan creation |

---

**Plan Approval:**

_____________________________
Chief Executive Officer
Date: ________________

_____________________________
Operations Coordinator
Date: ________________

**Quick Reference Card**
(Print and keep accessible)

**BC/DR Activation:**
- Crisis Manager: [Phone]
- Operations: [Phone]
- IT Support: [Phone]
- Conference Bridge: [Number]
- Teams Channel: [Channel Name]