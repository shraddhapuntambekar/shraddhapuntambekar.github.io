---
title: "GitHub & Open Source"
permalink: /code/
author_profile: true
---

My public repositories, plus a few projects I'm actively building. Full profile at [github.com/shraddhapuntambekar](https://github.com/shraddhapuntambekar).

Most of my pharma R&D and pipeline-engineering work lives inside client engagements under NDA and isn't public. The repos below are primarily companion code to published research, teaching material, and analysis utilities — with industry-relevant artifacts being added (see [Currently Building](#currently-building)).

## Featured Projects

### [Boolean-Modeling-Biology-MSc-2026](https://github.com/shraddhapuntambekar/Boolean-Modeling-Biology-MSc-2026)
Course material I authored for the **Systems Biology** module of the M.Sc. Bioinformatics program at Savitribai Phule Pune University (March 2026). Covers Boolean network reconstruction, dynamic simulation, attractor and steady-state analysis, and sensitivity analysis — with hands-on exercises and example notebooks.

> *Topics:* Boolean modeling · gene regulatory networks · systems biology pedagogy
> *Audience:* M.Sc. Bioinformatics students

---

### [learning_conservation_analysis_using_phylop](https://github.com/shraddhapuntambekar/learning_conservation_analysis_using_phylop)
Companion code to my **first-author** *Scientific Reports* (2020) paper on cichlid speciation. Implements [phyloP](http://compgen.cshl.edu/phast/help-pages/phyloP.txt)-based evolutionary rate analysis to identify accelerated regions in the cichlid genome.

> *Topics:* Comparative genomics · evolutionary rate analysis · phyloP
> *Linked publication:* [Puntambekar et al., *Scientific Reports* (2020)](https://www.nature.com/articles/s41598-020-78555-0)

---

### [Mathematical-model-for-sumoylation](https://github.com/shraddhapuntambekar/Mathematical-model-for-sumoylation)
Companion code to my **first-author** *Journal of Biological Chemistry* (2016) paper. Contains the ODE-based mathematical model of the sumoylation post-translational modification system, including model files, parameter sets, and scripts for steady-state and sensitivity analyses.

> *Topics:* ODE modeling · sumoylation · MATLAB
> *Linked publication:* [Puntambekar et al., *JBC* (2016)](https://doi.org/10.1074/jbc.M115.689828)

## Other Repositories

- **[bulk-RNAseq-analysis](https://github.com/shraddhapuntambekar/bulk-RNAseq-analysis)** — Shell scripts and analysis notes for bulk RNA-seq workflows (in progress; documentation being expanded).
- **[mapping_conservation_scores](https://github.com/shraddhapuntambekar/mapping_conservation_scores)** — Utility scripts to map [phyloP / phastCons](http://compgen.cshl.edu/phast/) conservation scores onto user-defined regions of interest.
- **[GATA3_analysis](https://github.com/shraddhapuntambekar/GATA3_analysis)** — Analysis scripts for ChIP-seq, ATAC-seq, and RNA-seq work supporting the BBRC (2026) GATA3 paper.
- **[shraddhapuntambekar.github.io](https://github.com/shraddhapuntambekar/shraddhapuntambekar.github.io)** — Source for this website (built on the [academicpages](https://github.com/academicpages/academicpages.github.io) Jekyll template).

## Currently Building

Repositories currently in development:

- **End-to-end Nextflow pipeline for omics analysis.** A Nextflow + Docker + CI/CD template scaffold for omics pipelines, demonstrating production-grade pipeline authoring, containerization, and continuous integration end-to-end. (My production Nextflow work to date lives inside client engagements under NDA.)
- **Plain-English bioinformatics analysis platform.** A UI tool with a natural-language prompt — type a request like *"run differential expression on this RNA-seq dataset"* and the platform invokes the underlying Nextflow pipeline in the background. Combines the Nextflow work above with LLM-driven orchestration.
- **End-to-end ChIP-seq shell pipeline.** A reference implementation of a full ChIP-seq analysis workflow in shell — QC, alignment, peak calling, motif analysis, and visualization.
- **End-to-end RNA-seq shell pipeline.** A reference implementation of a full bulk RNA-seq workflow in shell — QC, alignment, quantification, and differential expression.

If any of these align with what you're hiring for or building, [get in touch](mailto:shraddha.puntambekar@gmail.com).
