<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Button from '$lib/components/Button.svelte';
  import { teamMembers } from '$lib/data';
  import { fadeUp } from '$lib/actions/scrollAnimation';

  // Group members by category
  const groupedMembers = teamMembers.reduce((acc, member) => {
    if (!acc[member.category]) {
      acc[member.category] = [];
    }
    acc[member.category].push(member);
    return acc;
  }, {} as Record<string, typeof teamMembers>);

  const categories = Object.keys(groupedMembers).sort();
</script>

<svelte:head>
  <title>The Team | Westwood Solar Car</title>
</svelte:head>

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
      <div class="team-grid">
        {#each groupedMembers[category] as member}
          <div class="team-member" use:fadeUp>
            <div class="member-image-wrapper">
              <img src={member.image} alt={member.name} class="member-image" />
            </div>
            <h3 class="member-name">{member.name}</h3>
            <div class="member-role text-accent">{member.position}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/each}

<section class="section">
  <div class="container recruitment-section" use:fadeUp>
    <div class="recruitment-content text-center">
      <h2>Become a <span class="text-accent">Member</span></h2>
      <p class="mx-auto mt-sm mb-sm max-w-600">We recruit passionate students at the beginning of each Fall semester. No prior experience is required—just a willingness to learn and work hard.</p>
      
      <div class="recruitment-steps mt-xl mb-xl">
        <div class="step" use:fadeUp>
          <div class="step-number">1</div>
          <h3>Attend Info Session</h3>
          <p>Learn about our departments and what we do.</p>
        </div>
        <div class="step" use:fadeUp>
          <div class="step-number">2</div>
          <h3>Meet the Team</h3>
          <p>Learn about our members and how we work together.</p>
        </div>
        <div class="step" use:fadeUp>
          <div class="step-number">3</div>
          <h3>Get Involved</h3>
          <p>Reach out to start contributing to the team.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .page-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
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
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: var(--spacing-xl);
    justify-content: center;
  }

  .team-member {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .member-image-wrapper {
    width: 100%;
    aspect-ratio: 4/5;
    overflow: hidden;
    margin-bottom: var(--spacing-sm);
    background-color: var(--bg-surface-elevated);
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

  .recruitment-section {
    padding: var(--spacing-md) 0;
  }

  .max-w-600 {
    max-width: 600px;
  }

  .recruitment-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-md);
    text-align: center;
  }

  .step {
    padding: var(--spacing-md);
    background-color: var(--bg-surface);
    border: 1px solid var(--border-subtle);
    border-radius: 4px;
    position: relative;
  }

  .step-number {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    background-color: var(--accent-orange);
    color: white;
    font-weight: 800;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 4px solid var(--bg-main);
  }

  .step h3 {
    margin-top: var(--spacing-sm);
    margin-bottom: var(--spacing-xs);
    font-size: 1.1rem;
  }

  .step p {
    font-size: 0.9rem;
    margin: 0;
  }
</style>
