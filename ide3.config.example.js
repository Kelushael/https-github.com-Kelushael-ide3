/**
 * IDE3 Configuration File (Example)
 * Copy this file to ide3.config.js and customize for your project
 */

module.exports = {
  // Project metadata
  project: {
    name: 'My IDE3 Project',
    version: '1.0.0',
    description: 'My awesome project built with IDE3'
  },

  // Build configuration
  build: {
    // Output directory for built files
    outputDir: 'dist',
    
    // Source directory
    sourceDir: 'src',
    
    // Public assets directory
    publicDir: 'public',
    
    // Enable minification
    minify: true,
    
    // Enable source maps
    sourceMaps: true
  },

  // Development server configuration
  server: {
    // Port for development server
    port: 8080,
    
    // Host
    host: 'localhost',
    
    // Enable hot reload
    hotReload: true,
    
    // Open browser automatically
    openBrowser: true
  },

  // GUI configuration
  gui: {
    // Window dimensions
    window: {
      width: 1200,
      height: 800,
      minWidth: 800,
      minHeight: 600
    },
    
    // Theme
    theme: 'dark', // 'dark' or 'light'
    
    // Enable developer tools
    devTools: process.env.NODE_ENV === 'development'
  },

  // Component templates
  templates: {
    // Default template for new components
    default: 'basic',
    
    // Available templates
    available: ['basic', 'advanced', 'custom'],
    
    // Custom template directory
    customDir: './templates'
  },

  // Native addon configuration
  native: {
    // Enable native addons
    enabled: false,
    
    // Path to native modules
    modulePath: './build/Release'
  },

  // Plugins
  plugins: [
    // Add custom plugins here
  ],

  // File watching
  watch: {
    // Paths to watch for changes
    paths: ['src/**/*', 'public/**/*'],
    
    // Paths to ignore
    ignore: ['node_modules/**', 'dist/**', 'build/**']
  }
};
