// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from './users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Roles extends APIResource {
  /**
   * Update user roles (add/remove)
   */
  update(id: string, body: RoleUpdateParams, options?: RequestOptions): APIPromise<APIResponseUserRoles> {
    return this._client.patch(path`/users/${id}/roles`, { body, ...options });
  }

  /**
   * Get user roles
   */
  list(id: string, options?: RequestOptions): APIPromise<APIResponseUserRoles> {
    return this._client.get(path`/users/${id}/roles`, options);
  }

  /**
   * Clear all roles of user
   */
  clear(id: string, options?: RequestOptions): APIPromise<RoleClearResponse> {
    return this._client.delete(path`/users/${id}/roles`, options);
  }
}

export interface APIResponseUserRoles extends UsersAPI.APIResponseBase {
  data?: Array<APIResponseUserRoles.Data>;
}

export namespace APIResponseUserRoles {
  export interface Data {
    roleDisplayName: string;

    roleId: number;

    roleName: string;

    expiresAt?: string | null;
  }
}

export interface RoleClearResponse extends UsersAPI.APIResponseBase {
  data?: RoleClearResponse.Data;
}

export namespace RoleClearResponse {
  export interface Data {
    removed: number;

    userId: string;
  }
}

export interface RoleUpdateParams {
  addRoles?: Array<RoleUpdateParams.AddRole>;

  removeRoles?: Array<number>;
}

export namespace RoleUpdateParams {
  export interface AddRole {
    roleId: number;

    expiresAt?: string | null;
  }
}

export declare namespace Roles {
  export {
    type APIResponseUserRoles as APIResponseUserRoles,
    type RoleClearResponse as RoleClearResponse,
    type RoleUpdateParams as RoleUpdateParams,
  };
}
