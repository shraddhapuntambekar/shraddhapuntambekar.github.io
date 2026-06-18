---
title: "Blog"
layout: archive
permalink: /posts/
author_profile: true
redirect_from:
  - /year-archive/
  - /wordpress/blog-posts/
---

{% include base_path %}

Notes, write-ups, and reflections on bioinformatics, scientific workflows, pharma R&D digital transformation, and AI for life sciences.

## Coming soon

I'm planning to write about topics from my work and ongoing exploration, including:

- **Scientific workflow patterns** — lessons from validating and documenting 17+ omics Nextflow pipelines for a vaccine major
- **Pharma R&D digitalization** — what I've learned from running lab digital-maturity assessments
- **Multi-omics analysis** — practical notes on RNA-seq, ChIP-seq, ATAC-seq pipelines and integration
- **AI for bioinformatics** — early experiments with LLM-assisted analysis, agentic systems, and scientific copilots
- **Systems biology** — Boolean and ODE modeling for biological questions

In the meantime, my published work is on the [Publications]({{ base_path }}/publications/) page, code is at [GitHub & Open Source]({{ base_path }}/code/), and you can reach me at [shraddha.puntambekar@gmail.com](mailto:shraddha.puntambekar@gmail.com).

{% if site.posts.size > 0 %}
<hr />

{% capture written_year %}'None'{% endcapture %}
{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
  <h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
  {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}
{% endif %}
