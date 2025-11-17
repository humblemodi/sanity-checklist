# 📋 Sanity Checklist

**Privacy-first, site-specific checklists for your browser.**  
Remember your rituals. Never miss a step. All data stays local.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/humblemodi/sanity-checklist)
[![Chrome](https://img.shields.io/badge/Chrome-Extension-orange.svg)](https://github.com/humblemodi/sanity-checklist)
[![Status](https://img.shields.io/badge/status-in%20development-yellow.svg)](https://github.com/humblemodi/sanity-checklist)

---

## 📑 Table of Contents

- [Why Sanity Checklist?](#-why-sanity-checklist)
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [How It Works](#-how-it-works)
- [Project Structure](#-project-structure)
- [Technical Architecture](#%EF%B8%8F-technical-architecture)
- [Privacy & Security](#-privacy--security)
- [Screenshots](#-screenshots)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [Changelog](#-changelog)
- [License](#-license)
- [Support](#-support)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Why Sanity Checklist?

We all have rituals—steps we follow on specific websites to stay productive, secure, or simply sane. Whether it's your morning routine on a news site, pre-submission checks on a form, or security steps before logging in, **Sanity Checklist** ensures you never forget.

**The problem**: Relying on memory is unreliable. Missing a step can cost time, security, or sanity.

**The solution**: Site-specific checklists that appear exactly when and where you need them—right in your browser.

---

## ✨ Features

- 🔒 **100% Privacy-First**: Zero backend. Zero cloud. Zero tracking. All data stays on your device.
- 🌐 **Site-Specific**: Create unique checklists for each website you visit.
- ⚡ **Instant Access**: Floating button appears on sites with saved checklists—one click to open.
- ✅ **Progress Tracking**: Check off items as you go. See your progress at a glance.
- 🎨 **Minimalistic Design**: Clean, distraction-free interface that doesn't get in your way.
- 🔧 **Fully Local**: Works offline. No internet required after installation.
- 📱 **Responsive UI**: Works seamlessly across different screen sizes.

---

## 🔧 Prerequisites

Before installing Sanity Checklist, ensure you have:

- **Browser**: Google Chrome version 88 or higher (Manifest V3 support)
- **Operating System**: Windows 10+, macOS 10.13+, or Linux (any recent distribution)
- **Permissions**: Ability to enable Developer Mode in Chrome (for source installation)

---

## 🚀 Installation

### Option 1: From Source (Current Method)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/humblemodi/sanity-checklist.git
   cd sanity-checklist
   ```

2. **Load in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable **Developer mode** (toggle in top-right)
   - Click **Load unpacked**
   - Select the `sanity-checklist` folder

3. **Verify Installation**:
   - The Sanity Checklist icon should appear in your extensions toolbar
   - Click it to start creating your first checklist!

### Option 2: Chrome Web Store

🚧 **Coming Soon** - Expected release: Q1 2026

---

## 📖 How It Works

### 1. Create a Checklist

- Visit any website
- Click the Sanity Checklist extension icon
- Enter a checklist name (e.g., "Morning Routine")
- Add your steps/tasks
- Click "Save Checklist"

### 2. Use Your Checklist

- Return to that website anytime
- A floating action button (FAB) appears automatically
- Click it to see your checklist in a sidebar
- Check off items as you complete them
- Your progress is saved automatically

### 3. Manage Checklists

- Edit existing checklists anytime
- Add or remove steps
- Delete checklists you no longer need
- Everything syncs instantly (locally on your device)

---

## 📁 Project Structure

```
sanity-checklist/
├── manifest.json          # Extension configuration (Manifest V3)
├── background.js          # Service worker for extension lifecycle
├── content.js             # Injected script for FAB and sidebar
├── content.css            # Styling for FAB and sidebar
├── sidebar.html           # Main UI container for React app
├── sidebar.js             # React application logic (to be added)
├── .gitignore             # Git ignore rules
├── ICONS.md               # Icon requirements documentation
├── LICENSE                # MIT License
├── README.md              # This file
└── icons/                 # Extension icons (to be created)
    ├── icon16.png         # 16x16 toolbar icon
    ├── icon48.png         # 48x48 extension manager icon
    └── icon128.png        # 128x128 Chrome Web Store icon
```

---

## 🛠️ Technical Architecture

### Key Technologies

- **Manifest V3**: Latest Chrome extension standard
- **Vanilla JavaScript**: For content scripts and background worker
- **React**: For sidebar UI (in development)
- **Chrome Storage API**: Secure local data storage
- **Content Scripts**: Non-intrusive page integration

### Component Breakdown

#### 1. `manifest.json`
- Defines extension metadata and permissions
- Specifies Manifest V3 compliance
- Declares required permissions: `storage`, `activeTab`

#### 2. `background.js`
- Service worker for extension lifecycle management
- Handles installation and update events
- Error logging and monitoring

#### 3. `content.js`
- Injects floating action button (FAB) on matching websites
- Creates sidebar iframe for checklist UI
- Manages message passing between content and sidebar
- Handles cleanup on page unload

#### 4. `content.css`
- Notion-style minimalist design
- FAB styling with hover effects
- Responsive sidebar layout
- Dark mode compatible

#### 5. `sidebar.html`
- Container for React application
- Loads sidebar.js for UI rendering
- Minimal HTML structure for performance

#### 6. `sidebar.js` (In Development)
- React-based checklist UI
- State management for tasks
- CRUD operations for checklists
- Real-time progress tracking

---

## 🔒 Privacy & Security

**Your trust is paramount. Here's our guarantee:**

✅ **Zero Data Collection**: We don't collect, store, or transmit any data.  
✅ **No External Servers**: Everything runs locally on your device.  
✅ **No Analytics**: No tracking. No telemetry. Nothing.  
✅ **Open Source**: Every line of code is public. Audit it yourself.  
✅ **Minimal Permissions**: Only requests what's absolutely necessary.

### Permissions Explained

- **`storage`**: To save your checklists locally using Chrome Storage API
- **`activeTab`**: To know which site you're on (never tracked or stored remotely)

### Data Storage

- All data is stored using `chrome.storage.local`
- Data never leaves your device
- No cloud sync or external APIs
- You can export/clear data anytime (coming in future update)

---

## 📸 Screenshots

> **Note**: Screenshots will be added once the React UI (sidebar.js) is integrated.

### Planned Screenshots:
1. Extension icon in toolbar
2. Creating a new checklist
3. Floating action button on website
4. Sidebar with checklist items
5. Completed checklist view
6. Edit/manage checklists interface

---

## 🐛 Troubleshooting

### Common Issues

#### Issue: Extension icon doesn't appear
**Solution**: 
- Ensure Developer Mode is enabled in `chrome://extensions/`
- Reload the extension
- Check for error messages in the extension details

#### Issue: FAB button not showing on website
**Solution**:
- Verify you've created a checklist for that specific domain
- Refresh the webpage after creating checklist
- Check browser console for errors (F12)

#### Issue: Checklists not saving
**Solution**:
- Check Chrome storage permissions
- Ensure you're not in Incognito mode (unless explicitly enabled)
- Try reinstalling the extension

#### Issue: Sidebar not loading
**Solution**:
- Ensure `sidebar.js` file exists (currently in development)
- Check content security policy in manifest
- Clear browser cache and reload

### Getting Help

If you encounter issues not listed here:
1. Check the [Issues](https://github.com/humblemodi/sanity-checklist/issues) page
2. Search for similar problems
3. Open a new issue with:
   - Chrome version
   - Operating system
   - Steps to reproduce
   - Error messages (if any)

---

## 🤝 Contributing

Contributions are welcome! Whether it's:

- 🐛 Bug reports
- 💡 Feature suggestions
- 🔧 Code improvements
- 📖 Documentation enhancements
- 🎨 UI/UX improvements

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow existing code style
- Add comments for complex logic
- Test thoroughly before submitting
- Update documentation as needed
- One feature per pull request

---

## 📝 Roadmap

### ✅ Completed
- [x] Core extension structure (Manifest V3)
- [x] Site-specific domain detection
- [x] Floating action button (FAB) injection
- [x] Sidebar container setup
- [x] Local storage foundation
- [x] Privacy-first architecture

### 🚧 In Progress
- [ ] React-based sidebar UI (`sidebar.js`)
- [ ] Checklist CRUD operations
- [ ] Progress tracking system
- [ ] Extension icons design

### 🔮 Future Features
- [ ] Keyboard shortcuts (Ctrl+Shift+S to open)
- [ ] Export/Import checklists (JSON format)
- [ ] Checklist templates library
- [ ] Recurring task reminders
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Chrome Web Store release
- [ ] Firefox compatibility
- [ ] Sync across devices (optional, privacy-preserving)

---

## 📋 Changelog

### Version 1.0.0 (In Development)
- Initial repository setup
- Manifest V3 configuration
- Background service worker
- Content script injection
- FAB and sidebar structure
- Privacy documentation
- Comprehensive README

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**What this means**: 
- ✅ You're free to use, modify, and distribute this software
- ✅ You can use it for commercial purposes
- ✅ Just give credit where credit is due
- ❌ No warranty provided

---

## 💬 Support & Feedback

### Report Issues
**Found a bug?** Open an [issue](https://github.com/humblemodi/sanity-checklist/issues)

### Feature Requests
**Have an idea?** We'd love to hear it! Open an issue with the `enhancement` label

### Connect
- **GitHub**: [@humblemodi](https://github.com/humblemodi)
- **X (Twitter)**: [@thehumblemodi](https://x.com/thehumblemodi)
- **Project Discussions**: Coming soon

---

## 🙏 Acknowledgments

Built with ❤️ by **[Humble Modi](https://github.com/humblemodi)**  
*Innovator | Builder | Confidently Humble*

Inspired by the need to bring order to chaos, one checklist at a time.

### Special Thanks
- Chrome Extensions documentation team
- React community for UI patterns
- All future contributors

---

## ⭐ Show Your Support

If Sanity Checklist helps you stay organized:

- ⭐ **Star this repository** to show your support
- 🐦 **Share on social media** to help others discover it
- 💬 **Tell a friend** who could benefit from organized rituals
- 🤝 **Contribute** to make it even better

**Together, let's build tools that solve real problems.**

---

<div align="center">

### Remember your rituals. Never miss a step.

🔒 Privacy-first • 🌐 Site-specific • ✅ Always local

**Made with ❤️ in India**

</div>
