// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RolesAPI from './roles';
import * as PermissionsAPI from './permissions';
import {
  APIResponseRolePermissions,
  PermissionListParams,
  PermissionUpdateParams,
  Permissions,
} from './permissions';
import * as UsersAPI from '../users/users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Roles extends APIResource {
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);

  /**
   * Create role
   */
  create(body: RoleCreateParams, options?: RequestOptions): APIPromise<APIResponseRole> {
    return this._client.post('/roles', { body, ...options });
  }

  /**
   * Get role by ID
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<APIResponseRole> {
    return this._client.get(path`/roles/${id}`, options);
  }

  /**
   * Update role (partial)
   */
  update(id: number, body: RoleUpdateParams, options?: RequestOptions): APIPromise<APIResponseRole> {
    return this._client.patch(path`/roles/${id}`, { body, ...options });
  }

  /**
   * List roles
   */
  list(
    query: RoleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoleListResponse> {
    return this._client.get('/roles', { query, ...options });
  }

  /**
   * Delete role
   */
  delete(id: number, options?: RequestOptions): APIPromise<UsersAPI.APIResponseVoid> {
    return this._client.delete(path`/roles/${id}`, options);
  }
}

export interface APIResponseRole extends UsersAPI.APIResponseBase {
  data?: Role;
}

export interface CreateRoleRequest {
  displayName: string;

  name: string;

  description?: string | null;

  isActive?: boolean | null;

  isSystem?: boolean | null;
}

export interface Role {
  id?: number;

  accessedAt?: string | null;

  createdAt?: string | null;

  description?: string | null;

  displayName?: string;

  isActive?: boolean;

  isSystem?: boolean;

  metadata?: { [key: string]: unknown } | null;

  name?: string;

  updatedAt?: string | null;
}

export interface RoleListResponse extends UsersAPI.APIResponseBase {
  data?: RoleListResponse.Data;
}

export namespace RoleListResponse {
  export interface Data {
    roles: Array<RolesAPI.Role>;

    total: number;
  }
}

export interface RoleCreateParams {
  displayName: string;

  name: string;

  description?: string | null;

  isActive?: boolean | null;

  isSystem?: boolean | null;
}

export interface RoleUpdateParams {
  displayName: string;

  name: string;

  description?: string | null;

  isActive?: boolean | null;

  isSystem?: boolean | null;
}

export interface RoleListParams {
  active?: boolean;

  keyword?: string;

  page?: number;

  pageSize?: number;

  system?: boolean;
}

Roles.Permissions = Permissions;

export declare namespace Roles {
  export {
    type APIResponseRole as APIResponseRole,
    type CreateRoleRequest as CreateRoleRequest,
    type Role as Role,
    type RoleListResponse as RoleListResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
  };

  export {
    Permissions as Permissions,
    type APIResponseRolePermissions as APIResponseRolePermissions,
    type PermissionUpdateParams as PermissionUpdateParams,
    type PermissionListParams as PermissionListParams,
  };
}
