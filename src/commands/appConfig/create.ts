import { osClient } from '../../client'
import { Command, ux } from '@oclif/core'
import * as OneSignal from '@onesignal/node-onesignal'
import { name } from '../../flags/app'

export default class Create extends Command {
  static description = 'Create a new OneSignal app.'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    name: name(),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Create)

    const app = new OneSignal.App()
    app.name = flags.name

    try {
      ux.action.start('Creating new app')
      const result = await osClient.createApp(app)
      ux.action.stop()
      this.logJson(result)
    } catch (error) {
      this.logToStderr('Unable to create app.', (error as Error).message)
    }
  }
}
