import { 
    systemOverviewSVG,
    applicationWorkflowSVG,
    integratedServicesSVG,
    alertSystemSVG,
    crmDiagram,
    cfTestingDiagram
} from './svg.js';

export const projectContent = {
    crab: {
        title: "CRAB: Credit And Risk Assessment Board",
        subtitle: "Streamlining Merchant Onboarding Through Intelligent Risk Assessment",
        content: `
            <div class="project-detail">
                <div class="project-section">
                    <h2>The System</h2>
                    <p>CRAB (Credit And Risk Assessment Board) is a comprehensive merchant onboarding platform that streamlines the application process through intelligent risk assessment and automated verification.</p>
                    <div class="svg-diagram">
                        ${systemOverviewSVG}
                    </div>
                </div>
                
                <div class="project-section">
                    <h2>Application Workflow</h2>
                    <p>The platform enables partners to submit and manage merchant applications while providing employees with tools for efficient review and decision-making.</p>
                    <div class="svg-diagram">
                        ${applicationWorkflowSVG}
                    </div>
                </div>
                
                <div class="project-section">
                    <h2>Integration Services</h2>
                    <p>CRAB integrates with various third-party services for comprehensive verification, document processing, and automated merchant boarding.</p>
                    <div class="svg-diagram">
                        ${integratedServicesSVG}
                    </div>
                </div>
            </div>
        `
    },
    residuals: {
        title: "Residuals: Automated Financial Reporting System",
        subtitle: "Streamlining Fee Management and Revenue Analysis",
        content: `
            <div class="project-detail">
                <div class="project-section">
                    <h2>Overview</h2>
                    <p>The Residuals system automates the generation and management of critical financial reports, handling everything from fee information to revenue calculations with built-in error detection and dual storage capabilities.</p>
                    <div class="svg-diagram">
                        <svg viewBox="0 0 800 200">
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
                                    <path d="M 0 0 L 5 3.5 L 0 7" fill="none" stroke="var(--accent-color)" stroke-width="1"/>
                                </marker>
                            </defs>

                            <!-- Core Components -->
                            <rect x="100" y="80" width="160" height="40" class="box"/>
                            <rect x="320" y="80" width="160" height="40" class="box"/>
                            <rect x="540" y="80" width="160" height="40" class="box"/>

                            <!-- Text -->
                            <text x="180" y="105" text-anchor="middle">Data Collection</text>
                            <text x="400" y="105" text-anchor="middle">Report Generation</text>
                            <text x="620" y="105" text-anchor="middle">Storage & Access</text>

                            <!-- Storage Icons -->
                            <rect x="540" y="140" width="70" height="30" class="box"/>
                            <rect x="630" y="140" width="70" height="30" class="box"/>
                            <text x="575" y="160" text-anchor="middle" font-size="12">DB</text>
                            <text x="665" y="160" text-anchor="middle" font-size="12">S3</text>

                            <!-- Arrows -->
                            <line x1="260" y1="100" x2="320" y2="100" class="flow-line" marker-end="url(#arrow)" stroke-width="1"/>
                            <line x1="480" y1="100" x2="540" y2="100" class="flow-line" marker-end="url(#arrow)" stroke-width="1"/>
                            <line x1="620" y1="120" x2="620" y2="140" class="flow-line" marker-end="url(#arrow)" stroke-width="1"/>
                        </svg>
                    </div>
                </div>

                <div class="project-section">
                    <h2>Report Types & Processing</h2>
                    <ul>
                        <li>Fee Information Reports with missing fee detection</li>
                        <li>Detailed fee breakdowns by merchant and partner</li>
                        <li>Partner revenue reports and company net revenue analysis</li>
                        <li>Automated error detection and reporting</li>
                    </ul>
                    <div class="svg-diagram">
                        <svg viewBox="0 0 800 300">
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
                                    <path d="M 0 0 L 5 3.5 L 0 7" fill="none" stroke="var(--accent-color)" stroke-width="1"/>
                                </marker>
                            </defs>

                            <!-- Report Types -->
                            <rect x="50" y="40" width="160" height="60" class="box"/>
                            <rect x="50" y="120" width="160" height="60" class="box"/>
                            <rect x="50" y="200" width="160" height="60" class="box"/>

                            <!-- Processing Steps -->
                            <rect x="320" y="120" width="160" height="60" class="box"/>

                            <!-- Output -->
                            <rect x="590" y="40" width="160" height="60" class="box"/>
                            <rect x="590" y="120" width="160" height="60" class="box"/>
                            <rect x="590" y="200" width="160" height="60" class="box"/>

                            <!-- Text -->
                            <text x="130" y="65" text-anchor="middle" font-size="12">Fee Information</text>
                            <text x="130" y="80" text-anchor="middle" font-size="12">Reports</text>

                            <text x="130" y="145" text-anchor="middle" font-size="12">Fee Breakdown</text>
                            <text x="130" y="160" text-anchor="middle" font-size="12">Analysis</text>

                            <text x="130" y="225" text-anchor="middle" font-size="12">Revenue</text>
                            <text x="130" y="240" text-anchor="middle" font-size="12">Reports</text>

                            <text x="400" y="145" text-anchor="middle" font-size="12">7-Step Report</text>
                            <text x="400" y="160" text-anchor="middle" font-size="12">Generation</text>

                            <text x="670" y="65" text-anchor="middle" font-size="12">XLSX</text>
                            <text x="670" y="80" text-anchor="middle" font-size="12">Reports</text>

                            <text x="670" y="145" text-anchor="middle" font-size="12">Error</text>
                            <text x="670" y="160" text-anchor="middle" font-size="12">Reports</text>

                            <text x="670" y="225" text-anchor="middle" font-size="12">Dual Storage</text>
                            <text x="670" y="240" text-anchor="middle" font-size="12">System</text>

                            <!-- Arrows -->
                            <line x1="210" y1="70" x2="320" y2="120" class="flow-line" marker-end="url(#arrow)" stroke-width="1"/>
                            <line x1="210" y1="150" x2="320" y2="150" class="flow-line" marker-end="url(#arrow)" stroke-width="1"/>
                            <line x1="210" y1="230" x2="320" y2="180" class="flow-line" marker-end="url(#arrow)" stroke-width="1"/>

                            <line x1="480" y1="150" x2="590" y2="70" class="flow-line" marker-end="url(#arrow)" stroke-width="1"/>
                            <line x1="480" y1="150" x2="590" y2="150" class="flow-line" marker-end="url(#arrow)" stroke-width="1"/>
                            <line x1="480" y1="150" x2="590" y2="230" class="flow-line" marker-end="url(#arrow)" stroke-width="1"/>
                        </svg>
                    </div>
                </div>

                <div class="project-section">
                    <h2>Error Handling & Storage</h2>
                    <ul>
                        <li>Comprehensive error detection during report generation</li>
                        <li>Automated error reporting for the residuals team</li>
                        <li>Dual storage system in database and S3 for redundancy</li>
                        <li>Easy access interface for employees</li>
                    </ul>
                </div>
            </div>
        `
    },
    fluidpay: {
        title: "Fluidpay Partner Auto Boarding",
        subtitle: "Automated Partner Account Creation and API Management",
        content: `
            <div class="project-detail">
                <div class="project-section">
                    <h2>Overview</h2>
                    <p>An automated system that streamlines the process of boarding new partners into the Fluidpay platform. 
                    The tool handles account creation, permission setup, and API key management, replacing multiple manual operations tasks.</p>
                </div>
                
                <div class="project-section">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Automated partner account creation in Fluidpay system</li>
                        <li>Configurable permission management for partner accounts</li>
                        <li>Secure API key generation and storage for system users</li>
                        <li>Integration with merchant boarding system</li>
                    </ul>
                </div>
                
                <div class="project-section">
                    <h2>Impact</h2>
                    <p>Significantly reduced operational overhead by automating manual entry tasks, ensuring consistent 
                    partner setup, and providing seamless integration with the merchant boarding process through secure API key management.</p>
                </div>
            </div>
        `
    },
    filesystem: {
        title: "File System",
        subtitle: "Resource-Linked File Management with Secure Access Control",
        content: `
            <div class="project-detail">
                <div class="project-section">
                    <h2>Overview</h2>
                    <p>A comprehensive file management system that enables secure file attachments to various business resources 
                    (applications, merchants, partners, etc.) with role-based access control and secure file sharing capabilities.</p>
                </div>
                
                <div class="project-section">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Resource-specific file attachments with granular permissions</li>
                        <li>Role-based access control for file operations</li>
                        <li>Secure one-time upload/download links</li>
                        <li>AWS S3 integration for reliable storage</li>
                    </ul>
                </div>

                <div class="project-section">
                    <h2>S3 Presigned URL Upload Flow</h2>
                    <div class="svg-diagram">
                        <svg width="100%" height="300" viewBox="0 0 1000 300">
                            <!-- Client Box -->
                            <rect x="50" y="100" width="120" height="60" class="box" />
                            <text x="110" y="135" text-anchor="middle">Client</text>

                            <!-- API Server Box -->
                            <rect x="400" y="100" width="120" height="60" class="box" />
                            <text x="460" y="135" text-anchor="middle">API Server</text>

                            <!-- S3 Box -->
                            <rect x="750" y="100" width="120" height="60" class="box" />
                            <text x="810" y="135" text-anchor="middle">AWS S3</text>

                            <!-- Flow Lines and Labels -->
                            <!-- Request Presigned URL -->
                            <path d="M170 130 H390" class="flow-line" marker-end="url(#arrow)" />
                            <text x="280" y="120" text-anchor="middle">1. Request Upload URL</text>

                            <!-- Generate URL -->
                            <path d="M520 130 H740" class="flow-line" marker-end="url(#arrow)" />
                            <text x="630" y="120" text-anchor="middle">2. Get Presigned URL</text>

                            <!-- Return URL -->
                            <path d="M400 160 H170" class="flow-line" marker-end="url(#arrow)" />
                            <text x="285" y="180" text-anchor="middle">3. Return Presigned URL</text>

                            <!-- Upload File -->
                            <path d="M110 160 C110 240 750 240 810 160" class="flow-line" marker-end="url(#arrow)" />
                            <text x="460" y="260" text-anchor="middle">4. Upload File Directly to S3</text>

                            <!-- Arrow Marker Definition -->
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
                                    <path d="M 0 0 L 5 3.5 L 0 7" fill="none" stroke="var(--accent-color)" stroke-width="1"/>
                                </marker>
                            </defs>
                        </svg>
                    </div>
                    <p class="comment">// The diagram shows the secure file upload process using AWS S3 presigned URLs</p>
                </div>
                
                <div class="project-section">
                    <h2>Impact</h2>
                    <p>Streamlined file management across the platform while ensuring security through role-based permissions 
                    and secure temporary access links, significantly reducing the complexity of handling sensitive documents.</p>
                </div>
            </div>
        `
    },
    integrations: {
        title: "Third Party Integrations",
        subtitle: "Unified API Integration Platform for Payment and Verification Services",
        content: `
            <div class="project-detail">
                <div class="project-section">
                    <h2>Overview</h2>
                    <p>A comprehensive integration platform that connects with various third-party payment processors 
                    and verification services through REST APIs, standardizing the way external services are integrated 
                    into the system.</p>
                </div>
                
                <div class="project-section">
                    <h2>Integration Architecture</h2>
                    <div class="svg-diagram">
                        <svg width="100%" height="300" viewBox="0 0 1200 300">
                            <!-- Integration Layer Box -->
                            <rect x="50" y="100" width="150" height="60" class="box" />
                            <text x="125" y="135" text-anchor="middle">Integration Layer</text>

                            <!-- REST Template Box -->
                            <rect x="400" y="100" width="150" height="60" class="box" />
                            <text x="475" y="135" text-anchor="middle">REST Template</text>

                            <!-- Payment Processors Box -->
                            <rect x="750" y="20" width="300" height="100" class="box" />
                            <text x="900" y="60" text-anchor="middle" class="comment">// Payment Processors</text>
                            <text x="900" y="90" text-anchor="middle">Payroc • Repay</text>
                            <text x="900" y="110" text-anchor="middle">Priority • Netevia</text>

                            <!-- Verification Services Box -->
                            <rect x="750" y="160" width="300" height="100" class="box" />
                            <text x="900" y="200" text-anchor="middle" class="comment">// Verification Services</text>
                            <text x="900" y="230" text-anchor="middle">Match • GIACT</text>
                            <text x="900" y="250" text-anchor="middle">Experian • GDS</text>

                            <!-- Flow Lines -->
                            <path d="M200 130 H390" class="flow-line" marker-end="url(#arrow)" />
                            <text x="295" y="110" text-anchor="middle">Format Request</text>

                            <path d="M550 130 H740" class="flow-line" marker-end="url(#arrow)" />
                            <text x="645" y="110" text-anchor="middle">API Calls</text>

                            <!-- Arrow Marker Definition -->
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
                                    <path d="M 0 0 L 5 3.5 L 0 7" fill="none" stroke="var(--accent-color)" stroke-width="1"/>
                                </marker>
                            </defs>
                        </svg>
                    </div>
                    <p class="comment">// Standardized integration pattern for third-party services</p>
                </div>

                <div class="project-section">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Standardized REST API integration patterns</li>
                        <li>Documentation-driven development approach</li>
                        <li>Custom request/response payload handling</li>
                        <li>Support for multiple payment processors and verification services</li>
                    </ul>
                </div>
                
                <div class="project-section">
                    <h2>Impact</h2>
                    <p>Streamlined the integration process with third-party services, reducing development time and 
                    maintaining consistency across different service integrations while ensuring proper handling of 
                    service-specific requirements.</p>
                </div>
            </div>
        `
    },
    alerts: {
        title: "Custom Alert System",
        subtitle: "Automated Pipeline Monitoring and Slack Notifications",
        content: `
            <div class="project-detail">
                <div class="project-section">
                    <h2>Alerts</h2>
                    <p>A custom alert system that monitors pipeline stages and routes notifications to dedicated Slack channels, providing real-time visibility into build, test, deployment, and validation processes.</p>
                    <div class="svg-diagram">
                        ${alertSystemSVG}
                    </div>
                </div>

                <div class="project-section">
                    <h2>ToDo Checker</h2>
                    <p>An automated pipeline tool that validates TODO comments in the codebase, ensuring proper tracking through Jira integration and maintaining code quality standards.</p>
                    <div class="svg-diagram">
                        <svg width="900" height="200" viewBox="0 0 900 200">
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
                                    <path d="M 0 0 L 5 3.5 L 0 7" fill="none" stroke="var(--accent-color)" stroke-width="1"/>
                                </marker>
                            </defs>
                            <g>
                                <!-- Codebase -->
                                <rect x="50" y="40" width="196" height="118" class="box"/>
                                <text x="143" y="80" text-anchor="middle" class="comment">// Codebase</text>
                                <text x="143" y="120" text-anchor="middle" font-size="12">// TODO (PROJ-123) Bug</text>
                                
                                <!-- ToDo Scanner -->
                                <rect x="287" y="40" width="196" height="118" class="box"/>
                                <text x="380" y="80" text-anchor="middle">ToDo Scanner</text>
                                <text x="380" y="110" text-anchor="middle" font-size="12">Check Jira ticket:</text>
                                <text x="380" y="130" text-anchor="middle" font-size="12">PROJ-123</text>
                                
                                <!-- Pipeline Result -->
                                <rect x="524" y="40" width="196" height="118" class="box"/>
                                <text x="617" y="80" text-anchor="middle">Pipeline</text>
                                <text x="617" y="120" text-anchor="middle" font-size="12">Pass/Fail</text>
                                
                                <!-- Arrows -->
                                <line x1="246" y1="99" x2="287" y2="99" class="flow-line" marker-end="url(#arrow)"/>
                                <line x1="483" y1="99" x2="524" y2="99" class="flow-line" marker-end="url(#arrow)"/>
                            </g>
                        </svg>
                    </div>
                    <div class="project-section">
                        <h2>Key Features</h2>
                        <ul>
                            <li>Scans codebase for TODO comments and extracts Jira ticket references</li>
                            <li>Validates existence and status of referenced Jira tickets</li>
                            <li>Fails pipeline for invalid, missing, or closed ticket references</li>
                            <li>Ensures technical debt is properly tracked and managed through open Jira tickets</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    crm: {
        title: "CRM: Customer Relationship Management",
        subtitle: "Comprehensive Partner and Merchant Management with Integrated Tools",
        content: `
            <div class="project-detail">
                <div class="project-section">
                    <h2>The System</h2>
                    <p>An integrated platform combining internal employee tools, external user access, and specialized boarding solutions. The system connects four key components to streamline partner and merchant management.</p>
                    <div class="svg-diagram">
                        ${crmDiagram}
                    </div>
                </div>
                
                <div class="project-section">
                    <h2>CRM Core</h2>
                    <ul>
                        <li>Internal tool for employee record management</li>
                        <li>Comprehensive report generation (authorization, settlement, chargeback)</li>
                        <li>Internal ticketing system for work tracking</li>
                        <li>Automated system failure tickets with group routing</li>
                    </ul>
                </div>

                <div class="project-section">
                    <h2>Self-Service Portal</h2>
                    <ul>
                        <li>External access for partners and merchants</li>
                        <li>Portfolio report viewing (authorization, settlement, chargeback health)</li>
                        <li>Application status tracking</li>
                        <li>Automated support ticket creation with group assignment</li>
                    </ul>
                </div>

                <div class="project-section">
                    <h2>Merchant Boarding</h2>
                    <p>Two specialized tools integrated with task management:</p>
                    <ul>
                        <li>Small Risk Boarding: Temporary tool replacing shared Excel tracking</li>
                        <li>General Boarding: Advanced merchant creation system</li>
                        <li>Auto decision tree for task routing</li>
                        <li>Employee group-based task closure rules</li>
                    </ul>
                </div>
            </div>
        `
    },
    cfTesting: {
        title: "CloudFormation Compatibility Testing",
        subtitle: "Preventing Deployment Failures Through Version Jump Testing",
        content: `
            <div class="project-detail">
                <div class="project-section">
                    <h2>Overview</h2>
                    <p>A specialized pipeline stage that validates CloudFormation deployment compatibility between development and production states, ensuring smooth transitions across version jumps.</p>
                    <div class="svg-diagram">
                        ${cfTestingDiagram}
                    </div>
                </div>

                <div class="project-section">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Validates direct version jump compatibility (A→C)</li>
                        <li>Identifies potential deployment path issues</li>
                        <li>Bridges daily development and weekly production deployment patterns</li>
                        <li>Early detection of CloudFormation state conflicts</li>
                    </ul>
                </div>

                <div class="project-section">
                    <h2>Impact</h2>
                    <ul>
                        <li>Prevention of production deployment failures</li>
                        <li>Reduced risk in weekly production releases</li>
                        <li>Enhanced confidence in deployment processes</li>
                        <li>Improved stability of infrastructure updates</li>
                    </ul>
                </div>
            </div>
        `
    }
};