export enum ChannelTypes {
  EMAIL = 'EMAIL',
}

export type Attributes = {
  [key: string]: string[] | string;
};

export type Metrics = {
  [key: string]: number;
};

export type UserAttributes = {
  [key: string]: string[] | string;
};

export type Location = {
  city?: string;
  country?: string;
  latitude?: string;
  longitude?: string;
  postalCode?: string;
  region?: string;
};

export type Demographic = {
  make?: string;
  model?: string;
  modelVersion?: string;
  timezone?: string;
  locale?: string;
  appVersion?: string;
  platform?: string;
  platformVersion?: string;
};

export type Contact = {
  channel?: ChannelTypes;
  address?: string;
  userId?: string;
  location?: Location;
  demographic?: Demographic;
  attributes?: Attributes;
  metrics?: Metrics;
  userAttributes?: UserAttributes;
};

export type Session = {
  id?: string;
  duration?: number;
  startTimestamp?: string;
  stopTimestamp?: string;
};

export type Event = {
  eventType: string;
  timestamp?: string;
  session?: Session;
  attributes?: Attributes;
  metrics?: Metrics;
};

export interface MoonMailPutEventsRequest {
  contact: Contact;
  events: Event[];
}

export interface MoonMailPutContactsRequest {
  channel?: ChannelTypes;
  address: string;
  userId?: string;
  userAttributes?: UserAttributes[];
  metrics?: Metrics[];
  attributes?: Attributes[];
}

export type Config = {
  accountId?: string;
  contact?: Contact;
};
