# Changelog

All notable changes to IDE3 will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-31

### Added
- Initial release of IDE3
- CLI interface with Commander.js
  - `ide3 init` - Initialize new projects
  - `ide3 create` - Create GUI components
  - `ide3 gui` - Launch Electron-based GUI
  - `ide3 build` - Build projects
  - `ide3 serve` - Development server
- Electron-based GUI interface
  - Project explorer
  - Code editor area
  - Properties panel
  - Quick actions menu
  - Status bar
- C++ native addon support (optional)
  - File parsing
  - Hash calculation
  - System information
- Project scaffolding system
  - Automatic directory structure creation
  - Package.json generation
  - README generation
- Component generation system
  - HTML, CSS, and JavaScript file creation
  - Multiple templates (basic, advanced, custom)
  - Support for different component types
- Documentation
  - Comprehensive README
  - Contributing guidelines
  - Example usage scripts
  - Configuration examples
- Build and serve functionality
  - Build output to custom directories
  - Development server with port configuration
  - Watch mode support (planned)

### Features
- Multi-language support: Node.js, C++, HTML
- Global npm installation support
- Programmatic API for library usage
- Extensible architecture
- Cross-platform compatibility

### Dependencies
- commander: ^11.1.0 - CLI framework
- chalk: ^4.1.2 - Terminal styling
- inquirer: ^8.2.5 - Interactive prompts
- electron: ^27.0.0 - GUI framework
- node-addon-api: ^7.0.0 - C++ addon support (optional)
- node-gyp: ^10.0.0 - Native compilation (optional)

[1.0.0]: https://github.com/Kelushael/https-github.com-Kelushael-ide3/releases/tag/v1.0.0
