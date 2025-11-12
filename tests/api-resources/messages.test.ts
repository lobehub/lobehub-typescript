// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lobehub from 'lobehub';

const client = new Lobehub({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.messages.create({ content: 'content', role: 'user' });
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
    const response = await client.messages.create({
      content: 'content',
      role: 'user',
      agentId: 'agentId',
      clientId: 'clientId',
      favorite: true,
      files: ['string'],
      metadata: { foo: 'bar' },
      model: 'model',
      observationId: 'observationId',
      parentId: 'parentId',
      provider: 'provider',
      quotaId: 'quotaId',
      reasoning: { foo: 'bar' },
      search: { foo: 'bar' },
      sessionId: 'sessionId',
      threadId: 'threadId',
      tools: { foo: 'bar' },
      topicId: 'topicId',
      traceId: 'traceId',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.messages.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.messages.list();
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
      client.messages.list(
        {
          keyword: 'keyword',
          page: 1,
          pageSize: 1,
          role: 'user',
          sessionId: 'sessionId',
          topicId: 'topicId',
          userId: 'userId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Lobehub.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.messages.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('count', async () => {
    const responsePromise = client.messages.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messages.count({ topicIds: 'topicIds', userId: 'userId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Lobehub.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('deleteBatch: only required params', async () => {
    const responsePromise = client.messages.deleteBatch({ messageIds: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteBatch: required and optional params', async () => {
    const response = await client.messages.deleteBatch({ messageIds: ['string'] });
  });

  // Prism tests are disabled
  test.skip('repies: only required params', async () => {
    const responsePromise = client.messages.repies({ content: 'content', role: 'user' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('repies: required and optional params', async () => {
    const response = await client.messages.repies({
      content: 'content',
      role: 'user',
      agentId: 'agentId',
      clientId: 'clientId',
      favorite: true,
      files: ['string'],
      metadata: { foo: 'bar' },
      model: 'model',
      observationId: 'observationId',
      parentId: 'parentId',
      provider: 'provider',
      quotaId: 'quotaId',
      reasoning: { foo: 'bar' },
      search: { foo: 'bar' },
      sessionId: 'sessionId',
      threadId: 'threadId',
      tools: { foo: 'bar' },
      topicId: 'topicId',
      traceId: 'traceId',
    });
  });
});
