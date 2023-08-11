import { Command } from '@oclif/core'
import { ux } from '@oclif/core/lib/cli-ux'
import * as OneSignal from '@onesignal/node-onesignal'
import { osClient } from '../../client'
import { appId } from '../../flags/common'

export default class Create extends Command {
  static description = 'Create a new user.'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    appId: appId({ required: true }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Create)

    const user = new OneSignal.User()
    user.identity = { external_id: 'test_external_id' }

    try {
      ux.action.start('Creating new user')
      const result = await osClient.createUser(flags.appId, user)
      ux.action.stop()

      this.logJson(result)
    } catch (error) {
      this.logToStderr('Unable to create user.', (error as Error).message)
    }
  }
}
