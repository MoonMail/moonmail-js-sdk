const exampleResponseEvents = {
  ResponseMetadata: {
    RequestId: '618822a1-95c0-5c74-8895-744b618e9eaf',
  },
  MD5OfMessageBody: 'be9aca9f7472aac45b4095f2b6267248',
  MessageId: '54efa44e-3f77-400a-8d5d-84ebdd8a9336',
};

const exampleErrorEvents = {
  status: 'UnprocessableEntityError',
  statusCode: 422,
  message:
    '"EventType" with value "_campaign.open__foo" fails to match the required pattern: /^(?!_).+/',
  details: [
    {
      message:
        '"EventType" with value "_campaign.open__foo" fails to match the required pattern: /^(?!_).+/',
      path: ['body', 'Events', 0, 'EventType'],
      type: 'string.regex.base',
      context: {
        pattern: {},
        value: '_campaign.open__foo',
        key: 'EventType',
        label: 'EventType',
      },
    },
  ],
};

const exampleResponseContacts = {
  ResponseMetadata: {
    RequestId: '618822a1-95c0-5c74-8895-744b618e9eaf',
  },
  MD5OfMessageBody: 'be9aca9f7472aac45b4095f2b6267248',
  MessageId: '54efa44e-3f77-400a-8d5d-84ebdd8a9336',
};

const exampleErrorContacts = {
  status: 'UnprocessableEntityError',
  statusCode: 422,
  message: '"body" must be an object',
  details: [
    {
      message: '"body" must be an object',
      path: ['body'],
      type: 'object.base',
      context: {
        value: null,
        key: 'body',
        label: 'body',
      },
    },
  ],
};

export const putEvents = () => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      resolve({ data: exampleResponseEvents });
      reject(exampleErrorEvents);
    });
  });
};

export const putContacts = () => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      resolve({ data: exampleResponseContacts });
      reject(exampleErrorContacts);
    });
  });
};
