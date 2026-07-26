---
title: "Writing"
permalink: /writing/
author_profile: true
---

<style>
/* Hide the page H1 title since the top masthead nav already shows we're on this page */
.page__title { display: none; }

/* Compact vertical rhythm inside sections */
.page__content ul { margin-bottom: 0.6em; }
.page__content ul li { margin-bottom: 0.2em; line-height: 1.4; }
.page__content p { margin-bottom: 0.6em; }

/* Accordion styling */
.writing-section {
  border-bottom: 1px solid #e6e6e6;
  padding: 0.3em 0;
}
.writing-section > summary {
  font-size: 1.1em;
  font-weight: 600;
  color: #222;
  padding: 0.65em 0.2em;
  cursor: pointer;
  outline: none;
  transition: color 0.15s;
}
.writing-section > summary:hover { color: #2c3e50; }
.writing-section[open] > summary { color: #2c3e50; }
.writing-section > *:not(summary) { padding: 0 0.2em 0.6em 1.5em; }
.writing-section .category-description { font-style: italic; color: #666; margin-bottom: 0.6em; }
.writing-section .coming-soon { color: #888; font-size: 0.95em; }

/* Post listing inside a section */
.post-list { list-style: none; padding-left: 0; margin: 0.6em 0 0.2em; }
.post-list li { margin-bottom: 1em; padding-bottom: 0.9em; border-bottom: 1px dashed #eee; }
.post-list li:last-child { border-bottom: none; }
.post-list .post-title { display: block; font-weight: 600; color: #2c3e50; text-decoration: none; font-size: 1.02em; line-height: 1.35; }
.post-list .post-title:hover { text-decoration: underline; }
.post-list .post-date { display: block; color: #999; font-size: 0.85em; margin: 0.15em 0 0.35em; }
.post-list .post-excerpt { color: #555; margin: 0; font-size: 0.95em; line-height: 1.45; }
</style>

Notes, reflections, and reviews across the things I care about — from bioinformatics and AI to books and the everyday. Click a category to expand.

<details class="writing-section" id="technical" markdown="1">
<summary>Technical Notes</summary>

<p class="category-description">What I'm building and learning — bioinformatics, scientific workflows, AI, and the tools of the trade.</p>

{% assign technical_posts = site.categories.technical %}
{% if technical_posts and technical_posts.size > 0 %}
<ul class="post-list">
{% for post in technical_posts %}
  <li>
    <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="post-date">{{ post.date | date: "%B %-d, %Y" }}</span>
    {% if post.excerpt %}<p class="post-excerpt">{{ post.excerpt | strip_html | strip_newlines | truncate: 220 }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
{% else %}
<p class="coming-soon">Coming soon — posts will appear here as I publish them.</p>
{% endif %}

</details>

<details class="writing-section" id="miscellaneous" markdown="1">
<summary>Miscellaneous</summary>

<p class="category-description">Books, reading notes, everyday reflections, and everything that doesn't fit neatly into a technical box.</p>

{% assign misc_posts = "" | split: "" %}
{% assign misc_categories = "books,parenting,life,misc" | split: "," %}
{% for cat in misc_categories %}
  {% if site.categories[cat] %}
    {% assign misc_posts = misc_posts | concat: site.categories[cat] %}
  {% endif %}
{% endfor %}
{% assign misc_posts = misc_posts | sort: "date" | reverse %}
{% if misc_posts and misc_posts.size > 0 %}
<ul class="post-list">
{% for post in misc_posts %}
  <li>
    <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="post-date">{{ post.date | date: "%B %-d, %Y" }}</span>
    {% if post.excerpt %}<p class="post-excerpt">{{ post.excerpt | strip_html | strip_newlines | truncate: 220 }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
{% else %}
<p class="coming-soon">Coming soon — posts will appear here as I publish them.</p>
{% endif %}

</details>
