/**
 * Renderer Process Script
 * Handles UI interactions and IPC communication
 */

// Use the secure electronAPI exposed via preload script
const electronAPI = window.electronAPI || {
  send: () => console.warn('electronAPI not available'),
  on: () => console.warn('electronAPI not available'),
  once: () => console.warn('electronAPI not available')
};

// DOM Elements
const newProjectBtn = document.getElementById('newProjectBtn');
const openProjectBtn = document.getElementById('openProjectBtn');
const createComponentLink = document.getElementById('createComponentLink');
const buildProjectLink = document.getElementById('buildProjectLink');
const serveProjectLink = document.getElementById('serveProjectLink');
const settingsLink = document.getElementById('settingsLink');
const statusMessage = document.getElementById('statusMessage');
const projectInfo = document.getElementById('projectInfo');

// Event Listeners
newProjectBtn.addEventListener('click', handleNewProject);
openProjectBtn.addEventListener('click', handleOpenProject);
createComponentLink.addEventListener('click', handleCreateComponent);
buildProjectLink.addEventListener('click', handleBuildProject);
serveProjectLink.addEventListener('click', handleServeProject);
settingsLink.addEventListener('click', handleSettings);

// Handler Functions
function handleNewProject() {
  updateStatus('Creating new project...');
  
  // Show dialog or prompt for project details
  const projectName = prompt('Enter project name:', 'my-ide3-project');
  
  if (projectName) {
    updateStatus(`Creating project: ${projectName}`);
    projectInfo.textContent = projectName;
    
    // In a real implementation, this would call the CLI
    setTimeout(() => {
      updateStatus('Project created successfully!');
      showNotification('Success', `Project "${projectName}" created!`);
    }, 1000);
  }
}

function handleOpenProject() {
  updateStatus('Opening project...');
  
  // In a real implementation, this would show a file dialog
  showNotification('Info', 'File dialog would open here');
  updateStatus('Ready');
}

function handleCreateComponent() {
  updateStatus('Creating component...');
  
  const componentName = prompt('Enter component name:', 'MyComponent');
  const componentType = prompt('Enter component type (window/panel/dialog):', 'window');
  
  if (componentName) {
    electronAPI.send('create-component', {
      name: componentName,
      type: componentType
    });
    
    updateStatus(`Creating component: ${componentName}`);
  }
}

function handleBuildProject() {
  updateStatus('Building project...');
  
  electronAPI.send('build-project', {
    output: 'dist'
  });
  
  // Simulate build process
  setTimeout(() => {
    updateStatus('Build completed successfully!');
    showNotification('Success', 'Project built successfully!');
  }, 2000);
}

function handleServeProject() {
  updateStatus('Starting development server...');
  
  // Simulate server start
  setTimeout(() => {
    updateStatus('Server running at http://localhost:8080');
    showNotification('Success', 'Development server started!');
  }, 1000);
}

function handleSettings() {
  updateStatus('Opening settings...');
  showNotification('Info', 'Settings dialog would open here');
}

// Utility Functions
function updateStatus(message) {
  statusMessage.textContent = message;
  console.log('[Status]', message);
}

function showNotification(title, message) {
  // Create a simple notification
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = `
    <strong>${title}</strong>
    <p>${message}</p>
  `;
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: #252526;
    border: 1px solid #007acc;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    min-width: 250px;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// IPC Event Listeners
electronAPI.on('menu-action', (action) => {
  console.log('[Menu Action]', action);
  
  switch (action) {
    case 'new-project':
      handleNewProject();
      break;
    case 'open-project':
      handleOpenProject();
      break;
    case 'create-component':
      handleCreateComponent();
      break;
    case 'build-project':
      handleBuildProject();
      break;
    case 'about':
      showAboutDialog();
      break;
  }
});

electronAPI.on('component-created', (result) => {
  if (result.success) {
    updateStatus('Component created successfully!');
    showNotification('Success', `Component "${result.data.name}" created!`);
  }
});

electronAPI.on('project-built', (result) => {
  if (result.success) {
    updateStatus('Project built successfully!');
    showNotification('Success', 'Build completed!');
  }
});

function showAboutDialog() {
  const aboutHtml = `
    <div style="text-align: center; padding: 20px;">
      <h2 style="color: #007acc;">IDE3</h2>
      <p style="color: #858585;">Version 1.0.0</p>
      <p style="margin-top: 20px;">A powerful CLI tool with GUI creation capabilities</p>
      <p style="margin-top: 10px;">Built with Node.js, Electron, C++, and HTML</p>
      <p style="margin-top: 20px; font-size: 12px; color: #858585;">© 2025 Kelushael</p>
    </div>
  `;
  
  showNotification('About IDE3', aboutHtml.replace(/<[^>]*>/g, ' '));
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialize
console.log('IDE3 Renderer initialized');
updateStatus('Ready');
