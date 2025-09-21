// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AgentsAPI from './agents';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Create agent
   */
  create(body: AgentCreateParams, options?: RequestOptions): APIPromise<APIResponseAgent> {
    return this._client.post('/agents', { body, ...options });
  }

  /**
   * Get agent by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<APIResponseAgent> {
    return this._client.get(path`/agents/${id}`, options);
  }

  /**
   * Update agent (partial)
   */
  update(id: string, body: AgentUpdateParams, options?: RequestOptions): APIPromise<APIResponseAgent> {
    return this._client.patch(path`/agents/${id}`, { body, ...options });
  }

  /**
   * List agents
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get('/agents', { query, ...options });
  }

  /**
   * Delete agent
   */
  delete(id: string, options?: RequestOptions): APIPromise<UsersAPI.APIResponseVoid> {
    return this._client.delete(path`/agents/${id}`, options);
  }
}

export interface Agent {
  id: string;

  accessedAt?: string | null;

  avatar?: string | null;

  chatConfig?: { [key: string]: unknown } | null;

  createdAt?: string | null;

  description?: string | null;

  model?: string | null;

  params?: { [key: string]: unknown } | null;

  provider?: string | null;

  systemRole?: string | null;

  title?: string | null;

  updatedAt?: string | null;
}

export interface APIResponseAgent extends UsersAPI.APIResponseBase {
  data?: Agent;
}

export interface CreateAgent {
  title: string;

  avatar?: string | null;

  chatConfig?: { [key: string]: unknown } | null;

  description?: string | null;

  model?: string | null;

  params?: { [key: string]: unknown } | null;

  provider?: string | null;

  systemRole?: string | null;
}

export interface AgentListResponse extends UsersAPI.APIResponseBase {
  data?: AgentListResponse.Data;
}

export namespace AgentListResponse {
  export interface Data {
    agents: Array<AgentsAPI.Agent>;

    total: number;
  }
}

export interface AgentCreateParams {
  title: string;

  avatar?: string | null;

  chatConfig?: { [key: string]: unknown } | null;

  description?: string | null;

  model?: string | null;

  params?: { [key: string]: unknown } | null;

  provider?: string | null;

  systemRole?: string | null;
}

export interface AgentUpdateParams {
  title: string;

  avatar?: string | null;

  chatConfig?: { [key: string]: unknown } | null;

  description?: string | null;

  model?: string | null;

  params?: { [key: string]: unknown } | null;

  provider?: string | null;

  systemRole?: string | null;
}

export interface AgentListParams {
  keyword?: string;

  page?: number;

  pageSize?: number;
}

export declare namespace Agents {
  export {
    type Agent as Agent,
    type APIResponseAgent as APIResponseAgent,
    type CreateAgent as CreateAgent,
    type AgentListResponse as AgentListResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
  };
}
