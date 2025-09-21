// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Lobehub } from '../client';

export abstract class APIResource {
  protected _client: Lobehub;

  constructor(client: Lobehub) {
    this._client = client;
  }
}
