import { osClient } from '../../client'
import { appId } from '../../flags/common'
import { Command, ux } from '@oclif/core'

export default class View extends Command {
  static description = 'Retrieves an app given an AppID.'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    appId: appId({ required: true }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(View)

    try {
      ux.action.start(`Retrieving app with ID '${flags.appId}'`)
      const result = await osClient.getApp(flags.appId)
      ux.action.stop()
      this.logJson(result)
    } catch (error) {
      this.logToStderr(`Unable to retrieve app.`, (error as Error).message)
    }
  }
}
