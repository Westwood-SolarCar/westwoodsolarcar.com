<script lang="ts">
  import TeamSlideshow from '$lib/components/TeamSlideshow.svelte';
  import { teamMembers } from '$lib/data';

  // Sort by last name (the final word), then by the full name as a tiebreaker.
  // A single name like "Jackson" sorts as itself.
  const lastName = (name: string) => name.trim().split(/\s+/).at(-1) ?? name;
  const byLastName = (a: { name: string }, b: { name: string }) =>
    lastName(a.name).localeCompare(lastName(b.name)) || a.name.localeCompare(b.name);

  const sorted = [...teamMembers].sort(byLastName);
</script>

<svelte:head>
  <title>Team · Westwood Solar Car</title>
  <meta
    name="description"
    content="Meet the {teamMembers.length} students behind Westwood Solar Car"
  />
</svelte:head>

<!-- Kept for screen readers and search engines, not shown. -->
<h1 class="sr-only">Team</h1>

<!-- Full width on purpose: the slideshow spans the whole screen. -->
<TeamSlideshow members={sorted} />

<section class="section roster-section">
  <div class="container">
    <p class="lead blurb">
      Nobody here is a professional engineer. We each bring our unique 
      skills to the table to work on different aspects of the project.
    </p>

    <ul class="names">
      {#each sorted as member}
        <li>{member.name}</li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .roster-section {
    border-top: 0;
  }

  .blurb {
  margin-bottom: var(--s-6);
  max-width: none; /* .lead normally caps the width at 34em, which forces a wrap */
}

/* Only stop wrapping where the sentence actually fits on one line. */
@media (min-width: 1100px) {
  .blurb {
    white-space: nowrap;
  }
}

  /* One list, flowing down and then across columns, still in A to Z order. */
  .names {
    columns: 3 220px;
    column-gap: var(--s-6);
  }

  .names li {
    break-inside: avoid;
    padding: var(--s-3) 0;
    border-bottom: 1px solid var(--rule);
    color: var(--ink-2);
  }

  /* Visually hidden, still read by screen readers. */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
</style>