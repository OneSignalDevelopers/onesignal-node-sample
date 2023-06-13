import { Command, Flags, ux } from '@oclif/core'
import { onesignalClient } from '../../onesignal-client'

export default class List extends Command {
  static description = 'describe the command here'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    appId: Flags.string({
      name: 'appID',
      char: 'A',
      description: 'Application ID',
      summary: 'The application ID of the app to send the message.',
      required: true,
    }),
    kind: Flags.string({
      name: 'kind',
      char: 'k',
      summary: 'Kind of notifications to retrieve.',
      options: ['dashboard', 'api', 'journey'],
      default: 'api',
    }),
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

    const kind =
      flags.kind === 'dashboard'
        ? 0
        : flags.kind === 'api'
        ? 1
        : flags.kind === 'journey'
        ? 3
        : undefined

    try {
      ux.action.start(`Retrieving notifications for app '${flags.appId}'`)
      const result = await onesignalClient.getNotifications(
        flags.appId,
        flags.limit,
        flags.offset,
        kind
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
}
