# Prompt for Claude Code — paste this as your first message

I am rebuilding my personal website, currently at https://shraddhapuntambekar.github.io (repo: shraddhapuntambekar/shraddhapuntambekar.github.io, currently a Jekyll AcademicPages theme). I'm a bioinformatics scientist targeting pharma, biotech and consulting roles outside India (primarily UK/EU), relocating with family and open to visa sponsorship.

## What to do

Rebuild the site as a **plain static HTML/CSS site (no Jekyll, no framework, no build step)** on a new branch called `redesign`, following the design in `design_handoff_portfolio/` exactly. Read `README.md` in that folder first — it contains the full spec (layout, tokens, copy, page structure). The file `reference/Website Redesign.dc.html` is the visual reference; the sections tagged **4a (landing), 4b (Work), 4c (Expertise)** are the approved design. Ignore 1a/1b/2x/3x — earlier explorations.

## Setup steps

1. `git checkout -b redesign`
2. Remove Jekyll: delete `_config.yml`, `_layouts/`, `_includes/`, `_sass/`, `_pages/`, `_publications/`, `_posts/`, `_talks/`, `_teaching/`, `_portfolio/`, `Gemfile*`, `Rakefile`, `markdown_generator/`, `talkmap*`, `scripts/`. Keep `files/` (résumé PDF) and `images/` (portrait, favicon, OG image), `CNAME` if present.
3. Add an empty `.nojekyll` file at the root.
4. Build these pages, preserving the current URL structure so LinkedIn and inbound links don't break:
   - `/index.html` — landing (4a)
   - `/industry/index.html` — Work (4b)
   - `/expertise/index.html` — Expertise (4c)
   - `/publications/index.html` — Publications (follow the 2c pattern: grouped by theme, author position + citation count shown, stats strip on top)
   - `/research/index.html`, `/writing/index.html` — same shell as 4b; content migrated from the existing Markdown
   - Add `404.html`.
5. One shared stylesheet `assets/css/site.css` with the tokens from README. Fonts via Google Fonts: Source Serif 4 (400/600/700), IBM Plex Sans (400/500/600), IBM Plex Mono (400/500).
6. The header + status bar + footer are identical on every page. Since there is no templating, either duplicate the markup carefully, or write a tiny Node script `build.js` that injects shared partials into `src/*.html` → root — your choice, but keep the committed output as plain HTML that GitHub Pages serves directly.
7. Make it responsive: below 900px the top nav collapses to a hamburger, the status bar wraps to two lines, 2- and 3-column grids stack to one column. Mobile hit targets ≥44px.
8. Migrate real content from the existing repo's Markdown files (`_pages/*.md`, `_publications/*.md`) into the new pages. Where the mockup uses placeholder text ("Replace with your…", "—"), pull the real value from the repo or leave a clearly marked `<!-- TODO -->`. Do NOT rewrite my case-study wording beyond what the README specifies.
9. Each page gets a proper `<title>`, `<meta name="description">`, and Open Graph tags reusing the existing OG image.
10. Test locally with `npx serve .` (or `python -m http.server`), check every nav link resolves, then commit to `redesign`. Don't merge to `main` — I'll review the branch and merge myself.

## Constraints
- No frameworks (no React/Tailwind/Bootstrap). Plain semantic HTML + one CSS file + minimal vanilla JS (hamburger toggle only).
- Match the reference visually: same fonts, colours, spacing, line lengths. Text contrast ≥4.5:1.
- Keep the `files/Resume_*.pdf` path working; the "Résumé (PDF)" button links to it.
- Keep git history — this is a branch, not a new repo.
