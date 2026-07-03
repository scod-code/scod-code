# Portfolio — Somtochukwu Osigwe-Daniel

## Context

This is a personal portfolio site for an MSc Robotics and Intelligent Systems student at Nottingham Trent University. The owner's background spans AI/ML engineering, autonomous systems, multi-agent orchestration, and systems-level C++ programming.

## Key Details

- **Degree**: MSc Robotics and Intelligent Systems (Nottingham Trent University, 2024–present)
- **Prior**: Applied Sciences in Engineering (Rutgers University)
- **Focus areas**: Robotics, Autonomous Systems, Generative AI, Multi-Agent Systems, MLOps, LLM Safety
- **GitHub portfolio**: https://github.com/scod-code/engineering_portfolio
- **LinkedIn**: https://www.linkedin.com/in/somtoosigwedaniel/
- **Deploy branch**: `portfolio` (pushes here trigger GitHub Pages deploy)
- **Live URL**: https://scod-code.github.io/scod-code/

## Tech Stack

- Next.js 16, React 19, TypeScript, Tailwind CSS 4
- Static export to `./out/` with `basePath: "/scod-code"`
- GitHub Actions deploys to GitHub Pages

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (static export)
- `npm run lint` — ESLint

## Architecture

Single-page app with all content in `src/app/page.tsx` as data objects (`PROJECTS`, `SKILLS`, `NAV_LINKS`). Icons are custom SVG components in `icons.tsx`. No external component libraries.
