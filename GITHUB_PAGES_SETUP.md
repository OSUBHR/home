# GitHub Pages Configuration for Buckeyes for Harm Reduction Website

## Setup Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Create a new repository named `bhr_website`
3. Set it as public (required for GitHub Pages)

### 2. Push Your Code

```bash
# Navigate to your project directory
cd bhr_website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: BHR website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/bhr_website.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section on the left sidebar
4. Under "Source", select **main** branch
5. Click **Save**

Your site will be available at: `https://YOUR_USERNAME.github.io/bhr_website/`

### 4. Custom Domain (Optional)

If you want to use a custom domain:

1. In the **Pages** settings
2. Add your custom domain under "Custom domain"
3. Follow GitHub's instructions to configure your domain's DNS

## Maintenance

### Updating Content

1. Edit HTML files locally
2. Test in your browser
3. Commit changes: `git add . && git commit -m "Update message"`
4. Push: `git push origin main`
5. GitHub Pages will automatically rebuild

### Keeping Records

This is a simple static site, so:
- No database needed
- No backend required
- All content is in HTML files
- Easy to version control and backup

## Additional GitHub Pages Features

### Jekyll Support

If you want to use Jekyll (GitHub Pages default static site generator), you can:

1. Create a `_config.yml` file in the root
2. Use Jekyll themes
3. Simplify future maintenance

However, the current HTML/CSS/JS approach works great as-is!

### CI/CD Pipeline (Optional)

For automated deployments, you can create a `.github/workflows/deploy.yml` file.

## Troubleshooting

### Site not showing up?

- Check repository is public
- Verify GitHub Pages is enabled in settings
- Wait 2-3 minutes for GitHub to build
- Check Actions tab for build errors

### 404 errors on subpages?

- Ensure all file paths are relative (use `../` correctly)
- Check that files exist in the right folders
- Verify no typos in file names

### Styling not loading?

- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path is correct
- Verify GitHub Pages has processed the files

## Questions?

For help with GitHub Pages:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Community](https://github.community/)

For help with the BHR website:
- Contact: osubhr@osu.edu
