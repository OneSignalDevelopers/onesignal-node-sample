import { Args, Command, ux } from '@oclif/core'
import { appId } from '../../flags/common'
import { aliasId, aliasLabel } from '../../flags/user'
import { osClient } from '../../client'

export default class Delete extends Command {
  static description = 'Delete an existing user.'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    appId: appId({ required: true }),
    aliasLabel: aliasLabel({ default: 'onesignal_id' }),
    aliasId: aliasId({ required: true }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Delete)

    try {
      ux.action.start('Deleting user')
      const result = await osClient.deleteUser(
        flags.appId,
        flags.aliasLabel,
        flags.aliasId
      )
      ux.action.stop()

      this.logJson(result)
    } catch (error) {
      this.logToStderr('Unable to delete user.', (error as Error).message)
    }
  }
}
