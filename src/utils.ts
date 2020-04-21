import { fetch } from 'cross-fetch'
import { MoonMailPutEventsRequest, MoonMailPutContactsRequest } from './types';
require('dotenv').config();

const baseURL = process.env.API_ENDPOINT;

/**
 * Send data to MoonMail putEvents API.
 * @param accountId The account to which the contacts and events belong to
 * @param data The body of the request
 */
export const putEvents = (
  accountId: string,
  data: MoonMailPutEventsRequest
): Promise<Response> => {
  return fetch(`${baseURL}/${accountId}/events`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
};

/**
 * Send data to MoonMail putContacts API.
 * @param accountId The account to which the contacts belong to
 * @param data The body of the request
 */
export const putContacts = (
  accountId: string,
  data: MoonMailPutContactsRequest[] | MoonMailPutContactsRequest
): Promise<Response> => {
  return fetch(`${baseURL}/${accountId}/contacts`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
};
