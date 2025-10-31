#!/usr/bin/env node

/**
 * IDE3 - CLI Tool with GUI Creation Capabilities
 * Main entry point for the command-line interface
 */

const { program } = require('commander');
const chalk = require('chalk');
const path = require('path');
const cli = require('../src/cli');

// Package information
const packageJson = require('../package.json');

// Configure the CLI
program
  .name('ide3')
  .description('A powerful CLI tool with GUI creation capabilities for IDE development')
  .version(packageJson.version);

// Command: create - Create a new GUI window
program
  .command('create <type>')
  .description('Create a new GUI window or component')
  .option('-n, --name <name>', 'Name of the component')
  .option('-t, --template <template>', 'Template to use (basic, advanced, custom)')
  .action((type, options) => {
    console.log(chalk.blue('Creating new GUI component...'));
    cli.createComponent(type, options);
  });

// Command: gui - Launch the GUI interface
program
  .command('gui')
  .description('Launch the IDE3 GUI interface')
  .option('-p, --port <port>', 'Port to run on', '3000')
  .action((options) => {
    console.log(chalk.green('Launching GUI interface...'));
    cli.launchGUI(options);
  });

// Command: init - Initialize a new IDE3 project
program
  .command('init [projectName]')
  .description('Initialize a new IDE3 project')
  .option('-d, --directory <dir>', 'Target directory')
  .action((projectName, options) => {
    console.log(chalk.yellow('Initializing new project...'));
    cli.initProject(projectName || 'my-ide3-project', options);
  });

// Command: build - Build the project
program
  .command('build')
  .description('Build the IDE3 project')
  .option('-o, --output <dir>', 'Output directory', 'dist')
  .action((options) => {
    console.log(chalk.cyan('Building project...'));
    cli.buildProject(options);
  });

// Command: serve - Start development server
program
  .command('serve')
  .description('Start the development server')
  .option('-p, --port <port>', 'Port to run on', '8080')
  .option('-w, --watch', 'Watch for changes')
  .action((options) => {
    console.log(chalk.magenta('Starting development server...'));
    cli.serveProject(options);
  });

// Parse command line arguments
program.parse(process.argv);

// Show help if no arguments provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
