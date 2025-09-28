// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lobehub, { toFile } from '@lobehub/openapi-typescript';

const client = new Lobehub({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.files.retrieve('id');
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
    const responsePromise = client.files.list();
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
      client.files.list(
        { fileType: 'fileType', page: 1, pageSize: 1, search: 'search', userId: 'userId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Lobehub.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.files.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('batchGet: only required params', async () => {
    const responsePromise = client.files.batchGet({ fileIds: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('batchGet: required and optional params', async () => {
    const response = await client.files.batchGet({ fileIds: ['string'] });
  });

  // Prism tests are disabled
  test.skip('batchUpload: only required params', async () => {
    const responsePromise = client.files.batchUpload({
      files: [await toFile(Buffer.from('# my file contents'), 'README.md')],
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
  test.skip('batchUpload: required and optional params', async () => {
    const response = await client.files.batchUpload({
      files: [await toFile(Buffer.from('# my file contents'), 'README.md')],
      directory: 'directory',
      knowledgeBaseId: 'knowledgeBaseId',
      sessionId: 'sessionId',
      skipCheckFileType: true,
      skipExist: true,
    });
  });

  // Prism tests are disabled
  test.skip('getPresignedURL', async () => {
    const responsePromise = client.files.getPresignedURL('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPresignedURL: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.getPresignedURL('id', { expiresIn: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Lobehub.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('parseContent', async () => {
    const responsePromise = client.files.parseContent('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('parseContent: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.files.parseContent('id', { skipExist: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Lobehub.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.files.upload({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('upload: required and optional params', async () => {
    const response = await client.files.upload({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      directory: 'directory',
      knowledgeBaseId: 'knowledgeBaseId',
      sessionId: 'sessionId',
      skipCheckFileType: true,
      skipExist: true,
    });
  });
});
