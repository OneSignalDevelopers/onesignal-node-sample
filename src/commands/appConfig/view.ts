import { Args, Command, ux } from '@oclif/core'
import { onesignalClient } from '../../onesignal-client'

export default class View extends Command {
  static description = 'Retrieves an app given an AppID.'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static args = {
    appId: Args.string({
      name: 'appID',
      description: 'The AppID of the application to retrieve.',
      required: true,
    }),
  }

  public async run(): Promise<void> {
    const {
      args: { appId },
    } = await this.parse(View)

    try {
      ux.action.start(`Retrieving app with ID '${appId}'`)
      const result = await onesignalClient.getApp(appId)
      this.logJson(result)
    } catch (error: any) {
      this.logToStderr(`Unable to retrieve app.`, error.message)
    } finally {
      ux.action.stop()
    }
  }
}
