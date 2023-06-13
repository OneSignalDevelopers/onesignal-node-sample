import { Command, Flags, ux } from '@oclif/core'
import * as OneSignal from '@onesignal/node-onesignal'
import { onesignalClient } from '../../onesignal-client'

export default class Create extends Command {
  static description = 'Create a new OneSignal app.'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    name: Flags.string({
      name: 'name',
      char: 'n',
      description: 'The name for your app',
      required: true,
    }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Create)

    const app = new OneSignal.App()
    app.name = flags.name

    try {
      ux.action.start('Creating new app')
      const result = await onesignalClient.createApp(app)
      this.logJson(result)
    } catch (error) {
      this.logToStderr('Unable to create app.', (error as Error).message)
    } finally {
      ux.action.stop()
    }
  }
}
