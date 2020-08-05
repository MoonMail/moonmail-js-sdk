import fetch from 'cross-fetch';
import {Exception} from './Exception';
import {Config, Contact, Event} from './types';
import {merge, transferKeyToLowerCase, transferKeyToUpperCase} from './utils';

const API_HOST = 'https://contacts.moonmail.io';

export * from './types';

export class MoonMail {
  protected _config: Config = {accountId: ''};

  constructor(config: Config) {
    return this.configure(config);
  }

  static validateConfig(config: Config) {
    if (!config) throw new Error('Please provide config object');
    if (!config.accountId) throw new Error('Please provide accountId');
  }

  static validateContact(contact: Contact) {
    if (!contact) throw new Error('Please provide contact object');
    if (!contact.address) throw new Error('Please provide contact address');
  }

  static validateEvent(event: Event) {
    if (!event) throw new Error('Please provide event object');
    if (!event.eventType) throw new Error('Please provide eventType');
  }

  static async handleErrors(res: Response) {
    const data = await res.json();
    if (!res.ok) {
      if (data.status) throw new Exception(data);
      throw new Exception({statusCode: res.status, message: res.statusText});
    }
    return data;
  }

  request(method: string, path: string, data: Record<string, any>) {
    return fetch(`${API_HOST}/${this._config.accountId}/${path}`, {
      method: method,
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
    }).then(MoonMail.handleErrors);
  }

  configure(config: Config) {
    const newConfig = {...this._config, ...config};
    MoonMail.validateConfig(newConfig);
    this._config = newConfig;
    return this;
  }

  protected _buildContactData(contact?: Contact) {
    let contactData = merge(this._config.contact, contact);
    MoonMail.validateContact(contactData);
    return transferKeyToUpperCase(contactData, [], ['metrics', 'userAttributes', 'attributes']);
  }

  protected _buildEventData(event: Event | string) {
    let eventData;
    if (typeof event === 'string') {
      eventData = {eventType: event};
    } else {
      eventData = event;
    }
    MoonMail.validateEvent(eventData);
    return transferKeyToUpperCase(eventData, [], ['metrics', 'attributes']);
  }

  async updateContact(contact: Contact) {
    const data = this._buildContactData(contact);
    const result = await this.request('post', 'contacts', data);
    return transferKeyToLowerCase(result);
  }

  async triggerEvent(event: Event | Event[] | string | string[], contact?: Contact) {
    let eventsData: Record<string, any>[];
    if (Array.isArray(event)) {
      eventsData = (event as Event[]).map((event) => this._buildEventData(event));
    } else {
      eventsData = [this._buildEventData(event)];
    }
    const contactData = this._buildContactData(contact);
    const data = {Contact: contactData, Events: eventsData};
    const result = await this.request('post', 'events', data);
    return transferKeyToLowerCase(result);
  }
}

export const init = (config: Config) => new MoonMail(config);
