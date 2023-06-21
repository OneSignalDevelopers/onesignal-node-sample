import { Flags } from '@oclif/core'

export const aliasLabel = Flags.custom<string>({
  name: 'aliasLabel',
  description: 'The key or type of alias to look up.',
})

export const aliasId = Flags.custom<string>({
  name: 'aliasId',
  description: 'The ID for the given alias label.',
})
