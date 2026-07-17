<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import CarSilhouette from '$lib/components/CarSilhouette.svelte';
  import { fadeUp } from '$lib/actions/scrollAnimation';
  import { teamMembers, carSpecs } from '$lib/data';

  const stats = [
    { value: String(teamMembers.length), label: 'Student engineers' },
    { value: '2020', label: 'Team founded' },
    { value: '100%', label: 'Solar powered' },
    { value: 'TMS', label: 'Texas Motor Speedway' }
  ];

  const pillars = [
    {
      title: 'Design & Simulate',
      desc: 'CAD modeling and CFD simulation shape every surface of the car before a single part is cut, from the aeroshell to the suspension geometry.',
      icon: 'M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5'
    },
    {
      title: 'Build & Test',
      desc: 'Students fabricate the chassis, battery pack, and electronics by hand, then validate every system through scrutineering-grade testing.',
      icon: 'M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z'
    },
    {
      title: 'Race & Compete',
      desc: 'The team races in the national Solar Car Challenge, competing in endurance events on closed tracks and cross-country routes.',
      icon: 'M3 3v18M3 4.5h13.5L14 8l2.5 3.5H3'
    }
  ];
</script>

<svelte:head>
  <title>Westwood Solar Car | Student-Built Solar Racing</title>
  <meta
    name="description"
    content="Westwood Solar Car is a high school student-led engineering team that designs, builds, and races solar-powered vehicles in the national Solar Car Challenge."
  />
</svelte:head>

<section class="hero">
  <div class="hero-glow" aria-hidden="true"></div>
  <div class="container hero-inner">
    <div class="hero-copy">
      <span class="eyebrow">Westwood High School · Solar Car Challenge</span>
      <h1>Racing on nothing but sunlight.</h1>
      <p class="lead">
        We're a student-led engineering team that designs, builds, and races solar-powered
        vehicles, taking on the national Solar Car Challenge from CAD model to finish line.
      </p>
      <div class="hero-actions">
        <Button href="/car">Explore the car</Button>
        <Button href="/sponsors" variant="outline">Partner with us</Button>
      </div>
    </div>

    <dl class="hero-stats">
      {#each stats as stat}
        <div class="stat">
          <dt>{stat.label}</dt>
          <dd>{stat.value}</dd>
        </div>
      {/each}
    </dl>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head" use:fadeUp>
      <span class="eyebrow">What we do</span>
      <h2>Every part of the car, built by students.</h2>
    </div>

    <div class="pillars">
      {#each pillars as pillar, i}
        <article class="panel pillar" use:fadeUp={{ delay: i * 80 }}>
          <span class="icon-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d={pillar.icon} />
            </svg>
          </span>
          <h3>{pillar.title}</h3>
          <p>{pillar.desc}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="container car-band">
    <div class="car-copy" use:fadeUp>
      <span class="eyebrow">The car</span>
      <h2>{carSpecs.name}</h2>
      <p>
        Our most advanced vehicle yet: a carbon fiber monocoque wrapped around a custom hub motor
        and a 5kWh battery pack, engineered for efficiency at highway speeds.
      </p>
      <dl class="key-specs">
        <div>
          <dt>Weight</dt>
          <dd>{carSpecs.weight}</dd>
        </div>
        <div>
          <dt>Top speed</dt>
          <dd>{carSpecs.topSpeed}</dd>
        </div>
        <div>
          <dt>Powertrain</dt>
          <dd>{carSpecs.powertrain}</dd>
        </div>
      </dl>
      <Button href="/car" variant="outline">Full specifications</Button>
    </div>
    <div class="car-visual" use:fadeUp={{ delay: 120 }}>
      <CarSilhouette />
    </div>
  </div>
</section>

<section class="section">
  <div class="container cta-split">
    <div class="panel cta-card" use:fadeUp>
      <span class="eyebrow">Students</span>
      <h3>Join the team</h3>
      <p>
        No experience required, just curiosity. Learn CAD, electronics, fabrication, and
        project management by shipping real hardware.
      </p>
      <Button href="/contact" variant="outline">Get in touch</Button>
    </div>
    <div class="panel cta-card featured" use:fadeUp={{ delay: 80 }}>
      <span class="eyebrow">Companies</span>
      <h3>Power the build</h3>
      <p>
        Sponsorships fund materials, tooling, and race logistics, and put your brand on a
        solar car competing at the national level.
      </p>
      <Button href="/sponsors">Sponsorship tiers</Button>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    padding: calc(var(--space-section) * 1.2) 0 var(--space-section);
    overflow: hidden;
    border-bottom: 1px solid var(--border);
  }

  .hero-glow {
    position: absolute;
    top: -40%;
    right: -15%;
    width: 70vw;
    height: 70vw;
    max-width: 900px;
    max-height: 900px;
    background: radial-gradient(circle, var(--accent-soft) 0%, transparent 65%);
    pointer-events: none;
  }

  .hero-inner {
    position: relative;
  }

  .hero-copy h1 {
    max-width: 13em;
  }

  .hero-copy .lead {
    margin-top: var(--space-md);
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-top: var(--space-lg);
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-md);
    margin-top: var(--space-xl);
    padding-top: var(--space-lg);
    border-top: 1px solid var(--border);
  }

  @media (max-width: 640px) {
    .hero-stats {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .stat dt {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--text-faint);
    order: 2;
  }

  .stat dd {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    font-weight: 700;
    color: var(--text);
    line-height: 1.1;
    margin-bottom: 0.25rem;
  }

  .pillars {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-md);
  }

  .pillar h3 {
    margin: var(--space-md) 0 var(--space-xs);
  }

  .pillar p {
    font-size: 0.9375rem;
    line-height: 1.65;
  }

  .car-band {
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
    gap: var(--space-xl);
    align-items: center;
  }

  @media (max-width: 860px) {
    .car-band {
      grid-template-columns: 1fr;
    }
  }

  .car-copy p {
    margin: var(--space-sm) 0 var(--space-md);
    max-width: 34em;
  }

  .key-specs {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-lg);
    margin-bottom: var(--space-lg);
  }

  .key-specs dt {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--text-faint);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .key-specs dd {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text);
  }

  .cta-split {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-md);
  }

  .cta-card h3 {
    font-size: 1.5rem;
    margin-bottom: var(--space-xs);
  }

  .cta-card p {
    margin-bottom: var(--space-md);
    font-size: 0.9375rem;
    line-height: 1.65;
    max-width: 36em;
  }

  .cta-card.featured {
    border-color: var(--accent);
  }
</style>
