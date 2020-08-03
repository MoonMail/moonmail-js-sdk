export enum ChannelTypes {
  EMAIL = 'EMAIL',
}

export enum OptOut {
  ALL = 'ALL',
  NONE = 'NONE',
}

export type Attributes = {
  [key: string]: string[] | string | undefined;
};

export type Metrics = {
  [key: string]: number | undefined;
};

export type UserAttributes = {
  [key: string]: string[] | string | undefined;
};

export type Location = {
  city?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
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
  optOut?: OptOut;
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

export type Config = {
  accountId?: string;
  contact?: Contact;
};
