/**
 * IDE3 - Main Entry Point
 * A powerful CLI tool with GUI creation capabilities
 */

module.exports = {
  cli: require('./src/cli'),
  version: require('./package.json').version,
  
  /**
   * Create a new component
   */
  createComponent: function(type, options) {
    return require('./src/cli').createComponent(type, options);
  },
  
  /**
   * Launch the GUI
   */
  launchGUI: function(options) {
    return require('./src/cli').launchGUI(options);
  },
  
  /**
   * Initialize a new project
   */
  initProject: function(projectName, options) {
    return require('./src/cli').initProject(projectName, options);
  },
  
  /**
   * Build the project
   */
  buildProject: function(options) {
    return require('./src/cli').buildProject(options);
  },
  
  /**
   * Serve the project
   */
  serveProject: function(options) {
    return require('./src/cli').serveProject(options);
  }
};
