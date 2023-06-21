import { expect, test } from '@oclif/test'

describe('view-apps', () => {
  test
    .stdout()
    .command(['view-apps'])
    .it('runs hello', (ctx) => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['view-apps', '--name', 'jeff'])
    .it('runs hello --name jeff', (ctx) => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
