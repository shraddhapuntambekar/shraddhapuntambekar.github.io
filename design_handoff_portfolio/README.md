# Handoff: Personal portfolio redesign — shraddhapuntambekar.github.io

## Overview
Rebuild of a bioinformatics scientist's personal site, repositioning it from "academic homepage" to "senior industry hire" for pharma / biotech / consulting employers outside India (UK/EU focus). Key messages: outcome-first case studies, hard numbers on the page, and a **persistent relocation + visa-sponsorship status bar** that stays visible on every page.

## About the design files
`reference/Website Redesign.dc.html` is a **design reference built in HTML** — a mockup, not production code. Open it in a browser (with `support.js` beside it) to see the visuals. Only the sections badged **4a, 4b, 4c** are approved. Recreate them as plain static HTML/CSS in the existing GitHub Pages repo (Path B: drop Jekyll, serve static files, `.nojekyll`). Inline styles in the reference should become a single shared stylesheet.

## Fidelity
**High-fidelity.** Colours, type, spacing and copy are final. Match them.

## Design tokens

Colours
- Page background `#FBFAF8`; canvas/outer bg `#E8E6E1`
- Ink `#17181A`; body text `#45484C`; secondary `#55585C`; muted `#6B6E72`; faint `#9A9891` / `#83817B`
- Hairline `#E7E4DD`; card border `#D8D5CE`; chip border `#DFDBD3`; button border `#C9C5BC`; ordinal numerals `#C9C5BC`
- Raised panel `#F5F3EE`
- Accent teal `#0F5F63`; accent tint bg `#EFF5F4`; accent tint border `#C9D9D8`; accent text on tint `#24363A`
- Dark band `#17181A`; text on dark `#F3F1EC` / `#EDEBE6` / `#E9E7E1`; muted on dark `#A9A79F` / `#9BA09E`; dark border `#43454A`
- Status dot / link on dark: mint `#6FD6C9` (glow: `0 0 0 3px rgba(111,214,201,0.2)`)
- Links: `#0F5F63`, hover `#17181A` underline

Typography (Google Fonts)
- Display/headings: **Source Serif 4** 400/600/700, letter-spacing −0.01 to −0.02em
- Body/UI: **IBM Plex Sans** 400/500/600
- Labels/meta/tags: **IBM Plex Mono** 400/500, uppercase, letter-spacing 0.06–0.14em
- Scale: h1 50px/1.06 (landing), 42px/1.08 (inner); h2 28px; case title 23–24px/1.25; expertise title 26px/1.2; lede 18px/1.6; body 15.5–16px/1.62; small 13–14px/1.5; mono labels 11–12.5px; stats numerals 32px/1 serif
- `text-wrap: pretty` on headings and paragraphs; body max-width ~46–62ch

Layout
- Content container 1080px max, 56px side padding (24px on mobile)
- Nav height 66px; status bar padding 10px 56px
- Section rhythm: 52–56px top padding, 30–34px row padding, 1px hairline dividers between rows
- Radii: buttons 4px, chips 3px, filter pills 999px. No shadows on the live site (the 24px shadow in the reference is just the canvas mount).

## Shared shell (every page)

1. **Header** (66px, hairline bottom, sticky, bg `rgba(251,250,248,0.96)` + `backdrop-filter: blur(6px)`): left — name in Source Serif 600 19px; right — nav links 14.5px `#55585C` with 26px gap: About · Work · Expertise · Research · Writing, active item `#17181A` 600 with 2px inset teal underline (`box-shadow: inset 0 -2px 0 #0F5F63`); then button "Résumé (PDF)" filled teal, white text 500, padding 8px 14px, radius 4px → links to `files/Resume_*.pdf`.
2. **Status bar** (directly under header, dark `#17181A`): left — 7px mint dot with glow + 13.5px text "Relocating to the UK & EU with family · open to visa sponsorship · available Q4 2026"; right — mono 12px muted "Pune, India · works UK/EU hours" and mint link "Let's talk →" (mailto). On inner pages the location text is omitted, only "Let's talk →" remains. Make the header+status bar sticky together so the status stays on screen while scrolling.
3. **Footer / CTA band** (landing only, dark): 2-col grid 1.3fr/1fr, padding 44px 56px. Left: serif 28px "Hiring for a bioinformatics or scientific-platform role in the UK & EU?" + 15.5px muted line "I'm relocating with my family and can start a sponsorship process now." Right: stacked buttons — "Email me" (filled `#F3F1EC`, ink text) and "Book 20 minutes" (outline `#43454A`). Inner pages get a minimal footer: name · email · LinkedIn · GitHub · Scholar · ORCID in mono 12px.

## Page 4a — Landing (`/index.html`)

Hero: 2-col grid 1.55fr/1fr, gap 56px, padding 56px 56px 48px.
- Left column (gap 22px): mono eyebrow teal "Bioinformatics · multi-omics · scientific workflows"; h1 50px "I turn messy multi-omics data into decisions drug programmes can act on."; lede 18px `#45484C` max 46ch: "Bioinformatics scientist, 10+ years across academic research, an early-stage cancer biotech, and global pharma consulting. I build and validate the cloud pipelines discovery teams depend on — and document them so the next person can run them."; button row — "Download résumé" (filled ink) + "shraddha.puntambekar@gmail.com" (outline, mailto); link row mono 12.5px muted: LinkedIn · GitHub · Google Scholar · ORCID.
- Right column: portrait, aspect 4/5, 1px border `#D8D5CE`, use the existing `images/` portrait (professional, daylight).

Stats strip: 4 equal columns, bg `#F5F3EE`, hairlines top/bottom/between, padding 26px 28px. Serif 32px numeral + 13px label:
17 / omics Nextflow pipelines validated · 10+ / years across academia, biotech, pharma · 12 / peer-reviewed publications (**verify count from repo**) · 3 / person bioinformatics function built & led.

Selected work: h2 28px "Selected work" left, mono label right "Problem → what I did → outcome". Then 3 rows, grid 210px/1fr gap 40px, padding 30px 0, hairline top:
- Left cell: org (mono teal uppercase), role (13.5px muted), years (mono faint).
- Right cell (gap 12px): title serif 23px, body 15.5px, **Outcome callout** (bg `#EFF5F4`, 2px left border teal, padding 12px 14px, mono "OUTCOME" label + 14.5px text).
Content — see "Case study copy" below.

Then the dark CTA band.

## Page 4b — Work (`/industry/index.html`)

Page head (padding 52px 56px 32px, hairline bottom, gap 14px): mono eyebrow "Industry work"; h1 42px "Six years of pharma and biotech engagements, as case studies."; filter pills (13px, 7px 12px, radius 999px): All (filled ink) · Pipelines · Discovery · Consulting (outline). Filtering can be static anchors or a small vanilla-JS filter on `data-tag` — either is fine.

Rows: grid **210px / 1fr / 300px**, gap 40px, padding 34px 0, hairline bottom.
- Col 1: org / role / years as on landing.
- Col 2 (gap 12px): title serif 24px; body 15.5px; tech chips (mono 11.5px, border `#DFDBD3`, 4px 8px, radius 3px).
- Col 3: **Outcome card** — bg `#F5F3EE`, 1px border `#E7E4DD`, padding 20px, mono "OUTCOME" label teal + 14px text `#24363A`, `align-self: start`.

## Page 4c — Expertise (`/expertise/index.html`)

Page head: grid 1.4fr/1fr gap 56px, align end. Left: eyebrow "Expertise" + h1 42px "Four things I get brought in to do." Right: 16px `#55585C` "Everything is on the page — no clicking to expand. Each area ends with where I've actually done it."

4 rows, grid **64px / 1fr / 320px**, gap 36px, padding 32px 0, hairline top. **No accordions.**
- Col 1: ordinal "01"–"04", serif 30px `#C9C5BC`.
- Col 2 (gap 12px): name serif 26px; lede 16px max 52ch; capability chips.
- Col 3 (gap 16px): "APPLIED TO" mono faint label + 14px text; **Evidence callout** (bg `#EFF5F4`, 2px left teal border, padding 14px, mono "EVIDENCE" label + 14px text).

Expertise content:
01 **Multi-omics analytics** — lede: "Turning high-throughput sequencing into hypotheses a programme can test — full lifecycle, from experimental design to biological interpretation." Chips: Bulk & small RNA-seq · ChIP-seq / TF binding · ATAC-seq & chromatin accessibility · Whole genome sequencing · Differential expression · Pathway & enrichment analysis · Variant annotation · Multi-omics integration. Applied to: "Biomarker discovery · target identification · disease mechanism · gene regulation". Evidence: "Applied at NonExomics to shortlist cancer targets later confirmed in the wet lab."
02 **Workflows & scientific platforms** — "Pipelines that other people can run. Containerised, CI-tested, cloud-deployed, and documented for whoever inherits them." Chips: Nextflow development · nf-core pipelines · Workflow orchestration · Containerisation · Pipeline validation & benchmarking · CI/CD for scientific software · Platform architecture · Cloud migration. Applied to: "Production omics analysis · cloud migration · research computing infrastructure". Evidence: "17 pipelines validated and documented end-to-end for a global vaccine major."
03 **Systems biology & modelling** — "Mechanism, not just correlation. Computational models of how behaviour emerges from genes, proteins and pathways." Chips: Gene regulatory networks · Network reconstruction · Boolean modelling · ODE modelling · Sensitivity analysis · Parameter estimation. Applied to: "Cell fate · signal transduction · PTM networks · systems-level omics interpretation". Evidence: "The basis of my doctoral research and several peer-reviewed publications."
04 **Pharma R&D digital transformation** — "Assessing and improving how scientific data, workflows and lab operations support research productivity." Chips: Lab digital maturity assessment · Data strategy & governance · FAIR data principles · Scientific data integration · Lab automation strategy · Software evaluation · Technology roadmapping. Applied to: "Connected labs · data democratisation · research workflow optimisation". Evidence: "Owned the assessment framework behind a multi-site maturity benchmark for a global pharma."

## Case study copy (used on 4a and 4b)

1. **Cognizant** · Bioinformatics SME, pharma client · 2023 — present
Title: "Made 17 omics pipelines trustworthy enough to run in production"
Body: "A British vaccine major was moving genomics and transcriptomics analysis to the cloud. I independently validated all 17 Nextflow pipelines across Google Cloud Workflows, Seqera Tower and local runs, triaged failures with the engineering teams, and wrote the developer documentation covering build → publish → execute."
Outcome: "A documented error knowledgebase in daily use, a full lifecycle doc suite, and as-is / to-be architectures that became the basis for the proteomics and metabolomics cloud migration."
Tech: Nextflow · nf-core · Seqera Tower · Google Cloud Workflows · Azure DevOps · GitHub Actions. Tag: Pipelines.

2. **NonExomics LLP** · Head of Computational Biology · 2021 — 2023
Title: "Built a biotech's bioinformatics function from zero and found validated cancer targets"
Body: "Stood up nf-core RNA-seq and WGS pipelines on AWS, analysed proprietary and public datasets to shortlist novel cancer targets, and designed the siRNAs and qPCR primers the wet lab used to test them — while hiring and running a fully remote three-person team across time zones."
Outcome: "Candidate biomarkers and therapeutic targets experimentally confirmed by the wet-lab team; the company's computational function established and delivering on schedule."
Tech: AWS (EC2/S3) · Nextflow · WGS · RNA-seq · siRNA design · Remote team leadership. Tag: Discovery.

3. **Cognizant** · Lab Informatics Scientific SME · 2023 — 2024
Title: "Gave a global pharma an objective picture of its labs' digital maturity"
Body: "Owned the maturity assessment framework — strategic areas, levels, baseline criteria — and the survey and interview design behind it. Co-ran 16+ stakeholder interviews across sites and with instrument-connectivity experts, then scored and benchmarked the results."
Outcome: "A scoring heatmap and benchmark the client used to prioritise digital investment, plus follow-on dashboard and instrument-connectivity proposals."
Tech: Digital maturity assessment · Stakeholder interviews · Benchmarking · FAIR data · R&D roadmapping. Tag: Consulting.

Verify dates and client-confidentiality wording against the existing `_pages/industry.md` before publishing.

## Publications page (not mocked in 4x — follow 2c in the reference)
Stats strip: publications count · total citations · h-index (pull from Google Scholar). Groups: Transcriptomics & epigenomics (first) · Comparative genomics · Systems biology & modelling. Each entry: title 16.5px, author list 14px, mono meta "Journal · Year · N citations", and a pill "FIRST AUTHOR" / "CO-AUTHOR" (mono 10.5px, tint bg, tint border). Buttons: Google Scholar · ORCID · Full BibTeX. Migrate entries from `_publications/*.md`.

## Interactions & behaviour
- Sticky header + status bar.
- Hover: nav links → ink colour; buttons → slightly darker (`filter: brightness(0.92)`); links underline. Transitions 150ms ease.
- Filter pills on Work: optional vanilla-JS show/hide by `data-tag`.
- Responsive (<900px): hamburger nav; status bar wraps; all multi-column grids → single column; Outcome card moves below body; h1 36px; padding 24px.
- No animations beyond hover transitions.

## Assets
- Portrait, favicon, OG image: reuse from existing `images/`.
- Résumé PDF: existing `files/Resume_*.pdf`.
- Fonts: Google Fonts link (Source Serif 4, IBM Plex Sans, IBM Plex Mono).

## Files in this bundle
- `PROMPT.md` — paste into Claude Code as the first message.
- `reference/Website Redesign.dc.html` + `reference/support.js` — visual reference; open in a browser. Sections 4a/4b/4c are approved; others are earlier explorations.
