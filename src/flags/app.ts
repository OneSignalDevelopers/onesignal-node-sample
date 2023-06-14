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

export const test = () =>
  Flags.integer({
    name: 'test',
  })
