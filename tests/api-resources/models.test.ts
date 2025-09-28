// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lobehub from '@lobehub/openapi-typescript';

const client = new Lobehub({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource models', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.models.create({
      id: 'id',
      displayName: 'displayName',
      providerId: 'providerId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.models.create({
      id: 'id',
      displayName: 'displayName',
      providerId: 'providerId',
      abilities: { foo: 'bar' },
      contextWindowTokens: 0,
      description: 'description',
      enabled: true,
      organization: 'organization',
      parameters: { foo: 'bar' },
      pricing: { foo: 'bar' },
      releasedAt: 'releasedAt',
      sort: 0,
      source: 'remote',
      type: 'chat',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.models.retrieve('modelId', { providerId: 'providerId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.models.retrieve('modelId', { providerId: 'providerId' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.models.update('modelId', {
      path_providerId: 'providerId',
      id: 'id',
      displayName: 'displayName',
      body_providerId: 'providerId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.models.update('modelId', {
      path_providerId: 'providerId',
      id: 'id',
      displayName: 'displayName',
      body_providerId: 'providerId',
      abilities: { foo: 'bar' },
      contextWindowTokens: 0,
      description: 'description',
      enabled: true,
      organization: 'organization',
      parameters: { foo: 'bar' },
      pricing: { foo: 'bar' },
      releasedAt: 'releasedAt',
      sort: 0,
      source: 'remote',
      type: 'chat',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.models.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.models.list({ keyword: 'keyword', page: 1, pageSize: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Lobehub.NotFoundError);
  });
});
