// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SessionsAPI from './sessions';
import * as AgentsAPI from './agents';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Sessions extends APIResource {
  /**
   * Create session
   */
  create(body: SessionCreateParams, options?: RequestOptions): APIPromise<APIResponseSession> {
    return this._client.post('/sessions', { body, ...options });
  }

  /**
   * Get session by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<APIResponseSession> {
    return this._client.get(path`/sessions/${id}`, options);
  }

  /**
   * Update session (partial)
   */
  update(id: string, body: SessionUpdateParams, options?: RequestOptions): APIPromise<APIResponseSession> {
    return this._client.patch(path`/sessions/${id}`, { body, ...options });
  }

  /**
   * List sessions
   */
  list(
    query: SessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIResponseSessionList> {
    return this._client.get('/sessions', { query, ...options });
  }

  /**
   * Delete session
   */
  delete(id: string, options?: RequestOptions): APIPromise<UsersAPI.APIResponseVoid> {
    return this._client.delete(path`/sessions/${id}`, options);
  }

  /**
   * Batch update sessions
   */
  batchUpdate(
    params: SessionBatchUpdateParams,
    options?: RequestOptions,
  ): APIPromise<APIResponseSessionList> {
    const { body } = params;
    return this._client.patch('/sessions', { body: body, ...options });
  }

  /**
   * List sessions grouped by agent
   */
  listGroupedByAgent(
    query: SessionListGroupedByAgentParams,
    options?: RequestOptions,
  ): APIPromise<SessionListGroupedByAgentResponse> {
    return this._client.get('/sessions/groups', { query, ...options });
  }
}

export interface APIResponseSession extends UsersAPI.APIResponseBase {
  data?: Session;
}

export interface APIResponseSessionList extends UsersAPI.APIResponseBase {
  data?: APIResponseSessionList.Data;
}

export namespace APIResponseSessionList {
  export interface Data {
    sessions: Array<SessionsAPI.Session>;

    total: number;
  }
}

export interface Session {
  id?: string;

  agentId?: string | null;

  avatar?: string | null;

  backgroundColor?: string | null;

  createdAt?: string | null;

  description?: string | null;

  groupId?: string | null;

  pinned?: boolean | null;

  title?: string | null;

  updatedAt?: string | null;
}

export interface UpdateSessionRequest {
  agentId?: string | null;

  avatar?: string | null;

  backgroundColor?: string | null;

  description?: string | null;

  groupId?: string | null;

  pinned?: boolean | null;

  title?: string | null;

  userId?: string | null;
}

export interface SessionListGroupedByAgentResponse extends UsersAPI.APIResponseBase {
  data?: Array<SessionListGroupedByAgentResponse.Data>;
}

export namespace SessionListGroupedByAgentResponse {
  export interface Data {
    sessions: Array<SessionsAPI.Session>;

    total: number;

    agent?: AgentsAPI.Agent;
  }
}

export interface SessionCreateParams {
  agentId?: string | null;

  avatar?: string | null;

  backgroundColor?: string | null;

  config?: { [key: string]: unknown } | null;

  description?: string | null;

  groupId?: string | null;

  meta?: { [key: string]: unknown } | null;

  pinned?: boolean | null;

  title?: string | null;

  type?: 'agent' | 'group' | null;
}

export interface SessionUpdateParams {
  agentId?: string | null;

  avatar?: string | null;

  backgroundColor?: string | null;

  description?: string | null;

  groupId?: string | null;

  pinned?: boolean | null;

  title?: string | null;

  userId?: string | null;
}

export interface SessionListParams {
  agentId?: string;

  /**
   * Comma-separated session IDs
   */
  ids?: string;

  keyword?: string;

  page?: number;

  pageSize?: number;

  userId?: string;
}

export interface SessionBatchUpdateParams {
  body: Array<SessionBatchUpdateParams.Body>;
}

export namespace SessionBatchUpdateParams {
  export interface Body {
    id: string;

    data: SessionsAPI.UpdateSessionRequest;
  }
}

export interface SessionListGroupedByAgentParams {
  groupBy: 'agent';
}

export declare namespace Sessions {
  export {
    type APIResponseSession as APIResponseSession,
    type APIResponseSessionList as APIResponseSessionList,
    type Session as Session,
    type UpdateSessionRequest as UpdateSessionRequest,
    type SessionListGroupedByAgentResponse as SessionListGroupedByAgentResponse,
    type SessionCreateParams as SessionCreateParams,
    type SessionUpdateParams as SessionUpdateParams,
    type SessionListParams as SessionListParams,
    type SessionBatchUpdateParams as SessionBatchUpdateParams,
    type SessionListGroupedByAgentParams as SessionListGroupedByAgentParams,
  };
}
