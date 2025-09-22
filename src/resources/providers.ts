// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProvidersAPI from './providers';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Providers extends APIResource {
  /**
   * Create provider
   */
  create(body: ProviderCreateParams, options?: RequestOptions): APIPromise<APIResponseProvider> {
    return this._client.post('/providers', { body, ...options });
  }

  /**
   * Get provider detail
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<APIResponseProvider> {
    return this._client.get(path`/providers/${id}`, options);
  }

  /**
   * Update provider (partial)
   */
  update(
    pathID: string,
    body: ProviderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<APIResponseProvider> {
    return this._client.patch(path`/providers/${pathID}`, { body, ...options });
  }

  /**
   * List AI providers
   */
  list(
    query: ProviderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProviderListResponse> {
    return this._client.get('/providers', { query, ...options });
  }

  /**
   * Delete provider
   */
  delete(id: string, options?: RequestOptions): APIPromise<UsersAPI.APIResponseVoid> {
    return this._client.delete(path`/providers/${id}`, options);
  }
}

export interface APIResponseProvider extends UsersAPI.APIResponseBase {
  data?: Provider;
}

export interface CreateProviderRequest {
  id: string;

  checkModel?: string | null;

  config?: { [key: string]: unknown } | null;

  description?: string | null;

  enabled?: boolean | null;

  fetchOnClient?: boolean | null;

  keyVaults?: { [key: string]: string } | null;

  logo?: string | null;

  name?: string | null;

  settings?: { [key: string]: unknown } | null;

  sort?: number | null;

  source?: 'builtin' | 'custom' | null;
}

export interface Provider {
  id?: string;

  checkModel?: string | null;

  config?: { [key: string]: unknown } | null;

  createdAt?: string | null;

  description?: string | null;

  enabled?: boolean | null;

  fetchOnClient?: boolean | null;

  keyVaults?: { [key: string]: string } | null;

  logo?: string | null;

  name?: string | null;

  settings?: { [key: string]: unknown } | null;

  sort?: number | null;

  source?: 'builtin' | 'custom' | null;

  updatedAt?: string | null;
}

export interface ProviderListResponse extends UsersAPI.APIResponseBase {
  data?: ProviderListResponse.Data;
}

export namespace ProviderListResponse {
  export interface Data {
    providers: Array<ProvidersAPI.Provider>;

    total: number;
  }
}

export interface ProviderCreateParams {
  id: string;

  checkModel?: string | null;

  config?: { [key: string]: unknown } | null;

  description?: string | null;

  enabled?: boolean | null;

  fetchOnClient?: boolean | null;

  keyVaults?: { [key: string]: string } | null;

  logo?: string | null;

  name?: string | null;

  settings?: { [key: string]: unknown } | null;

  sort?: number | null;

  source?: 'builtin' | 'custom' | null;
}

export interface ProviderUpdateParams {
  body_id: string;

  checkModel?: string | null;

  config?: { [key: string]: unknown } | null;

  description?: string | null;

  enabled?: boolean | null;

  fetchOnClient?: boolean | null;

  keyVaults?: { [key: string]: string } | null;

  logo?: string | null;

  name?: string | null;

  settings?: { [key: string]: unknown } | null;

  sort?: number | null;

  source?: 'builtin' | 'custom' | null;
}

export interface ProviderListParams {
  enabled?: boolean;

  keyword?: string;

  page?: number;

  pageSize?: number;
}

export declare namespace Providers {
  export {
    type APIResponseProvider as APIResponseProvider,
    type CreateProviderRequest as CreateProviderRequest,
    type Provider as Provider,
    type ProviderListResponse as ProviderListResponse,
    type ProviderCreateParams as ProviderCreateParams,
    type ProviderUpdateParams as ProviderUpdateParams,
    type ProviderListParams as ProviderListParams,
  };
}
