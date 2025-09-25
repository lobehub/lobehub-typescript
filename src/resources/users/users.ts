// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from './users';
import * as RolesAPI from '../roles/roles';
import * as UsersRolesAPI from './roles';
import { APIResponseUserRoles, RoleClearResponse, RoleUpdateParams, Roles } from './roles';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  roles: UsersRolesAPI.Roles = new UsersRolesAPI.Roles(this._client);

  /**
   * Create user
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<APIResponseUser> {
    return this._client.post('/users', { body, ...options });
  }

  /**
   * Get user by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<APIResponseUser> {
    return this._client.get(path`/users/${id}`, options);
  }

  /**
   * Update user (partial)
   */
  update(id: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<APIResponseUser> {
    return this._client.patch(path`/users/${id}`, { body, ...options });
  }

  /**
   * List users (searchable, paginated)
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    return this._client.get('/users', { query, ...options });
  }

  /**
   * Delete user
   */
  delete(id: string, options?: RequestOptions): APIPromise<APIResponseVoid> {
    return this._client.delete(path`/users/${id}`, options);
  }

  /**
   * Get current authenticated user
   */
  retrieveCurrent(options?: RequestOptions): APIPromise<APIResponseUser> {
    return this._client.get('/users/me', options);
  }
}

export interface APIResponseBase {
  success: boolean;

  timestamp: string;

  message?: string | null;
}

export interface APIResponseUser extends APIResponseBase {
  data?: UserWithRoles;
}

export interface APIResponseVoid extends APIResponseBase {
  /**
   * Empty response payload
   */
  data?: APIResponseVoid.Data | null;
}

export namespace APIResponseVoid {
  /**
   * Empty response payload
   */
  export interface Data {}
}

export interface UserWithRoles {
  id: string;

  accessedAt: string;

  createdAt: string;

  isOnboarded: boolean;

  updatedAt: string;

  avatar?: string | null;

  clerkCreatedAt?: string | null;

  email?: string | null;

  emailVerifiedAt?: string | null;

  firstName?: string | null;

  fullName?: string | null;

  lastName?: string | null;

  messageCount?: number;

  phone?: string | null;

  preference?: { [key: string]: unknown } | null;

  roles?: Array<RolesAPI.Role>;

  username?: string | null;
}

export interface UserListResponse extends APIResponseBase {
  data?: UserListResponse.Data;
}

export namespace UserListResponse {
  export interface Data {
    total: number;

    users: Array<UsersAPI.UserWithRoles>;
  }
}

export interface UserCreateParams {
  id?: string | null;

  avatar?: string | null;

  email?: string | null;

  firstName?: string | null;

  fullName?: string | null;

  lastName?: string | null;

  phone?: string | null;

  roleIds?: Array<number> | null;

  username?: string | null;
}

export interface UserUpdateParams {
  avatar?: string | null;

  email?: string | null;

  firstName?: string | null;

  fullName?: string | null;

  isOnboarded?: boolean | null;

  lastName?: string | null;

  phone?: string | null;

  preference?: { [key: string]: unknown } | null;

  roleIds?: Array<number> | null;

  username?: string | null;
}

export interface UserListParams {
  keyword?: string;

  page?: number;

  pageSize?: number;
}

Users.Roles = Roles;

export declare namespace Users {
  export {
    type APIResponseBase as APIResponseBase,
    type APIResponseUser as APIResponseUser,
    type APIResponseVoid as APIResponseVoid,
    type UserWithRoles as UserWithRoles,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
  };

  export {
    Roles as Roles,
    type APIResponseUserRoles as APIResponseUserRoles,
    type RoleClearResponse as RoleClearResponse,
    type RoleUpdateParams as RoleUpdateParams,
  };
}
