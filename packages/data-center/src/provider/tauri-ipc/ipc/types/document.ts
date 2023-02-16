/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type IDocumentParameters =
  | {
      YDocumentUpdate: YDocumentUpdate;
    }
  | {
      CreateDocumentParameter: CreateDocumentParameter;
    }
  | {
      GetDocumentParameter: GetDocumentParameter;
    }
  | {
      GetDocumentResponse: GetDocumentResponse;
    };

export interface YDocumentUpdate {
  id: string;
  update: number[];
  [k: string]: unknown;
}
export interface CreateDocumentParameter {
  workspace_id: string;
  workspace_name: string;
  [k: string]: unknown;
}
export interface GetDocumentParameter {
  id: string;
  [k: string]: unknown;
}
export interface GetDocumentResponse {
  updates: number[][];
  [k: string]: unknown;
}