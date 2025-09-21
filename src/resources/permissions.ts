// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PermissionsAPI from './permissions';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Permissions extends APIResource {
  /**
   * Create permission
   */
  create(body: PermissionCreateParams, options?: RequestOptions): APIPromise<APIResponsePermission> {
    return this._client.post('/permissions', { body, ...options });
  }

  /**
   * Get permission by ID
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<APIResponsePermission> {
    return this._client.get(path`/permissions/${id}`, options);
  }

  /**
   * Update permission (partial)
   */
  update(
    id: number,
    body: PermissionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<APIResponsePermission> {
    return this._client.patch(path`/permissions/${id}`, { body, ...options });
  }

  /**
   * List permissions
   */
  list(
    query: PermissionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PermissionListResponse> {
    return this._client.get('/permissions', { query, ...options });
  }

  /**
   * Delete permission
   */
  delete(id: number, options?: RequestOptions): APIPromise<UsersAPI.APIResponseVoid> {
    return this._client.delete(path`/permissions/${id}`, options);
  }
}

export interface APIResponsePermission extends UsersAPI.APIResponseBase {
  data?: Permission;
}

export interface CreatePermission {
  category: string;

  code: string;

  name: string;

  description?: string | null;

  isActive?: boolean | null;
}

export interface Permission {
  id?: number;

  category?: string;

  code?: string;

  createdAt?: string | null;

  description?: string | null;

  isActive?: boolean;

  name?: string;

  updatedAt?: string | null;
}

export interface PermissionListResponse extends UsersAPI.APIResponseBase {
  data?: PermissionListResponse.Data;
}

export namespace PermissionListResponse {
  export interface Data {
    permissions: Array<PermissionsAPI.Permission>;

    total: number;
  }
}

export interface PermissionCreateParams {
  category: string;

  code: string;

  name: string;

  description?: string | null;

  isActive?: boolean | null;
}

export interface PermissionUpdateParams {
  category: string;

  code: string;

  name: string;

  description?: string | null;

  isActive?: boolean | null;
}

export interface PermissionListParams {
  active?: boolean;

  category?: string;

  keyword?: string;

  page?: number;

  pageSize?: number;
}

export declare namespace Permissions {
  export {
    type APIResponsePermission as APIResponsePermission,
    type CreatePermission as CreatePermission,
    type Permission as Permission,
    type PermissionListResponse as PermissionListResponse,
    type PermissionCreateParams as PermissionCreateParams,
    type PermissionUpdateParams as PermissionUpdateParams,
    type PermissionListParams as PermissionListParams,
  };
}
