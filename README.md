# IDE3 - Development Environment CLI Tool

A powerful, fully downloadable and clonable CLI tool with GUI creation capabilities. Built with Node.js, C++, HTML, and Electron.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)

## Features

- 🚀 **CLI Interface** - Powerful command-line tools for project management
- 🎨 **GUI Creation** - Create beautiful GUI interfaces with Electron
- 💻 **Multi-language Support** - Node.js, C++, and HTML
- ⚡ **Fast & Efficient** - Native C++ addons for performance-critical operations
- 📦 **Easy Installation** - Install globally via npm
- 🔧 **Project Scaffolding** - Quick project initialization
- 🏗️ **Build Tools** - Integrated build and serve capabilities

## Installation

### Global Installation (Recommended)

```bash
npm install -g ide3
```

### Local Installation

```bash
npm install ide3
```

### Clone & Install from Source

```bash
git clone https://github.com/Kelushael/https-github.com-Kelushael-ide3.git
cd https-github.com-Kelushael-ide3
npm install
npm link
```

## Quick Start

### 1. Initialize a New Project

```bash
ide3 init my-project
cd my-project
```

### 2. Launch the GUI

```bash
ide3 gui
```

### 3. Create a Component

```bash
ide3 create component --name MyComponent --template basic
```

### 4. Build and Serve

```bash
ide3 build
ide3 serve --port 8080
```

## Usage

### CLI Commands

#### `ide3 init [projectName]`

Initialize a new IDE3 project with a complete directory structure.

```bash
ide3 init my-awesome-project
ide3 init --directory ./custom-path
```

**Options:**
- `-d, --directory <dir>` - Target directory for the project

#### `ide3 create <type>`

Create a new GUI component.

```bash
ide3 create component --name Header --template advanced
ide3 create window --name MainWindow
```

**Options:**
- `-n, --name <name>` - Name of the component
- `-t, --template <template>` - Template to use (basic, advanced, custom)

**Types:**
- `component` - Create a reusable component
- `window` - Create a new window
- `panel` - Create a panel
- `dialog` - Create a dialog

#### `ide3 gui`

Launch the IDE3 GUI interface.

```bash
ide3 gui
ide3 gui --port 3000
```

**Options:**
- `-p, --port <port>` - Port to run on (default: 3000)

#### `ide3 build`

Build the project for production.

```bash
ide3 build
ide3 build --output dist
```

**Options:**
- `-o, --output <dir>` - Output directory (default: dist)

#### `ide3 serve`

Start the development server.

```bash
ide3 serve
ide3 serve --port 8080 --watch
```

**Options:**
- `-p, --port <port>` - Port to run on (default: 8080)
- `-w, --watch` - Watch for file changes

### Programmatic Usage

You can also use IDE3 as a library in your Node.js applications:

```javascript
const ide3 = require('ide3');

// Initialize a project
ide3.initProject('my-project', { directory: './projects' });

// Create a component
ide3.createComponent('component', {
  name: 'MyComponent',
  template: 'advanced'
});

// Launch GUI
ide3.launchGUI({ port: 3000 });

// Build project
ide3.buildProject({ output: 'dist' });

// Serve project
ide3.serveProject({ port: 8080, watch: true });
```

## Project Structure

```
my-project/
├── src/
│   ├── components/      # GUI components
│   ├── styles/          # CSS stylesheets
│   └── scripts/         # JavaScript files
├── public/              # Public assets
│   └── index.html       # Main HTML file
├── config/              # Configuration files
├── dist/                # Build output
└── package.json         # Project metadata
```

## Native C++ Addon

IDE3 includes optional C++ native addons for performance-critical operations:

```javascript
const addon = require('ide3/build/Release/ide3_addon');

// Calculate hash
const hash = addon.calculateHash('my-string');

// Get system info
const info = addon.getSystemInfo();

// Parse file
const result = addon.parseFile('/path/to/file');
```

### Building the Native Addon

```bash
npm install -g node-gyp
node-gyp configure
node-gyp build
```

## GUI Interface

The GUI interface provides:

- **Project Explorer** - Browse and manage project files
- **Code Editor** - Edit your code with syntax highlighting
- **Properties Panel** - View and edit component properties
- **Quick Actions** - Access common tasks quickly
- **Status Bar** - Monitor project status

## Development

### Running Tests

```bash
npm test
```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Requirements

- **Node.js** >= 14.0.0
- **npm** >= 6.0.0
- **C++ Compiler** (for native addons, optional)
  - Windows: Visual Studio Build Tools
  - macOS: Xcode Command Line Tools
  - Linux: GCC

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Kelushael**

## Links

- [GitHub Repository](https://github.com/Kelushael/https-github.com-Kelushael-ide3)
- [Issue Tracker](https://github.com/Kelushael/https-github.com-Kelushael-ide3/issues)
- [NPM Package](https://www.npmjs.com/package/ide3)

## Acknowledgments

- Built with [Electron](https://www.electronjs.org/)
- CLI powered by [Commander.js](https://github.com/tj/commander.js)
- Styled with love and care

---

Made with ❤️ by Kelushael