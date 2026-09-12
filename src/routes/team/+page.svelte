<script lang="ts">
  import Portrait from '$lib/components/Portrait.svelte';
  import { teamMembers, teamCategoryOrder } from '$lib/data';

  const byCategory = teamMembers.reduce(
    (acc, m) => {
      (acc[m.category] ??= []).push(m);
      return acc;
    },
    {} as Record<string, typeof teamMembers>
  );

  const categories = [
    ...teamCategoryOrder.filter((c) => byCategory[c]),
    ...Object.keys(byCategory)
      .filter((c) => !teamCategoryOrder.includes(c))
      .sort()
  ];

  const groups = categories.map((name) => ({ name, members: byCategory[name] }));
</script>

<svelte:head>
  <title>Team · Westwood Solar Car</title>
  <meta
    name="description"
    content="The {teamMembers.length} students behind Westwood Solar Car: design, electrical, build, and operations."
  />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <p class="label">Team</p>
    <h1>{teamMembers.length} students.</h1>
    <p class="lead">
      Nobody here is a professional engineer. We are split across design, electrical, build,
      and operations, and most people work in more than one of them.
    </p>
  </div>
</section>

{#each groups as group}
  <section class="section group">
    <div class="container">
      <div class="group-head">
        <h2>{group.name}</h2>
        <span class="label count">{group.members.length}</span>
      </div>

      <ul class="cells roster">
        {#each group.members as member}
          <li class="cell person">
            <Portrait src={member.image} name={member.name} />
            <h3>{member.name}</h3>
            <p class="roles">{member.roles.join(' · ')}</p>
          </li>
        {/each}
      </ul>
    </div>
  </section>
{/each}

<style>
  .group {
    padding: var(--s-7) 0;
  }

  .group-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--s-4);
    margin-bottom: var(--s-5);
  }

  .group-head h2 {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
  }

  .count {
    color: var(--ink-3);
  }

  .roster {
    grid-template-columns: repeat(auto-fill, minmax(178px, 1fr));
    gap: var(--s-6) var(--s-5);
  }

  /* Photos carry the structure here, so the roster drops the column rules. */
  .person {
    padding-top: 0;
    border-top: 0;
  }

  /* Two up on phones; one portrait per row makes the page enormous. */
  @media (max-width: 560px) {
    .roster {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: var(--s-5) var(--s-4);
    }
  }

  .person h3 {
    margin-top: var(--s-3);
    font-size: 1.0625rem;
  }

  .roles {
    margin-top: var(--s-1);
    font-size: 0.875rem;
    color: var(--ink-2);
    line-height: 1.45;
  }
</style>
