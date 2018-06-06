#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const program = require('commander')

program
  .version(require('../package').version)
  .usage('<command> [options]')

program
  .command('create <app-name>')
  .description('create a new project powered by react-node-cli-service')
  .option('-f, --force', 'Overwrite target directory if it exists')
  .action((name, cmd) => {
    require('../lib/create')(name, cleanArgs(cmd))
  })

function cleanArgs (cmd) {
  const args = {}
  cmd.options.forEach(o => {
    const key = o.long.replace(/^--/, '')
    if (typeof cmd[key] !== 'function') {
      args[key] = cmd[key]
    }
  })
  return args
}
