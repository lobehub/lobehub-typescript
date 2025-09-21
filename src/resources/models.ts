// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ModelsAPI from './models';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Models extends APIResource {
  /**
   * Create model
   */
  create(body: ModelCreateParams, options?: RequestOptions): APIPromise<APIResponse> {
    return this._client.post('/models', { body, ...options });
  }

  /**
   * Get model detail
   */
  retrieve(modelID: string, params: ModelRetrieveParams, options?: RequestOptions): APIPromise<APIResponse> {
    const { providerId } = params;
    return this._client.get(path`/models/${providerId}/${modelID}`, options);
  }

  /**
   * Update model (partial)
   */
  update(modelID: string, params: ModelUpdateParams, options?: RequestOptions): APIPromise<APIResponse> {
    const { path_providerId, ...body } = params;
    return this._client.patch(path`/models/${path_providerId}/${modelID}`, { body, ...options });
  }

  /**
   * List models
   */
  list(
    query: ModelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ModelListResponse> {
    return this._client.get('/models', { query, ...options });
  }
}

export interface APIResponse extends UsersAPI.APIResponseBase {
  data?: Model;
}

export interface CreateModel {
  id: string;

  displayName: string;

  providerId: string;

  abilities?: { [key: string]: unknown } | null;

  contextWindowTokens?: number | null;

  description?: string | null;

  enabled?: boolean | null;

  organization?: string | null;

  parameters?: { [key: string]: unknown } | null;

  pricing?: { [key: string]: unknown } | null;

  releasedAt?: string | null;

  sort?: number | null;

  source?: 'remote' | 'custom' | 'builtin' | null;

  type?: 'chat' | 'embedding' | 'tts' | 'stt' | 'image' | 'text2video' | 'text2music' | 'realtime' | null;
}

export interface Model {
  id?: string;

  abilities?: { [key: string]: unknown } | null;

  contextWindowTokens?: number | null;

  createdAt?: string | null;

  description?: string | null;

  displayName?: string;

  enabled?: boolean | null;

  organization?: string | null;

  parameters?: { [key: string]: unknown } | null;

  pricing?: { [key: string]: unknown } | null;

  providerId?: string;

  releasedAt?: string | null;

  sort?: number | null;

  source?: 'remote' | 'custom' | 'builtin' | null;

  type?: 'chat' | 'embedding' | 'tts' | 'stt' | 'image' | 'text2video' | 'text2music' | 'realtime' | null;

  updatedAt?: string | null;
}

export interface ModelListResponse extends UsersAPI.APIResponseBase {
  data?: ModelListResponse.Data;
}

export namespace ModelListResponse {
  export interface Data {
    models: Array<ModelsAPI.Model>;

    total: number;
  }
}

export interface ModelCreateParams {
  id: string;

  displayName: string;

  providerId: string;

  abilities?: { [key: string]: unknown } | null;

  contextWindowTokens?: number | null;

  description?: string | null;

  enabled?: boolean | null;

  organization?: string | null;

  parameters?: { [key: string]: unknown } | null;

  pricing?: { [key: string]: unknown } | null;

  releasedAt?: string | null;

  sort?: number | null;

  source?: 'remote' | 'custom' | 'builtin' | null;

  type?: 'chat' | 'embedding' | 'tts' | 'stt' | 'image' | 'text2video' | 'text2music' | 'realtime' | null;
}

export interface ModelRetrieveParams {
  providerId: string;
}

export interface ModelUpdateParams {
  /**
   * Path param:
   */
  path_providerId: string;

  /**
   * Body param:
   */
  id: string;

  /**
   * Body param:
   */
  displayName: string;

  /**
   * Body param:
   */
  body_providerId: string;

  /**
   * Body param:
   */
  abilities?: { [key: string]: unknown } | null;

  /**
   * Body param:
   */
  contextWindowTokens?: number | null;

  /**
   * Body param:
   */
  description?: string | null;

  /**
   * Body param:
   */
  enabled?: boolean | null;

  /**
   * Body param:
   */
  organization?: string | null;

  /**
   * Body param:
   */
  parameters?: { [key: string]: unknown } | null;

  /**
   * Body param:
   */
  pricing?: { [key: string]: unknown } | null;

  /**
   * Body param:
   */
  releasedAt?: string | null;

  /**
   * Body param:
   */
  sort?: number | null;

  /**
   * Body param:
   */
  source?: 'remote' | 'custom' | 'builtin' | null;

  /**
   * Body param:
   */
  type?: 'chat' | 'embedding' | 'tts' | 'stt' | 'image' | 'text2video' | 'text2music' | 'realtime' | null;
}

export interface ModelListParams {
  keyword?: string;

  page?: number;

  pageSize?: number;
}

export declare namespace Models {
  export {
    type APIResponse as APIResponse,
    type CreateModel as CreateModel,
    type Model as Model,
    type ModelListResponse as ModelListResponse,
    type ModelCreateParams as ModelCreateParams,
    type ModelRetrieveParams as ModelRetrieveParams,
    type ModelUpdateParams as ModelUpdateParams,
    type ModelListParams as ModelListParams,
  };
}
