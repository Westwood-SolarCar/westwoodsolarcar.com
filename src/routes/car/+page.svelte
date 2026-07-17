<script lang="ts">
  import CarSilhouette from '$lib/components/CarSilhouette.svelte';
  import { carSpecs } from '$lib/data';
  import { fadeUp } from '$lib/actions/scrollAnimation';

  const specsList = [
    { label: 'Weight', value: carSpecs.weight },
    { label: 'Dimensions', value: carSpecs.dimensions },
    { label: 'Powertrain', value: carSpecs.powertrain },
    { label: 'Battery', value: carSpecs.battery },
    { label: 'Top speed', value: carSpecs.topSpeed },
    { label: 'Materials', value: carSpecs.materials }
  ];

  const highlights = [
    {
      title: 'Aerodynamic optimization',
      desc: 'Extensive CFD simulation shaped a teardrop canopy that cuts drag by 20% over our previous model. Every watt saved is speed gained.',
      icon: 'M3.75 12h16.5M3.75 6.75h10.5a3 3 0 1 1 0 6M3.75 17.25h7.5a3 3 0 1 0 0-6'
    },
    {
      title: 'Custom battery management',
      desc: 'A student-built BMS monitors individual cell temperatures and voltages in real time, maximizing efficiency while keeping the pack safe.',
      icon: 'M21 10.5h.375c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18ZM10.5 9.75 8.25 12.75h4.5l-2.25 3'
    },
    {
      title: 'Carbon fiber monocoque',
      desc: 'The entire chassis is aerospace-grade carbon fiber, for extreme weight reduction with no compromise in structural integrity.',
      icon: 'M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15'
    }
  ];
</script>

<svelte:head>
  <title>The Car: {carSpecs.name} | Westwood Solar Car</title>
  <meta
    name="description"
    content="{carSpecs.name}: a {carSpecs.weight} carbon fiber solar race car with a {carSpecs.powertrain} and a top speed of {carSpecs.topSpeed}."
  />
</svelte:head>

<section class="page-hero car-hero">
  <div class="container">
    <span class="eyebrow">Introducing</span>
    <h1>{carSpecs.name}</h1>
    <p class="lead">
      The pinnacle of student-led automotive engineering. Faster, lighter, and more efficient
      than anything we've built before.
    </p>
    <div class="hero-visual" use:fadeUp>
      <CarSilhouette />
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head" use:fadeUp>
      <span class="eyebrow">Technical specifications</span>
      <h2>Engineered down to the gram.</h2>
      <p>
        Every component of {carSpecs.name} was designed to extract maximum performance from the
        sun's energy.
      </p>
    </div>

    <dl class="specs-grid">
      {#each specsList as spec, i}
        <div class="spec-row" use:fadeUp={{ delay: i * 50 }}>
          <dt>{spec.label}</dt>
          <dd>{spec.value}</dd>
        </div>
      {/each}
    </dl>
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <div class="section-head" use:fadeUp>
      <span class="eyebrow">Engineering highlights</span>
      <h2>Where the performance comes from.</h2>
    </div>

    <div class="highlights-grid">
      {#each highlights as highlight, i}
        <article class="panel highlight-card" use:fadeUp={{ delay: i * 80 }}>
          <span class="icon-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d={highlight.icon} />
            </svg>
          </span>
          <h3>{highlight.title}</h3>
          <p>{highlight.desc}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .car-hero .hero-visual {
    max-width: 760px;
    margin-top: var(--space-xl);
  }

  .specs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 0 var(--space-xl);
    max-width: 900px;
  }

  .spec-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: var(--space-md);
    padding: var(--space-sm) 0;
    border-bottom: 1px solid var(--border);
  }

  .spec-row dt {
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-faint);
    flex-shrink: 0;
  }

  .spec-row dd {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.0625rem;
    color: var(--text);
    text-align: right;
  }

  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-md);
  }

  .highlight-card h3 {
    margin: var(--space-md) 0 var(--space-xs);
  }

  .highlight-card p {
    font-size: 0.9375rem;
    line-height: 1.65;
  }
</style>
