import { Flags } from '@oclif/core'
import { integer } from '@oclif/core/lib/flags'

export const name = Flags.custom<string>({
  name: 'name',
  char: 'N',
  summary: 'An internal name to assist with your campaign organization.',
})

export const type = Flags.custom<string>({
  name: 'type',
  char: 't',
  summary: 'What type of notification to create',
  options: ['push', 'email', 'sms'],
  default: 'push',
})

export const emailSubject = Flags.custom<string>({
  name: 'subject',
  char: 'S',
  summary: 'The subject of the email',
  description: 'Email subject',
})

export const emailBody = Flags.custom<string>({
  name: 'body',
  char: 'B',
  summary: 'The body of the email',
  description: 'Email body',
})

export const emailFrom = Flags.custom<string>({
  name: 'from',
  char: 'F',
  summary: 'The email address the email is from',
})

export const kind = Flags.custom<string>({
  name: 'kind',
  char: 'k',
  summary: 'Kind of notifications to retrieve.',
  options: ['dashboard', 'api', 'journey'],
  default: 'api',
})
