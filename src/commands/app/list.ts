import { Command, ux } from '@oclif/core'
import { osClient } from '../../client'

export default class List extends Command {
  static strict = false
  static description = 'Retrieves apps associated with your account.'
  static examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    const { argv } = await this.parse(List)

    try {
      ux.action.start(`Retrieving apps '${argv.join(' ')}'`)
      const result = await osClient.getApps()
      ux.action.stop()
      this.logJson(result)
    } catch (error) {
      this.logToStderr('Unable to retrieve apps.', (error as Error).message)
    }
  }
}
