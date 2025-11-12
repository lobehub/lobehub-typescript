// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as FilesAPI from './files';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * Retrieve detailed information about a specific file.
   *
   * - Requires FILE_READ permission
   * - For images: returns file metadata only
   * - For documents: returns file metadata + parsed content (if available)
   * - Automatically parses document content on first access
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<APIResponseFileDetail> {
    return this._client.get(path`/files/${id}`, options);
  }

  /**
   * Get paginated list of files with optional filtering by file type, search
   * keyword, and user ID.
   *
   * - Requires FILE_READ permission
   * - Returns files with complete metadata including URL, hash, and metadata
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIResponseFileList> {
    return this._client.get('/files', { query, ...options });
  }

  /**
   * Permanently delete a file from the system.
   *
   * - Requires FILE_DELETE permission
   * - Deletes both the file record and the actual file from storage (S3)
   * - Cannot be undone
   */
  delete(id: string, options?: RequestOptions): APIPromise<UsersAPI.APIResponseVoid> {
    return this._client.delete(path`/files/${id}`, options);
  }

  /**
   * Retrieve detailed information for multiple files in a single request.
   *
   * - Requires FILE_READ permission
   * - Processes all file IDs in parallel
   * - Returns both successful and failed retrievals
   * - Each file includes metadata and parsed content (for documents)
   * - Failed retrievals include error messages
   */
  batchGet(body: FileBatchGetParams, options?: RequestOptions): APIPromise<APIResponseBatchGetFiles> {
    return this._client.post('/files/queries', { body, ...options });
  }

  /**
   * Upload multiple files in a single request.
   *
   * - Requires FILE_UPLOAD permission
   * - Each file is processed independently
   * - Returns summary with successful and failed uploads
   * - Supports automatic deduplication
   * - Maximum file size per file: 100MB
   */
  batchUpload(body: FileBatchUploadParams, options?: RequestOptions): APIPromise<APIResponseBatchFileUpload> {
    return this._client.post(
      '/files/batches',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Generate a temporary presigned URL for direct file access.
   *
   * - Requires FILE_READ permission
   * - URL is time-limited and secure
   * - Useful for downloading or previewing files
   * - Default expiration: 1 hour (3600 seconds)
   */
  getPresignedURL(
    id: string,
    query: FileGetPresignedURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIResponseFileURL> {
    return this._client.get(path`/files/${id}/url`, { query, ...options });
  }

  /**
   * Extract text content from document files (PDF, Word, Excel, etc).
   *
   * - Requires FILE_UPDATE permission
   * - Only supports document file types (not images/videos)
   * - Returns cached result if already parsed (unless skipExist=true)
   * - Includes metadata like page count, character count, etc.
   * - Parse results are stored for future retrieval
   */
  parseContent(
    id: string,
    params: FileParseContentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIResponseFileParse> {
    const { skipExist } = params ?? {};
    return this._client.post(path`/files/${id}/parses`, { query: { skipExist }, ...options });
  }

  /**
   * Upload a file to the system with optional metadata.
   *
   * - Requires FILE_UPLOAD permission
   * - Supports automatic deduplication based on file hash
   * - Returns file detail including parse result for non-image files
   * - Maximum file size: 100MB
   */
  upload(body: FileUploadParams, options?: RequestOptions): APIPromise<APIResponseFileDetail> {
    return this._client.post('/files', multipartFormRequestOptions({ body, ...options }, this._client));
  }
}

export interface APIResponseBatchFileUpload extends UsersAPI.APIResponseBase {
  data?: BatchFileUpload;
}

export interface APIResponseBatchGetFiles extends UsersAPI.APIResponseBase {
  data?: BatchGetFiles;
}

export interface APIResponseFileDetail extends UsersAPI.APIResponseBase {
  data?: FileDetail;
}

export interface APIResponseFileList extends UsersAPI.APIResponseBase {
  data?: APIResponseFileList.Data;
}

export namespace APIResponseFileList {
  export interface Data {
    files: Array<FilesAPI.File>;

    total: number;
  }
}

export interface APIResponseFileParse extends UsersAPI.APIResponseBase {
  data?: FileParse;
}

export interface APIResponseFileURL extends UsersAPI.APIResponseBase {
  data?: FileURL;
}

export interface BatchFileUpload {
  failed?: Array<BatchFileUpload.Failed>;

  successful?: Array<FileDetail>;

  summary?: BatchFileUpload.Summary;
}

export namespace BatchFileUpload {
  export interface Failed {
    error: string;

    name: string;
  }

  export interface Summary {
    failed: number;

    successful: number;

    total: number;
  }
}

export interface BatchGetFiles {
  failed: Array<BatchGetFiles.Failed>;

  files: Array<FileDetail>;

  success: number;

  total: number;
}

export namespace BatchGetFiles {
  export interface Failed {
    error: string;

    fileId: string;
  }
}

export interface File {
  id?: string;

  createdAt?: string | null;

  fileHash?: string | null;

  fileType?: string | null;

  knowledgeBaseId?: string | null;

  metadata?: { [key: string]: unknown } | null;

  name?: string | null;

  size?: number | null;

  updatedAt?: string | null;

  url?: string | null;

  userId?: string | null;
}

export interface FileDetail {
  file: File;

  parsed?: FileParse | null;
}

export interface FileParse {
  content?: string | null;

  error?: string | null;

  fileId?: string;

  fileType?: string;

  metadata?: FileParse.Metadata;

  name?: string;

  parsedAt?: string | null;

  parseStatus?: 'completed' | 'failed';
}

export namespace FileParse {
  export interface Metadata {
    pages?: number | null;

    title?: string | null;

    totalCharCount?: number | null;

    totalLineCount?: number | null;
  }
}

export interface FileURL {
  expiresAt: string;

  expiresIn: number;

  fileId: string;

  name: string;

  url: string;
}

export interface FileListParams {
  /**
   * Filter by file type (e.g., "image/", "application/pdf")
   */
  fileType?: string;

  /**
   * Page number (default 1)
   */
  page?: number;

  /**
   * Items per page (default 20, max 100)
   */
  pageSize?: number;

  /**
   * Search keyword for file name (case-insensitive)
   */
  search?: string;

  /**
   * Filter by user ID (requires appropriate permission)
   */
  userId?: string;
}

export interface FileBatchGetParams {
  /**
   * Array of file IDs to retrieve (required, at least 1)
   */
  fileIds: Array<string>;
}

export interface FileBatchUploadParams {
  /**
   * Array of files to upload (required)
   */
  files: Array<Uploadable>;

  /**
   * Custom upload directory for all files (default "uploads")
   */
  directory?: string | null;

  /**
   * Optional knowledge base ID for all files
   */
  knowledgeBaseId?: string | null;

  /**
   * Optional session ID to create file-session relations
   */
  sessionId?: string | null;

  /**
   * Skip file type validation for all files (default false)
   */
  skipCheckFileType?: boolean | null;
}

export interface FileGetPresignedURLParams {
  /**
   * URL expiration time in seconds (default 3600)
   */
  expiresIn?: number;
}

export interface FileParseContentParams {
  /**
   * Force re-parse even if already parsed (default false)
   */
  skipExist?: boolean;
}

export interface FileUploadParams {
  /**
   * The file to upload (required)
   */
  file: Uploadable;

  /**
   * Custom upload directory (default "uploads")
   */
  directory?: string | null;

  /**
   * Optional knowledge base ID to associate with the file
   */
  knowledgeBaseId?: string | null;

  /**
   * Optional session ID to create file-session relation
   */
  sessionId?: string | null;

  /**
   * Skip file type validation (default false)
   */
  skipCheckFileType?: boolean | null;
}

export declare namespace Files {
  export {
    type APIResponseBatchFileUpload as APIResponseBatchFileUpload,
    type APIResponseBatchGetFiles as APIResponseBatchGetFiles,
    type APIResponseFileDetail as APIResponseFileDetail,
    type APIResponseFileList as APIResponseFileList,
    type APIResponseFileParse as APIResponseFileParse,
    type APIResponseFileURL as APIResponseFileURL,
    type BatchFileUpload as BatchFileUpload,
    type BatchGetFiles as BatchGetFiles,
    type File as File,
    type FileDetail as FileDetail,
    type FileParse as FileParse,
    type FileURL as FileURL,
    type FileListParams as FileListParams,
    type FileBatchGetParams as FileBatchGetParams,
    type FileBatchUploadParams as FileBatchUploadParams,
    type FileGetPresignedURLParams as FileGetPresignedURLParams,
    type FileParseContentParams as FileParseContentParams,
    type FileUploadParams as FileUploadParams,
  };
}
