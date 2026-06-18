---
title: "Scientific Research"
permalink: /research/
author_profile: true
---

Selected academic research projects from my postdoctoral work and Ph.D., framed as concise case studies — **Problem · Approach · Outcome · Technologies** — so you can scan each in under a minute, in the same format as the [Industry Projects](/industry/) page.

## GATA3 Regulatory Biology
**Institution:** CSIR-National Chemical Laboratory · **Role:** Project Scientist II · **Period:** 2023 – Mar 2024

### Problem
The transcription factor **GATA3** is a major regulator of luminal breast cancer, but its DNA-binding behavior across the diverse GATA motif landscape — and how that binding translates into regulatory signaling — was not well characterized.

### Approach
- Evaluated and benchmarked ChIP-seq tools for alignment, peak detection, and **de novo motif analysis** of GATA3 binding sites.
- Built ATAC-seq and RNA-seq pipelines for differential chromatin-accessibility and expression analysis.
- Integrated motif, binding, and expression signals to characterize the regulatory landscape of GATA3 in luminal breast cancer.

### Outcome
- Findings published as **co-author** in [Gharui, Puntambekar, et al., *Biochemical and Biophysical Research Communications* (2026)](https://doi.org/10.1016/j.bbrc.2026.153718) — *"Recognition of diverse GATA motifs necessitates multimodal GATA3-DNA binding."*

### Technologies
ChIP-seq · ATAC-seq · RNA-seq · de novo motif analysis · Regulatory network analysis

---

## Pan-Cancer Analysis of Novel Open Reading Frames (nORFs)
**Institution:** Indian Institute of Science Education and Research, Pune (IISER-Pune) · **Role:** Postdoctoral Researcher · **Period:** 2018 – 2019

### Problem
Transcripts encoding **novel open reading frames (nORFs)** — short, previously uncharacterized peptides — were emerging as a potential class of cancer biomarkers and therapeutic targets, but they had not been systematically characterized across cancer types or assessed for clinical utility.

### Approach
- Built a **proteogenomic pipeline** integrating publicly available RNA-seq and Ribo-seq data across multiple cancer types.
- Performed **functional annotation, structure prediction, disease-mutation mapping, pan-cancer survival analysis,** and **in-silico drug screening** to assess therapeutic and diagnostic potential of nORF-encoded peptides.

### Outcome
- Findings published as **co-first author** in [Erady, Boxall, Puntambekar, et al., *NPJ Genomic Medicine* (2021)](https://www.nature.com/articles/s41525-020-00167-4) — *"Pan-cancer analysis of transcripts encoding novel open reading frames and their potential biological functions."*

### Technologies
RNA-seq · Ribo-seq · Proteogenomic pipelines · Protein structure prediction · In-silico drug screening · Pan-cancer survival analysis

---

## Comparative Transcriptomics of Cichlid Speciation
**Institution:** Indian Institute of Science Education and Research, Pune (IISER-Pune) · **Role:** Postdoctoral Researcher · **Period:** 2018 – 2019

### Problem
Cichlid fishes are a textbook example of **rapid speciation**, but the genomic substrate that supports that speciation — particularly the role of de novo coding regions and accelerated evolution — was not well mapped using state-of-the-art comparative transcriptomics.

### Approach
- Benchmarked state-of-the-art read alignment and assembly tools; built an optimized **de novo + reference-based comparative-transcriptomics pipeline** for two cichlid species.
- Performed [phyloP](http://compgen.cshl.edu/phast/help-pages/phyloP.txt)-based **evolutionary rate analysis** to identify accelerated regions in the cichlid genome.

### Outcome
- Findings published as **first author** in [Puntambekar et al., *Scientific Reports* (2020)](https://www.nature.com/articles/s41598-020-78555-0) — *"Evolutionary divergence of novel open reading frames in cichlids speciation."*
- Code and analysis on GitHub: [learning_conservation_analysis_using_phylop](https://github.com/shraddhapuntambekar/learning_conservation_analysis_using_phylop).

### Technologies
RNA-seq · de novo and reference-based assembly · phyloP · Comparative genomics · Evolutionary rate analysis

---

## Mechanistic Modeling of Skin Pigmentation
**Institution:** CSIR-National Chemical Laboratory ([Biosystems Analysis Lab](https://sites.google.com/site/biosystemsanalysis/Home?authuser=0)) · **Role:** Doctoral Researcher (Ph.D.) · **Period:** 2011 – 2017

### Problem
Clinical and experimental observations in **skin pigmentation** — including how IFN-γ regulates melanosome maturation — needed mechanistic explanations grounded in signaling-network dynamics, in collaboration with three experimental labs.

### Approach
- Manually curated and reconstructed **signaling and metabolic networks** for melanosome transport and melanogenesis from primary literature.
- Built **Boolean and ODE-based mathematical models** to test hypotheses and propose mechanistic explanations for the experimental observations.
- Ran parameter estimation and sensitivity analyses to identify high-leverage nodes in the network.

### Outcome
- Findings published as **co-author** in Natarajan et al., *Proceedings of the National Academy of Sciences (PNAS)* (2014) — *"IFN-γ signaling maintains skin pigmentation homeostasis through regulation of melanosome maturation."*
- Doctoral-coursework literature review of mathematical models in skin pigmentation: [PDF]({{ site.baseurl }}/files/LitReview_MathModels_SkinPigmentation.pdf), [presentation]({{ site.baseurl }}/files/LitReview_MathModels_SkinPigmentation_presentation.pdf).

### Technologies
Boolean modeling · ODE modeling · MATLAB · Parameter estimation · Sensitivity analysis · Network reconstruction · Cross-functional collaboration with wet labs

---

## Mathematical Modeling of Sumoylation
**Institution:** CSIR-National Chemical Laboratory ([Biosystems Analysis Lab](https://sites.google.com/site/biosystemsanalysis/Home?authuser=0)) · **Role:** Doctoral Researcher (Ph.D.) · **Period:** 2011 – 2017

![Reaction network of the SUMO conjugation system modeled in the paper, showing SUMO preprocessing by SENP, E1-mediated activation, E2-mediated conjugation and ligation, autosumoylation of E2, and SENP-mediated deconjugation.]({{ site.baseurl }}/images/sumoylation-network.png)
*Reaction network of the SUMO conjugation system modeled in the paper. Adapted from Puntambekar et al., JBC (2016).*

### Problem
**Sumoylation** is a major post-translational modification system, but how SUMO modification levels respond to perturbations in enzyme activity — and which features of that response are non-obvious — required a model-driven analysis rather than purely descriptive biochemistry.

### Approach
- Curated the **sumoylation signaling network** from primary literature.
- Developed an **ODE-based mathematical model** of SUMO conjugation dynamics.
- Ran **steady-state and sensitivity analyses** to identify counter-intuitive, system-level features of the network's response to enzyme perturbations.

### Outcome
- Findings published as **first author** in [Puntambekar et al., *Journal of Biological Chemistry* (2016)](https://doi.org/10.1074/jbc.M115.689828) — *"Identification of unintuitive features of sumoylation through mathematical modeling."*
- Visual summary of the project (5-slide explainer originally prepared for CSIR-NCL): [PDF download]({{ site.baseurl }}/files/Sumoylation_JBC2016_VisualSummary.pdf).
- Code on GitHub: [Mathematical-model-for-sumoylation](https://github.com/shraddhapuntambekar/Mathematical-model-for-sumoylation).

### Technologies
ODE modeling · MATLAB · Steady-state analysis · Sensitivity analysis · Parameter estimation · Network reconstruction
