# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Docusaurus-based documentation site for a GitHub/Git workshop aimed at middle school students and above. The site is deployed to GitHub Pages.

## Development Commands

### Local Development
```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Type checking
npm run typecheck
```

### Building & Deployment
```bash
# Build static site
npm run build

# Test production build locally
npm run serve

# Deploy to GitHub Pages
npm run deploy
```

## Architecture

### Technology Stack
- **Framework**: Docusaurus 3.0.1 (React-based static site generator)
- **Language**: JavaScript with JSDoc type annotations
- **Deployment**: GitHub Pages at https://itoksk.github.io/GitHub-demo/

### Key Configuration Files
- `docusaurus.config.js`: Main site configuration including theme, navigation, and deployment settings
- `sidebars.js`: Documentation sidebar structure and organization
- Base URL: `/GitHub-demo/` (for GitHub Pages deployment)

### Content Structure
The documentation is organized into logical sections:
- **Basic Course** (`docs/basics/`): 6-day progressive learning path
- **Advanced Topics** (`docs/advanced/`): Google Apps Script integration, GitHub Classroom
- **Tetris Workshop** (`docs/tetris-workshop/`): Specialized programming workshop
- **License Guide** (`docs/license/`): Software licensing education
- **Resources** (`docs/resources/`): Troubleshooting, glossary, templates

### Important Deployment Notes
- Site is configured for GitHub Pages deployment under the `/GitHub-demo/` path
- Trailing slashes are disabled (`trailingSlash: false`)
- Organization: `itoksk`, Project: `GitHub-demo`
- Broken links are set to warn, not error