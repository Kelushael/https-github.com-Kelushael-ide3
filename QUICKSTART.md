# IDE3 Quick Start Guide

Get up and running with IDE3 in minutes!

## Installation

### Option 1: Clone from GitHub (Recommended)

```bash
# Clone the repository
git clone https://github.com/Kelushael/https-github.com-Kelushael-ide3.git
cd https-github.com-Kelushael-ide3

# Install dependencies
npm install

# Link globally (optional)
npm link
```

### Option 2: Install via npm (when published)

```bash
npm install -g ide3
```

## Verify Installation

```bash
# Check version
ide3 --version

# Show help
ide3 --help
```

## Create Your First Project

### 1. Initialize a New Project

```bash
ide3 init my-first-app
cd my-first-app
```

This creates:
```
my-first-app/
├── src/
│   ├── components/
│   ├── styles/
│   └── scripts/
├── public/
│   └── index.html
├── config/
├── package.json
└── README.md
```

### 2. Create a Component

```bash
ide3 create component --name Header --template basic
```

This generates:
- `components/Header/Header.html`
- `components/Header/Header.css`
- `components/Header/Header.js`

### 3. Build Your Project

```bash
ide3 build
```

Output goes to `dist/` directory by default.

### 4. Start Development Server

```bash
ide3 serve --port 8080
```

Open http://localhost:8080 in your browser.

## Launch the GUI

For a visual interface:

```bash
ide3 gui
```

The Electron-based GUI provides:
- 📁 Project explorer
- ✏️ Code editor
- 🎨 Component creator
- ⚙️ Build tools
- 📊 Project dashboard

## Common Commands

| Command | Description | Example |
|---------|-------------|---------|
| `ide3 init <name>` | Create new project | `ide3 init my-app` |
| `ide3 create <type>` | Create component | `ide3 create window --name Settings` |
| `ide3 gui` | Launch GUI | `ide3 gui --port 3000` |
| `ide3 build` | Build project | `ide3 build --output dist` |
| `ide3 serve` | Start dev server | `ide3 serve --port 8080 --watch` |

## Component Types

IDE3 supports multiple component types:

```bash
# Create a reusable component
ide3 create component --name Button

# Create a window
ide3 create window --name MainWindow

# Create a panel
ide3 create panel --name Sidebar

# Create a dialog
ide3 create dialog --name Alert
```

## Templates

Choose from different templates:

- **basic** - Simple component with HTML, CSS, JS
- **advanced** - Feature-rich component with extra functionality
- **custom** - User-defined template

```bash
ide3 create component --name Card --template advanced
```

## Using Programmatically

```javascript
const ide3 = require('ide3');

// Create a project
ide3.initProject('my-app', { directory: './projects' });

// Create a component
ide3.createComponent('component', {
  name: 'MyComponent',
  template: 'basic'
});

// Build
ide3.buildProject({ output: 'build' });
```

## Native C++ Addon (Optional)

Use high-performance native functions:

```javascript
const addon = require('ide3/build/Release/ide3_addon');

// Calculate hash
const hash = addon.calculateHash('my-string');
console.log('Hash:', hash);

// Get system info
const info = addon.getSystemInfo();
console.log('System:', info);
```

## Tips & Tricks

### 1. Use Configuration File

Create `ide3.config.js` in your project:

```javascript
module.exports = {
  build: {
    outputDir: 'build',
    minify: true
  },
  server: {
    port: 3000,
    hotReload: true
  }
};
```

### 2. Custom Templates

Create your own templates in `src/templates/`:

```bash
cp src/templates/basic.html src/templates/mytemplate.html
# Edit mytemplate.html
ide3 create component --name Test --template mytemplate
```

### 3. Batch Operations

Create multiple components at once:

```bash
for comp in Header Footer Sidebar Content; do
  ide3 create component --name $comp
done
```

## Next Steps

- 📖 Read the full [README.md](README.md)
- 🤝 Check [CONTRIBUTING.md](CONTRIBUTING.md) to contribute
- 📝 Review [examples/](examples/) for more usage patterns
- 🔍 Explore the [CHANGELOG.md](CHANGELOG.md)

## Need Help?

- 💬 Open an [issue](https://github.com/Kelushael/https-github.com-Kelushael-ide3/issues)
- 📧 Contact the maintainer
- 📚 Check the documentation

---

**Happy coding with IDE3!** 🚀
