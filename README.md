# Adeep Kujur – Portfolio Website

A responsive static portfolio for Adeep Kujur, CITS Trainee – Information Technology at NSTI Kanpur. Built with HTML5, CSS3 and Vanilla JavaScript. It runs directly on GitHub Pages without a build step.

## Project structure

```text
adeep-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── ai-smart-file-manager-demo.png
│   │   ├── profile-placeholder.svg
│   │   ├── project-placeholder.svg
│   │   └── favicon.svg
│   └── documents/
│       ├── Adeep_Kujur_Resume.pdf
│       ├── AI_Literacy_Badge.pdf
│       └── README.txt
└── README.md
```

## Preview locally

1. Download and extract this ZIP.
2. Open `index.html` in a browser, or use VS Code Live Server.
3. No npm install, build command, or backend is required.

## Personalize the website

- **Profile photo:** The current page uses `assets/images/profile.jpg`. Replace it with another image and update the image path in `index.html` if needed.
- **Project screenshot:** The project section uses `assets/images/ai-smart-file-manager-demo.png`. This is an illustrative dashboard mockup with sample data, not a screenshot of a completed working application.
- **Resume:** The supplied resume is stored at `assets/documents/Adeep_Kujur_Resume.pdf` and linked from the hero section.
- **Certificate:** The supplied AI Literacy Badge PDF is stored at `assets/documents/AI_Literacy_Badge.pdf`. The portfolio also links to the supplied Credly verification page.
- **Personal details:** Edit the relevant text in `index.html`. Keep contact details and profile URLs accurate.

## Deploy on GitHub Pages

1. Create a GitHub repository, for example `adeep-portfolio`.
2. Upload the **contents** of this folder to the repository root. `index.html` must be at the root level.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then click **Save**.
6. Wait for deployment to complete. The Pages settings screen will show the published website URL.
7. Open the URL and test the site on mobile and desktop.

For a personal site, the repository can be named `USERNAME.github.io`. A project site normally includes the repository name in its URL.

## Troubleshooting

- **404 page:** Confirm Pages is enabled and `index.html` is in the publishing folder.
- **CSS or JavaScript missing:** Check file names and relative paths; GitHub Pages paths are case-sensitive.
- **Images or PDFs missing:** Confirm the assets were uploaded and paths match exactly.
- **Changes not visible:** Wait for the deployment to finish, then refresh the browser.
- **Nested folder issue:** Upload the files and folders inside `adeep-portfolio`, not an extra enclosing folder.

## Notes

- This is a static website. The contact links open email or phone apps; there is no backend contact form.
- Theme preference is saved in the visitor's browser when local storage is available.
- The AI Smart File Manager section describes the proposal and clearly labels the dashboard as an illustrative mockup.
