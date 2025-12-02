# Minimal Tailwind + Vite + Decap CMS Template

A lightweight, clean, and customizable starter template for building modern websites using:

- Vite + React
- Tailwind CSS
- Modular section layouts
- Decap CMS
- JSON-driven content

This repo is designed to be cloned and reused for future projects with minimal setup.

## Getting Started

### 1. Clone the Template

```
git clone YOUR_REPO_URL my-new-project
cd my-new-project
```

Remove the old Git history:

```
rm -rf .git
git init
```

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

Your site runs at: http://localhost:5173

## Project Structure

```
src/
  components/
  content/
  styles/
public/uploads/
public/admin/
```

## Content Editing

All visible site content lives in `src/content/*`.

## Section Layouts

```
full | boxed | edge | tight | none | split | wide
```

## Hero Layout Types

```
centered | image-left | image-right | image-bg
```

## Theme Colors

Defined in `src/styles/theme.css`.

## Using This Template for New Projects

1. Update project name.
2. Replace JSON content.
3. Replace images.
4. Update CMS config.

## Decap CMS Setup

Local CMS URL: http://localhost:5173/admin/

### Deploy to Netlify

Enable Identity → Enable Git Gateway → Invite yourself.

### Required Redirects

```
/admin/*                  /admin/index.html   200
/.netlify/identity/*      /.netlify/identity/:splat   200
/*                        /index.html         200
```

## Commands

```
npm install
npm run dev
npm run build
npm run preview
npm run format
```
