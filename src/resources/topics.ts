// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TopicsAPI from './topics';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Topics extends APIResource {
  /**
   * Create topic
   */
  create(body: TopicCreateParams, options?: RequestOptions): APIPromise<APIResponseTopic> {
    return this._client.post('/topics', { body, ...options });
  }

  /**
   * Get topic by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<APIResponseTopic> {
    return this._client.get(path`/topics/${id}`, options);
  }

  /**
   * Update topic (partial)
   */
  update(id: string, body: TopicUpdateParams, options?: RequestOptions): APIPromise<APIResponseTopic> {
    return this._client.patch(path`/topics/${id}`, { body, ...options });
  }

  /**
   * List topics
   */
  list(
    query: TopicListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TopicListResponse> {
    return this._client.get('/topics', { query, ...options });
  }

  /**
   * Delete topic
   */
  delete(id: string, options?: RequestOptions): APIPromise<UsersAPI.APIResponseVoid> {
    return this._client.delete(path`/topics/${id}`, options);
  }
}

export interface APIResponseTopic extends UsersAPI.APIResponseBase {
  data?: Topic;
}

export interface Topic {
  id?: string;

  createdAt?: string | null;

  messageCount?: number | null;

  sessionId?: string;

  title?: string;

  updatedAt?: string | null;
}

export interface TopicListResponse extends UsersAPI.APIResponseBase {
  data?: TopicListResponse.Data;
}

export namespace TopicListResponse {
  export interface Data {
    topics: Array<TopicsAPI.Topic>;

    total: number;
  }
}

export interface TopicCreateParams {
  sessionId: string;

  title: string;
}

export interface TopicUpdateParams {
  favorite?: boolean;

  title?: string;
}

export interface TopicListParams {
  keyword?: string;

  page?: number;

  pageSize?: number;

  sessionId?: string;
}

export declare namespace Topics {
  export {
    type APIResponseTopic as APIResponseTopic,
    type Topic as Topic,
    type TopicListResponse as TopicListResponse,
    type TopicCreateParams as TopicCreateParams,
    type TopicUpdateParams as TopicUpdateParams,
    type TopicListParams as TopicListParams,
  };
}
