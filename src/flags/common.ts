import { Flags } from '@oclif/core'

export const appId = Flags.custom<string>({
  name: 'appID',
  char: 'A',
  description: 'The application ID of the app to send the message.',
})
