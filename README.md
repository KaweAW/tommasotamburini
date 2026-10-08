# Tommaso Tamburini - portfolio website

Source code of [tommasotamburini.com](https://tommasotamburini.com), the portfolio of the 2D animator and story artist Tommaso Tamburini.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS and shadcn/ui. The site is bilingual (English and Italian).

## Run it locally

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
```

## Important: do not remove or rewrite `C V 2025.pdf`

The "Download CV" button on the live site downloads `C V 2025.pdf` straight from this repository, using a link pinned to commit `da0259d`:

`https://github.com/KaweAW/tommasotamburini/raw/da0259dee376d880d96992fce41c03b98a4f3e8f/C%20V%202025.pdf`

For that reason:

- keep this repository **public**;
- never force-push or rewrite the history (commit `da0259d` must stay reachable);
- do not delete or rename the PDF without first changing the link in `app/page.tsx` and deploying.

`scripts/generate-cv.py` can rebuild a CV as `public/cv-tommaso-tamburini.pdf`. That file is not used by the site yet.

## Content and licence

The images in `public/` (character art, posters and logos of third-party productions) belong to their respective owners and are shown here as portfolio samples. The source code is the work of Kawe Longon; no licence is granted for the artwork.
