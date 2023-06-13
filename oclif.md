oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g onesignal-node-sample
$ onesignal-node-sample COMMAND
running command...
$ onesignal-node-sample (--version)
onesignal-node-sample/0.0.0 darwin-arm64 node-v18.16.0
$ onesignal-node-sample --help [COMMAND]
USAGE
  $ onesignal-node-sample COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`onesignal-node-sample hello PERSON`](#onesignal-node-sample-hello-person)
* [`onesignal-node-sample hello world`](#onesignal-node-sample-hello-world)
* [`onesignal-node-sample help [COMMANDS]`](#onesignal-node-sample-help-commands)
* [`onesignal-node-sample plugins`](#onesignal-node-sample-plugins)
* [`onesignal-node-sample plugins:install PLUGIN...`](#onesignal-node-sample-pluginsinstall-plugin)
* [`onesignal-node-sample plugins:inspect PLUGIN...`](#onesignal-node-sample-pluginsinspect-plugin)
* [`onesignal-node-sample plugins:install PLUGIN...`](#onesignal-node-sample-pluginsinstall-plugin-1)
* [`onesignal-node-sample plugins:link PLUGIN`](#onesignal-node-sample-pluginslink-plugin)
* [`onesignal-node-sample plugins:uninstall PLUGIN...`](#onesignal-node-sample-pluginsuninstall-plugin)
* [`onesignal-node-sample plugins:uninstall PLUGIN...`](#onesignal-node-sample-pluginsuninstall-plugin-1)
* [`onesignal-node-sample plugins:uninstall PLUGIN...`](#onesignal-node-sample-pluginsuninstall-plugin-2)
* [`onesignal-node-sample plugins update`](#onesignal-node-sample-plugins-update)

## `onesignal-node-sample hello PERSON`

Say hello

```
USAGE
  $ onesignal-node-sample hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/OneSignalDevelopers/onesignal-node-sample/blob/v0.0.0/dist/commands/hello/index.ts)_

## `onesignal-node-sample hello world`

Say hello world

```
USAGE
  $ onesignal-node-sample hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ onesignal-node-sample hello world
  hello world! (./src/commands/hello/world.ts)
```

## `onesignal-node-sample help [COMMANDS]`

Display help for onesignal-node-sample.

```
USAGE
  $ onesignal-node-sample help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for onesignal-node-sample.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `onesignal-node-sample plugins`

List installed plugins.

```
USAGE
  $ onesignal-node-sample plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ onesignal-node-sample plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `onesignal-node-sample plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ onesignal-node-sample plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ onesignal-node-sample plugins add

EXAMPLES
  $ onesignal-node-sample plugins:install myplugin 

  $ onesignal-node-sample plugins:install https://github.com/someuser/someplugin

  $ onesignal-node-sample plugins:install someuser/someplugin
```

## `onesignal-node-sample plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ onesignal-node-sample plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ onesignal-node-sample plugins:inspect myplugin
```

## `onesignal-node-sample plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ onesignal-node-sample plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ onesignal-node-sample plugins add

EXAMPLES
  $ onesignal-node-sample plugins:install myplugin 

  $ onesignal-node-sample plugins:install https://github.com/someuser/someplugin

  $ onesignal-node-sample plugins:install someuser/someplugin
```

## `onesignal-node-sample plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ onesignal-node-sample plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ onesignal-node-sample plugins:link myplugin
```

## `onesignal-node-sample plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ onesignal-node-sample plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ onesignal-node-sample plugins unlink
  $ onesignal-node-sample plugins remove
```

## `onesignal-node-sample plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ onesignal-node-sample plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ onesignal-node-sample plugins unlink
  $ onesignal-node-sample plugins remove
```

## `onesignal-node-sample plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ onesignal-node-sample plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ onesignal-node-sample plugins unlink
  $ onesignal-node-sample plugins remove
```

## `onesignal-node-sample plugins update`

Update installed plugins.

```
USAGE
  $ onesignal-node-sample plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
