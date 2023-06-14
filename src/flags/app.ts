import { Flags } from '@oclif/core'

export const name = Flags.custom<string>({
  name: 'name',
  char: 'n',
  description: 'The name for your app',
})
