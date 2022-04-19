import * as OneSignal from '@onesignal/node-onesignal';

const ONESIGNAL_APP_ID = 'ONESIGNAL_APP_ID';
/*
 * CREATING ONESIGNAL KEY TOKENS
 */
 const app_key_provider = {
     getToken() {
         return 'ONESIGNAL_REST_API_KEY';
     }
 };
console.log('app_key_provider', app_key_provider.getToken());
 /**
  * CREATING ONESIGNAL CLIENT
  */
const configuration = OneSignal.createConfiguration({
    authMethods: {
        app_key: {
            tokenProvider: app_key_provider
        }
    }
});
const client = new OneSignal.DefaultApi(configuration);

/**
 * CREATE NOTIFICATION
 */
const notification = new OneSignal.Notification();
notification.app_id = ONESIGNAL_APP_ID;
notification.included_segments = ['Subscribed Users'];
notification.contents = {
  en: "Hello OneSignal!"
};

const {id} = await client.createNotification(notification);

/**
 * VIEW NOTIFICATION  
 */
const response = await client.getNotification(ONESIGNAL_APP_ID, id);
console.log(response);