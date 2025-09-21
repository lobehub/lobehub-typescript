// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MessagesAPI from './messages';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Create message
   */
  create(body: MessageCreateParams, options?: RequestOptions): APIPromise<APIResponseMessage> {
    return this._client.post('/messages', { body, ...options });
  }

  /**
   * Get message by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<APIResponseMessage> {
    return this._client.get(path`/messages/${id}`, options);
  }

  /**
   * List messages
   */
  list(
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get('/messages', { query, ...options });
  }

  /**
   * Delete message by ID
   */
  delete(id: string, options?: RequestOptions): APIPromise<UsersAPI.APIResponseVoid> {
    return this._client.delete(path`/messages/${id}`, options);
  }

  /**
   * Count messages
   */
  count(
    query: MessageCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageCountResponse> {
    return this._client.get('/messages/count', { query, ...options });
  }

  /**
   * Delete messages (batch)
   */
  deleteBatch(
    body: MessageDeleteBatchParams,
    options?: RequestOptions,
  ): APIPromise<MessageDeleteBatchResponse> {
    return this._client.delete('/messages', { body, ...options });
  }

  /**
   * Create message and AI reply
   */
  repies(body: MessageRepiesParams, options?: RequestOptions): APIPromise<APIResponseMessage> {
    return this._client.post('/messages/repies', { body, ...options });
  }
}

export interface APIResponseMessage extends UsersAPI.APIResponseBase {
  data?: Message;
}

export interface CreateMessageRequest {
  content: string;

  role: 'user' | 'system' | 'assistant' | 'tool';

  agentId?: string | null;

  clientId?: string | null;

  favorite?: boolean | null;

  files?: Array<string>;

  metadata?: { [key: string]: unknown } | null;

  model?: string | null;

  observationId?: string | null;

  parentId?: string | null;

  provider?: string | null;

  quotaId?: string | null;

  reasoning?: { [key: string]: unknown } | null;

  search?: { [key: string]: unknown } | null;

  sessionId?: string | null;

  threadId?: string | null;

  tools?: { [key: string]: unknown } | null;

  topicId?: string | null;

  traceId?: string | null;
}

export interface Message {
  id?: string;

  clientId?: string | null;

  content?: string | null;

  createdAt?: string | null;

  favorite?: boolean | null;

  files?: Array<string> | null;

  metadata?: { [key: string]: unknown } | null;

  parentId?: string | null;

  reasoning?: { [key: string]: unknown } | null;

  role?: 'user' | 'system' | 'assistant' | 'tool' | null;

  search?: { [key: string]: unknown } | null;

  sessionId?: string | null;

  tools?: { [key: string]: unknown } | null;

  topicId?: string | null;

  updatedAt?: string | null;
}

export interface MessageListResponse extends UsersAPI.APIResponseBase {
  data?: MessageListResponse.Data;
}

export namespace MessageListResponse {
  export interface Data {
    messages: Array<MessagesAPI.Message>;

    total: number;
  }
}

export interface MessageCountResponse extends UsersAPI.APIResponseBase {
  data?: { [key: string]: unknown };
}

export interface MessageDeleteBatchResponse extends UsersAPI.APIResponseBase {
  data?: { [key: string]: unknown };
}

export interface MessageCreateParams {
  content: string;

  role: 'user' | 'system' | 'assistant' | 'tool';

  agentId?: string | null;

  clientId?: string | null;

  favorite?: boolean | null;

  files?: Array<string>;

  metadata?: { [key: string]: unknown } | null;

  model?: string | null;

  observationId?: string | null;

  parentId?: string | null;

  provider?: string | null;

  quotaId?: string | null;

  reasoning?: { [key: string]: unknown } | null;

  search?: { [key: string]: unknown } | null;

  sessionId?: string | null;

  threadId?: string | null;

  tools?: { [key: string]: unknown } | null;

  topicId?: string | null;

  traceId?: string | null;
}

export interface MessageListParams {
  keyword?: string;

  page?: number;

  pageSize?: number;

  role?: 'user' | 'system' | 'assistant' | 'tool';

  sessionId?: string;

  topicId?: string;

  userId?: string;
}

export interface MessageCountParams {
  /**
   * Comma-separated topic IDs
   */
  topicIds?: string;

  userId?: string;
}

export interface MessageDeleteBatchParams {
  messageIds: Array<string>;
}

export interface MessageRepiesParams {
  content: string;

  role: 'user' | 'system' | 'assistant' | 'tool';

  agentId?: string | null;

  clientId?: string | null;

  favorite?: boolean | null;

  files?: Array<string>;

  metadata?: { [key: string]: unknown } | null;

  model?: string | null;

  observationId?: string | null;

  parentId?: string | null;

  provider?: string | null;

  quotaId?: string | null;

  reasoning?: { [key: string]: unknown } | null;

  search?: { [key: string]: unknown } | null;

  sessionId?: string | null;

  threadId?: string | null;

  tools?: { [key: string]: unknown } | null;

  topicId?: string | null;

  traceId?: string | null;
}

export declare namespace Messages {
  export {
    type APIResponseMessage as APIResponseMessage,
    type CreateMessageRequest as CreateMessageRequest,
    type Message as Message,
    type MessageListResponse as MessageListResponse,
    type MessageCountResponse as MessageCountResponse,
    type MessageDeleteBatchResponse as MessageDeleteBatchResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
    type MessageCountParams as MessageCountParams,
    type MessageDeleteBatchParams as MessageDeleteBatchParams,
    type MessageRepiesParams as MessageRepiesParams,
  };
}
