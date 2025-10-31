#!/usr/bin/env bash

# IDE3 CLI Usage Examples
# This script demonstrates various CLI commands

echo "==================================="
echo "IDE3 CLI Usage Examples"
echo "==================================="
echo ""

# Example 1: Show help
echo "1. Show help"
echo "   Command: ide3 --help"
ide3 --help
echo ""

# Example 2: Initialize a project
echo "2. Initialize a new project"
echo "   Command: ide3 init my-awesome-app"
ide3 init my-awesome-app
echo ""

# Example 3: Create a component
echo "3. Create a component"
echo "   Command: ide3 create component --name Header --template basic"
ide3 create component --name Header --template basic
echo ""

# Example 4: Create a window
echo "4. Create a window"
echo "   Command: ide3 create window --name MainWindow"
ide3 create window --name MainWindow
echo ""

# Example 5: Build project
echo "5. Build the project"
echo "   Command: ide3 build --output production"
ide3 build --output production
echo ""

# Example 6: Start development server
echo "6. Start development server"
echo "   Command: ide3 serve --port 3000 --watch"
echo "   (Press Ctrl+C to stop)"
# ide3 serve --port 3000 --watch
echo ""

# Example 7: Launch GUI
echo "7. Launch GUI interface"
echo "   Command: ide3 gui"
echo "   (This will open the Electron GUI)"
# ide3 gui
echo ""

echo "==================================="
echo "Examples completed!"
echo "==================================="
