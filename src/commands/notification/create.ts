import { Args, Command, ux } from '@oclif/core'
import * as OneSignal from '@onesignal/node-onesignal'
import { appId } from '../../flags/common'
import { osClient } from '../../client'
import {
  emailBody,
  emailFrom,
  emailSubject,
  name,
  type,
} from '../../flags/notification'

export default class Create extends Command {
  static description = 'Send a message to a user or segment.'

  static examples = [
    '<%= config.bin %> <%= command.id %> --appID <appID> --name "<name>" --type push "<message>"',
  ]

  static flags = {
    appId: appId({ required: true }),
    name: name(),
    type: type(),
    subject: emailSubject(),
    body: emailBody(),
    from: emailFrom(),
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
          const result = await osClient.createNotification(notification)
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
          const result = await osClient.createNotification(email)
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
