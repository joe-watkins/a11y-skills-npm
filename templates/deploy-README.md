# A11y DevKit - Skills & MCP Guide

Welcome to your comprehensive accessibility testing and remediation toolkit! You now have access to 7 specialized skills and 5 knowledge-rich MCP servers designed to help you build, test, and maintain accessible web applications.

## What Was Installed

### 7 Accessibility Skills
Your AI assistant can now leverage these specialized capabilities:
- **a11y-base-web** - Core accessibility patterns and foundational web code
- **a11y-issue-writer** - Document accessibility violations in standardized formats
- **a11y-tester** - Automated testing with axe-core and Playwright
- **a11y-remediator** - Fix accessibility issues in your codebase
- **a11y-validator** - Validate WCAG compliance and best practices
- **web-standards** - Reference web standards and specifications
- **a11y-audit-fix-agent-orchestrator** - Coordinate full accessibility audits

### 5 MCP Knowledge Servers
These servers provide instant access to accessibility guidelines and specifications:
- **wcag** - WCAG 2.2 guidelines, success criteria, and techniques
- **aria** - WAI-ARIA roles, states, properties, and patterns
- **magentaa11y** - Component accessibility acceptance criteria
- **a11y-personas** - User personas representing diverse accessibility needs
- **arc-issues** - Pre-formatted AxeCore violation issue templates

## Quick Start

### Verify Your Installation

Check if everything is working:

```
Can you verify all accessibility skills and MCP servers are available?
```

### Your First Accessibility Check

Try this simple example to get started:

```
Using the a11y-tester skill, scan the homepage at https://example.com for accessibility issues and summarize the findings.
```

### Understanding the Workflow

1. **Test** - Use a11y-tester to identify issues
2. **Research** - Query MCP servers (wcag, aria, magentaa11y) for guidance
3. **Fix** - Use a11y-remediator to implement solutions
4. **Document** - Use a11y-issue-writer to create issue reports
5. **Validate** - Use a11y-validator to confirm compliance
6. **Orchestrate** - Use the orchestrator for comprehensive audits

## Understanding the Tools

### Skills (The Doers)

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| **a11y-base-web** | Foundational accessibility code patterns | Building new components with accessibility built-in |
| **a11y-issue-writer** | Create standardized accessibility reports | Documenting violations for teams or issue trackers |
| **a11y-tester** | Run automated accessibility scans | Testing pages or components for WCAG violations |
| **a11y-remediator** | Fix accessibility issues in code | Implementing solutions for identified problems |
| **a11y-validator** | Validate WCAG compliance | Verifying fixes meet accessibility standards |
| **web-standards** | Reference web specifications | Understanding semantic HTML and best practices |
| **a11y-audit-fix-agent-orchestrator** | Coordinate end-to-end audits | Running comprehensive accessibility assessments |

### MCP Servers (The Knowledge Base)

| Server | Provides | Example Query |
|--------|----------|---------------|
| **wcag** | WCAG 2.2 guidelines and success criteria | "What are the requirements for WCAG 2.2 Level AA color contrast?" |
| **aria** | WAI-ARIA specification details | "What attributes are required for the dialog role?" |
| **magentaa11y** | Component acceptance criteria | "What are the accessibility requirements for a dropdown menu?" |
| **a11y-personas** | User scenarios and needs | "Show me personas who rely on keyboard navigation" |
| **arc-issues** | Formatted AxeCore violation templates | "Format this color contrast violation as a GitHub issue" |

## Example Prompts Library

### Getting Started (Beginner)

#### 1. Simple Page Scan
```
Use a11y-tester to scan https://mywebsite.com and list the top 5 most critical accessibility issues.
```
**Uses**: a11y-tester skill
**Outcome**: Quick overview of major violations

#### 2. Check WCAG Requirements
```
Query the wcag MCP server: What are the Level AA requirements for keyboard accessibility?
```
**Uses**: wcag MCP server
**Outcome**: Specific WCAG 2.2 success criteria and techniques

#### 3. Fix a Specific Issue
```
Using a11y-remediator, fix the missing alt text on images in src/components/Gallery.tsx
```
**Uses**: a11y-remediator skill
**Outcome**: Code updated with proper alt attributes

#### 4. Understand ARIA Roles
```
Ask the aria MCP server: What's the difference between role="button" and a native button element?
```
**Uses**: aria MCP server
**Outcome**: Explanation of semantic differences and best practices

#### 5. Document an Issue
```
Use a11y-issue-writer to create a GitHub issue for the form label violations found in our checkout page.
```
**Uses**: a11y-issue-writer skill
**Outcome**: Formatted issue ready to post

#### 6. Validate a Component
```
Use a11y-validator to check if the modal dialog in src/Modal.tsx meets WCAG 2.2 Level AA standards.
```
**Uses**: a11y-validator skill
**Outcome**: Compliance report with pass/fail status

#### 7. Learn Component Patterns
```
Query magentaa11y MCP: What are the acceptance criteria for an accessible tabs component?
```
**Uses**: magentaa11y MCP server
**Outcome**: Comprehensive accessibility requirements checklist

---

### Skills-Based Workflows (Intermediate)

#### a11y-base-web Skill

**1. Build an Accessible Form**
```
Using a11y-base-web, create a contact form component with proper labels, error messages, and ARIA attributes.
```
**Outcome**: Form component with accessibility best practices built-in

**2. Implement Skip Links**
```
Use a11y-base-web to add skip navigation links to our main layout component in src/Layout.tsx
```
**Outcome**: Skip links added with proper focus management

**3. Create Accessible Tables**
```
With a11y-base-web, refactor the data table in src/DataGrid.tsx to use proper table semantics and ARIA where needed.
```
**Outcome**: Table with proper headers, scope, and ARIA attributes

#### a11y-issue-writer Skill

**1. Generate Batch Issue Reports**
```
Use a11y-issue-writer to create separate GitHub issues for each unique violation type found in our latest accessibility scan.
```
**Outcome**: Multiple formatted issues ready for tracking

**2. Document Color Contrast Failures**
```
With a11y-issue-writer, create a detailed report of all color contrast violations on our marketing pages, including screenshots and WCAG references.
```
**Outcome**: Comprehensive report with remediation guidance

**3. Create Sprint Planning Documentation**
```
Use a11y-issue-writer to generate a prioritized list of accessibility fixes for our next sprint, organized by WCAG level and impact.
```
**Outcome**: Prioritized backlog items for team planning

#### a11y-tester Skill

**1. Test Component Library**
```
Use a11y-tester to scan all components in our Storybook at http://localhost:6006 and generate a summary report.
```
**Outcome**: Component-by-component accessibility assessment

**2. Regression Testing**
```
With a11y-tester, scan our production site and compare results to the baseline from last week to identify new violations.
```
**Outcome**: Diff report showing newly introduced issues

**3. Test User Flows**
```
Use a11y-tester to test the complete checkout flow from cart to confirmation, checking each step for accessibility issues.
```
**Outcome**: Multi-page accessibility audit of critical path

#### a11y-remediator Skill

**1. Fix Form Validation**
```
Using a11y-remediator, update our form validation in src/forms/ to provide accessible error messages with proper ARIA attributes.
```
**Outcome**: Forms with screen reader-friendly error handling

**2. Remediate Focus Management**
```
Use a11y-remediator to fix focus issues in our modal dialogs, ensuring focus is trapped and returned properly.
```
**Outcome**: Modals with proper keyboard trap and focus restoration

**3. Update Images for Accessibility**
```
With a11y-remediator, audit and fix all images in src/components/ to have appropriate alt text or aria-hidden.
```
**Outcome**: Images properly labeled or marked as decorative

#### a11y-validator Skill

**1. Pre-deployment Validation**
```
Use a11y-validator to verify our staging environment at https://staging.mysite.com meets WCAG 2.2 Level AA before we deploy to production.
```
**Outcome**: Go/no-go compliance report

**2. Component Certification**
```
With a11y-validator, check if our new autocomplete component meets all WCAG success criteria and ARIA authoring practices.
```
**Outcome**: Detailed compliance checklist for component

**3. Validate Fixes**
```
Use a11y-validator to confirm that the color contrast issues we fixed in PR #123 now meet WCAG requirements.
```
**Outcome**: Verification that remediation was successful

#### web-standards Skill

**1. Semantic HTML Review**
```
Using web-standards, review src/pages/About.tsx and suggest improvements for proper semantic HTML structure.
```
**Outcome**: Recommendations for header hierarchy, landmarks, etc.

**2. Best Practices Audit**
```
With web-standards, analyze our navigation component and suggest improvements based on HTML5 and ARIA best practices.
```
**Outcome**: Specific recommendations with standards references

**3. Progressive Enhancement Check**
```
Use web-standards to evaluate if our interactive components work without JavaScript and follow progressive enhancement principles.
```
**Outcome**: Assessment of baseline functionality and enhancement layers

#### a11y-audit-fix-agent-orchestrator Skill

**1. Full Site Audit**
```
Using a11y-audit-fix-agent-orchestrator, perform a complete accessibility audit of https://mysite.com and create a remediation plan.
```
**Outcome**: Comprehensive audit report with prioritized fix recommendations

**2. Automated Fix Pipeline**
```
With a11y-audit-fix-agent-orchestrator, scan our codebase, identify issues, attempt automated fixes, and report what requires manual intervention.
```
**Outcome**: Batch of automated fixes plus list of manual tasks

**3. Continuous Monitoring Setup**
```
Use a11y-audit-fix-agent-orchestrator to set up a weekly accessibility audit workflow that tests, reports, and suggests fixes.
```
**Outcome**: Automated monitoring configuration

---

### MCP-Enhanced Workflows (Intermediate)

#### wcag MCP Server

**1. Research Success Criteria**
```
Query wcag MCP: What are all Level AA success criteria related to keyboard accessibility in WCAG 2.2?
```
**Outcome**: Complete list of relevant success criteria with descriptions

**2. Understand Techniques**
```
Ask wcag MCP: What techniques can I use to meet success criterion 1.4.3 Contrast (Minimum)?
```
**Outcome**: List of sufficient techniques and advisory techniques

**3. Compare WCAG Versions**
```
Query wcag MCP: What new success criteria were added in WCAG 2.2 compared to 2.1?
```
**Outcome**: Changelog of new requirements

#### aria MCP Server

**1. Role Requirements**
```
Ask aria MCP: What states and properties are required vs. supported for the combobox role?
```
**Outcome**: Complete list of required and optional ARIA attributes

**2. Pattern Implementation**
```
Query aria MCP: Show me the keyboard interaction pattern for an accordion widget.
```
**Outcome**: Detailed keyboard navigation requirements

**3. Attribute Values**
```
Ask aria MCP: What are the valid values for aria-live and when should I use each?
```
**Outcome**: Explanation of polite, assertive, and off values with use cases

#### magentaa11y MCP Server

**1. Component Acceptance Criteria**
```
Query magentaa11y MCP: What are the accessibility acceptance criteria for a date picker component?
```
**Outcome**: Comprehensive checklist of requirements

**2. Testing Scenarios**
```
Ask magentaa11y MCP: What should I test when validating an accessible navigation menu?
```
**Outcome**: List of test scenarios and expected behaviors

**3. Implementation Guidance**
```
Query magentaa11y MCP: What are the developer notes for implementing an accessible tooltip?
```
**Outcome**: Code examples and implementation guidance

#### a11y-personas MCP Server

**1. Understand User Needs**
```
Query a11y-personas MCP: Show me personas who use screen readers and their primary challenges.
```
**Outcome**: Detailed persona profiles with assistive tech usage

**2. Test Perspective**
```
Ask a11y-personas MCP: What would a user with motor disabilities experience when using our navigation?
```
**Outcome**: User scenario highlighting potential issues

**3. Design Validation**
```
Query a11y-personas MCP: Which personas would be affected by small click targets and how?
```
**Outcome**: Impact analysis across different disability types

#### arc-issues MCP Server

**1. Format Violations**
```
Query arc-issues MCP: Format this AxeCore color-contrast violation as a GitHub issue with all details.
```
**Outcome**: Ready-to-post issue with title, description, and remediation steps

**2. Batch Issue Creation**
```
Ask arc-issues MCP: Convert these 5 AxeCore violations into separate Jira tickets with appropriate labels.
```
**Outcome**: Multiple formatted tickets for issue tracking

**3. Standardized Reporting**
```
Query arc-issues MCP: Create a markdown report from this AxeCore scan result that I can add to our PR.
```
**Outcome**: Formatted report suitable for version control

---

### Combined Workflows (Advanced)

#### 1. Research-Driven Remediation
```
First, query wcag MCP for the requirements of success criterion 4.1.2. Then use a11y-remediator to fix the name/role/value issues in src/components/CustomButton.tsx based on those requirements.
```
**Uses**: wcag MCP + a11y-remediator
**Outcome**: Standards-compliant fix with proper justification

#### 2. Persona-Based Testing
```
Query a11y-personas MCP to understand keyboard-only users' needs, then use a11y-tester to specifically test keyboard navigation on our dashboard, documenting findings with a11y-issue-writer.
```
**Uses**: a11y-personas MCP + a11y-tester + a11y-issue-writer
**Outcome**: User-centered test results with documented issues

#### 3. Pattern-Based Development
```
Ask magentaa11y MCP for the acceptance criteria for an accessible carousel, then use a11y-base-web to implement it, and a11y-validator to confirm compliance.
```
**Uses**: magentaa11y MCP + a11y-base-web + a11y-validator
**Outcome**: Fully accessible component built to specification

#### 4. Standards-Based Audit
```
Use web-standards to review our semantic HTML, query aria MCP for proper ARIA usage, then use a11y-validator to confirm everything meets WCAG 2.2 Level AA.
```
**Uses**: web-standards + aria MCP + a11y-validator
**Outcome**: Multi-faceted standards compliance check

#### 5. Comprehensive Issue Documentation
```
Use a11y-tester to scan our site, query wcag MCP to get the relevant success criteria for each violation, then use a11y-issue-writer to create detailed GitHub issues with WCAG references.
```
**Uses**: a11y-tester + wcag MCP + a11y-issue-writer
**Outcome**: Well-documented issues with standards citations

#### 6. Component Library Validation
```
For each component in src/components/, query magentaa11y MCP for acceptance criteria, use a11y-validator to test against those criteria, and generate a compliance matrix.
```
**Uses**: magentaa11y MCP + a11y-validator
**Outcome**: Component library accessibility certification report

#### 7. Fix Verification Workflow
```
Use a11y-tester to identify issues, a11y-remediator to fix them, then a11y-validator to confirm the fixes meet requirements, documenting the changes with a11y-issue-writer.
```
**Uses**: a11y-tester + a11y-remediator + a11y-validator + a11y-issue-writer
**Outcome**: Complete test-fix-verify-document cycle

#### 8. ARIA Pattern Implementation
```
Query aria MCP for the disclosure widget pattern requirements, use a11y-base-web to implement it, test with a11y-tester, and validate with a11y-validator.
```
**Uses**: aria MCP + a11y-base-web + a11y-tester + a11y-validator
**Outcome**: Spec-compliant ARIA widget with test verification

#### 9. User-Centered Design Review
```
Query a11y-personas MCP for diverse user needs, use web-standards to ensure semantic HTML foundation, then a11y-remediator to enhance with proper ARIA where semantics fall short.
```
**Uses**: a11y-personas MCP + web-standards + a11y-remediator
**Outcome**: User-focused accessible implementation

#### 10. Regression Prevention
```
Use a11y-tester to scan before merging PR, query wcag MCP for any new violations' requirements, use a11y-remediator to fix them, then a11y-validator to confirm before deployment.
```
**Uses**: a11y-tester + wcag MCP + a11y-remediator + a11y-validator
**Outcome**: Automated accessibility gate in CI/CD

#### 11. Documentation-First Development
```
Query magentaa11y MCP for component requirements, use a11y-base-web to scaffold the component, document expected behavior with a11y-issue-writer, then validate with a11y-validator.
```
**Uses**: magentaa11y MCP + a11y-base-web + a11y-issue-writer + a11y-validator
**Outcome**: Well-documented, specification-driven component

#### 12. Cross-Reference Validation
```
Use a11y-tester to find violations, query both wcag MCP and aria MCP to understand the requirements, then use a11y-remediator to implement fixes that satisfy both specifications.
```
**Uses**: a11y-tester + wcag MCP + aria MCP + a11y-remediator
**Outcome**: Fixes validated against multiple standards

#### 13. Issue Triage Pipeline
```
Use a11y-tester to scan multiple pages, query wcag MCP to determine WCAG level for each issue, use arc-issues MCP to format them, then a11y-issue-writer to add prioritization and assignment.
```
**Uses**: a11y-tester + wcag MCP + arc-issues MCP + a11y-issue-writer
**Outcome**: Prioritized, formatted issue backlog

#### 14. Accessibility Training Material
```
Query a11y-personas MCP for user scenarios, wcag MCP for requirements, magentaa11y MCP for component patterns, and use a11y-issue-writer to create training documentation.
```
**Uses**: a11y-personas MCP + wcag MCP + magentaa11y MCP + a11y-issue-writer
**Outcome**: Educational materials for team onboarding

#### 15. Third-Party Component Audit
```
Use web-standards to evaluate semantic foundation of a library component, query aria MCP for proper ARIA usage, use a11y-tester to scan it, and a11y-validator to certify compliance.
```
**Uses**: web-standards + aria MCP + a11y-tester + a11y-validator
**Outcome**: Vendor component accessibility assessment

---

### Complete Audit Workflows (Advanced)

#### 1. Full Site Accessibility Audit
```
Using a11y-audit-fix-agent-orchestrator, perform a comprehensive audit of https://mysite.com, querying wcag MCP for requirements, aria MCP for patterns, and generating a complete remediation roadmap with prioritized issues documented via a11y-issue-writer.
```
**Outcome**: End-to-end audit report with actionable remediation plan

#### 2. Pre-Launch Compliance Check
```
Use the orchestrator to scan our staging environment, validate against WCAG 2.2 Level AA with a11y-validator, cross-reference findings with magentaa11y MCP acceptance criteria, and create a go/no-go report with all issues documented.
```
**Outcome**: Deployment readiness assessment with compliance status

#### 3. Automated Remediation Pipeline
```
Run the orchestrator to scan the codebase with a11y-tester, automatically fix common issues with a11y-remediator, validate fixes with a11y-validator, document remaining issues with a11y-issue-writer, and create PRs for manual review.
```
**Outcome**: Batch fixes applied, remaining work itemized and tracked

#### 4. Component Library Certification
```
Use the orchestrator to audit every component in src/components/, query magentaa11y MCP for each component type's requirements, validate with a11y-validator, and generate a comprehensive certification report showing compliance status.
```
**Outcome**: Component library accessibility certification matrix

#### 5. Continuous Accessibility Monitoring
```
Set up the orchestrator to run weekly scans with a11y-tester, compare results to previous baselines, query wcag MCP for any new violation types, automatically create issues via a11y-issue-writer for regressions, and alert the team.
```
**Outcome**: Automated accessibility monitoring and regression detection

---

## Quick Reference Cheat Sheet

| Task | Tool to Use | Example |
|------|-------------|---------|
| Scan a page for issues | a11y-tester | `Scan https://example.com with a11y-tester` |
| Fix missing alt text | a11y-remediator | `Fix alt text in src/Gallery.tsx` |
| Document violations | a11y-issue-writer | `Create GitHub issue for form errors` |
| Check WCAG requirements | wcag MCP | `Query wcag: color contrast requirements` |
| Understand ARIA roles | aria MCP | `Query aria: button role requirements` |
| Get component patterns | magentaa11y MCP | `Query magentaa11y: tabs acceptance criteria` |
| Validate compliance | a11y-validator | `Validate modal meets WCAG 2.2 AA` |
| Review semantics | web-standards | `Review HTML structure in src/Nav.tsx` |
| Understand user needs | a11y-personas MCP | `Query a11y-personas: screen reader users` |
| Format AxeCore violations | arc-issues MCP | `Format this violation as Jira ticket` |
| Run full audit | orchestrator | `Audit https://mysite.com with orchestrator` |

---

## MCP Setup Verification

### How to Verify MCP Servers Are Working

Your MCP servers run via `npx`, which means they're fetched on-demand and don't require local installation. To verify they're working, try these test prompts:

#### Test wcag MCP
```
Query the wcag MCP server: What is success criterion 2.1.1?
```
**Expected**: Details about keyboard accessibility requirements

#### Test aria MCP
```
Query the aria MCP server: What attributes does the button role support?
```
**Expected**: List of ARIA attributes applicable to buttons

#### Test magentaa11y MCP
```
Query the magentaa11y MCP server: List all available component types.
```
**Expected**: List of components with acceptance criteria

#### Test a11y-personas MCP
```
Query the a11y-personas MCP server: Show me all available personas.
```
**Expected**: List of user personas with disabilities

#### Test arc-issues MCP
```
Query the arc-issues MCP server: What issue formats are available?
```
**Expected**: List of supported formats (GitHub, Jira, etc.)

### Basic Troubleshooting

If MCP servers aren't responding:

1. **Restart your IDE** - MCP servers initialize when the IDE starts
2. **Check npx connectivity** - Run `npx --version` in your terminal to ensure npx is working
3. **Verify MCP configuration** - Check that your IDE's `mcp.json` file exists and includes the 5 servers
4. **Check network** - MCP servers using npx need internet access for first-time package downloads
5. **Look for errors** - Check your IDE's output panel for MCP-related error messages

### MCP Configuration Locations

Your MCP configuration was written to one of these locations (depending on your OS and IDE):

- **macOS**: `~/Library/Application Support/{IDE}/mcp.json`
- **Windows**: `%APPDATA%\{IDE}\mcp.json`
- **Linux**: `~/.config/{IDE}/mcp.json`

Where `{IDE}` is one of: `Claude`, `Cursor`, `Codex`, or `Code` (for VSCode)

---

## Getting Help

### Resources

- **Report Issues**: [GitHub Issues](https://github.com/joe-watkins/a11y-devkit/issues)
- **Full Documentation**: Check the main README.md in the parent directory
- **Community**: Share your prompts and workflows with the community

### Common Issues

**"Skill not found"**
- Verify skills are installed in your IDE's skills directory
- Check that the skill name matches exactly (e.g., `a11y-tester`, not `a11y-testing`)
- Restart your IDE to reload skills

**"MCP server not responding"**
- Ensure you're querying the MCP server explicitly (e.g., "Query wcag MCP:")
- Restart your IDE to reinitialize MCP servers
- Check that npx is installed and working

**"Permission denied"**
- MCP servers run via npx and may need permission to execute
- Check your system's security settings for CLI tool execution

### Tips for Best Results

1. **Be specific** - Instead of "check accessibility", try "Use a11y-tester to scan the login form for WCAG violations"
2. **Combine tools** - Leverage both skills and MCP servers together for comprehensive workflows
3. **Reference files** - Provide specific file paths when asking for fixes or reviews
4. **Iterate** - Start with testing, then research, then fix, then validate
5. **Document** - Use a11y-issue-writer to track what you find and fix

---

## Next Steps

Now that you have this powerful toolkit, here are some suggested next steps:

1. **Run your first scan** - Use a11y-tester on your main page
2. **Explore the MCP servers** - Query wcag, aria, and magentaa11y to learn what they offer
3. **Try a combined workflow** - Pick one from the Advanced section and adapt it to your project
4. **Set up monitoring** - Use the orchestrator to establish regular accessibility checks
5. **Train your team** - Share example prompts with teammates to build accessibility into your workflow

**Remember**: Accessibility is a journey, not a destination. These tools help you continuously improve your web applications for all users.

Happy building!
