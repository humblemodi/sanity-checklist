// Sanity Checklist - Content Script
// Injects FAB button into web pages

(function() {
  'use strict';

  // Prevent duplicate injection
  if (document.getElementById('sanity-checklist-fab')) {
    console.log('Sanity Checklist already injected');
    return;
  }

  // Create FAB button
  const fabButton = document.createElement('button');
  fabButton.id = 'sanity-checklist-fab';
  fabButton.className = 'sanity-fab';
  fabButton.setAttribute('aria-label', 'Toggle Sanity Checklist');
  fabButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5ZM3 10V6h4m-1 1h.01"/>
      <rect x="14" y="6" width="7" height="10" rx="2" ry="2"/>
    </svg>
  `;

  // Create sidebar iframe
  const sidebarIframe = document.createElement('iframe');
  sidebarIframe.id = 'sanity-checklist-sidebar';
  sidebarIframe.src = chrome.runtime.getURL('sidebar.html');
  sidebarIframe.style.cssText = 'display: none;';

  // Append to document
  document.body.appendChild(fabButton);
  document.body.appendChild(sidebarIframe);

  // Toggle sidebar
  fabButton.addEventListener('click', () => {
    const isVisible = sidebarIframe.style.display !== 'none';
    sidebarIframe.style.display = isVisible ? 'none' : 'block';
    
    // Send message to sidebar
    if (!isVisible) {
      sidebarIframe.contentWindow.postMessage({ 
        type: 'OPEN_SIDEBAR',
        domain: window.location.hostname 
      }, '*');
    }
  });

  // Listen for messages from sidebar
  window.addEventListener('message', (event) => {
    if (event.data.type === 'CLOSE_SIDEBAR') {
      sidebarIframe.style.display = 'none';
    }
  });

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    if (fabButton && fabButton.parentNode) {
      fabButton.remove();
    }
    if (sidebarIframe && sidebarIframe.parentNode) {
      sidebarIframe.remove();
    }
  });

  console.log('Sanity Checklist initialized');
})();
