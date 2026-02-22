# Maintainer's Guide

This guide provides step-by-step instructions for setting up the development environment and maintaining this website.

## Prerequisites

Before you begin, you'll need:
- A computer with Windows, macOS, or Linux
- Internet connection
- A GitHub account

## Step 1: Download and Install VS Code

1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Click the **Download** button for your operating system
3. Run the downloaded installer
4. Follow the installation wizard:
   - Accept the license agreement
   - Choose installation location
   - Select additional tasks (recommended: Add "Open with Code" to context menu)
5. Click **Install** and wait for completion
6. Launch VS Code when installation finishes

## Step 2: Install Git

### Windows:
1. Go to [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Download and run the installer
3. Follow the setup wizard with default settings
4. Complete the installation

### macOS:
1. Open Terminal
2. Run: `git --version`
3. If not installed, macOS will prompt you to install Command Line Tools
4. Follow the prompts to install

## Step 3: Clone the Repository

1. Open Terminal in VS Code
2. Navigate to where you want to clone the repository:
   ```bash
   cd path/to/your/folder
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/OSUBHR/home.git
   ```
4. Open the folder: **File** > **Open Folder** and select the cloned repository

## Step 4: Install Live Server Extension

1. In VS Code, click the **Extensions** icon in the left sidebar (or press `Ctrl+Shift+X`)
2. Search for "Live Server" by Ritwick Dey
3. Click **Install**
4. Wait for installation to complete

## Step 5: Launch the Website Locally

1. In VS Code, open the `index.html` file
2. Right-click anywhere in the editor
3. Select **Open with Live Server**
4. Your default browser will open automatically showing the website
5. The page will auto-reload whenever you save changes to any file

## Step 6: Making Changes

1. Edit any file in VS Code
2. Save your changes: `Ctrl+S` (Windows/Linux) or `Cmd+S` (macOS)
3. Using Live Server, the browser will automatically refresh

## Step 7: Committing and Pushing Changes

### Stage Your Changes:
1. Click the **Source Control** icon in the left sidebar (or press `Ctrl+Shift+G`)
2. You'll see a list of changed files
3. Click the **+** icon next to each file to stage it (or click **+** next to "Changes" to stage all)

### Commit Your Changes:
1. Type a descriptive commit message in the message box (e.g., "Update contact page styling")
2. Click the **✓ Commit** button (or press `Ctrl+Enter`)

### Push to GitHub:
1. Click the **...** (More Actions) button in Source Control
2. Select **Push**
3. Or click the **↑** sync icon at the bottom of VS Code
4. Enter your GitHub credentials if prompted

## Troubleshooting

### Live Server Not Working
- Make sure you right-clicked inside an HTML file
- Try closing and reopening VS Code
- Reinstall the Live Server extension

### Git Push Fails
- Check your internet connection
- Verify you have permission to push to the repository
- You may need to set up SSH keys or personal access tokens for authentication

### Changes Not Appearing
- Make sure you saved the file (`Ctrl+S` or `Cmd+S`)
- Check that you're editing the correct file
- If using Live Server, check the console for errors
- Try clearing your browser cache (`Ctrl+Shift+R` or `Cmd+Shift+R`)

### Port Already in Use (Live Server)
- Close other instances of Live Server
- Or go to VS Code Settings and change the Live Server port number

## Useful VS Code Keyboard Shortcuts

- **Open Command Palette:** `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
- **Open Terminal:** `` Ctrl+` `` or `Cmd+` `
- **Save File:** `Ctrl+S` or `Cmd+S`
- **Save All Files:** `Ctrl+K S` or `Cmd+K S`
- **Find in File:** `Ctrl+F` or `Cmd+F`
- **Find in All Files:** `Ctrl+Shift+F` or `Cmd+Shift+F`
- **Toggle Sidebar:** `Ctrl+B` or `Cmd+B`
- **Go to File:** `Ctrl+P` or `Cmd+P`

## Project Structure

```
home/
├── index.html              # Main homepage
├── pages/
│   ├── about.html         # About page
│   ├── contact.html       # Contact page
│   ├── harm-reduction.html # Harm reduction information
│   └── resources.html     # Resources page
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   └── js/
│       └── script.js      # JavaScript functionality
├── package.json           # Project metadata
└── README.md              # Project documentation
```

## Best Practices

1. **Always pull before making changes:** `git pull` to get the latest changes
2. **Test locally before pushing:** Make sure everything works on your local machine
3. **Write clear commit messages:** Describe what you changed and why
4. **Commit frequently:** Small, focused commits are better than large ones
5. **Back up your work:** Commit and push regularly to avoid losing work
6. **Check for errors:** Look at the browser console for JavaScript errors

## Need Help?

- Check the [README.md](README.md) for project-specific information
- Visit [VS Code Documentation](https://code.visualstudio.com/docs)
- Visit [Git Documentation](https://git-scm.com/doc)
- Consult with other maintainers on the team

---

Last updated: February 5, 2026
