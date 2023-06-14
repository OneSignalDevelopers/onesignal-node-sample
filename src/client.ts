require('dotenv').config()
import * as OneSignal from '@onesignal/node-onesignal'

const onesignalConfig = OneSignal.createConfiguration({
  appKey: process.env['ONESIGNAL_REST_API_KEY'],
  userKey: process.env['ONESIGNAL_AUTH_KEY'],
})
export const osClient = new OneSignal.DefaultApi(onesignalConfig)
