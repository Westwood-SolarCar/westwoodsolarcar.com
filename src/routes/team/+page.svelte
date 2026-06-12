<script lang="ts">
  import { onMount } from 'svelte';
  import { teamMembers } from '$lib/data';
  import { fadeUp } from '$lib/actions/scrollAnimation';
  import { initRoad } from '$lib/utils/road';

  let canvasEl: HTMLCanvasElement;

  onMount(() => {
    const cleanup = initRoad({ canvas: canvasEl, side: 'right' });
    return cleanup;
  });

  const groupedMembers = teamMembers.reduce((acc, member) => {
    if (!acc[member.category]) acc[member.category] = [];
    acc[member.category].push(member);
    return acc;
  }, {} as Record<string, typeof teamMembers>);

  const categories = Object.keys(groupedMembers).sort();
</script>

<svelte:head>
  <title>The Team | Westwood Solar Car</title>
</svelte:head>

<canvas bind:this={canvasEl} class="road-canvas"></canvas>

<section class="section">
  <div class="container page-header animate-fade-in">
    <h1 class="title">Meet The <span class="text-accent">Team</span></h1>
    <p class="subtitle">The brilliant minds behind the machine.</p>
  </div>
</section>

{#each categories as category, i}
  <section class="section {i % 2 === 0 ? 'section-darker' : ''}">
    <div class="container">
      <h2 class="mb-lg text-center" use:fadeUp>{category}</h2>
      <div class="team-grid" use:fadeUp>
        {#each groupedMembers[category] as member}
          <div class="team-member" use:fadeUp>
            <div class="member-image-wrapper">
              <img
                src={member.image[0]}
                alt={member.name}
                class="member-image"
                onerror={(event) => {
                  const target = event.currentTarget as HTMLImageElement;
                  const candidates = member.image as string[];
                  const currentIndex = candidates.indexOf(target.currentSrc || target.src);
                  const nextCandidate = candidates[currentIndex + 1];

                  if (nextCandidate) {
                    target.src = nextCandidate;
                  }
                }}
              />
            </div>
            <h3 class="member-name">{member.name}</h3>
            <div class="member-role text-accent">{member.position}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/each}

<style>
  .road-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  }

  .page-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .title {
    margin-bottom: var(--spacing-sm);
  }

  .subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: var(--spacing-md);
    justify-content: center;
    justify-items: center;
    position: relative;
    z-index: 1;
  }

  .team-member {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .member-image-wrapper {
    width: 200px;
    aspect-ratio: 3 / 4;
    margin: 0 auto var(--spacing-sm);
    overflow: hidden;
    border-radius: var(--border-radius);
    background-color: var(--bg-surface-elevated);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .member-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
  }

  .team-member:hover .member-image {
    transform: scale(1.05);
  }

  .member-name {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }

  .member-role {
    font-size: 0.85rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  section, .container, h2 {
    position: relative;
    z-index: 1;
  }
</style>