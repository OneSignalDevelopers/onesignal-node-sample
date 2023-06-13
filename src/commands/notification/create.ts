import { Args, Command, Flags, ux } from '@oclif/core'
import * as OneSignal from '@onesignal/node-onesignal'
import { onesignalClient } from '../../onesignal-client'

export default class Create extends Command {
  static description = 'Send a message to a user or segment.'

  static examples = [
    '<%= config.bin %> <%= command.id %> --appID <appID> --name "<name>" --type push "<message>"',
  ]

  static flags = {
    appId: Flags.string({
      name: 'appID',
      char: 'A',
      description: 'Application ID',
      summary: 'The application ID of the app to send the message.',
      required: true,
    }),
    name: Flags.string({
      name: 'name',
      char: 'N',
      summary: 'An internal name to assist with your campaign organization.',
      required: true,
    }),
    type: Flags.string({
      name: 'type',
      char: 't',
      summary: 'What type of notification to create',
      required: true,
      options: ['push', 'email', 'sms'],
      default: 'push',
    }),
    subject: Flags.string({
      name: 'subject',
      char: 'S',
      summary: 'The subject of the email',
      description: 'Email subject',
    }),
    body: Flags.string({
      name: 'body',
      char: 'B',
      summary: 'The body of the email',
      description: 'Email body',
    }),
    from: Flags.string({
      name: 'from',
      char: 'F',
      summary: 'The email address the email is from',
    }),
  }

  static args = {
    message: Args.string({
      name: 'message',
      description: 'The content of the message',
      required: true,
    }),
  }

  public async run(): Promise<void> {
    const { flags, args } = await this.parse(Create)

    switch (flags.type) {
      case 'push': {
        const notification = new OneSignal.Notification()
        notification.name = flags.name
        notification.app_id = flags.appId
        notification.contents = {
          en: args.message,
        }
        notification.included_segments = ['Subscribed Users']

        try {
          ux.action.start('Sending push notification')
          const result = await onesignalClient.createNotification(notification)
          ux.action.stop()
          this.logJson(result)
        } catch (error) {
          this.logToStderr(
            'Unable to send push notification.',
            (error as Error).message
          )
        }

        break
      }
      case 'email': {
        const email = new OneSignal.Notification()
        email.email_subject = flags.subject
        email.email_body = flags.body
        email.email_from_address = flags.from
        email.include_email_tokens = ['william@onesignal.com']

        try {
          ux.action.start('Sending email')
          const result = await onesignalClient.createNotification(email)
          ux.action.stop()
          this.logJson(result)
        } catch (error) {
          this.logToStderr('Unable to send email.', (error as Error).message)
        }

        break
      }
    }
  }
}
