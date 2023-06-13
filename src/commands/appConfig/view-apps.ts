import { Command, ux } from '@oclif/core'
import { onesignalClient } from '../../onesignal-client'

export default class ViewApps extends Command {
  static strict = false
  static description = 'Retrieves a collection of apps given a list of AppIDs.'
  static examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    const { argv } = await this.parse(ViewApps)

    if (argv.length < 1) {
      this.log('You must provide a list of AppIDs of the apps to retrieve.')
      return
    }

    try {
      ux.action.start(`Retrieving apps '${argv.join(' ')}'`)
      // const result = await onesignalClient.getApps(argv)
      // this.logJson(result)
    } catch (error) {
      this.logToStderr('Unable to retrieve apps.', (error as Error).message)
    } finally {
      ux.action.stop()
    }
  }
}
