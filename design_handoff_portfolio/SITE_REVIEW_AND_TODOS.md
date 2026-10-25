# Site review and next steps

A brutally honest review of shraddhapuntambekar.github.io (plain static site on the `redesign` branch) and a prioritised to-do list.

*Written 25 October 2026. Keep in `design_handoff_portfolio/` with the other handoff docs; this is a planning note, not a page on the public site.*

---

## 1. The honest review

### What an HR screener sees in the first 10 seconds

They land, scan, click Résumé, leave. The site does fine at that level:

- Name is clear.
- Title is clear.
- Résumé button is front and centre.
- Portrait is in place.
- The stats strip gives a six-second summary.

**Things that will slow them down or raise flags:**

1. **Previously there was no geography/availability signal on the site.** This was fixed on 25 October 2026 by adding a one-line note under the hero social links: *"Based in Pune, India · open to relocate outside India (UK, EU, Canada, Singapore welcome)."* Named countries matter because recruiters filter on them; the parenthetical gives examples without excluding others.

2. **The CTA "Hiring for bioinformatics, scientific platforms, or product ownership?" lists three roles in one line.** HR has one role in mind and the hedge reads as unclear positioning. For an industry site, pick one primary identity (scientist OR product owner) and treat the other as a secondary thread.

3. **"Writing" used to be in the top nav and linked to Mistborn blog posts.** A hiring manager clicking "Writing" on a scientist's site expects technical notes, not fantasy book diaries. This was fixed on 25 October 2026 by demoting Writing out of the top nav; it still lives at `/writing/` and is linked from the footer. Re-promote once you have one or two technical blog posts live.

### What a technical hiring manager sees

They click Work, Expertise, Code, Publications in that order. Four problems:

1. **Code page is mostly aspirational.** The "Currently Building" section lists four projects with no public artefact. For a hiring manager, "Currently Building" reads as *"I don't have proof yet."* Either delete the section until you ship, or pick one project this week and make the repo public with a README.

2. **The "17 pipelines validated" stat has no substantiation on-site.** Nothing links to a sample document, a sanitised architecture diagram, or a redacted extract of the error knowledgebase. A technical reader will mentally discount unverified numbers. You do not need to breach NDA — a schematic of the validation approach would do the job.

3. **Expertise 05 (BA/PO) is bolted on and reads like it.** Compared to 01-04 (deep, chip-heavy, with multi-source Evidence), 05 feels less earned. A hiring manager for a BA/PO role will notice. The fix is to make it more specific — the actual tooling (Jira, Azure DevOps for stories, Confluence, Miro), the actual deliverables (how many user stories per sprint, how many stakeholder cohorts), and the methodology (SAFe, LeSS, bespoke).

4. **Research page is a wall of text.** Five cases, each 150+ words. A technical reader skims paragraph one and bounces. Fix with a 3-sentence summary at the top of each case before the full body, or a card-grid overview at the top where each card is 20 words and a link.

### Site-level feedback

- **The site reads like a well-formatted résumé, not a person.** It is efficient but has no texture. No "I'm the kind of scientist who...", no obsession visible, no sharp opinion anywhere. For senior industry roles, voice matters more than you think. The Mistborn posts show you have voice; none of it is on the professional pages.

- **No proof of being current.** No "Last updated", no "Reading now", no "Latest commit", no "This month I'm working on...". Combined with "Currently Building" being empty, the site feels static. A living site signals a living career.

- **Nothing links horizontally.** Each page lives on its own island. There is no "This technique was used in Research → GATA3 and Industry → NonExomics" cross-reference. Hiring managers would love to see how industry work and research connect.

- **The design is clean but anonymous.** It could be anyone's bioinformatics site. The one chance to signal craft (portrait + typography + stats strip) is used, but there is no second signal — no logo mark, no micro-detail that says "a person who cares about product made this."

- **The Wonders Club glimpse on the landing softened the recruiter message but sat awkwardly below the CTA.** It read as *"...hire me / also I run a club for kids."* This was fixed on 25 October 2026 by removing the glimpse from the landing; `/wonders-club/` is still reachable from the footer and now has its own small session gallery.

---

## 2. Should Work and Research combine into one page?

**No.** Reasons:

- Industry recruiters do not want to scroll past five academic cases to find their relevance; academic reviewers do not want to scroll past Cognizant to find a JBC paper.
- The two pages serve different audiences and different Google queries.
- The current compromise is already correct: industry work on `/industry/` with a compact academic career strip at the bottom + link to `/research/`.
- Merging would double the length to ~15 cases on one page. Nobody reads 15 case studies.

**What to add instead:** a lightweight "Career at a glance" horizontal timeline strip at the top of both pages — org name, role title, year — that visualises the full arc from CSIR-NCL (2010) to Cognizant (now) as one line. Three seconds, both audiences get the context, then they drop into whichever page they are on.

---

## 3. How to make the site more interactive — by ROI

### High ROI, low effort

1. **Hover-expand on tech chips.** Tooltip showing what the tool was used for in that specific context (one line per chip, no scrolling).
2. **Scroll-reveal on case cards.** Fade in with 20px rise as they come into view. Subtle, modern, free.
3. **Smooth-scroll + active nav underline** that follows your scroll position.
4. **Filter pill animation on Work page.** Cards animate out and in on tag change (currently just hidden and shown).
5. **Light/dark theme toggle.** A cheap signal of care.

### Medium ROI, medium effort

6. **Architecture diagrams on Work cases.** SVG with hover reveals component details. Especially the Digital Pathology case, where the two workstreams are perfect for a diagram.
7. **Research page card-grid overview.** Cards expand inline (click, not accordion) to show the full case.
8. **Live GitHub strip.** Pull the latest three commits/repos via GitHub's public JSON API, render on `/code/`. Shows the site is alive. About 30 lines of JS.

### Avoid

- Parallax, auto-rotating carousels, aggressive scroll-jacking, big landing-page animations. For a bioinformatics scientist's site they signal the wrong thing (marketing agency, not scientist).

---

## 4. Pictures — concrete plan, prioritised

### Tier 1 — strong signal, source already available or easy

1. **Architecture diagram for the Digital Pathology case** (Work page). Hand-sketch or inline SVG. Two boxes side by side: *"Scanner & collaborator sources → Cloud landing → Modality parsers → ELN + Image Viewer"* and *"Manifest → Transform → Claude → ELN"*. Author as inline SVG that respects the palette.
2. **Sumoylation network figure** on the Research page card. Already in `images/sumoylation-network.png`, added inline on 25 October 2026.
3. **Workflow sketch** at the top of Expertise 02 (Workflows & platforms). Something that visualises "code → container → CI → cloud → observability".

### Tier 2 — need you to supply or generate

4. **Three Wonders Club session photos** on `/wonders-club/`. Placeholder slots are already in place as of 25 October 2026 (dashed-border tiles labelled "Session photo 1/2/3" with filename hints `wonders-club-session-{1,2,3}.jpeg`). Phone photos work if composed well.
5. **One candid professional photo.** At a whiteboard, at a laptop, with slides — somewhere other than headshot pose. For a "Lately" strip on About.
6. **Pipeline screenshot.** Seqera Tower dashboard, nf-core run output, Nextflow execution graph. Sanitised and blurred where needed.

### Tier 3 — nice to have

7. **GATA3 regulatory motif visualisation** on Research. If you have a figure from the BBRC paper (co-author so you can use it), slot it in.
8. **Icons for Expertise 01-05.** Small line glyphs, monochrome, consistent set. [Feathericons](https://feathericons.com/)-style but drawn by hand so they feel personal.

---

## 5. To-do list

### This week (quick wins, under 2 hours each)

- [ ] **Take 3 Wonders Club session photos** this Saturday. Save as `wonders-club-session-{1,2,3}.jpeg` in `images/`. Horizontal preferred. Replace the placeholder tiles in `wonders-club/index.html` with `<img>` tags once the files are in.
- [ ] **Rewrite Expertise 05 (BA/PO) with specifics** — tooling (Jira / Azure DevOps / Confluence / Miro), framework (SAFe? Scrum?), scale (how many stories per sprint, how many stakeholder cohorts, how many months at this scale). Right now it reads bolted on.
- [x] **Decide what to do with "Currently Building"** on `/code/`. Decision 25 October 2026: removed the section entirely. Will add back only when a repo is actually shippable.
- [ ] **Add the Digital Pathology architecture sketch.** Inline SVG matching the palette. Two boxes: scanner/collaborator ingestion flow and manifest-to-ELN flow with the Claude step marked.

### Next 2 weeks

- [ ] **Hover-tooltip on tech chips.** When hovering a chip like "Nextflow", a one-line tooltip explains how/where you used it in that case. CSS only, no JS needed. Big signal of attention to detail.
- [ ] **Scroll-reveal animation.** Case cards fade and rise as they scroll into view. Light JS using IntersectionObserver. Modern feel without being gimmicky.
- [ ] **Add a "Lately" or "Reading now" strip** on the About page. Three items, updated monthly. Signals the site is alive. Example: one paper you are reading, one tool you are learning, one book. Low effort, high "this is a real person" signal.
- [ ] **Light/dark theme toggle.** Mostly a signal of taste for a technical hiring manager. About 20 lines of CSS plus 10 of JS.
- [x] ~~"Career at a glance" timeline strip at the top of `/industry/` and `/research/`.~~ Decision 25 October 2026: not building this. LinkedIn already does it; no need to duplicate.

### Next month (when you have blog time)

- [ ] **Write one technical blog post.** Topics that write themselves: *"Validating 17 Nextflow pipelines for cloud production: a checklist I wish I'd had"* or *"Writing metadata parsers for pathology scanner outputs"*. Even 800 words. Once published, re-promote Writing into the top nav.
- [ ] **Research page overview.** Add a card-grid at the top of `/research/` summarising all five cases in 20 words each, so skimmers get the shape in 10 seconds before diving into one. The current full-length cases stay below.
- [ ] **Horizontal cross-links.** On each industry/research case, add a one-line "Related" row pointing to the overlapping skill elsewhere on the site (e.g. the Digital Pathology case links to Expertise 05; the sumoylation case links to Publications → JBC 2016).
- [ ] **Replace Wonders Club placeholder tiles with actual photos** once they are taken.
- [ ] **Pick one primary identity** for the landing CTA. Either *"Hiring for a bioinformatics scientist or scientific product owner?"* (two) or just *"Hiring for a scientific product owner?"* (one), rather than the current three-pronged ask.

### Ongoing

- [ ] Keep a public `CHANGELOG` of your `Currently Building` repos. A public changelog is one of the strongest signals you can give a technical hiring manager that you ship.
- [ ] Update `/publications/` within the same week you publish a new paper.
- [ ] Review the site every quarter. Date on this document is 25 October 2026; next review 25 January 2027.

---

## 6. What is already done (status snapshot)

- [x] Jekyll scaffolding removed; plain static HTML on the `redesign` branch.
- [x] 4a/4b/4c design implemented across landing, Work, Expertise.
- [x] Publications page grouped (Multi-omics analysis, Comparative genomics, Systems biology & modelling).
- [x] Research page with 5 case studies.
- [x] All 4 Mistborn posts migrated to `/writing/mistborn-*/`.
- [x] Status/relocation banner removed.
- [x] Em dashes removed everywhere (as of 24 October 2026).
- [x] Client identifiers stripped ("British vaccine major", "American pharmaceutical", "global pharma" replaced with "pharma client").
- [x] New Aug 2026 Digital Pathology case added as the first entry on landing and Work.
- [x] ~~"Experience" framing on Work page with an Academic career strip at the bottom.~~ Reverted 25 October 2026: Work page is industry-only again; academic positions live on `/research/` with a one-line pointer in the Work page lede.
- [x] Portrait swapped to `file_Shraddha_profilePic.png`.
- [x] Wonders Club glimpse removed from landing; standalone `/wonders-club/` fleshed out with a placeholder 3-tile gallery.
- [x] Writing demoted from top nav; footer links to Writing + Code + Wonders Club added.
- [x] Sumoylation network figure placed inline on Research page.
- [x] Geography/availability line added under hero social links.
- [x] ORCID hyperlinks removed site-wide.
- [x] `/code/` "Currently Building" section removed (25 October 2026).

---

## 7. Decisions (as of 25 October 2026)

1. ~~"Currently Building" on `/code/`:~~ **Removed.** Will add back only when something ships.
2. **Tier-2 pictures:** Will take time to source. Not blocking; pick up when photos are available. Placeholder tiles stay on `/wonders-club/` until session photos arrive.
3. ~~"Career at a glance" timeline strip:~~ **Not building.** LinkedIn covers this; no need to duplicate on-site.
4. **Landing CTA:** **Removed** on 25 October 2026. The dark "Hiring for..." band is gone from the landing. Contact details are still available via the hero (email button, résumé button, social links) and every page footer, so recruiters are not without a path to reach out.
5. **`/code/` in top nav:** Not now, but eventually. Stays in the footer for the moment; promote to top nav when `/code/` has enough shipped content to justify prominence.
