export enum ChannelTypes {
  EMAIL = 'EMAIL',
}

enum OptOut {
  ALL = 'ALL',
  NONE = 'NONE',
}

type Attributes = {
  [key: string]: string | number;
};

type Metrics = {
  [key: string]: string | number;
};

type UserAttributes = {
  [key: string]: string | number;
};

type Location = {
  City?: string;
  Country?: string;
  Latitude?: string;
  Longitude?: string;
  PostalCode?: string;
  Region?: string;
};

type Demographic = {
  Make?: string;
  Model?: string;
  ModelVersion?: string;
  Timezone?: string;
  Locale?: string;
  AppVersion?: string;
  Platform?: string;
  PlatformVersion?: string;
};

type Contact = {
  Channel?: ChannelTypes;
  Address: string;
  OptOut?: OptOut;
  UserId?: string;
  Location?: Location;
  Demographic?: Demographic;
  Attributes: Attributes;
  Metrics: Metrics;
  UserAttributes: UserAttributes;
};

type Session = {
  Id?: string;
  Duration?: number;
  StartTimestamp?: string;
  StopTimestamp?: string;
};

type Event = {
  EventType: string;
  Timestamp?: string;
  Session?: Session;
  Attributes: Attributes;
  Metrics: Metrics;
};

export interface MoonMailPutEventsRequest {
  Contact: Contact;
  Events: Event[];
}

export interface MoonMailPutContactsRequest {
  Channel?: ChannelTypes;
  Address: string;
  UserId?: string;
  UserAttributes?: UserAttributes;
  Metrics?: Metrics;
  Attributes?: Attributes;
}
