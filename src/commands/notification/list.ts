import { osClient } from '../../client'
import { appId } from '../../flags/common'
import { kind } from '../../flags/notification'
import { Command, Flags, ux } from '@oclif/core'

export default class List extends Command {
  static description = 'describe the command here'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    appId: appId({ required: true }),
    kind: kind(),
    limit: Flags.integer({
      name: 'limit',
      char: 'L',
      summary: 'Number of notifications to return.',
      max: 50,
      min: 1,
    }),
    offset: Flags.integer({
      name: 'offset',
      char: 'O',
      summary: 'Page offset.',
    }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(List)

    try {
      ux.action.start(`Retrieving notifications for app '${flags.appId}'`)
      const result = await osClient.getNotifications(
        flags.appId,
        flags.limit,
        flags.offset,
        this.codeFromKind(flags.kind)
      )
      ux.action.stop()
      this.logJson(result)
    } catch (error) {
      this.logToStderr(
        `Unable to retrieve notifications.`,
        (error as Error).message
      )
    }
  }

  private codeFromKind(kind?: string) {
    switch (kind) {
      case 'dashboard':
        return 0
      case 'api':
        return 1
      case 'journey':
        return 3
      default:
        return undefined
    }
  }
}
