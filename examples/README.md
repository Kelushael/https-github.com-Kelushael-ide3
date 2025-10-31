# IDE3 Examples

This directory contains examples demonstrating how to use IDE3.

## Files

- **basic-usage.js** - Demonstrates programmatic usage of IDE3 as a Node.js library
- **cli-usage.sh** - Shell script showing various CLI commands

## Running the Examples

### Programmatic Usage Example

```bash
node examples/basic-usage.js
```

This example shows how to:
- Initialize a new project
- Create components
- Build projects
- Access IDE3 API

### CLI Usage Example

```bash
./examples/cli-usage.sh
```

Or run commands individually:

```bash
# Initialize a project
ide3 init my-project

# Create a component
ide3 create component --name MyComponent

# Launch GUI
ide3 gui

# Build project
ide3 build

# Start dev server
ide3 serve --port 8080
```

## Example Project Structure

After running `ide3 init my-project`, you'll have:

```
my-project/
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

## Creating Custom Components

### Basic Component

```bash
ide3 create component --name Button --template basic
```

Creates:
- `components/Button/Button.html`
- `components/Button/Button.css`
- `components/Button/Button.js`

### Advanced Component

```bash
ide3 create component --name DataTable --template advanced
```

### Custom Window

```bash
ide3 create window --name Settings
```

## Using the GUI

Launch the Electron-based GUI:

```bash
ide3 gui
```

The GUI provides:
- Visual project management
- Component creation wizard
- Code editor
- Build tools integration
- Project explorer

## Building for Production

```bash
ide3 build --output dist
```

This creates optimized production files in the `dist/` directory.

## Development Server

Start a development server with hot reload:

```bash
ide3 serve --port 8080 --watch
```

Then open http://localhost:8080 in your browser.

## Need Help?

- Run `ide3 --help` for available commands
- Check the main [README.md](../README.md) for full documentation
- Open an issue on GitHub for support
