import { Command } from '@oclif/core'
import { ux } from '@oclif/core/lib/cli-ux'
import { osClient } from '../../client'
import { appId } from '../../flags/common'
import { aliasId, aliasLabel } from '../../flags/user'

export default class Fetch extends Command {
  static description =
    'View a user including their aliases, properties, and subscriptions.'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    appId: appId({ required: true }),
    aliasLabel: aliasLabel({ required: true }),
    aliasId: aliasId({ required: true }),
  }

  public async run(): Promise<void> {
    const {
      flags: { aliasId, aliasLabel, appId },
    } = await this.parse(Fetch)

    try {
      ux.action.start('Creating new user')
      const result = await osClient.fetchUser(appId, aliasLabel, aliasId)
      ux.action.stop()

      this.logJson(result)
    } catch (error) {
      this.logToStderr('Unable to create user.', (error as Error).message)
    }
  }
}
