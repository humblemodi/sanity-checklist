// Service Worker for Sanity Checklist Chrome Extension
// Handles extension initialization and basic error logging

console.log('Sanity Checklist: Background service worker initialized');

// Extension installation handler
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Sanity Checklist installed successfully');
  } else if (details.reason === 'update') {
    console.log('Sanity Checklist updated to version', chrome.runtime.getManifest().version);
  }
});

// Error handling for unhandled promise rejections
self.addEventListener('unhandledrejection', (event) => {
  console.error('Sanity Checklist: Unhandled promise rejection:', event.reason);
});

// Basic message handler (if needed for future features)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received in background:', message);
  return false; // No async response needed
});
