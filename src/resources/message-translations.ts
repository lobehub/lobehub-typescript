// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MessageTranslations extends APIResource {
  /**
   * Get translation info for a message
   */
  retrieve(messageID: string, options?: RequestOptions): APIPromise<APIResponseTranslation> {
    return this._client.get(path`/message-translations/${messageID}`, options);
  }

  /**
   * Update translation info for a message
   */
  update(
    messageID: string,
    body: MessageTranslationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<APIResponseTranslation> {
    return this._client.patch(path`/message-translations/${messageID}`, { body, ...options });
  }

  /**
   * Delete translation info for a message
   */
  delete(messageID: string, options?: RequestOptions): APIPromise<UsersAPI.APIResponseVoid> {
    return this._client.delete(path`/message-translations/${messageID}`, options);
  }

  /**
   * Translate a message
   */
  translate(
    messageID: string,
    body: MessageTranslationTranslateParams,
    options?: RequestOptions,
  ): APIPromise<APIResponseTranslation> {
    return this._client.post(path`/message-translations/${messageID}`, { body, ...options });
  }
}

export interface APIResponseTranslation extends UsersAPI.APIResponseBase {
  data?: APIResponseTranslation.Data;
}

export namespace APIResponseTranslation {
  export interface Data {
    id: string;

    userId: string;

    clientId?: string | null;

    content?: string | null;

    from?: string | null;

    to?: string | null;
  }
}

export interface TranslateTrigger {
  from: string;

  to: string;

  model?: string | null;

  provider?: string | null;
}

export interface MessageTranslationUpdateParams {
  from: string;

  to: string;

  translatedContent: string;

  model?: string | null;

  provider?: string | null;
}

export interface MessageTranslationTranslateParams {
  from: string;

  to: string;

  model?: string | null;

  provider?: string | null;
}

export declare namespace MessageTranslations {
  export {
    type APIResponseTranslation as APIResponseTranslation,
    type TranslateTrigger as TranslateTrigger,
    type MessageTranslationUpdateParams as MessageTranslationUpdateParams,
    type MessageTranslationTranslateParams as MessageTranslationTranslateParams,
  };
}
