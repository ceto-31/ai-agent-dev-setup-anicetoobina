# AI Agent Development Setup Repository

**Student:** anicetoobina  
**Cohort:** BSIT3B  
**Submission Date:** March 15, 2026

This repository demonstrates a complete development environment setup for AI Agent development, with all Model Context Protocol (MCP) servers properly configured, tested, and documented.

---

## Development Environment Checklist

### ✅ Node.js Installed
Node.js is required for running MCP servers and local development tools.

**Verification:**
```
$ node --version
v18.x.x (or higher)
```

[Screenshot: Node version verification](./screenshots/node-version.png)

---

### ✅ Git Installed
Git is essential for version control and tracking development workflow.

**Verification:**
```
$ git --version
git version 2.x.x
```

[Screenshot: Git version verification](./screenshots/git-version.png)

---

### ✅ VS Code Insiders with GitHub Copilot
VS Code Insiders provides the latest features and is the recommended editor for AI-enhanced development.

**Requirements:**
- VS Code Insiders (pre-release build)
- GitHub Copilot extension enabled
- GitHub Copilot Chat active

[Screenshot: VS Code Insiders with Copilot](./screenshots/vscode-copilot.png)

---

### ✅ Claude Desktop with MCP Servers Connected

Claude Desktop is configured with 4 Model Context Protocol servers providing extended functionality for AI-assisted development.

**Configuration Location:** `~/.config/Claude/claude_desktop_config.json` (or AppData on Windows)

**Connected Servers:** All 4 servers verified as operational

[Screenshot: Claude Desktop Dashboard](./screenshots/claude-desktop-all-servers.png)

---

## MCP Servers Overview

### 1. Rolldice Server
**Type:** NPM Package (`@modelcontextprotocol/server-everything`)  
**Purpose:** Demonstration and testing server for MCP functionality  
**Functionality:** Provides basic server operations for validating MCP connectivity  
**Configuration:**
```json
{
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-everything"]
}
```

---

### 2. Bootcamp AI Agent Server
**Type:** Local Node.js Server  
**Location:** `/local-servers/bootcamp.js`  
**Purpose:** Custom server for bootcamp-specific AI agent operations  
**Functionality:** Provides bootcamp-related tools and resources accessible through Claude Desktop  
**Configuration:**
```json
{
  "command": "node",
  "args": ["C:/Users/anice/Documents/bootcamp/ai-agent-dev-setup-anicetoobina/local-servers/bootcamp.js"]
}
```

---

### 3. Calendar Booking Server
**Type:** Local Node.js Server  
**Location:** `/local-servers/calendar.js`  
**Purpose:** Calendar and scheduling integration for AI agents  
**Functionality:** Enables Claude to interact with calendar systems and manage bookings  
**Configuration:**
```json
{
  "command": "node",
  "args": ["C:/Users/anice/Documents/bootcamp/ai-agent-dev-setup-anicetoobina/local-servers/calendar.js"]
}
```

---

### 4. GitHub MCP Server
**Type:** NPM Package (`@modelcontextprotocol/server-github`)  
**Purpose:** GitHub repository interaction and version control integration  
**Functionality:** 
- Query and interact with GitHub repositories
- Create and manage issues
- Perform git operations
- Access repository content and history

**Configuration:**
```json
{
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-github"],
  "env": {
    "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_TOKEN_HERE"
  }
}
```

**Requirements:**
- GitHub Personal Access Token (stored securely in environment variable)
- Token must have appropriate repository and issue permissions

---

## How to Test Each Server

1. **Open Claude Desktop**
2. **Verify Server Status:** Check the settings/server connections panel to confirm all 4 servers show as "Connected"
3. **Test Each Server:** Click on each server and interact with its available tools
4. **Review Connection Details:** See [connection-test.md](./mcp-configs/connection-test.md) for detailed test procedures and evidence

---

## Troubleshooting Notes

### Issue: MCP Server Fails to Connect
**Cause:** Path misconfiguration or Node.js not in system PATH  
**Solution:** 
- Verify paths in `claude_desktop_config.json` match your actual file locations
- Ensure Node.js is installed and accessible via terminal (`node --version`)
- Restart Claude Desktop after path corrections

### Issue: GitHub Server Returns "Unauthorized"
**Cause:** GitHub Personal Access Token missing or expired  
**Solution:**
- Generate a new GitHub Personal Access Token at https://github.com/settings/tokens
- Ensure token includes `repo` and `admin:repo_hook` scopes
- Add token to `GITHUB_PERSONAL_ACCESS_TOKEN` environment variable
- Restart Claude Desktop

### Issue: Local Servers Not Starting
**Cause:** Missing dependencies or Node.js version incompatibility  
**Solution:**
- Navigate to `local-servers/` directory: `cd local-servers`
- Install dependencies: `npm install`
- Verify Node.js version: `node --version` (must be v16 or higher)
- Check server startup: `node bootcamp.js` (should not throw errors)

### Issue: "Module Not Found" Errors
**Cause:** @modelcontextprotocol/sdk not installed  
**Solution:**
- In `local-servers/` directory, run: `npm install @modelcontextprotocol/sdk`
- Verify package.json includes the dependency

---

## Repository Structure

```
ai-agent-dev-setup-anicetoobina/
├── README.md                          # This file - main documentation
├── reflection.md                       # AI Agent Developer mindset reflection
├── VERIFICATION.md                     # Proof of functionality with screenshots
├── mcp-configs/
│   ├── claude-desktop-config.json     # MCP server configuration
│   ├── mcp-servers-list.md            # Detailed server documentation
│   └── connection-test.md             # Server connection test procedures
├── local-servers/
│   ├── bootcamp.js                    # Bootcamp AI Agent MCP server
│   ├── calendar.js                    # Calendar Booking MCP server
│   └── package.json                   # Dependencies for local servers
└── screenshots/                        # Evidence screenshots

```

---

## Getting Started with AI Agent Development

This setup provides a foundation for implementing AI-enhanced workflows:

1. **Claude Desktop Dashboard:** All 4 MCP servers are available for use
2. **Local Development:** Use VS Code with Copilot for AI-assisted coding
3. **Version Control:** Track all changes with meaningful git commits
4. **MCP Integration:** Extend functionality by adding new servers or tools

---

## Next Steps

- Review [mcp-configs/mcp-servers-list.md](./mcp-configs/mcp-servers-list.md) for detailed server configurations
- Check [mcp-configs/connection-test.md](./mcp-configs/connection-test.md) for server testing procedures  
- See [VERIFICATION.md](./VERIFICATION.md) for functionality proof with screenshots
- Read [reflection.md](./reflection.md) for insights on AI Agent Developer workflows

---

**Repository Status:** ✅ All systems operational and verified
