import { putEvents, putContacts } from './utils';
import { MoonMailPutEventsRequest, MoonMailPutContactsRequest } from './types';

/**
 * Initialize an instance of MoonMail using the provided account.
 * Note that we curry all of our methods to initialize them.
 * @param accountId The account to which the contacts and events belong to
 */
export class MoonMail {
  protected accountId = '';
  constructor(accountId: string) {
    this.accountId = accountId;
  }

  getAccountId() {
    return this.accountId;
  }

  putEvents(data: MoonMailPutEventsRequest) {
    return putEvents(this.accountId, data);
  }

  putContacts(data: MoonMailPutContactsRequest[] | MoonMailPutContactsRequest) {
    return putContacts(this.accountId, data);
  }
}

/**
 * Wrapper for MoonMail class
 * @param accountId account ID which will be passed to MoonMail class
 */
export const init = (accountId: string) => {
  return new MoonMail(accountId);
};
