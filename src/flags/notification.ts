import { Flags } from '@oclif/core'

export const name = Flags.custom<string>({
  name: 'name',
  description: 'An internal name to assist with your campaign organization.',
})

export const type = Flags.custom<string>({
  name: 'type',
  description: 'What type of notification to create',
  options: ['push', 'email', 'sms'],
  default: 'push',
})

export const emailSubject = Flags.custom<string>({
  name: 'subject',
  description: 'The subject of the email',
})

export const emailBody = Flags.custom<string>({
  name: 'body',
  description: 'The body of the email',
})

export const emailFrom = Flags.custom<string>({
  name: 'from',
  description: 'The email address the email is from',
})

export const kind = Flags.custom<string>({
  name: 'kind',
  description: 'Kind of notifications to retrieve.',
  options: ['dashboard', 'api', 'journey'],
  default: 'api',
})
