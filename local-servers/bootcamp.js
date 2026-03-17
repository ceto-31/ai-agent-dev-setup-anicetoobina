#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// Create a basic server instance
const server = new Server(
  { name: "mock-mcp-server", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MCP Server is running and connected via stdio");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});