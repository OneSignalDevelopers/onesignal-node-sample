# OneSignal NodeJS-Push-Notifications-Sample

<p>
  <a href="https://github.com/OneSignal/onesignal-expo-plugin/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://twitter.com/onesignaldevs" target="_blank">
    <img alt="Twitter: onesignaldevelopers" src="https://img.shields.io/twitter/follow/onesignaldevs?style=social" />
  </a>
</p>

This sample NodeJS app demonstrates how to send push notifications to your app using the [OneSignal NodeJS SDK Client library](https://github.com/OneSignal/node-onesignal).

This project was generated with [NodeJS](https://nodejs.org/de/blog/release/v14.16.0/) version v14.16.0

Take a look at the [OneSignal documentation](https://documentation.onesignal.com/docs) to learn how to integrate OneSignal into your project. After you have integrated OneSignal into your application, you can use NodeJS to send push notification using the OneSignal NodeJS SDK Client Library.

## Development server

- Install the OneSignal NodeJS Client by running `npm install @onesignal/node-onesignal --save` (npm install).

- Run `npm run start` for a dev server. The app will automatically run the `createNotication()` which will make a call to our API to create a notficationwhich will be sent to your app.

### Tokens Builder

To authentificate the app, you will need to use your OneSignal account user auth key and the REST API key. Create a key provider object with the function `getToken()` that returns your key.

```javascript
const user_key_provider = {
    getToken() {
        return  'ONESIGNAL_USER_AUTH_KEY';
    }
};

 const app_key_provider = {
     getToken() {
         return 'ONESIGNAL_REST_API_KEY';
     }
 };
```

### Client Configuration
We can configure the client using the `createConfiguration()` function. The configuration object can be used to set the `user_key_provider` and `app_key_provider` properties.

```javascript
const configuration = OneSignal.createConfiguration({
    authMethods: {
        user_key: {
            tokenProvider: user_key_provider
        },
        app_key: {
            tokenProvider: app_key_provider
        }
    }
});
const client = new OneSignal.DefaultApi(configuration);
```

### Create Notification

Create a push notification and send it to your users of your app.

- [Postman](https://www.postman.com/onesignaldevs/workspace/onesignal-api/request/16845437-c4f3498f-fd80-4304-a6c1-a3234b923f2c)
- [REST API Reference](https://documentation.onesignal.com/reference#create-notification)

```javascript
const notification = new OneSignal.Notification();
notification.app_id = ONESIGNAL_APP_ID;
notification.included_segments = ['Subscribed Users'];
notification.contents = {
  en: "Hello OneSignal!"
};

const {id} = await client.createNotification(notification);
```
### View Notification

View the details from a push notification you have sent using OneSignal.

- [Postman](https://www.postman.com/onesignaldevs/workspace/onesignal-api/request/16845437-6c96ecf0-5882-4eac-a386-0d0cabc8ecd2)
- [REST API Reference](https://documentation.onesignal.com/reference#view-notification)

```javascript
const response = await client.getNotification(ONESIGNAL_APP_ID, id);
console.log(response);
```

### OneSignal Community

#### Join the OneSignal Developers Community
The OneSignal Developer community is a group of passionate individuals who work with OneSignal products. Community members have the opportunity to expand their network and knowledge across different technologies.

#### TWITTER
Follow our [OneSignal Developers Twitter](https://twitter.com/OneSignalDevs) to learn more about OneSignal, technical tips, and the latest events from OneSignal developers.

#### DISCORD SERVER
The OneSignal Developer community gathers on our public chat server, available on Discord. [Our Discord server](https://discord.gg/EP7gf6Uz7G) is a safe environment to network with other members, ask questions, and learn from each other. It is also a place to engage with the OneSignal product development team.
