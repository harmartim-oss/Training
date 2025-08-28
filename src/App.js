import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Progress } from './components/ui/progress';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert';
import { 
  CheckCircle, 
  Lock, 
  Play, 
  Award,
  ArrowRight,
  Home,
  ChevronUp,
  LogOut,
  Star
} from 'lucide-react';
import Confetti from 'react-confetti';
import './App.css';

// Import images
import logo from './assets/logo.svg';
import privacyImage from './assets/privacy_data_management.svg';
import cybersecurityImage from './assets/cybersecurity_fundamentals.svg';
import aiImage from './assets/ai_ethics_guidelines.svg';
import certificateBg from './assets/certificate-bg.jpg';

// Company renamed to "Ontario Cyber Resilience Authority" (OCRA) for authoritative and professional tone
// Designation remains Certified CyberSecure Ontario Practitioner (CCOP)

// Enhanced lesson contents with more details, references, and tables where appropriate
const lessonContents = {
  '1-1': `
# Module 1, Lesson 1.1: Introduction to Privacy Legislation

## Understanding Privacy Legislation in Ontario

In Ontario, the protection of personal information is governed by a combination of provincial and federal statutes. For small businesses and municipalities, understanding the scope and application of these laws is crucial for ensuring compliance and building trust with individuals whose data they handle. The primary pieces of legislation relevant to this training are the Freedom of Information and Protection of Privacy Act (FIPPA), the Municipal Freedom of Information and Protection of Privacy Act (MFIPPA), and the Personal Information Protection and Electronic Documents Act (PIPEDA).

### Freedom of Information and Protection of Privacy Act (FIPPA)

**Scope and Application:**
FIPPA is a provincial law that applies to provincial government ministries, agencies, and a wide range of provincial public institutions, including hospitals, universities, and colleges. Its primary purposes are twofold: to provide a right of access to information held by these institutions and to protect the privacy of personal information they collect, use, and disclose. [1]

**Key Provisions:**
- **Right of Access:** Individuals have the right to request and obtain access to general records and their own personal information held by provincial institutions, subject to specific exemptions. These exemptions are designed to protect certain types of information, such as cabinet confidences, law enforcement records, and third-party commercial information. [2]
- **Privacy Protection:** FIPPA sets out rules for how provincial institutions must collect, use, disclose, and retain personal information. It emphasizes the need for consent, limiting collection to what is necessary, and safeguarding information. [3]
- **Oversight:** The Information and Privacy Commissioner of Ontario (IPC) oversees compliance with FIPPA. The IPC is an independent officer of the Legislature who investigates complaints, conducts audits, and provides guidance on access and privacy matters. [4]

**Unique Ontario Context:**
Ontario's public sector handles vast amounts of sensitive data, from health records to municipal services. FIPPA's integration with other provincial laws makes it unique, requiring tailored compliance strategies for hybrid public-private partnerships common in Ontario.

**Case Study:** In 2023, a major Ontario hospital faced IPC investigation for improper data sharing, highlighting the need for robust FIPPA compliance programs.

**Relevance to Small Businesses and Municipalities:**
While FIPPA directly applies to provincial public institutions, its principles and the IPC's guidance often influence best practices for data handling across all sectors in Ontario. Small businesses and municipalities may interact with FIPPA-covered institutions, making a general understanding of its provisions beneficial.

### Municipal Freedom of Information and Protection of Privacy Act (MFIPPA)

**Scope and Application:**
MFIPPA is the municipal equivalent of FIPPA. It applies specifically to municipal governments, local boards, agencies, and commissions within Ontario. This includes city councils, police services, public health units, and public libraries. Like FIPPA, MFIPPA aims to provide public access to municipal records while protecting personal information. [5]

**Key Provisions:**
- **Right of Access:** Similar to FIPPA, MFIPPA grants individuals the right to access records in the custody or control of municipal institutions, with specific exemptions. [6]
- **Privacy Protection:** MFIPPA outlines stringent rules for the collection, use, disclosure, and retention of personal information by municipal bodies. It mandates that personal information be collected directly from the individual concerned, unless specific exceptions apply, and that it only be used for the purpose for which it was collected or a consistent purpose. [7]
- **Oversight:** The IPC also oversees compliance with MFIPPA, providing guidance and investigating complaints related to municipal institutions. [8]

**Unique Ontario Context:**
MFIPPA's focus on local governance makes it essential for Ontario's diverse municipal landscape, from large cities like Toronto to small towns, ensuring consistent privacy standards across the province.

**Case Study:** A 2024 MFIPPA breach in a mid-sized Ontario municipality led to enhanced data sharing protocols, demonstrating the act's role in modernizing local government privacy practices.

**Relevance to Municipalities:**
MFIPPA is directly applicable to all municipalities in Ontario, making compliance mandatory. Municipal staff must be thoroughly familiar with its provisions to ensure proper handling of citizen data, respond to information requests, and avoid privacy breaches. Non-compliance can lead to investigations by the IPC and potential reputational damage.

**Relevance to Small Businesses:**
Small businesses that interact with municipal governments (e.g., through licensing, permits, or contracts) may encounter MFIPPA's provisions. While not directly subject to MFIPPA, understanding how municipal partners handle data under this act can facilitate smoother operations and data exchange.

### Personal Information Protection and Electronic Documents Act (PIPEDA)

**Scope and Application:**
PIPEDA is a federal law that applies to private-sector organizations across Canada that collect, use, or disclose personal information in the course of commercial activities. This means it generally covers businesses engaged in commercial transactions, regardless of their size. However, some provinces, like Alberta, British Columbia, and Quebec, have their own private-sector privacy laws deemed substantially similar to PIPEDA, in which case their provincial law applies instead of PIPEDA. Ontario does not have such a substantially similar law, meaning PIPEDA applies to most private-sector organizations within Ontario that conduct commercial activities. [9]

**Key Provisions (Ten Fair Information Principles):**
PIPEDA is built around 10 interrelated Fair Information Principles, which organizations must follow when collecting, using, and disclosing personal information:

1.  **Accountability:** An organization is responsible for personal information under its control and must designate an individual(s) accountable for the organization's compliance. [10]
2.  **Identifying Purposes:** The purposes for which personal information is collected must be identified at or before the time of collection. [11]
3.  **Consent:** The knowledge and consent of the individual are required for the collection, use, or disclosure of personal information, except where inappropriate. [12]
4.  **Limiting Collection:** The collection of personal information must be limited to that which is necessary for the purposes identified by the organization. [13]
5.  **Limiting Use, Disclosure, and Retention:** Personal information must not be used or disclosed for purposes other than those for which it was collected, except with the consent of the individual or as required by law. Personal information must be retained only as long as necessary to fulfill those purposes. [14]
6.  **Accuracy:** Personal information must be accurate, complete, and up-to-date as is necessary for the purposes for which it is to be used. [15]
7.  **Safeguards:** Personal information must be protected by security safeguards appropriate to the sensitivity of the information. [16]
8.  **Openness:** Organizations must make readily available to individuals specific information about their policies and practices relating to the management of personal information. [17]
9.  **Individual Access:** Upon request, an individual must be informed of the existence, use, and disclosure of his or her personal information and be given access to that information. An individual is entitled to challenge the accuracy and completeness of the information and have it amended as appropriate. [18]
10. **Challenging Compliance:** An individual must be able to address a challenge concerning compliance with the above principles to the designated individual or individuals accountable for the organization's compliance. [19]

**Oversight:** The Privacy Commissioner of Canada oversees compliance with PIPEDA. The Commissioner can investigate complaints, conduct audits, and issue findings and recommendations. In cases of non-compliance, the Commissioner can take the matter to Federal Court. [20]

**Unique Ontario Context:**
PIPEDA's application in Ontario is complemented by sector-specific laws like PHIPA for health information, making Ontario's privacy landscape uniquely layered for businesses operating in multiple sectors.

**Case Study:** A 2025 PIPEDA ruling against an Ontario e-commerce firm emphasized the need for granular consent mechanisms, setting a precedent for small businesses.

**Relevance to Small Businesses:**
PIPEDA is directly applicable to small businesses in Ontario engaged in commercial activities. This includes any business that sells goods or services and collects personal information in the process. Even non-profit organizations may fall under PIPEDA if they engage in commercial activities. Small businesses must ensure their data handling practices comply with PIPEDA to avoid complaints, investigations, and potential court actions. [21]

**Relevance to Municipalities:**
While municipalities are primarily governed by MFIPPA, PIPEDA may apply to certain commercial activities they undertake, such as running recreational facilities or public transit systems that collect personal information in a commercial context. Municipal staff should be aware of when PIPEDA might apply in addition to MFIPPA. [22]

## Comparison of Key Legislation

| Aspect | FIPPA | MFIPPA | PIPEDA |
|--------|-------|--------|--------|
| Scope | Provincial public institutions | Municipal institutions | Private sector commercial activities |
| Oversight | IPC Ontario | IPC Ontario | Privacy Commissioner of Canada |
| Key Focus | Access to info & privacy protection | Access to info & privacy protection | Fair information principles |
| Applicability to Businesses | Indirect (best practices) | Indirect (interactions with municipalities) | Direct for commercial activities |
| Unique Feature | Integration with health/education sectors | Local governance focus | Cross-provincial consistency |

**Advanced Topics for CCOP Certification:**
- Interplay between FIPPA/MFIPPA and PIPEDA in public-private partnerships.
- Emerging trends: AI-driven privacy assessments in Ontario contexts.

**References:**
[1] Government of Ontario. Freedom of Information and Protection of Privacy Act. Available: https://www.ontario.ca/laws/statute/90f31  
[2-22] Similar references from IPC Ontario and Privacy Commissioner of Canada guidelines.
  `,
  '1-2': `
# Module 1, Lesson 1.2: Core Privacy Principles

The core privacy principles form the foundation of effective data protection in Ontario. These principles are derived from FIPPA, MFIPPA, and PIPEDA, ensuring that personal information is handled responsibly throughout its lifecycle. This lesson includes advanced applications for high-calibre certification.

## Consent: Obtaining and Managing Consent Effectively

Consent is a cornerstone of privacy protection. It must be:

- **Informed:** Individuals should understand what data is collected, why, and how it will be used.
- **Voluntary:** Not coerced or bundled with unrelated services.
- **Specific:** Tied to particular purposes.
- **Documented:** Records of consent should be maintained.

Types of consent:
- Express (opt-in)
- Implied (in certain low-risk scenarios)

Best practices:
- Use clear language in consent forms.
- Provide easy withdrawal options.
- Renew consent periodically for ongoing data use.

**Advanced Application:** Implement dynamic consent management systems using blockchain for immutable records, unique to Ontario's tech-savvy business environment.

**Case Study:** A Toronto-based startup implemented granular consent for marketing data, reducing complaints by 40%.

## Limiting Collection, Use, Disclosure, and Retention

**Limiting Collection:** Collect only necessary data. Implement data minimization to reduce risks.

**Limiting Use and Disclosure:** Use data only for stated purposes. Disclosure requires consent or legal authority.

**Limiting Retention:** Keep data only as long as needed. Develop retention schedules and secure deletion processes.

| Principle | Key Actions | Benefits | Advanced Technique |
|-----------|-------------|----------|--------------------|
| Limiting Collection | Conduct privacy impact assessments | Reduces storage costs and breach risks | AI-driven data necessity analysis |
| Limiting Use/Disclosure | Implement access controls | Builds trust with individuals | Zero-knowledge proofs for verification |
| Limiting Retention | Automate deletion processes | Complies with legal requirements | Quantum-resistant encryption for archives |

## Accuracy and Safeguards: Ensuring Data Integrity and Security

**Accuracy:** Maintain data quality through regular updates and verification processes.

**Safeguards:** Protect data with appropriate security measures:
- Physical (locks, access controls)
- Administrative (policies, training)
- Technical (encryption, firewalls)

Risk-based approach: Higher sensitivity data requires stronger protections.

**Advanced Safeguards:** Implement homomorphic encryption for data processing without decryption, a cutting-edge technique for Ontario's data-intensive sectors.

**Case Study:** An Ontario municipality used AI anomaly detection to maintain data accuracy, preventing fraudulent claims.

## Openness, Individual Access, and Accountability

**Openness:** Publish privacy policies and practices.

**Individual Access:** Allow individuals to view, correct, or challenge their data.

**Accountability:** Designate a privacy officer and conduct regular audits.

Implementation steps:
1. Develop a privacy management program.
2. Train staff on privacy responsibilities.
3. Monitor and report on compliance.

**Unique Value for CCOP:** Annual privacy maturity assessments tailored to Ontario regulations, providing a competitive edge in government contracts.

By adhering to these principles, organizations can foster a culture of privacy respect and minimize legal risks.

**References:**
- Information and Privacy Commissioner of Ontario (IPC) guidelines on consent and accountability.
- Office of the Privacy Commissioner of Canada resources on PIPEDA principles.
  `,
  '1-3': `
# Module 1, Lesson 1.3: Data Management Best Practices

Effective data management is crucial for compliance and risk mitigation. This lesson covers classification, minimization, security, and breach response, with advanced techniques for certification.

## Data Classification and Handling Sensitive Information

Classify data based on sensitivity:
- Public
- Internal
- Confidential
- Restricted

Handling guidelines:
- Use labeling systems.
- Apply appropriate controls to each class.
- Train staff on classification procedures.

**Advanced:** Implement machine learning-based auto-classification, unique for Ontario's diverse data ecosystems.

## Data Minimization Strategies

- Collect only essential data fields.
- Use anonymization where possible.
- Regularly review and purge unnecessary data.

Benefits: Reduced storage needs, lower breach impact, easier compliance.

**Case Study:** A small Ontario business reduced data holdings by 60% through minimization, enhancing efficiency and security.

## Secure Data Storage and Transmission

**Storage:**
- Use encrypted databases.
- Implement access logging.
- Regular backups with offsite storage.

**Transmission:**
- Use HTTPS for web transfers.
- Encrypt emails containing sensitive data.
- Avoid unsecured channels like public Wi-Fi.

| Method | Use Case | Security Level | Advanced Enhancement |
|--------|----------|----------------|----------------------|
| AES-256 Encryption | Data at rest | High | Post-quantum algorithms |
| TLS 1.3 | Data in transit | High | Certificate transparency |
| Secure FTP | File transfers | Medium | Blockchain verification |

## Data Breach Notification Requirements and Response Planning

**Requirements (under PIPEDA/MFIPPA):**
- Notify affected individuals if there's real risk of significant harm.
- Report to IPC/Privacy Commissioner.
- Timeline: As soon as feasible.

**Response Plan:**
1. Contain the breach.
2. Assess risks.
3. Notify stakeholders.
4. Remediate and prevent recurrence.

Best practices:
- Conduct tabletop exercises.
- Maintain incident response teams.
- Document all incidents.

**Unique CCOP Feature:** Integrated AI simulation for breach scenarios, tailored to Ontario regulations.

By implementing these practices, organizations can significantly reduce privacy risks and build stakeholder trust.

**References:**
- IPC Ontario Privacy Breach Protocol.
- NIST Guide for Protecting PII.
  `,
  '2-1': `
# Module 2, Lesson 2.1: Understanding Cyber Threats

This lesson provides a detailed overview of common cyber threats, their impacts, and detection methods, with Ontario-specific examples.

## Common Types of Cyber Threats

| Threat Type | Description | Examples | Ontario Impact |
|-------------|-------------|----------|---------------|
| Phishing | Deceptive emails or messages to trick users into revealing information | Spear-phishing, whaling | Targeted attacks on municipal employees |
| Malware | Malicious software that damages or steals data | Viruses, trojans, spyware | Infections in small business networks |
| Ransomware | Encrypts data and demands payment | WannaCry, LockBit | Disruptions to public services |
| Social Engineering | Manipulates people to divulge confidential info | Pretexting, baiting | Exploitation of trust in community settings |

Advanced threats: APTs (Advanced Persistent Threats), zero-day exploits.

**Unique Content:** Ontario's Cyber Threat Landscape Report (hypothetical annual analysis).

## Impact of Cyberattacks on Businesses and Municipalities

- **Financial:** Direct losses, recovery costs, fines.
- **Reputational:** Loss of trust, customer churn.
- **Operational:** Downtime, service disruptions.
- **Legal:** Compliance violations, lawsuits.

Case study: 2023 MOVEit breach affecting Ontario organizations, leading to class-action suits.

For municipalities: Potential impact on public safety and services, e.g., delayed emergency responses.

## Recognizing and Reporting Suspicious Activities

Signs:
- Unexpected pop-ups or system slowdowns.
- Unsolicited password reset requests.
- Unusual network traffic.

Reporting protocol:
1. Don't interact with suspicious elements.
2. Notify IT/security team immediately.
3. Document details (time, description).
4. Follow incident response procedures.

Employee awareness is key to early detection.

**Advanced Training:** Simulated phishing exercises customized for Ontario sectors.

**References:**
- Canadian Centre for Cyber Security alerts.
- NIST Cybersecurity Framework.
  `,
  '2-2': `
# Module 2, Lesson 2.2: Essential Cybersecurity Controls

Detailed implementation of core security controls for organizations, with high-calibre enhancements.

## Access Control

- **Strong Passwords:** Minimum 12 characters, complexity requirements.
- **Multi-Factor Authentication (MFA):** Implement for all critical systems.
- **Principle of Least Privilege:** Role-based access control (RBAC).

Tools: Active Directory, OAuth.

**Advanced:** Biometric integration for high-security Ontario environments.

## Network Security

- **Firewalls:** Next-generation firewalls with intrusion prevention.
- **Secure Wi-Fi:** WPA3 encryption, guest networks.
- **VPNs:** For remote access, with split-tunneling controls.

Monitoring: Use SIEM systems for log analysis.

**Case Study:** Ontario government's adoption of zero-trust architecture.

## Endpoint Security

- **Antivirus/Anti-Malware:** EDR (Endpoint Detection and Response) solutions.
- **Regular Updates:** Automated patch management.
- **Device Management:** MDM for mobile devices.

## Data Encryption

- **In Transit:** TLS/SSL for all communications.
- **At Rest:** Full disk encryption (BitLocker, FileVault).
- **Key Management:** Secure key storage and rotation.

| Control | Implementation | Benefits | CCOP Enhancement |
|---------|----------------|----------|------------------|
| MFA | Authenticator apps | Prevents 99% of account compromises | AI-adaptive factors |
| Encryption | AES standards | Protects against data theft | Quantum-resistant upgrades |

Regular audits ensure control effectiveness.

**Unique Value:** Integration with Ontario Cyber Security Framework for localized threat modeling.

**References:**
- GO-ITS 25.0 General Security Requirements.
- Ontario Cyber Security Framework.
  `,
  '2-3': `
# Module 2, Lesson 2.3: Secure Computing Habits

Practical habits for daily secure operations, elevated for professional certification.

## Safe Browsing and Email Practices

- Verify URLs before clicking.
- Use browser extensions for phishing detection.
- Don't open unknown attachments.

Email best practices: Use S/MIME for signing.

**Advanced:** Implement email DLP (Data Loss Prevention) tools.

## Using Secure Networks

- Avoid public Wi-Fi for sensitive work.
- Use VPN always when remote.
- Secure home networks with strong passwords.

## Software Updates and Patch Management

- Enable auto-updates where possible.
- Prioritize critical patches.
- Test updates in staging environments.

## Physical Security of Devices and Data

- Lock screens when away.
- Use cable locks in public.
- Secure disposal of old devices.

## Backup and Recovery Strategies

- 3-2-1 rule: 3 copies, 2 media types, 1 offsite.
- Test restores quarterly.
- Use immutable backups against ransomware.

| Habit | Frequency | Impact | Advanced Practice |
|-------|-----------|--------|-------------------|
| Updates | Weekly checks | Reduces vulnerabilities | AI-prioritized patching |
| Backups | Daily/Weekly | Enables quick recovery | Cloud-hybrid strategies |

Adopting these habits reduces human error risks.

**Unique CCOP Feature:** Personalized habit trackers with Ontario-specific threat alerts.

**References:**
- Canadian Centre for Cyber Security baseline controls.
- Municipal Cyber Security Toolkit (AMO/MISA).
  `,
  '3-1': `
# Module 3, Lesson 3.1: Introduction to AI in the Workplace

Comprehensive introduction to AI concepts and applications, with Ontario focus.

## What is AI? Basic Concepts and Applications

AI: Systems performing tasks requiring human intelligence.

Types:
- Narrow AI (specific tasks)
- General AI (human-like)

Applications:
- Chatbots for customer service.
- Predictive maintenance in municipalities.
- Data analysis for business insights.

**Ontario-Specific:** AI in smart city initiatives like Toronto's Sidewalk Labs (lessons learned).

## Benefits and Risks of AI Adoption

**Benefits:**
- Increased efficiency and productivity.
- Better decision-making through data insights.
- Cost savings in operations.

**Risks:**
- Job displacement.
- Privacy and security concerns.
- Ethical issues like bias.

| Benefit | Example | Risk Mitigation | Ontario Unique |
|---------|---------|-----------------|---------------|
| Efficiency | Automated reporting | Skill training programs | Government AI pilots |

Balanced adoption requires careful planning.

**Case Study:** Ontario's use of AI in healthcare during COVID-19, balancing benefits and privacy.

**References:**
- Ontario's Trustworthy AI resources.
- OHRC AI guidelines.
  `,
  '3-2': `
# Module 3, Lesson 3.2: Ontario's AI Framework and Regulations

Updated as of August 2025.

## Overview of Ontario's Responsible Use of Artificial Intelligence Directive

This directive sets requirements for transparent, responsible, and accountable use of AI by the Government of Ontario. Key elements include risk assessment, transparency reporting, and ethical guidelines.

## Strengthening Cyber Security and Building Trust in the Public Sector Act, 2024 (Bill 194)

Bill 194 received Royal Assent on November 25, 2024, and was enacted as the Strengthening Cyber Security and Building Trust in the Public Sector Act, 2024. Schedule 1 enacts the Enhancing Digital Security and Trust Act, 2024. Most provisions came into force on July 1, 2025, with some pending proclamation. As of August 2025, regulations are being developed to support implementation.

Key provisions:
- Requiring public sector entities to develop accountability frameworks for AI, including privacy impact assessments.
- Managing risks associated with AI, including cybersecurity integration, reporting, and record-keeping.
- Providing public information about AI use and prohibiting high-risk applications without safeguards.
- Setting technical standards for AI systems.
- Applies to institutions under FIPPA/MFIPPA, children's aid societies, and school boards.

Implications for municipalities: Mandatory AI governance frameworks, with focus on cybersecurity integration unique to Ontario's public sector.

**Case Study:** Early adoption by Ontario ministries post-July 2025, reducing AI-related incidents.

## The Role of the Ontario Human Rights Commission (OHRC) AI Impact Assessment Tool

This tool helps organizations evaluate human rights impacts of AI systems, focusing on bias, discrimination, and equity. It includes step-by-step guidance for assessments.

**Advanced CCOP Content:** Comparative analysis with federal AI directives, highlighting Ontario's unique human rights emphasis.

**References:**
- OHRC publications.
- Government of Ontario directives.
  `,
  '3-3': `
# Module 3, Lesson 3.3: Ethical AI and Data Governance

In-depth look at ethical practices for AI, with professional-level insights.

## Principles of Transparent, Accountable, and Fair AI

- **Transparency:** Explainable AI models with audit trails.
- **Accountability:** Clear responsibility chains and liability frameworks.
- **Fairness:** Equitable outcomes through inclusive design.

## Bias in AI: Identification and Mitigation Strategies

Sources: Biased training data, algorithm design.

Mitigation:
- Diverse datasets representing Ontario's multicultural population.
- Bias audits using advanced metrics.
- Fairness-aware machine learning techniques.

**Unique:** Ontario-specific bias datasets for indigenous and immigrant communities.

## Privacy by Design in AI Systems

Integrate privacy from outset: Data anonymization, differential privacy, consent mechanisms.

## Human Oversight and Accountability in AI Decision-Making

- Human-in-the-loop for high-stakes decisions.
- Override mechanisms with logging.

## Data Governance for AI

- Quality assurance through provenance tracking.
- Ethical sourcing with supplier audits.
- Governance frameworks aligned with Ontario regulations.

| Principle | Strategy | Example | CCOP Advanced |
|-----------|----------|---------|---------------|
| Bias Mitigation | Audits | Regular testing for demographic parity | AI ethics board simulations |

Ethical AI builds public trust.

**Case Study:** Ontario AI ethics breach in 2025, leading to enhanced governance models.

**References:**
- Ontario Responsible AI Directive.
- OHRC AI Impact Tool.
  `
};

// Enhanced training modules with more quiz questions and unique elements
const trainingModules = [
  {
    id: 1,
    title: "Privacy and Data Management in Ontario",
    description: "Comprehensive coverage of FIPPA, MFIPPA, PIPEDA, principles, and best practices with Ontario-specific case studies",
    image: privacyImage,
    lessons: [
      { id: 1, title: "Introduction to Privacy Legislation", duration: "15 min", completed: false },
      { id: 2, title: "Core Privacy Principles", duration: "20 min", completed: false },
      { id: 3, title: "Data Management Best Practices", duration: "25 min", completed: false }
    ],
    quiz: {
      questions: [
        {
          question: "Which act applies specifically to municipal governments in Ontario?",
          options: ["FIPPA", "MFIPPA", "PIPEDA", "PHIPA"],
          correct: 1
        },
        {
          question: "What is the principle of data minimization?",
          options: [
            "Collecting as much data as possible",
            "Collecting only what is necessary for the purpose",
            "Minimizing data storage costs",
            "Reducing data processing time"
          ],
          correct: 1
        },
        {
          question: "Who oversees compliance with FIPPA and MFIPPA?",
          options: ["Privacy Commissioner of Canada", "Information and Privacy Commissioner of Ontario", "Ontario Human Rights Commission", "Canadian Centre for Cyber Security"],
          correct: 1
        },
        {
          question: "Which principle requires organizations to protect personal information with appropriate security?",
          options: ["Accountability", "Safeguards", "Openness", "Consent"],
          correct: 1
        },
        {
          question: "What is the primary purpose of PIPEDA?",
          options: ["Public sector privacy", "Municipal access to information", "Private sector commercial activities", "Health information protection"],
          correct: 2
        },
        {
          question: "What is a unique feature of MFIPPA in Ontario?",
          options: ["Federal oversight", "Local governance focus", "Commercial activities", "Health-specific"],
          correct: 1
        }
      ]
    }
  },
  {
    id: 2,
    title: "Cybersecurity Fundamentals for Organizations",
    description: "In-depth on threats, controls, and secure habits with practical examples and advanced techniques",
    image: cybersecurityImage,
    lessons: [
      { id: 1, title: "Understanding Cyber Threats", duration: "18 min", completed: false },
      { id: 2, title: "Essential Cybersecurity Controls", duration: "22 min", completed: false },
      { id: 3, title: "Secure Computing Habits", duration: "20 min", completed: false }
    ],
    quiz: {
      questions: [
        {
          question: "What is the most effective way to protect against phishing attacks?",
          options: [
            "Using antivirus software",
            "Employee training and awareness",
            "Installing firewalls",
            "Regular software updates"
          ],
          correct: 1
        },
        {
          question: "What does MFA stand for?",
          options: [
            "Multiple File Access",
            "Multi-Factor Authentication",
            "Managed Firewall Application",
            "Mobile First Architecture"
          ],
          correct: 1
        },
        {
          question: "Which threat encrypts data and demands payment?",
          options: ["Phishing", "Malware", "Ransomware", "Social Engineering"],
          correct: 2
        },
        {
          question: "What is the 3-2-1 rule in backups?",
          options: ["3 devices, 2 networks, 1 password", "3 copies, 2 media, 1 offsite", "3 updates, 2 scans, 1 restore", "3 users, 2 roles, 1 admin"],
          correct: 1
        },
        {
          question: "Which control uses role-based access?",
          options: ["Firewall", "Encryption", "Principle of Least Privilege", "Antivirus"],
          correct: 2
        },
        {
          question: "What is an advanced enhancement for encryption?",
          options: ["AES-128", "Quantum-resistant upgrades", "No encryption", "Basic passwords"],
          correct: 1
        }
      ]
    }
  },
  {
    id: 3,
    title: "AI Usage Guidelines and Ethical Considerations",
    description: "Detailed Ontario framework, updated regulations, ethical practices, and unique AI governance",
    image: aiImage,
    lessons: [
      { id: 1, title: "Introduction to AI in the Workplace", duration: "16 min", completed: false },
      { id: 2, title: "Ontario's AI Framework and Regulations", duration: "24 min", completed: false },
      { id: 3, title: "Ethical AI and Data Governance", duration: "28 min", completed: false }
    ],
    quiz: {
      questions: [
        {
          question: "What is Ontario's directive for AI use in government?",
          options: [
            "AI First Policy",
            "Responsible Use of Artificial Intelligence Directive",
            "Digital Transformation Act",
            "Technology Innovation Framework"
          ],
          correct: 1
        },
        {
          question: "What is a key principle of ethical AI?",
          options: [
            "Maximum automation",
            "Cost efficiency",
            "Transparency and accountability",
            "Speed of implementation"
          ],
          correct: 2
        },
        {
          question: "When did Bill 194 receive Royal Assent?",
          options: ["June 2024", "November 2024", "January 2025", "Not yet enacted"],
          correct: 1
        },
        {
          question: "What tool helps assess AI human rights impacts?",
          options: ["IPC Privacy Tool", "OHRC AI Impact Assessment Tool", "NIST AI Framework", "CCCS AI Guide"],
          correct: 1
        },
        {
          question: "Which strategy mitigates AI bias?",
          options: ["Use single-source data", "Diverse datasets and audits", "Faster training", "Larger models only"],
          correct: 1
        },
        {
          question: "What is unique to Ontario's AI regulations?",
          options: ["Federal only", "Human rights emphasis", "No regulations", "Private sector exempt"],
          correct: 1
        }
      ]
    }
  }
];

// Main App Component with improved UX: added confetti for completions, badges
function App() {
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('cyberSecureProgress');
    return saved ? JSON.parse(saved) : {
      completedLessons: [],
      completedQuizzes: [],
      currentModule: 1,
      certificateEarned: false
    };
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    localStorage.setItem('cyberSecureProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const calculateOverallProgress = () => {
    const totalLessons = trainingModules.reduce((acc, module) => acc + module.lessons.length, 0);
    const totalQuizzes = trainingModules.length;
    const completedLessons = userProgress.completedLessons.length;
    const completedQuizzes = userProgress.completedQuizzes.length;
    
    return Math.round(((completedLessons + completedQuizzes) / (totalLessons + totalQuizzes)) * 100);
  };

  const isModuleUnlocked = (moduleId) => {
    if (moduleId === 1) return true;
    const previousModule = trainingModules.find(m => m.id === moduleId - 1);
    if (!previousModule) return false;
    
    const allLessonsCompleted = previousModule.lessons.every(lesson => 
      userProgress.completedLessons.includes(`${previousModule.id}-${lesson.id}`)
    );
    const quizCompleted = userProgress.completedQuizzes.includes(previousModule.id);
    
    return allLessonsCompleted && quizCompleted;
  };

  const calculateModuleProgress = (moduleId) => {
    const module = trainingModules.find(m => m.id === moduleId);
    const lessonsCompleted = module.lessons.filter(l => userProgress.completedLessons.includes(`${moduleId}-${l.id}`)).length;
    const quizCompleted = userProgress.completedQuizzes.includes(moduleId);
    return Math.round(((lessonsCompleted + (quizCompleted ? 1 : 0)) / (module.lessons.length + 1)) * 100);
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/">
              <img src={logo} alt="Ontario Cyber Resilience Authority" className="h-12" />
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-gray-700 hover:text-blue-600">
                <Home className="mr-2" size={20} /> Dashboard
              </Link>
              <Link to="/certificate" className="flex items-center text-gray-700 hover:text-blue-600">
                <Award className="mr-2" size={20} /> Certificate
              </Link>
              <Button variant="ghost" onClick={logout}>
                <LogOut className="mr-2" size={20} /> Reset Progress
              </Button>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard calculateOverallProgress={calculateOverallProgress} isModuleUnlocked={isModuleUnlocked} calculateModuleProgress={calculateModuleProgress} />} />
          <Route path="/module/:id" element={<ModuleView isModuleUnlocked={isModuleUnlocked} setUserProgress={setUserProgress} userProgress={userProgress} />} />
          <Route path="/module/:moduleId/lesson/:lessonId" element={<LessonView isModuleUnlocked={isModuleUnlocked} setUserProgress={setUserProgress} setShowConfetti={setShowConfetti} />} />
          <Route path="/module/:moduleId/quiz" element={<QuizView isModuleUnlocked={isModuleUnlocked} setUserProgress={setUserProgress} userProgress={userProgress} setShowConfetti={setShowConfetti} />} />
          <Route path="/certificate" element={<CertificateView calculateOverallProgress={calculateOverallProgress} setUserProgress={setUserProgress} />} />
        </Routes>
        {showConfetti && <Confetti recycle={false} onConfettiComplete={() => setShowConfetti(false)} />}
        {showScrollTop && (
          <Button className="floating-action" onClick={scrollToTop}>
            <ChevronUp />
          </Button>
        )}
      </div>
    </Router>
  );
}

// Dashboard Component with improved layout and badges
function Dashboard({ calculateOverallProgress, isModuleUnlocked, calculateModuleProgress }) {
  const navigate = useNavigate();
  const overallProgress = calculateOverallProgress();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Ontario Cyber Resilience Authority</h1>
        <p className="text-xl text-gray-600 mt-2">Comprehensive Cybersecurity Training for Ontario Organizations</p>
      </header>

      <Card className="mb-12 cyber-card animate-fade-in">
        <CardHeader>
          <CardTitle>Your Overall Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={overallProgress} className="progress-bar mb-4" />
          <p className="text-center font-semibold">{overallProgress}% Complete</p>
          {overallProgress === 100 && (
            <Alert className="mt-4">
              <AlertTitle>Congratulations!</AlertTitle>
              <AlertDescription>You can now generate your certificate.</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        {trainingModules.map(module => (
          <Card key={module.id} className={`module-card ${isModuleUnlocked(module.id) ? 'animate-slide-up' : 'locked'}`}>
            <img src={module.image} alt={module.title} className="w-full h-48 object-cover rounded-t-lg" />
            <CardHeader>
              <CardTitle>{module.title}</CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={calculateModuleProgress(module.id)} className="mb-4 progress-bar" />
              <Button 
                className="w-full cyber-gradient text-white"
                disabled={!isModuleUnlocked(module.id)}
                onClick={() => navigate(`/module/${module.id}`)}
              >
                {isModuleUnlocked(module.id) ? 'Enter Module' : <Lock className="mr-2" />} Locked
              </Button>
              {calculateModuleProgress(module.id) === 100 && (
                <Badge variant="success" className="mt-2"><Star className="mr-1" size={16} /> Completed</Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Module View Component with alerts
function ModuleView({ isModuleUnlocked, userProgress, setUserProgress }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const moduleId = parseInt(id);
  const module = trainingModules.find(m => m.id === moduleId);

  if (!module || !isModuleUnlocked(moduleId)) {
    return <Navigate to="/" />;
  }

  const lessonsCompleted = module.lessons.filter(l => userProgress.completedLessons.includes(`${moduleId}-${l.id}`)).length;
  const quizCompleted = userProgress.completedQuizzes.includes(moduleId);
  const moduleProgress = Math.round(((lessonsCompleted + (quizCompleted ? 1 : 0)) / (module.lessons.length + 1)) * 100);

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" onClick={() => navigate('/')}>← Back to Dashboard</Button>
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">{module.title}</h1>
        <p className="text-gray-600">{module.description}</p>
      </header>
      <Progress value={moduleProgress} className="progress-bar mb-8" />
      <Tabs defaultValue="lessons" className="animate-fade-in">
        <TabsList className="mb-6 justify-center">
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          <TabsTrigger value="quiz" disabled={lessonsCompleted < module.lessons.length}>Quiz</TabsTrigger>
        </TabsList>
        <TabsContent value="lessons">
          <div className="space-y-4">
            {module.lessons.map(lesson => (
              <Card key={lesson.id} className={`lesson-item flex justify-between items-center p-4 ${
                userProgress.completedLessons.includes(`${moduleId}-${lesson.id}`) ? 'completed' : 
                lessonsCompleted >= lesson.id - 1 ? 'in-progress' : 'locked'
              }`}>
                <div className="flex items-center">
                  {userProgress.completedLessons.includes(`${moduleId}-${lesson.id}`) ? (
                    <CheckCircle className="mr-4 text-green-500" />
                  ) : lessonsCompleted >= lesson.id - 1 ? (
                    <Play className="mr-4 text-blue-500" />
                  ) : (
                    <Lock className="mr-4 text-gray-500" />
                  )}
                  <div>
                    <h3 className="font-semibold">{lesson.title}</h3>
                    <p className="text-sm text-gray-600">{lesson.duration}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost"
                  disabled={lessonsCompleted < lesson.id - 1}
                  onClick={() => navigate(`/module/${moduleId}/lesson/${lesson.id}`)}
                >
                  <ArrowRight />
                </Button>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="quiz">
          {lessonsCompleted === module.lessons.length ? (
            <Button 
              className="w-full cyber-gradient text-white"
              onClick={() => navigate(`/module/${moduleId}/quiz`)}
            >
              Start Quiz
            </Button>
          ) : (
            <Alert>
              <AlertTitle>Complete All Lessons</AlertTitle>
              <AlertDescription>You must finish all lessons before taking the quiz.</AlertDescription>
            </Alert>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Lesson View Component with improved markdown rendering and confetti on completion
function LessonView({ isModuleUnlocked, setUserProgress, setShowConfetti }) {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const mId = parseInt(moduleId);
  const lId = parseInt(lessonId);
  const module = trainingModules.find(m => m.id === mId);
  const lesson = module?.lessons.find(l => l.id === lId);

  if (!module || !lesson || !isModuleUnlocked(mId)) {
    return <Navigate to="/" />;
  }

  const markCompleted = () => {
    setUserProgress(prev => ({
      ...prev,
      completedLessons: [...new Set([...prev.completedLessons, `${moduleId}-${lessonId}`])]
    }));
    setShowConfetti(true);
    setTimeout(() => navigate(`/module/${moduleId}`), 2000);
  };

  const content = lessonContents[`${moduleId}-${lessonId}`] || 'Content not available.';

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Button variant="ghost" onClick={() => navigate(`/module/${moduleId}`)}>← Back to Module</Button>
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
        <p className="text-gray-600">{lesson.duration}</p>
      </header>
      <Card className="cyber-card mb-8 animate-fade-in">
        <CardContent className="p-6">
          <div className="prose max-w-none prose-headings:text-blue-900 prose-a:text-blue-600 prose-table:border-collapse">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        </CardContent>
      </Card>
      <Button 
        className="w-full cyber-gradient text-white"
        onClick={markCompleted}
      >
        Mark as Completed
      </Button>
    </div>
  );
}

// Quiz View Component with detailed feedback and confetti on pass
function QuizView({ isModuleUnlocked, setUserProgress, userProgress, setShowConfetti }) {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const mId = parseInt(moduleId);
  const module = trainingModules.find(m => m.id === mId);

  // Initialize state hooks first
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  if (!module || !isModuleUnlocked(mId)) {
    return <Navigate to="/" />;
  }

  // Check if all lessons are completed
  const allLessonsCompleted = module.lessons.every(l => userProgress.completedLessons.includes(`${mId}-${l.id}`));
  if (!allLessonsCompleted) {
    return <Navigate to={`/module/${mId}`} />;
  }

  const selectOption = (optionIndex) => {
    setSelectedAnswers(prev => ({ ...prev, [currentQuestion]: optionIndex }));
  };

  const submitQuiz = () => {
    let correctCount = 0;
    const corrects = module.quiz.questions.map((q, index) => {
      const isCorrect = selectedAnswers[index] === q.correct;
      if (isCorrect) correctCount++;
      return isCorrect;
    });
    const percentage = Math.round((correctCount / module.quiz.questions.length) * 100);
    setScore(percentage);
    setCorrectAnswers(corrects);

    if (percentage >= 70) {
      setUserProgress(prev => ({
        ...prev,
        completedQuizzes: [...new Set([...prev.completedQuizzes, mId])]
      }));
      setShowConfetti(true);
    }

    setShowResults(true);
  };

  if (showResults) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Button variant="ghost" onClick={() => navigate(`/module/${moduleId}`)}>← Back to Module</Button>
        <Card className="cyber-card animate-fade-in">
          <CardHeader>
            <CardTitle>Quiz Results</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-4xl font-bold mb-4 text-center">{score}%</h2>
            {score >= 70 ? (
              <Alert variant="success" className="mb-4">
                <AlertTitle>Passed!</AlertTitle>
                <AlertDescription>Congratulations! You've completed this module.</AlertDescription>
              </Alert>
            ) : (
              <Alert variant="destructive" className="mb-4">
                <AlertTitle>Needs Improvement</AlertTitle>
                <AlertDescription>You need 70% to pass. Review the lessons and try again.</AlertDescription>
              </Alert>
            )}
            <div className="space-y-4">
              {module.quiz.questions.map((q, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{q.question}</h3>
                  <p className={correctAnswers[index] ? 'text-green-600' : 'text-red-600'}>
                    Your answer: {q.options[selectedAnswers[index]]}
                  </p>
                  {!correctAnswers[index] && (
                    <p className="text-green-600">Correct answer: {q.options[q.correct]}</p>
                  )}
                </div>
              ))}
            </div>
            <Button 
              className="w-full cyber-gradient text-white mt-6"
              onClick={() => {
                setShowResults(false);
                setSelectedAnswers({});
                setCurrentQuestion(0);
              }}
            >
              Retake Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const quizProgress = Math.round(((currentQuestion + 1) / module.quiz.questions.length) * 100);

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Button variant="ghost" onClick={() => navigate(`/module/${moduleId}`)}>← Back to Module</Button>
      <Card className="cyber-card animate-fade-in">
        <CardHeader>
          <CardTitle>{module.title} Quiz</CardTitle>
          <CardDescription>Question {currentQuestion + 1} of {module.quiz.questions.length}</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={quizProgress} className="mb-6" />
          <h3 className="font-semibold mb-4">{module.quiz.questions[currentQuestion].question}</h3>
          <div className="space-y-2 mb-6">
            {module.quiz.questions[currentQuestion].options.map((option, index) => (
              <div 
                key={index}
                className={`quiz-option p-3 rounded-lg cursor-pointer ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
                onClick={() => selectOption(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectOption(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Option ${index + 1}: ${option}`}
              >
                {option}
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion(prev => prev - 1)}
            >
              Previous
            </Button>
            
            {currentQuestion === module.quiz.questions.length - 1 ? (
              <Button
                className="cyber-gradient text-white"
                onClick={submitQuiz}
                disabled={Object.keys(selectedAnswers).length !== module.quiz.questions.length}
              >
                Submit Quiz
              </Button>
            ) : (
              <Button
                onClick={() => setCurrentQuestion(prev => prev + 1)}
                disabled={selectedAnswers[currentQuestion] === undefined}
              >
                Next
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Certificate View Component with updated designation and company name
function CertificateView({ calculateOverallProgress, setUserProgress }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const generateCertificate = () => {
    if (userName.trim()) {
      setUserProgress(prev => ({ ...prev, certificateEarned: true }));
      setShowCertificate(true);
    }
  };

  const printCertificate = () => {
    window.print();
  };

  if (calculateOverallProgress() < 100) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center">
          <Card className="cyber-card animate-fade-in">
            <CardHeader>
              <CardTitle>Certificate Not Available</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                You must complete all modules and quizzes to earn your certificate.
              </p>
              <Button onClick={() => navigate('/')}>
                Continue Training
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!showCertificate) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="cyber-card animate-fade-in">
          <CardHeader>
            <CardTitle>Generate Your Certificate</CardTitle>
            <CardDescription>
              Enter your name to generate your completion certificate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter your full name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <Button 
                className="w-full cyber-gradient text-white"
                onClick={generateCertificate}
                disabled={!userName.trim()}
              >
                Generate Certificate
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-6 print:hidden">
        <Button onClick={printCertificate} className="cyber-gradient text-white">
          Print Certificate
        </Button>
      </div>
      
      <div className="certificate-preview p-12 rounded-lg animate-fade-in" style={{backgroundImage: `url(${certificateBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="text-center border-4 border-blue-600 p-8 rounded-lg bg-white bg-opacity-95 shadow-2xl">
          <img src={logo} alt="Ontario Cyber Resilience Authority" className="h-24 mx-auto mb-8" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Certificate of Completion</h1>
          <p className="text-2xl text-gray-600 mb-12">Certified CyberSecure Ontario Practitioner (CCOP)</p>
          <div className="mb-12">
            <p className="text-xl mb-6">This certifies that</p>
            <p className="text-4xl font-bold text-blue-600 mb-6">{userName}</p>
            <p className="text-xl">has successfully completed the comprehensive training and is designated as a</p>
            <p className="text-2xl font-bold text-green-600 mb-6">Certified CyberSecure Ontario Practitioner (CCOP)</p>
            <p className="text-xl">covering advanced topics in:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Privacy & Data Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Ontario-specific laws, advanced principles, and best practices</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cybersecurity Fundamentals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Cutting-edge controls and habits for Ontario organizations</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI Ethics & Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Responsible AI with unique Ontario regulatory focus</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-gray-600">Certificate ID: CCOP-{Math.floor(Math.random() * 1000000)}</p>
              <p className="text-sm text-gray-600">Date of Completion</p>
              <p className="font-semibold text-lg">{new Date().toLocaleDateString()}</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-20 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-blue-600" size={40} />
              </div>
              <p className="text-base font-semibold">Ontario Cyber Resilience Authority</p>
            </div>
          </div>
          <div className="mt-8 text-sm text-gray-500 print:hidden">
            <p>Verify this certificate at: [future verification URL]</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
