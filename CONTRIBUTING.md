# Contributing to IDE3

Thank you for your interest in contributing to IDE3! This document provides guidelines and instructions for contributing.

## Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/Kelushael/https-github.com-Kelushael-ide3.git
   cd https-github.com-Kelushael-ide3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

### Prerequisites

- Node.js >= 14.0.0
- npm >= 6.0.0
- C++ compiler (optional, for native addons)

### Running in Development Mode

```bash
# Test CLI commands
node bin/ide3.js --help
node bin/ide3.js init test-project

# Run GUI in development mode
NODE_ENV=development npm run gui
```

### Building Native Addon

If you're working on the C++ native addon:

```bash
npm run install-native
npm run build-native
```

## Code Style

- Follow existing code style in the project
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

## Testing

Before submitting a PR, test your changes:

```bash
# Run tests
npm test

# Test CLI commands manually
node bin/ide3.js init test-project
node bin/ide3.js create component --name TestComponent
node bin/ide3.js build
```

## Submitting Changes

1. **Commit your changes**
   ```bash
   git add .
   git commit -m "Brief description of your changes"
   ```

2. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Provide a clear description of your changes

## Pull Request Guidelines

- **Title**: Use a clear and descriptive title
- **Description**: Explain what changes you made and why
- **Testing**: Describe how you tested your changes
- **Screenshots**: Include screenshots for UI changes

## Reporting Bugs

When reporting bugs, please include:

- IDE3 version
- Node.js version
- Operating system
- Steps to reproduce
- Expected behavior
- Actual behavior
- Error messages or logs

## Feature Requests

We welcome feature requests! Please:

- Check if the feature already exists or is planned
- Clearly describe the feature and its benefits
- Provide examples of how it would be used

## Code of Conduct

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other contributors

## Questions?

Feel free to open an issue for questions or discussions.

Thank you for contributing to IDE3! 🎉
