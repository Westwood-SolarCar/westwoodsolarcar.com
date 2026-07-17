<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { sponsorTiers } from '$lib/data';
  import { fadeUp } from '$lib/actions/scrollAnimation';

  const benefits = [
    {
      title: 'STEM investment',
      desc: 'Directly support student engineering education and hands-on learning in your community.',
      icon: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5'
    },
    {
      title: 'Brand visibility',
      desc: 'Reach parents, educators, students, and industry professionals at regional and national competitions.',
      icon: 'M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
    },
    {
      title: 'Tax benefits',
      desc: 'Contributions may qualify as charitable donations. Consult your tax professional for details.',
      icon: 'M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
    },
    {
      title: 'Community impact',
      desc: 'Partner with an organization that gives back through outreach, workshops, and STEM advocacy.',
      icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z'
    }
  ];
</script>

<svelte:head>
  <title>Sponsors | Westwood Solar Car</title>
  <meta
    name="description"
    content="Sponsor Westwood Solar Car: fund student engineering, put your brand on a national-competition solar car, and invest in STEM education."
  />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Partnership</span>
    <h1>Put your name on something that runs on sunlight.</h1>
    <p class="lead">
      Sponsorships fund materials, tooling, and race logistics for the season. Every tier puts
      your organization in front of students, families, educators, and industry at a national
      competition.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="tiers-grid">
      {#each sponsorTiers as tier, i}
        <article class="panel tier-card" class:featured={tier.featured} use:fadeUp={{ delay: i * 70 }}>
          {#if tier.featured}
            <span class="tier-flag">Most visibility</span>
          {/if}
          <h2 class="tier-name">{tier.name}</h2>
          <p class="tier-range">{tier.range}</p>
          <p class="tier-summary">{tier.summary}</p>
          <ul class="tier-benefits">
            {#each tier.benefits as benefit}
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {benefit}
              </li>
            {/each}
          </ul>
          <Button href="/contact" variant={tier.featured ? 'primary' : 'outline'} class="tier-cta">
            Sponsor at {tier.name}
          </Button>
        </article>
      {/each}
    </div>
    <p class="tiers-note" use:fadeUp>
      Sponsor logos will be featured here as partners join the 2026 season. Yours could be
      first.
    </p>
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <div class="section-head" use:fadeUp>
      <span class="eyebrow">Why sponsor</span>
      <h2>An investment in the next generation of engineers.</h2>
    </div>

    <div class="benefits-grid">
      {#each benefits as benefit, i}
        <article class="panel benefit-card" use:fadeUp={{ delay: i * 70 }}>
          <span class="icon-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d={benefit.icon} />
            </svg>
          </span>
          <h3>{benefit.title}</h3>
          <p>{benefit.desc}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="panel cta-panel" use:fadeUp>
      <div>
        <h2>Become a sponsor</h2>
        <p>
          We'd love to talk about how a partnership can advance STEM education and get your
          brand on the car.
        </p>
      </div>
      <div class="cta-actions">
        <Button href="/contact">Contact us</Button>
        <a href="mailto:contact@westwoodracing.com" class="email-link">
          contact@westwoodracing.com
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .tiers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-md);
    align-items: stretch;
  }

  .tier-card {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: var(--space-md) var(--space-md) var(--space-lg);
  }

  .tier-card.featured {
    border-color: var(--accent);
  }

  .tier-flag {
    position: absolute;
    top: calc(-0.75rem);
    left: var(--space-md);
    background: var(--accent);
    color: var(--on-accent);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-full);
  }

  .tier-name {
    font-size: 1.25rem;
    margin-top: var(--space-xs);
  }

  .tier-range {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text);
    margin: var(--space-2xs) 0 var(--space-sm);
  }

  .tier-summary {
    font-size: 0.875rem;
    line-height: 1.6;
    padding-bottom: var(--space-sm);
    border-bottom: 1px solid var(--border);
  }

  .tier-benefits {
    list-style: none;
    margin: var(--space-sm) 0 var(--space-md);
    flex: 1;
  }

  .tier-benefits li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: var(--text-muted);
    padding: 0.3rem 0;
  }

  .tier-benefits svg {
    width: 15px;
    height: 15px;
    color: var(--accent-text);
    flex-shrink: 0;
    margin-top: 0.2rem;
  }

  .tier-card :global(.tier-cta) {
    width: 100%;
  }

  .tiers-note {
    margin-top: var(--space-lg);
    font-size: 0.9375rem;
    color: var(--text-faint);
    text-align: center;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: var(--space-md);
  }

  .benefit-card h3 {
    margin: var(--space-md) 0 var(--space-xs);
  }

  .benefit-card p {
    font-size: 0.9375rem;
    line-height: 1.65;
  }

  .cta-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-lg);
    flex-wrap: wrap;
    border-color: var(--accent);
  }

  .cta-panel h2 {
    margin-bottom: var(--space-xs);
  }

  .cta-panel p {
    max-width: 34em;
  }

  .cta-actions {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    flex-wrap: wrap;
  }

  .email-link {
    font-weight: 500;
    color: var(--text-muted);
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }

  .email-link:hover {
    color: var(--accent-text);
  }
</style>
