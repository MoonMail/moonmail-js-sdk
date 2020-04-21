import { MoonMail } from '../src/index';
require('dotenv').config();

describe('MoonMail instance', () => {
  it('should initialize correctly', () => {
    const accountId = process.env.TEST_ACCOUNT_ID as string;
    const mm = new MoonMail(accountId);
    expect(mm.getAccountId()).toBe(accountId);
  });
});
