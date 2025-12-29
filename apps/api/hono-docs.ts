import { defineConfig } from "@rcmade/hono-docs";

export default defineConfig({
  tsConfigPath: "./tsconfig.json",
  openApi: {
    openapi: "3.0.0",
    info: { title: "Binspire API", version: "2.1.5" },
    servers: [{ url: "http://localhost:8080/v1/api" }],
  },
  outputs: {
    openApiJson: "./openapi/openapi.json",
  },
  apis: [
    {
      name: "Organization Routes",
      apiPrefix: "/org",
      appTypePath: "./src/routes/org.ts",
    },
    {
      name: "Audit Routes",
      apiPrefix: "/audits",
      appTypePath: "./src/routes/audit.ts",
    },
    {
      name: "History Routes",
      apiPrefix: "/history",
      appTypePath: "./src/routes/history.ts",
    },
    {
      name: "Issue Routes",
      apiPrefix: "/issues",
      appTypePath: "./src/routes/issue.ts",
    },
    {
      name: "Trashbin Routes",
      apiPrefix: "/trashbins",
      appTypePath: "./src/routes/trashbin.ts",
    },
    {
      name: "Email Routes",
      apiPrefix: "/emails",
      appTypePath: "./src/routes/email.ts",
    },
    {
      name: "Maintenance Routes",
      apiPrefix: "/maintenance",
      appTypePath: "./src/routes/maintenance.ts",
    },
    {
      name: "User Routes",
      apiPrefix: "/users",
      appTypePath: "./src/routes/user.ts",
    },
  ],
});
