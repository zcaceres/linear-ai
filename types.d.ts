import type { ToolArg } from "../easy-agent/dist/definitions";

// Sub-type of `IssueUpdateInput`
export type CreateIssueInput = {
  title: string;
  description: string;
  stateId?: string;
  dueDate?: string;
  priority?: number;
  projectId?: string;
  estimate?: number;
  parentId?: string;
};

export type UpdateIssueInput = {
  issueId: string;
} & Partial<CreateIssueInput>;

// Helper type to check if all keys are present
// type EnsureAllKeys<T, U extends Record<keyof T, any>> = U;

// Use the helper type to enforce the presence of all keys
// export type UpdateIssueToolInput = EnsureAllKeys<
//   UpdateIssueInput,
//   UpdateIssueToolInput
// >;

// Sub-type of `DocumentCreateInput`
export type DocumentInput = {
  title: string;
  content: string;
  projectId: string;
};

export type UpdateDocumentInput = {
  documentId: string;
} & Partial<DocumentInput>;

// Project types
export type CreateProjectInput = {
  name: string;
  description?: string;
  // color?: string;
  // convertedFromIssueId?: string;
  // icon?: string;
  // id?: string;
  // lastAppliedTemplateId?: string;
  leadId?: string;
  memberIds?: string[];
  priority?: number;
  // prioritySortOrder?: number;
  // sortOrder?: number;
  startDate?: string;
  statusId?: string;
  targetDate?: string; // Assuming TimelessDate is represented as a string
  // targetDateResolution?: string; // Assuming DateResolutionType is represented as a string
  teamIds: string[];
};

export type UpdateProjectInput = {
  projectId: string;
} & Partial<CreateProjectInput>;
