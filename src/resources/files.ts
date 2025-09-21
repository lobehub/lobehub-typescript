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
   * Get file detail
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<APIResponseFileDetail> {
    return this._client.get(path`/files/${id}`, options);
  }

  /**
   * List files
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get('/files', { query, ...options });
  }

  /**
   * Delete file
   */
  delete(id: string, options?: RequestOptions): APIPromise<UsersAPI.APIResponseVoid> {
    return this._client.delete(path`/files/${id}`, options);
  }

  /**
   * Batch get files by IDs
   */
  batchGet(body: FileBatchGetParams, options?: RequestOptions): APIPromise<FileBatchGetResponse> {
    return this._client.post('/files/queries', { body, ...options });
  }

  /**
   * Batch upload files
   */
  batchUpload(body: FileBatchUploadParams, options?: RequestOptions): APIPromise<FileBatchUploadResponse> {
    return this._client.post(
      '/files/batches',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Get presigned URL for the file
   */
  getPresignedURL(
    id: string,
    query: FileGetPresignedURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileGetPresignedURLResponse> {
    return this._client.get(path`/files/${id}/url`, { query, ...options });
  }

  /**
   * Parse file content
   */
  parseContent(
    id: string,
    params: FileParseContentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileParseContentResponse> {
    const { skipExist } = params ?? {};
    return this._client.post(path`/files/${id}/parses`, { query: { skipExist }, ...options });
  }

  /**
   * Upload a file
   */
  upload(body: FileUploadParams, options?: RequestOptions): APIPromise<APIResponseFileDetail> {
    return this._client.post('/files', multipartFormRequestOptions({ body, ...options }, this._client));
  }
}

export interface APIResponseFileDetail extends UsersAPI.APIResponseBase {
  data?: FileDetail;
}

export interface File {
  id?: string;

  createdAt?: string | null;

  fileType?: string | null;

  name?: string | null;

  size?: number | null;

  updatedAt?: string | null;

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

export interface FileListResponse extends UsersAPI.APIResponseBase {
  data?: FileListResponse.Data;
}

export namespace FileListResponse {
  export interface Data {
    files: Array<FilesAPI.File>;

    total: number;
  }
}

export interface FileBatchGetResponse extends UsersAPI.APIResponseBase {
  data?: FileBatchGetResponse.Data;
}

export namespace FileBatchGetResponse {
  export interface Data {
    failed: Array<Data.Failed>;

    files: Array<FilesAPI.FileDetail>;

    success: number;

    total: number;
  }

  export namespace Data {
    export interface Failed {
      error: string;

      fileId: string;
    }
  }
}

export interface FileBatchUploadResponse extends UsersAPI.APIResponseBase {
  data?: FileBatchUploadResponse.Data;
}

export namespace FileBatchUploadResponse {
  export interface Data {
    failed?: Array<Data.Failed>;

    successful?: Array<FilesAPI.FileDetail>;

    summary?: Data.Summary;
  }

  export namespace Data {
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
}

export interface FileGetPresignedURLResponse extends UsersAPI.APIResponseBase {
  data?: FileGetPresignedURLResponse.Data;
}

export namespace FileGetPresignedURLResponse {
  export interface Data {
    expiresAt: string;

    expiresIn: number;

    fileId: string;

    name: string;

    url: string;
  }
}

export interface FileParseContentResponse extends UsersAPI.APIResponseBase {
  data?: FileParse;
}

export interface FileListParams {
  fileType?: string;

  page?: number;

  pageSize?: number;

  search?: string;

  userId?: string;
}

export interface FileBatchGetParams {
  fileIds: Array<string>;
}

export interface FileBatchUploadParams {
  files: Array<Uploadable>;

  directory?: string | null;

  knowledgeBaseId?: string | null;

  sessionId?: string | null;

  skipCheckFileType?: boolean | null;

  skipExist?: boolean | null;
}

export interface FileGetPresignedURLParams {
  expiresIn?: number;
}

export interface FileParseContentParams {
  skipExist?: boolean;
}

export interface FileUploadParams {
  file: Uploadable;

  directory?: string | null;

  knowledgeBaseId?: string | null;

  sessionId?: string | null;

  skipCheckFileType?: boolean | null;

  skipExist?: boolean | null;
}

export declare namespace Files {
  export {
    type APIResponseFileDetail as APIResponseFileDetail,
    type File as File,
    type FileDetail as FileDetail,
    type FileParse as FileParse,
    type FileListResponse as FileListResponse,
    type FileBatchGetResponse as FileBatchGetResponse,
    type FileBatchUploadResponse as FileBatchUploadResponse,
    type FileGetPresignedURLResponse as FileGetPresignedURLResponse,
    type FileParseContentResponse as FileParseContentResponse,
    type FileListParams as FileListParams,
    type FileBatchGetParams as FileBatchGetParams,
    type FileBatchUploadParams as FileBatchUploadParams,
    type FileGetPresignedURLParams as FileGetPresignedURLParams,
    type FileParseContentParams as FileParseContentParams,
    type FileUploadParams as FileUploadParams,
  };
}
