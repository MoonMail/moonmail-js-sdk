import { putEvents, putContacts } from '../src/utils';
import { ChannelTypes } from '../src/types';
require('dotenv').config();

const responseTemplateSuccess = {
  status: 202
};

const accountId = process.env.TEST_ACCOUNT_ID as string;

describe('putEvents', () => {
  it('should correctly insert events and upsert contacts', async () => {
    const payload = {
      Events: [
        {
          EventType: 'Customer.Purchase',
          Attributes: {
            CheckoutId: '12345',
          },
          Metrics: {
            CartTotal: 1000,
          },
        },
      ],
      Contact: {
        Address: 'email@example.com',
        Location: {
          City: 'New York',
          Country: 'USA',
          PostalCode: '10013',
          Region: 'NY',
        },
        Demographic: {
          Timezone: 'America/New_York',
          Locale: 'en_US',
        },
        Attributes: {
          CustomerGroup: 'VIP',
        },
        Metrics: {
          TotalPurchased: 15000,
        },
        UserAttributes: {},
      },
    };
    expect(putEvents(accountId, payload)).resolves.toMatchObject(
      responseTemplateSuccess
    );
  });
});

describe('putContacts', () => {
  it('should correctly upsert contacts', async () => {
    const payload = [
      {
        Channel: ChannelTypes.EMAIL,
        Address: 'example@example.org',
        Attributes:
        {
          CustomerGroup: 'VIP',
        },
        Metrics:
        {
          TotalPurchased: 15000,
        },
        UserAttributes:
        {
          Browser: 'Chrome 52.0',
        },
      },
    ];
    expect(putContacts(accountId, payload)).resolves.toMatchObject(
      responseTemplateSuccess
    );
  });
});
