# 📋 Sanity Checklist

**Privacy-first, site-specific checklists for your browser.**  
Remember your rituals. Never miss a step. All data stays local.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/humblemodi/sanity-checklist)

---

## 🎯 Why Sanity Checklist?

We all have rituals—steps we follow on specific websites to stay productive, secure, or simply sane. Whether it's your morning routine on a news site, pre-submission checks on a form, or security steps before logging in, **Sanity Checklist** ensures you never forget.

**The problem**: Relying on memory is unreliable. Missing a step can cost time, security, or sanity.

**The solution**: Site-specific checklists that appear exactly when and where you need them—right in your browser.

---

## ✨ Features

- **🔒 100% Privacy-First**: Zero backend. Zero cloud. Zero tracking. All data stays on your device.
- **🌐 Site-Specific**: Create unique checklists for each website you visit.
- **⚡ Instant Access**: Floating button appears on sites with saved checklists—one click to open.
- **✅ Progress Tracking**: Check off items as you go. See your progress at a glance.
- **🎨 Minimalistic Design**: Clean, distraction-free interface that doesn't get in your way.
- **🔧 Fully Local**: Works offline. No internet required after installation.

---

## 🚀 Installation

### Option 1: From Source (Recommended)

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

3. **Start using**:
   - Click the extension icon in your toolbar
   - Create your first checklist for any website!

### Option 2: Chrome Web Store
*Coming soon!*

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
- A floating button appears automatically
- Click it to see your checklist
- Check off items as you complete them
- Your progress is saved automatically

### 3. Manage Checklists
- Edit existing checklists anytime
- Add or remove steps
- Delete checklists you no longer need
- Everything syncs instantly (locally on your device)

---

## 🎨 Design Philosophy

**Confident. Straightforward. Clarity-focused.**

Sanity Checklist embodies the principles of **Humble Modi**:
- **Minimalistic UI**: No clutter. Only what you need.
- **Exceptional UX**: Intuitive actions. Zero learning curve.
- **Privacy-First**: Your data is yours. Period.
- **Problem-Solving**: Built to solve a real, everyday problem.

---

## 🛠️ Technical Architecture

```
sanity-checklist/
├── manifest.json          # Extension configuration
├── popup.html            # Extension popup UI
├── popup.css             # Popup styling
├── popup.js              # Popup logic
├── content.js            # Injected page scripts
├── content.css           # Content script styling
├── background.js         # Background service worker
├── storage.js            # Local storage management
├── errorHandler.js       # Centralized error handling
├── constants.js          # App-wide constants
└── icons/                # Extension icons
```

### Key Technologies
- **Manifest V3**: Latest Chrome extension standard
- **Vanilla JavaScript**: Zero dependencies. Lightning fast.
- **Chrome Storage API**: Secure local data storage
- **Content Scripts**: Non-intrusive page integration

---

## 🔒 Privacy & Security

**Your trust is paramount. Here's our guarantee:**

✅ **Zero Data Collection**: We don't collect, store, or transmit any data.  
✅ **No External Servers**: Everything runs locally on your device.  
✅ **No Analytics**: No tracking. No telemetry. Nothing.  
✅ **Open Source**: Every line of code is public. Audit it yourself.  
✅ **Minimal Permissions**: Only requests what's absolutely necessary.

**Permissions Explained**:
- `storage`: To save your checklists locally
- `activeTab`: To know which site you're on (never tracked or stored)

---

## 🤝 Contributing

Contributions are welcome! Whether it's:
- 🐛 Bug reports
- 💡 Feature suggestions
- 🔧 Code improvements
- 📖 Documentation enhancements

**How to contribute**:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 Roadmap

- [x] Core checklist functionality
- [x] Site-specific storage
- [x] Floating button UI
- [x] Progress tracking
- [ ] Keyboard shortcuts
- [ ] Export/Import checklists
- [ ] Chrome Web Store release
- [ ] Firefox support
- [ ] Checklist templates
- [ ] Recurring task reminders

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**What this means**: You're free to use, modify, and distribute this software. Just give credit where credit is due.

---

## 💬 Support & Feedback

**Found a bug?** Open an [issue](https://github.com/humblemodi/sanity-checklist/issues).  
**Have a question?** Start a [discussion](https://github.com/humblemodi/sanity-checklist/discussions).  
**Want to connect?** Follow [@thehumblemodi](https://x.com/thehumblemodi) on X.

---

## 🙏 Acknowledgments

Built with ❤️ by **[Humble Modi](https://github.com/humblemodi)**  
*Innovator | Builder | Confidently Humble*

Inspired by the need to bring order to chaos, one checklist at a time.

---

## ⭐ Show Your Support

If Sanity Checklist helps you stay organized, consider:
- ⭐ Starring this repository
- 🐦 Sharing on social media
- 💬 Telling a friend who could use it

**Together, let's build tools that solve real problems.**

---

<p align="center">
  <strong>Remember your rituals. Never miss a step.</strong><br>
  🔒 Privacy-first • 🌐 Site-specific • ✅ Always local
</p>
