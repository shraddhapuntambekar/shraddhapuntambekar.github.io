---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_to: /files/Resume_ShraddhaPuntambekar_June2026.pdf
redirect_from:
  - /resume
sitemap: false
---

{% include base_path %}

[Download CV (PDF)]({{ base_path }}/files/Resume_ShraddhaPuntambekar_July2024.pdf){: .btn}

Education
======
* **Ph.D. in Biological Sciences (Computational Biology)**, CSIR-National Chemical Laboratory (NCL), Pune, India, 2011 – 2017 — [Biosystems Analysis Lab](https://sites.google.com/site/biosystemsanalysis/Home?authuser=0)
* **M.Sc. in Bioinformatics**, Bioinformatics Centre, University of Pune, India, 2008 – 2010
* **B.Sc. in Biotechnology**, University of Pune, India, 2005 – 2008

Professional Experience
======
* **Bioinformatician Consultant and SME**, Cognizant — Feb 2025 – Present
  * Engaged with a global pharma client to design as-is (on-prem) and to-be (on-cloud) architectures for proteomics analysis pipelines.
  * Documented and tested end-to-end Nextflow-based workflows, covering development, CI/CD, and execution using Azure DevOps, GitHub Actions, Google Cloud Workflows, and Seqera Tower
  * Contributed to a digital maturity assessment for biopharma R&D labs, evaluating workflow digitization, data integration, and system interoperability across lab environments.

* **Project Scientist II**, CSIR-National Chemical Laboratory (NCL) — 2023 – Mar 2024
  * Worked on the structural and sequence analysis of GATA3, DNA-binding protein, including proposal writing, literature review, and data analysis.
  * Evaluated ChIP-seq tools and workflows for alignment, peak detection, and de novo motif analysis of GATA3.
  * Implemented ATAC-seq and RNA-seq pipelines to study the role of GATA3 in breast cancer.

* **Head of Computational Biology**, NonExomics LLP — 2021 – 2023
  * Implemented and maintained nf-core's RNAseq and WGS Nextflow pipelines on AWS.
  * Processed and analyzed proprietary and publicly available DNA and RNA expression datasets to identify novel cancer targets.
  * Designed siRNAs and qPCR primers for bioinformatically predicted cancer targets.
  * Managed a fully remote small team across time zones in a startup environment, focused on delivering high-quality results.
  * Represented NonExomics at the startup meetup organized by VCR Park, Vizag, India.

* **Research Associate**, Indian Institute of Science Education and Research, Pune (IISER-Pune) — 2018 – 2019
  * Evaluated state-of-the-art read alignment and assembly tools and developed an optimal pipeline for comparative transcriptomics of two cichlid fish species. 
  * Identified accelerated regions in the cichlid genome using evolutionary rate analysis.
  * Analyzed publicly available RNA-seq and Ribo-seq data to systematically characterize novel open reading frames (nORFs) and evaluate their use as cancer biomarkers — including pan-cancer survival analysis, structure prediction, disease-mutation mapping, and in-silico drug screening.

* **Doctoral Researcher**, CSIR-National Chemical Laboratory — 2011 – 2017
  * Reconstructed signaling and metabolic networks for melanosome transport, melanogenesis, and sumoylation through literature-based manual curation.
  * Developed and analyzed Boolean and ODE-based mathematical models to propose mechanistic explanations for clinical and experimental observations in pigmentation and post-translational modification systems.
  * Collaborated with three wet labs to routinely analyze and interpret experimental data and present modeled simulation and prediction results.
  * Mentored undergraduate and summer students.

* **Research Assistant**, CSIR-National Chemical Laboratory — 2010 – 2011
  * Analyzed confocal images of keratinocytes to observe nuclear capping phenomena.
  * Analyzed FACS and microarray data to study melanosome uptake by melanocytes.
  * Manually curated and reconstructed signaling and metabolic pathways involved in skin pigmentation in collaboration with three academic labs.

Skills
======
* **NGS data analysis**: bulk RNA-seq (total and small RNA), ChIP-seq, ATAC-seq, WGS, comparative transcriptomics, de novo and reference-based assembly
* **Pipelines & workflows**: Nextflow, nf-core, Seqera Tower, Google Cloud Workflows, Azure DevOps, GitHub Actions, AWS
* **Bioinformatics analyses**: variant annotation, evolutionary rate analysis, survival analysis, functional annotation and pathway enrichment, siRNA and qPCR primer design, in-silico drug screening
* **Mathematical modeling**: deterministic (ODE) modeling, Boolean modeling, analytical and numerical steady-state analysis, sensitivity analysis, parameter estimation, data fitting and optimization
* **Programming**: R, Bash, Python, MATLAB

Awards & Fellowships
======
* International Travel Grant, DBT, Govt. of India — to present at the International Conference on Systems Biology (ICSB-2016), Barcelona, Spain
* Bioinformatics National Certification (DBT-BINC) Ph.D. Fellowship

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
