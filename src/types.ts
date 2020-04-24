export enum ChannelTypes {
  EMAIL = 'EMAIL',
}

export type Attributes = {
  [key: string]: string[] | string | null | undefined;
};

export type Metrics = {
  [key: string]: number | null | undefined;
};

export type UserAttributes = {
  [key: string]: string[] | string | null | undefined;
};

export type Location = {
  city?: string | null;
  country?: string | null;
  latitude?: string | null;
  longitude?: number | null;
  postalCode?: number | null;
  region?: string | null;
};

export type Demographic = {
  make?: string | null;
  model?: string | null;
  modelVersion?: string | null;
  timezone?: string | null;
  locale?: string | null;
  appVersion?: string | null;
  platform?: string | null;
  platformVersion?: string | null;
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
  id?: string | null;
  duration?: number | null;
  startTimestamp?: string | null;
  stopTimestamp?: string | null;
};

export type Event = {
  eventType: string;
  timestamp?: string | null;
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
