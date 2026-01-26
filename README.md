# REQtec Website

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Production Builds

Run production builds using `npx`

```bash
npx next build
```

## How To Create a Post

1. Create a new markdown file in `content/posts/` with a kebab-case filename (this becomes the URL slug).
   - Example: `content/posts/2025-report.md` → `/posts/2025-report`
2. Add frontmatter at the top of the file:
   - Required: `date`, `description`, `author`, `tags`, `image`
   - Optional: `ctaLabel`, `ctaHref` (CTA only shows when both are present)
3. Add a single H1 (`# ...`) as the title. The renderer uses it as the page title and removes it from the body.
4. Use `##` headings to create scroll-animated sections.
5. For images:
   - Local: place assets in `public/` and reference as `/images/your-image.png`
   - Remote: use full URLs (`https://...`)
6. To protect a post with an access code, add an environment variable:
   - `your-post-slug=your-secret-code`
   - Or `POST_ACCESS_CODE_YOUR_POST_SLUG=your-secret-code`

### Example Post

```md
---
date: "2025-01-25"
description: "A short summary of the post."
author: "REQtec Team"
tags: ["business", "update"]
image: "/images/2025-report-desks.png"
# ctaLabel: "Contact Us"
# ctaHref: "mailto:info@reqtec.com"
---

# 2025 Year in Review

## Highlights
Content goes here.
```
