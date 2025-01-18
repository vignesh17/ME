// SVG Diagrams
export const systemOverviewSVG = `
    <svg width="900" height="200" viewBox="0 0 900 200">
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M 0 0 L 5 3.5 L 0 7" fill="none" stroke="var(--accent-color)" stroke-width="1"/>
            </marker>
        </defs>
        <g>
            <!-- Partners -->
            <rect x="200" y="100" width="140" height="40" class="box"/>
            <text x="270" y="125" text-anchor="middle">Partners</text>
            
            <!-- CRAB System -->
            <rect x="400" y="100" width="140" height="40" class="box"/>
            <text x="470" y="125" text-anchor="middle">CRAB System</text>
            
            <!-- Integration Services -->
            <rect x="600" y="100" width="180" height="40" class="box"/>
            <text x="690" y="125" text-anchor="middle">Integration Services</text>
            
            <!-- Employees -->
            <rect x="400" y="20" width="140" height="40" class="box"/>
            <text x="470" y="45" text-anchor="middle">Employees</text>
            
            <!-- Arrows -->
            <line x1="340" y1="120" x2="395" y2="120" class="flow-line" marker-end="url(#arrowhead)"/>
            <line x1="540" y1="120" x2="595" y2="120" class="flow-line" marker-end="url(#arrowhead)"/>
            <line x1="470" y1="60" x2="470" y2="95" class="flow-line" marker-end="url(#arrowhead)"/>
        </g>
    </svg>
`;

export const applicationWorkflowSVG = `
    <svg width="1000" height="100" viewBox="0 0 1000 100">
        <defs>
            <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M 0 0 L 5 3.5 L 0 7" fill="none" stroke="var(--accent-color)" stroke-width="1"/>
            </marker>
        </defs>
        <g>
            <!-- Submit Application -->
            <rect x="50" y="15" width="200" height="70" class="box"/>
            <text x="150" y="45" text-anchor="middle">Submit Application</text>
            <text x="150" y="65" text-anchor="middle" font-size="12">Initiate & Manage</text>
            
            <!-- Review & Communicate -->
            <rect x="290" y="15" width="200" height="70" class="box"/>
            <text x="390" y="45" text-anchor="middle">Review & Communicate</text>
            <text x="390" y="65" text-anchor="middle" font-size="12">Secure Channel</text>
            
            <!-- Select Tasks -->
            <rect x="530" y="15" width="200" height="70" class="box"/>
            <text x="630" y="45" text-anchor="middle">Select Required Tasks</text>
            <text x="630" y="65" text-anchor="middle" font-size="12">Risk Assessment</text>
            
            <!-- Decision -->
            <rect x="770" y="15" width="200" height="70" class="box"/>
            <text x="870" y="45" text-anchor="middle">Approve/Decline & Board</text>
            <text x="870" y="65" text-anchor="middle" font-size="12">Automated Process</text>
            
            <!-- Arrows -->
            <line x1="250" y1="50" x2="285" y2="50" class="flow-line" marker-end="url(#arrowhead2)"/>
            <line x1="490" y1="50" x2="525" y2="50" class="flow-line" marker-end="url(#arrowhead2)"/>
            <line x1="730" y1="50" x2="765" y2="50" class="flow-line" marker-end="url(#arrowhead2)"/>
        </g>
    </svg>
`;

export const integratedServicesSVG = `
    <svg width="900" height="300" viewBox="0 0 900 300">
        <defs>
            <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M 0 0 L 5 3.5 L 0 7" fill="none" stroke="var(--accent-color)" stroke-width="1"/>
            </marker>
        </defs>
        <g>
            <!-- CRAB System (Center) -->
            <rect x="320" y="125" width="200" height="70" class="box"/>
            <text x="420" y="155" text-anchor="middle">CRAB System</text>
            <text x="420" y="170" text-anchor="middle" font-size="12">Integration Hub</text>
            
            <!-- Verification Services -->
            <rect x="40" y="30" width="200" height="60" class="box"/>
            <text x="140" y="55" text-anchor="middle">Verification Services</text>
            <text x="140" y="70" text-anchor="middle" font-size="12">Identity & Business</text>
            
            <!-- Document Services -->
            <rect x="600" y="30" width="200" height="60" class="box"/>
            <text x="700" y="55" text-anchor="middle">Document Services</text>
            <text x="700" y="70" text-anchor="middle" font-size="12">DocuSign & Processing</text>
            
            <!-- Decision Support -->
            <rect x="40" y="230" width="200" height="60" class="box"/>
            <text x="140" y="255" text-anchor="middle">Decision Support</text>
            <text x="140" y="270" text-anchor="middle" font-size="12">Risk Analysis Tools</text>
            
            <!-- Merchant Boarding -->
            <rect x="600" y="230" width="200" height="60" class="box"/>
            <text x="700" y="255" text-anchor="middle">Merchant Boarding</text>
            <text x="700" y="270" text-anchor="middle" font-size="12">Automated Setup</text>
            
            <!-- Arrows -->
            <line x1="240" y1="55" x2="315" y2="125" class="flow-line" marker-end="url(#arrowhead3)"/>
            <line x1="520" y1="130" x2="595" y2="55" class="flow-line" marker-end="url(#arrowhead3)"/>
            <line x1="240" y1="255" x2="315" y2="180" class="flow-line" marker-end="url(#arrowhead3)"/>
            <line x1="520" y1="180" x2="595" y2="255" class="flow-line" marker-end="url(#arrowhead3)"/>
        </g>
    </svg>
`;

export const alertSystemSVG = `
    <svg width="900" height="300" viewBox="0 0 900 300">
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M 0 0 L 5 3.5 L 0 7" fill="none" stroke="var(--accent-color)" stroke-width="1"/>
            </marker>
        </defs>
        <g>
            <!-- Pipeline Stages Comment -->
            <text x="150" y="40" text-anchor="middle" class="comment">// Pipeline Stages</text>
            
            <!-- Pipeline Stage Boxes -->
            <rect x="50" y="60" width="100" height="40" class="box"/>
            <text x="100" y="85" text-anchor="middle">Build</text>
            
            <rect x="50" y="120" width="100" height="40" class="box"/>
            <text x="100" y="145" text-anchor="middle">Test</text>
            
            <rect x="50" y="180" width="100" height="40" class="box"/>
            <text x="100" y="205" text-anchor="middle">Deploy</text>
            
            <rect x="50" y="240" width="100" height="40" class="box"/>
            <text x="100" y="265" text-anchor="middle">Validate</text>
            
            <!-- CodeBuild Monitor -->
            <rect x="350" y="140" width="200" height="60" class="box"/>
            <text x="450" y="175" text-anchor="middle">CodeBuild Monitor</text>
            
            <!-- Slack Channels Comment -->
            <text x="750" y="40" text-anchor="middle" class="comment">// Slack Channels</text>
            
            <!-- Slack Channel Boxes -->
            <rect x="650" y="60" width="200" height="40" class="box"/>
            <text x="750" y="85" text-anchor="middle">#build-alerts</text>
            
            <rect x="650" y="120" width="200" height="40" class="box"/>
            <text x="750" y="145" text-anchor="middle">#test-notifications</text>
            
            <rect x="650" y="180" width="200" height="40" class="box"/>
            <text x="750" y="205" text-anchor="middle">#deployment-status</text>
            
            <rect x="650" y="240" width="200" height="40" class="box"/>
            <text x="750" y="265" text-anchor="middle">#validation-updates</text>
            
            <!-- Input Arrows -->
            <line x1="150" y1="80" x2="350" y2="170" class="flow-line" marker-end="url(#arrowhead)"/>
            <line x1="150" y1="140" x2="350" y2="170" class="flow-line" marker-end="url(#arrowhead)"/>
            <line x1="150" y1="200" x2="350" y2="170" class="flow-line" marker-end="url(#arrowhead)"/>
            <line x1="150" y1="260" x2="350" y2="170" class="flow-line" marker-end="url(#arrowhead)"/>
            
            <!-- Output Arrows -->
            <line x1="550" y1="170" x2="650" y2="80" class="flow-line" marker-end="url(#arrowhead)"/>
            <line x1="550" y1="170" x2="650" y2="140" class="flow-line" marker-end="url(#arrowhead)"/>
            <line x1="550" y1="170" x2="650" y2="200" class="flow-line" marker-end="url(#arrowhead)"/>
            <line x1="550" y1="170" x2="650" y2="260" class="flow-line" marker-end="url(#arrowhead)"/>
        </g>
    </svg>
`;

export const crmDiagram = `
    <svg viewBox="0 0 800 500">
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-color)"/>
            </marker>
        </defs>

        <!-- Self-Service Portal Box (Top) -->
        <rect x="287" y="40" width="187" height="112" class="box"/>
        <text x="380" y="80" text-anchor="middle" font-size="14">Self-Service Portal</text>
        <text x="380" y="100" text-anchor="middle" font-size="12">External User Access</text>
        <text x="380" y="120" text-anchor="middle" font-size="12">Reports & Requests</text>

        <!-- CRM Core Box (Center) -->
        <rect x="287" y="180" width="187" height="112" class="box"/>
        <text x="380" y="220" text-anchor="middle" font-size="14">CRM Core</text>
        <text x="380" y="240" text-anchor="middle" font-size="12">Internal Employee Tool</text>
        <text x="380" y="260" text-anchor="middle" font-size="12">Records & Reports</text>

        <!-- Task Management Box (Right) -->
        <rect x="524" y="180" width="187" height="112" class="box"/>
        <text x="617" y="220" text-anchor="middle" font-size="14">Task Management</text>
        <text x="617" y="240" text-anchor="middle" font-size="12">Group Assignment</text>
        <text x="617" y="260" text-anchor="middle" font-size="12">Auto Decision Tree</text>

        <!-- Boarding Tools Box (Bottom) -->
        <rect x="287" y="320" width="187" height="112" class="box"/>
        <text x="380" y="360" text-anchor="middle" font-size="14">Boarding Tools</text>
        <text x="380" y="380" text-anchor="middle" font-size="12">Small Risk Tracking</text>
        <text x="380" y="400" text-anchor="middle" font-size="12">General Boarding</text>

        <!-- Arrows -->
        <!-- Portal to CRM (data access) -->
        <line x1="380" y1="152" x2="380" y2="180" class="flow-line" marker-end="url(#arrowhead)"/>
        <!-- Portal to Task Management (support requests) -->
        <line x1="474" y1="95" x2="617" y2="180" class="flow-line" marker-end="url(#arrowhead)"/>
        <!-- CRM to Task Management (system failures) -->
        <line x1="474" y1="236" x2="524" y2="236" class="flow-line" marker-end="url(#arrowhead)"/>
        <!-- Boarding Tools to CRM (merchant records) -->
        <line x1="380" y1="320" x2="380" y2="292" class="flow-line" marker-end="url(#arrowhead)"/>
        <!-- Boarding Tools to Task Management (workflow) -->
        <line x1="474" y1="376" x2="617" y2="292" class="flow-line" marker-end="url(#arrowhead)"/>
    </svg>
`;

export const cfTestingDiagram = `
    <svg viewBox="0 0 800 200">
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-color)"/>
            </marker>
        </defs>

        <!-- Dev Box -->
        <rect x="50" y="40" width="187" height="112" class="box"/>
        <text x="143" y="80" text-anchor="middle" font-size="14">Dev Environment</text>
        <text x="143" y="100" text-anchor="middle" font-size="12">Daily Deployments</text>
        <text x="143" y="120" text-anchor="middle" font-size="12">A → B → C</text>

        <!-- Test Box -->
        <rect x="287" y="40" width="187" height="112" class="box"/>
        <text x="380" y="80" text-anchor="middle" font-size="14">Compatibility Test</text>
        <text x="380" y="100" text-anchor="middle" font-size="12">Latest Code (C)</text>
        <text x="380" y="120" text-anchor="middle" font-size="12">on Prod State (A)</text>

        <!-- Prod Box -->
        <rect x="524" y="40" width="187" height="112" class="box"/>
        <text x="617" y="80" text-anchor="middle" font-size="14">Production</text>
        <text x="617" y="100" text-anchor="middle" font-size="12">Weekly Deployments</text>
        <text x="617" y="120" text-anchor="middle" font-size="12">A → C (Validated)</text>

        <!-- Arrows -->
        <line x1="237" y1="95" x2="287" y2="95" class="flow-line" marker-end="url(#arrowhead)"/>
        <line x1="474" y1="95" x2="524" y2="95" class="flow-line" marker-end="url(#arrowhead)"/>
    </svg>
`;