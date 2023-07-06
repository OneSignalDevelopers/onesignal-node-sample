import { osClient } from '../../client'
import { appId } from '../../flags/common'
import { Args, Command, ux } from '@oclif/core'

export default class View extends Command {
  static description = 'View message details.'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    appId: appId({ required: true }),
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
      const result = await osClient.getNotification(
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
