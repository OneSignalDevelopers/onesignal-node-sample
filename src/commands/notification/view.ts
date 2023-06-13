import { Args, Command, Flags, ux } from '@oclif/core'
import { onesignalClient } from '../../onesignal-client'

export default class View extends Command {
  static description = 'View message details.'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    appId: Flags.string({
      name: 'appID',
      char: 'A',
      description: 'Application ID',
      summary: 'The application ID of the app to send the message.',
      required: true,
    }),
  }

  static args = {
    notification: Args.string({
      name: 'notification',
      description: 'Notification ID',
      required: true,
    }),
  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(View)

    try {
      ux.action.start(`Retrieving notification with ID '${args.notification}'`)
      const result = await onesignalClient.getNotification(
        flags.appId,
        args.notification
      )
      ux.action.stop()
      this.logJson(result)
    } catch (error) {
      this.logToStderr(
        `Unable to retrieve notification.`,
        (error as Error).message
      )
    }
  }
}
