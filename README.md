# MoonMail JS SDK

## Install

```
npm i moonmail-js-sdk --save
```

or

```
yarn add moonmail-js-sdk
```

or load from CDN

```
https://js.moonmail.io/sdk/latest/moonmail.umd.js
```

## Intitialize

```js
import MoonMail from 'moonmail-js-sdk';

const moonmail = new MoonMail({
  accountId: 'YOUR_ACCOUNT_ID',
  // OPTIONAL - Default Contact Information
  contact: {
    address: 'email@example.com', // The unique identifier for the recipient. For example, an address could be a device token, email address, or mobile phone number.
    attributes: {
      // Custom attributes that your app reports to MoonMail. You can use these attributes as selection criteria when you create a segment.
      hobbies: ['piano', 'hiking'],
    },
    demographic: {
      appVersion: 'xxxxxxx', // The version of the application associated with the contact
      locale: 'xxxxxx', // The contact locale in the following format: The ISO 639-1 alpha-2 code, followed by an underscore, followed by an ISO 3166-1 alpha-2 value
      make: 'xxxxxx', // The manufacturer of the contact device, such as Apple or Samsung.
      model: 'xxxxxx', // The model name or number of the contact device, such as iPhone.
      modelVersion: 'xxxxxx', // The model version of the contact device.
      platform: 'xxxxxx', // The platform of the contact device, such as iOS or Android.
      platformVersion: 'xxxxxx', // The platform version of the contact device.
      timezone: 'xxxxxx', // The timezone of the contact. Specified as a tz database value, such as Americas/Los_Angeles.
    },
    location: {
      city: 'xxxxxx', // The city where the contact is located.
      country: 'xxxxxx', // The two-letter code for the country or region of the contact. Specified as an ISO 3166-1 alpha-2 code, such as "US" for the United States.
      latitude: 0, // The latitude of the contact location, rounded to one decimal place.
      longitude: 0, // The longitude of the contact location, rounded to one decimal place.
      postalCode: 'xxxxxx', // The postal code or zip code of the contact.
      region: 'xxxxxx', // The region of the contact location. For example, in the United States, this corresponds to a state.
    },
    metrics: {
      // Custom metrics that your app reports to Amazon Pinpoint.
    },
    /** Indicates whether a user has opted out of receiving messages with one of the following values:
     * ALL - User has opted out of all messages.
     * NONE - Users has not opted out and receives all messages.
     */
    optOut: 'ALL',
    // Customized userId
    userId: 'XXXXXXXXXXXX',
    // User attributes
    userAttributes: {
      interests: ['football', 'basketball', 'AWS'],
      // ...
    },
  },
});
```

## Update contact

```js
moonmail
  .updateContact({
    address: 'email@example.com', // The unique identifier for the recipient. For example, an address could be a device token, email address, or mobile phone number.
    attributes: {
      // Custom attributes that your app reports to MoonMail. You can use these attributes as selection criteria when you create a segment.
      hobbies: ['piano', 'hiking'],
    },
    demographic: {
      appVersion: 'xxxxxxx', // The version of the application associated with the contact
      locale: 'xxxxxx', // The contact locale in the following format: The ISO 639-1 alpha-2 code, followed by an underscore, followed by an ISO 3166-1 alpha-2 value
      make: 'xxxxxx', // The manufacturer of the contact device, such as Apple or Samsung.
      model: 'xxxxxx', // The model name or number of the contact device, such as iPhone.
      modelVersion: 'xxxxxx', // The model version of the contact device.
      platform: 'xxxxxx', // The platform of the contact device, such as iOS or Android.
      platformVersion: 'xxxxxx', // The platform version of the contact device.
      timezone: 'xxxxxx', // The timezone of the contact. Specified as a tz database value, such as Americas/Los_Angeles.
    },
    location: {
      city: 'xxxxxx', // The city where the contact is located.
      country: 'xxxxxx', // The two-letter code for the country or region of the contact. Specified as an ISO 3166-1 alpha-2 code, such as "US" for the United States.
      latitude: 0, // The latitude of the contact location, rounded to one decimal place.
      longitude: 0, // The longitude of the contact location, rounded to one decimal place.
      postalCode: 'xxxxxx', // The postal code or zip code of the contact.
      region: 'xxxxxx', // The region of the contact location. For example, in the United States, this corresponds to a state.
    },
    metrics: {
      // Custom metrics that your app reports to Amazon Pinpoint.
    },
    /** Indicates whether a user has opted out of receiving messages with one of the following values:
     * ALL - User has opted out of all messages.
     * NONE - Users has not opted out and receives all messages.
     */
    optOut: 'ALL',
    // Customized userId
    userId: 'XXXXXXXXXXXX',
    // User attributes
    userAttributes: {
      interests: ['football', 'basketball', 'AWS'],
      // ...
    },
  })
  .then(() => {});
```

## Trigger event

Metric values must be a `Number` type such as a float or integer.
Attribute values must have the type `String` or be an array of strings.

```js
moonmail.triggerEvent('Customer.Purchase');

// With event attributes and metrics
moonmail.triggerEvent({
  eventType: 'Customer.Purchase',
  attributes: {category: 'VIP'},
  metrics: {amount: 1000}, //
});

// Multiple events
moonmail.triggerEvent(['Customer.NewOrder', 'Customer.Purchase']);

moonmail.triggerEvent([
  'Customer.NewOrder',
  {
    eventType: 'Customer.Purchase',
    attributes: {category: 'VIP'},
    metrics: {amount: 1000},
  },
]);

// Update contact attributes and metrics
moonmail.triggerEvent('Auth.OTP', {
  attributes: {OTP: '12345'},
  metrics: {logins: 3},
});
```
