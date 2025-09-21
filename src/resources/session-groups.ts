// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SessionGroups extends APIResource {
  /**
   * Create session group
   */
  create(body: SessionGroupCreateParams, options?: RequestOptions): APIPromise<APIResponseSessionGroup> {
    return this._client.post('/session-groups', { body, ...options });
  }

  /**
   * Get session group by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<APIResponseSessionGroup> {
    return this._client.get(path`/session-groups/${id}`, options);
  }

  /**
   * Update session group (partial)
   */
  update(
    id: string,
    body: SessionGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<APIResponseSessionGroup> {
    return this._client.patch(path`/session-groups/${id}`, { body, ...options });
  }

  /**
   * List session groups
   */
  list(options?: RequestOptions): APIPromise<SessionGroupListResponse> {
    return this._client.get('/session-groups', options);
  }

  /**
   * Delete session group
   */
  delete(id: string, options?: RequestOptions): APIPromise<UsersAPI.APIResponseVoid> {
    return this._client.delete(path`/session-groups/${id}`, options);
  }
}

export interface APIResponseSessionGroup extends UsersAPI.APIResponseBase {
  data?: SessionGroup;
}

export interface SessionGroup {
  id?: string;

  createdAt?: string | null;

  name?: string;

  sort?: number | null;

  updatedAt?: string | null;
}

export interface SessionGroupListResponse extends UsersAPI.APIResponseBase {
  data?: Array<SessionGroup>;
}

export interface SessionGroupCreateParams {
  name: string;

  sort?: number | null;
}

export interface SessionGroupUpdateParams {
  name?: string | null;

  sort?: number | null;
}

export declare namespace SessionGroups {
  export {
    type APIResponseSessionGroup as APIResponseSessionGroup,
    type SessionGroup as SessionGroup,
    type SessionGroupListResponse as SessionGroupListResponse,
    type SessionGroupCreateParams as SessionGroupCreateParams,
    type SessionGroupUpdateParams as SessionGroupUpdateParams,
  };
}
