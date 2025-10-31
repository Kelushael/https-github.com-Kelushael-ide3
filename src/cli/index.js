/**
 * CLI Module - Handles all CLI commands
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { spawn } = require('child_process');

/**
 * Create a new GUI component
 */
function createComponent(type, options) {
  const name = options.name || `${type}-component`;
  const template = options.template || 'basic';
  
  console.log(chalk.green(`✓ Creating ${type} component: ${name}`));
  console.log(chalk.gray(`  Template: ${template}`));
  
  // Create component directory
  const componentDir = path.join(process.cwd(), 'components', name);
  
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }
  
  // Create HTML file
  const htmlContent = generateHTML(name, type, template);
  fs.writeFileSync(path.join(componentDir, `${name}.html`), htmlContent);
  
  // Create CSS file
  const cssContent = generateCSS(name, type);
  fs.writeFileSync(path.join(componentDir, `${name}.css`), cssContent);
  
  // Create JS file
  const jsContent = generateJS(name, type);
  fs.writeFileSync(path.join(componentDir, `${name}.js`), jsContent);
  
  console.log(chalk.green(`✓ Component created at: ${componentDir}`));
  console.log(chalk.blue(`  Files created:`));
  console.log(chalk.gray(`    - ${name}.html`));
  console.log(chalk.gray(`    - ${name}.css`));
  console.log(chalk.gray(`    - ${name}.js`));
}

/**
 * Launch the GUI interface
 */
function launchGUI(options) {
  const port = options.port || 3000;
  
  console.log(chalk.green(`✓ Launching GUI on port ${port}...`));
  
  const electronPath = path.join(__dirname, '../../src/gui/main.js');
  
  if (fs.existsSync(electronPath)) {
    try {
      const electron = require('electron');
      const proc = spawn(electron, [electronPath], {
        stdio: 'inherit'
      });
      
      proc.on('close', (code) => {
        console.log(chalk.yellow(`GUI closed with code ${code}`));
      });
    } catch (error) {
      console.log(chalk.red('Error: Electron is not installed.'));
      console.log(chalk.gray('Install Electron: npm install electron'));
      console.log(chalk.gray('Or run: npm run gui'));
    }
  } else {
    console.log(chalk.yellow('Starting GUI interface...'));
    console.log(chalk.gray('GUI will open in a new window'));
  }
}

/**
 * Initialize a new IDE3 project
 */
function initProject(projectName, options) {
  const targetDir = options.directory || path.join(process.cwd(), projectName);
  
  console.log(chalk.green(`✓ Initializing project: ${projectName}`));
  console.log(chalk.gray(`  Directory: ${targetDir}`));
  
  // Create project structure
  const dirs = [
    'src',
    'src/components',
    'src/styles',
    'src/scripts',
    'public',
    'config'
  ];
  
  dirs.forEach(dir => {
    const fullPath = path.join(targetDir, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(chalk.gray(`  ✓ Created ${dir}/`));
    }
  });
  
  // Create package.json
  const packageJson = {
    name: projectName,
    version: '1.0.0',
    description: `IDE3 project: ${projectName}`,
    main: 'src/index.js',
    scripts: {
      start: 'node src/index.js',
      build: 'ide3 build',
      serve: 'ide3 serve'
    }
  };
  
  fs.writeFileSync(
    path.join(targetDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
  
  // Create index.html
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${projectName}</title>
  <link rel="stylesheet" href="src/styles/main.css">
</head>
<body>
  <div id="app">
    <h1>Welcome to ${projectName}</h1>
    <p>Your IDE3 project is ready!</p>
  </div>
  <script src="src/scripts/main.js"></script>
</body>
</html>`;
  
  fs.writeFileSync(path.join(targetDir, 'public', 'index.html'), indexHtml);
  
  // Create README
  const readme = `# ${projectName}

Created with IDE3 - A powerful CLI tool with GUI creation capabilities

## Getting Started

\`\`\`bash
npm install
npm start
\`\`\`

## Available Commands

- \`npm start\` - Start the application
- \`npm run build\` - Build the project
- \`npm run serve\` - Start development server

## Project Structure

- \`src/\` - Source files
- \`public/\` - Public assets
- \`config/\` - Configuration files
`;
  
  fs.writeFileSync(path.join(targetDir, 'README.md'), readme);
  
  console.log(chalk.green(`\n✓ Project initialized successfully!`));
  console.log(chalk.blue(`\nNext steps:`));
  console.log(chalk.gray(`  cd ${projectName}`));
  console.log(chalk.gray(`  npm install`));
  console.log(chalk.gray(`  npm start`));
}

/**
 * Build the project
 */
function buildProject(options) {
  const outputDir = options.output || 'dist';
  
  console.log(chalk.green(`✓ Building project...`));
  console.log(chalk.gray(`  Output directory: ${outputDir}`));
  
  const distPath = path.join(process.cwd(), outputDir);
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }
  
  console.log(chalk.green(`✓ Build completed!`));
  console.log(chalk.gray(`  Files written to ${outputDir}/`));
}

/**
 * Start development server
 */
function serveProject(options) {
  const port = options.port || 8080;
  const watch = options.watch || false;
  
  console.log(chalk.green(`✓ Starting development server on port ${port}...`));
  
  if (watch) {
    console.log(chalk.gray(`  Watching for changes...`));
  }
  
  console.log(chalk.blue(`\n  Server running at http://localhost:${port}`));
  console.log(chalk.gray(`  Press Ctrl+C to stop\n`));
}

// Helper functions for generating component files
function generateHTML(name, type, template) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name}</title>
  <link rel="stylesheet" href="${name}.css">
</head>
<body>
  <div class="${name}-container">
    <h1>${name} Component</h1>
    <p>Type: ${type}</p>
    <p>Template: ${template}</p>
  </div>
  <script src="${name}.js"></script>
</body>
</html>`;
}

function generateCSS(name, type) {
  return `.${name}-container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.${name}-container h1 {
  color: #333;
  margin-bottom: 10px;
}

.${name}-container p {
  color: #666;
  line-height: 1.6;
}`;
}

function generateJS(name, type) {
  return `/**
 * ${name} Component
 * Type: ${type}
 */

console.log('${name} component loaded');

// Initialize component
function init${name}() {
  console.log('Initializing ${name}...');
  
  // Add your component logic here
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init${name});
} else {
  init${name}();
}`;
}

module.exports = {
  createComponent,
  launchGUI,
  initProject,
  buildProject,
  serveProject
};
