# Portfolio — Somtochukwu Osigwe-Daniel

Professional portfolio website showcasing AI/ML engineering projects, algorithms work, and technical skills.

## Tech Stack

- **Framework**: Next.js 16 (React 19, TypeScript)
- **Styling**: Tailwind CSS 4
- **Deployment**: GitHub Pages via GitHub Actions
- **Export**: Static site generation (`output: "export"`)

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## Build & Deploy

The site auto-deploys to GitHub Pages on every push to `main` via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

To build locally:

```bash
npm run build
```

Static output lands in `./out/`.

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Global styles + CSS variables
│   ├── icons.tsx      # Custom SVG icon components
│   ├── layout.tsx     # Root layout with SEO metadata
│   └── page.tsx       # Main portfolio page
```

## Deployment to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings > Pages > Source** and select **GitHub Actions**
3. The workflow will build and deploy automatically on push to `main`

## Customization

All content is defined as data objects at the top of `src/app/page.tsx`:
- `PROJECTS` — project cards
- `SKILLS` — skill categories
- `NAV_LINKS` — navigation items

Update these objects to modify your portfolio content without touching the component structure.
