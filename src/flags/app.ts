import { Flags } from '@oclif/core'

export const name = Flags.custom<string>({
  name: 'name',
  description: 'The name for your app',
})

export const gcmKey = Flags.custom<string>({
  name: 'gcmKey',
  description: 'Your FCM Google Push Server Auth Key',
})

export const gcmSenderId = Flags.custom<string>({
  name: 'gcmSenderId',
  description: 'Your FCM Google Project number',
})

export const chromeWebOrigin = Flags.custom<string>({
  name: 'chromeWebOrigin',
  description:
    'The URL to your website. This field is required if you wish to enable web push and specify other web push parameters.',
})

export const chromeWebDefaultNotificationIcon = Flags.custom<string>({
  name: 'chromeWebDefaultNotificationIcon',
  description: 'The default notification icon.',
})

export const chromeWebSubDomain = Flags.custom<string>({
  name: 'chromeWebSubDomain',
  description:
    'A subdomain of your choice in order to support Web Push on non-HTTPS websites. This field must be set in order for the chrome_web_gcm_sender_id property to be processed.',
})

export const chromeKey = Flags.custom<string>({
  name: 'chromeKey',
  description:
    'Your Google Push Messaging Auth Key if you use Chrome Apps or Extensions.',
})

export const siteName = Flags.custom<string>({
  name: 'siteName',
  description:
    'The Site Name. Requires both chrome_web_origin and safari_site_origin to be set to add or update it.',
})

export const safariSiteOrigin = Flags.custom<string>({
  name: 'safariSiteOrigin',
  description: 'The hostname to your website including https://',
})

export const safariApnsP12 = Flags.custom<string>({
  name: 'safariApnsP12',
  description:
    'Your Apple push notification p12 certificate for Safari Push Notifications, converted to a string and Base64 encoded.',
})

export const safariApnsP12Password = Flags.custom<string>({
  name: 'safariApnsP12Password',
  description: 'Password for safari_apns_p12 certificate.',
})

export const safariIcon = Flags.custom<string>({
  name: 'safariIcon',
  description: 'A url for a 256x256 png notification icon.',
})
