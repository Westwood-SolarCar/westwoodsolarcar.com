<script lang="ts">
  import { teamMembers } from '$lib/data';
  import { fadeUp } from '$lib/actions/scrollAnimation';

  const groupedMembers = teamMembers.reduce(
    (acc, member) => {
      (acc[member.category] ??= []).push(member);
      return acc;
    },
    {} as Record<string, typeof teamMembers>
  );

  const categories = Object.keys(groupedMembers).sort();

  const formatRoles = (position: string) => position.split('/').join(' · ');

  function handleImageError(event: Event) {
    const target = event.currentTarget as HTMLImageElement;
    if (!target.src.endsWith('/team-images/placeholder.svg')) {
      target.src = '/team-images/placeholder.svg';
    }
  }
</script>

<svelte:head>
  <title>Team | Westwood Solar Car</title>
  <meta
    name="description"
    content="Meet the {teamMembers.length} student engineers behind Westwood Solar Car: design, electrical, build, and operations."
  />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">The team</span>
    <h1>{teamMembers.length} students. One machine.</h1>
    <p class="lead">
      From CAD and electrical design to fabrication and fundraising, every part of the program is
      run by students.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    {#each categories as category, i}
      <div class="group" class:first={i === 0}>
        <div class="group-head" use:fadeUp>
          <h2>{category}</h2>
          <span class="group-count">{groupedMembers[category].length}</span>
        </div>
        <div class="team-grid">
          {#each groupedMembers[category] as member, j}
            <article class="member-card" use:fadeUp={{ delay: j * 50 }}>
              <div class="member-photo">
                <img
                  src={member.image}
                  alt="Portrait of {member.name}"
                  loading="lazy"
                  onerror={handleImageError}
                />
              </div>
              <h3 class="member-name">{member.name}</h3>
              <p class="member-roles">{formatRoles(member.position)}</p>
            </article>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .group + .group {
    margin-top: var(--space-xl);
  }

  .group-head {
    display: flex;
    align-items: baseline;
    gap: 0.625rem;
    margin-bottom: var(--space-md);
  }

  .group-head h2 {
    font-size: 1.25rem;
  }

  .group-count {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--text-faint);
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
    gap: var(--space-lg) var(--space-md);
  }

  .member-photo {
    aspect-ratio: 3 / 4;
    overflow: hidden;
    border-radius: var(--radius-md);
    background-color: var(--surface-raised);
    border: 1px solid var(--border);
    margin-bottom: 0.75rem;
  }

  .member-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s var(--ease-out);
  }

  .member-card:hover .member-photo img {
    transform: scale(1.04);
  }

  .member-name {
    font-size: 1.0625rem;
    margin-bottom: 0.125rem;
  }

  .member-roles {
    font-size: 0.8125rem;
    color: var(--text-faint);
    line-height: 1.5;
  }
</style>
