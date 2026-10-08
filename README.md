# Tommaso Tamburini - portfolio website

[![Live site](https://img.shields.io/badge/live-tommasotamburini.com-7cb342)](https://tommasotamburini.com)

Portfolio of **Tommaso Tamburini**, a 2D animator and story artist from Italy who has worked with studios such as Disney, Netflix and Fox Animation. The site presents his animation reels, storyboards, personal projects and a downloadable CV, in English and Italian.

**Live site: [tommasotamburini.com](https://tommasotamburini.com)**

<p align="center">
  <img src="docs/screenshots/biography.webp" alt="The biography page with a portrait and a short presentation" width="88%">
</p>

<table>
  <tr>
    <td width="33%"><img src="docs/screenshots/animation.webp" alt="The animation page: a grid of cards for feature films and series, each opening a video player"></td>
    <td width="33%"><img src="docs/screenshots/storyboard.webp" alt="The storyboard page: a grid of storyboard projects"></td>
    <td width="33%"><img src="docs/screenshots/resume.webp" alt="The resume page with studio logos, a Download CV button and the work experience"></td>
  </tr>
  <tr>
    <td align="center">Animation</td>
    <td align="center">Storyboard</td>
    <td align="center">Resume</td>
  </tr>
</table>

## Features

- **One page per section**: biography (`/`), `/animation`, `/storyboard`, `/personal-projects`, `/resume` and `/contacts`, each with its own title, description, canonical URL and sitemap entry, so search engines can index them and people can share a direct link.
- **Video showcase**: Vimeo players for each production, opened from a card.
- **Storyboard galleries**: image viewer with next and previous controls.
- **English and Italian**: one button switches every text on the page; the choice is remembered while moving between pages.
- **Downloadable CV**: a PDF served by the site itself (`public/cv-tommaso-tamburini.pdf`).
- **Search engine basics**: page metadata, Open Graph and Twitter cards, `schema.org` structured data for the person, a sitemap and `robots.txt`.
- **Built for phones too**: a slim header with a full-screen menu, two-column galleries with the title always visible (there is no hover on a touch screen), big tap targets and swipe in the storyboard viewer. The desktop layout is unchanged.

## Tech stack

| Area      | Tools                                                           |
| --------- | --------------------------------------------------------------- |
| Framework | [Next.js](https://nextjs.org) 16 (App Router) and React 19      |
| Language  | TypeScript                                                      |
| Styling   | Tailwind CSS 4, [shadcn/ui](https://ui.shadcn.com) and Radix UI |
| Icons     | lucide-react                                                    |
| Media     | Vimeo embeds, images from `public/` and Vercel Blob storage     |
| Hosting   | [Vercel](https://vercel.com)                                    |
| Tooling   | pnpm                                                            |

## Getting started

You need Node.js 20.9 or newer and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm start      # serve the production build
```

The first build downloads the Roboto font from Google Fonts, so it needs an internet connection.

## Project layout

```text
app/
  layout.tsx       site-wide metadata, structured data and fonts
  page.tsx         biography (/); animation/, storyboard/, personal-projects/,
                   resume/ and contacts/ hold one page each, with their own metadata
  sitemap.ts       sitemap built from lib/routes.ts
components/
  site-shell.tsx   header (desktop bar and phone menu), footer
  language-provider.tsx  English/Italian state shared by all pages
  sections/        the content of each page and its viewers (lightbox, video players)
  ui/              shadcn/ui components
lib/
  translations.ts  every text, in English and Italian
  data.ts          storyboard, animation, video and sketch lists
  routes.ts        section URLs
public/            images, icons, robots.txt and the CV (cv-tommaso-tamburini.pdf)
scripts/
  generate-cv.py   builds a plain-text CV with reportlab (not used by the site yet)
docs/screenshots/  the pictures used in this README
```

To change a text, edit `lib/translations.ts` (one entry per language); to add a project, edit `lib/data.ts`. To update the CV, replace `public/cv-tommaso-tamburini.pdf`; the Download CV button always points to that file.

## Deployment

The site is deployed on Vercel from the `main` branch; every pull request gets a preview deployment. Vercel installs the dependencies with pnpm, and `pnpm-workspace.yaml` allows the build script of `sharp` so the install does not stop in CI.

## Ideas for next steps

- Host the images that are now on external storage inside the project and serve them with `next/image`.
- Add automated checks (type-check and build) to a GitHub Actions workflow.

## Credits and licence

Source code by [Kawe Longon](https://github.com/KaweAW). The artwork, posters, logos and videos shown on the site belong to Tommaso Tamburini and to the studios and rights holders of the productions; they are portfolio samples and no licence to reuse them is granted.
