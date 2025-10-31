/**
 * Basic Usage Example for IDE3
 * Demonstrates how to use IDE3 programmatically
 */

const ide3 = require('../index');

// Example 1: Initialize a new project
console.log('Example 1: Initialize a new project');
console.log('-----------------------------------');
ide3.initProject('example-project', {
  directory: './my-projects'
});
console.log('\n');

// Example 2: Create a component
console.log('Example 2: Create a component');
console.log('----------------------------');
ide3.createComponent('component', {
  name: 'ExampleComponent',
  template: 'basic'
});
console.log('\n');

// Example 3: Build project
console.log('Example 3: Build project');
console.log('----------------------');
ide3.buildProject({
  output: 'build'
});
console.log('\n');

// Example 4: Get IDE3 version
console.log('Example 4: Get IDE3 version');
console.log('-------------------------');
console.log(`IDE3 Version: ${ide3.version}`);
console.log('\n');

console.log('All examples completed successfully!');
