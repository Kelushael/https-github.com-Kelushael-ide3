#!/usr/bin/env node

/**
 * Post-install script
 * Runs after npm install to set up the environment
 */

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

console.log(chalk.green('\n✓ IDE3 installed successfully!\n'));

console.log(chalk.blue('Available commands:\n'));
console.log(chalk.gray('  ide3 --help          Show all available commands'));
console.log(chalk.gray('  ide3 init <name>     Initialize a new project'));
console.log(chalk.gray('  ide3 create <type>   Create a new component'));
console.log(chalk.gray('  ide3 gui             Launch the GUI interface'));
console.log(chalk.gray('  ide3 build           Build the project'));
console.log(chalk.gray('  ide3 serve           Start development server\n'));

console.log(chalk.yellow('Get started:\n'));
console.log(chalk.gray('  ide3 init my-project'));
console.log(chalk.gray('  cd my-project'));
console.log(chalk.gray('  ide3 gui\n'));

console.log(chalk.cyan('For more information, visit:'));
console.log(chalk.gray('  https://github.com/Kelushael/https-github.com-Kelushael-ide3\n'));
