export { verificationRoutes } from "./verification";

export { auditRoutes, type AppType as AuditAppType } from "./audit";

export {
  userRoutes,
  userCollectionAssignmentRoutes,
  userGreenHeartRoutes,
  userInvitationRoutes,
  userQuotaRoutes,
  userRequestRoutes,
  userSettingsRoutes,
  userStatusRoutes,
  type AppType as UserAppType,
} from "./user";

export { authRoutes, qrCodeRoutes } from "./auth";

export { backupRoutes } from "./backup";
export { emailRoutes, type AppType as EmailAppType } from "./email";
export { historyRoutes, type AppType as HistoryAppType } from "./history";
export { issueRoutes, type AppType as IssueAppType } from "./issue";

export {
  organizationRoutes,
  organizationSettingsRoutes,
  type AppType as OrgAppType,
} from "./org";
export { sessionRoutes } from "./session";

export {
  trashbinRoutes,
  trashbinStatusRoutes,
  trashbinCollectionRoutes,
  type AppType as TrashbinAppType,
} from "./trashbin";

export {
  maintenanceRoutes,
  type AppType as MaintenanceAppType,
} from "./maintenance";
export { messagingRoutes } from "./messaging";
