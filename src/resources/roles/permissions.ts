// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PermissionsAPI from '../permissions';
import * as UsersAPI from '../users/users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Permissions extends APIResource {
  /**
   * Update role permissions (grant/revoke)
   */
  update(
    id: number,
    body: PermissionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<APIResponseRolePermissions> {
    return this._client.patch(path`/roles/${id}/permissions`, { body, ...options });
  }

  /**
   * List role permissions
   */
  list(
    id: number,
    query: PermissionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIResponseRolePermissions> {
    return this._client.get(path`/roles/${id}/permissions`, { query, ...options });
  }

  /**
   * Clear all permissions for role
   */
  clear(id: number, options?: RequestOptions): APIPromise<UsersAPI.APIResponseVoid> {
    return this._client.delete(path`/roles/${id}/permissions`, options);
  }
}

export interface APIResponseRolePermissions extends UsersAPI.APIResponseBase {
  data?: APIResponseRolePermissions.Data;
}

export namespace APIResponseRolePermissions {
  export interface Data {
    permissions: Array<PermissionsAPI.Permission>;

    total: number;
  }
}

export interface PermissionUpdateParams {
  grant?: Array<number>;

  revoke?: Array<number>;
}

export interface PermissionListParams {
  keyword?: string;

  page?: number;

  pageSize?: number;
}

export declare namespace Permissions {
  export {
    type APIResponseRolePermissions as APIResponseRolePermissions,
    type PermissionUpdateParams as PermissionUpdateParams,
    type PermissionListParams as PermissionListParams,
  };
}
