// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lobehub from '@lobehub/openapi-typescript';

const client = new Lobehub({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messageTranslations', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.messageTranslations.retrieve('messageId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.messageTranslations.update('messageId', {
      from: 'from',
      to: 'to',
      translatedContent: 'translatedContent',
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
    const response = await client.messageTranslations.update('messageId', {
      from: 'from',
      to: 'to',
      translatedContent: 'translatedContent',
      model: 'model',
      provider: 'provider',
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.messageTranslations.delete('messageId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('translate: only required params', async () => {
    const responsePromise = client.messageTranslations.translate('messageId', { from: 'from', to: 'to' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('translate: required and optional params', async () => {
    const response = await client.messageTranslations.translate('messageId', {
      from: 'from',
      to: 'to',
      model: 'model',
      provider: 'provider',
    });
  });
});
