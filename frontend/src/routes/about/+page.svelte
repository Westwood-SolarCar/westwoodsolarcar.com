<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import { fadeUp } from '$lib/actions/scrollAnimation';

  const timeline = [
    { year: '2020', event: 'Team Founded', desc: 'Westwood Solar Car was established by a small group of high school engineering students with a vision.' },
    { year: '2022', event: 'First Competition', desc: 'Debuted WSC-22 at the Solar Car Challenge at Texas Motor Speedway.' },
    { year: '2024', event: 'Aerodynamic Breakthrough', desc: 'Redesigned the chassis for the cross-country division, resulting in a 30% reduction in drag.' },
    { year: '2026', event: 'WSC-26 Launch', desc: 'Unveiling our most advanced, efficient, and lightweight vehicle to date.' }
  ];

  const departments = [
    { name: 'Mechanical', desc: 'Focuses on structural integrity, suspension, steering, and aerodynamics.' },
    { name: 'Electrical', desc: 'Designs battery systems, motor controllers, and power distribution.' },
    { name: 'Software', desc: 'Develops telemetry, driver interfaces, and data analysis tools.' },
    { name: 'Business', desc: 'Manages sponsorships, outreach, finance, and logistics.' }
  ];
</script>

<svelte:head>
  <title>About Us | Westwood Solar Car</title>
</svelte:head>

<section class="section">
  <div class="container page-header animate-fade-in">
    <h1 class="title">Our <span class="text-accent">Story</span></h1>
    <p class="subtitle">High school engineering excellence driven by passion and innovation.</p>
  </div>
</section>

<section class="section section-darker">
  <div class="container">
    <div class="two-column">
      <div class="text-content" use:fadeUp>
        <h2>Vision & Values</h2>
        <p>Westwood Solar Car is more than just a high school racing team. We are a crucible for future engineers, innovators, and leaders.</p>
        <p>Our mission is to push the boundaries of sustainable transportation while providing students with unparalleled hands-on experience in design, manufacturing, and project management to compete in the Solar Car Challenge.</p>
        <ul class="values-list mt-sm">
          <li><strong>Innovation:</strong> Constantly seeking better, more efficient solutions.</li>
          <li><strong>Excellence:</strong> Demanding the highest quality in every component.</li>
          <li><strong>Teamwork:</strong> Succeeding together through collaboration and trust.</li>
          <li><strong>Sustainability:</strong> Engineering a cleaner future.</li>
        </ul>
      </div>
      <div class="image-content" use:fadeUp>
        <img src="https://placehold.co/600x600/333333/a0a0a5?text=Team+Working" alt="Team Working" class="rounded-img" />
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2 class="text-center mb-lg" use:fadeUp>Team <span class="text-accent">History</span></h2>
    <div class="timeline">
      {#each timeline as item}
        <div class="timeline-item" use:fadeUp>
          <div class="timeline-year">{item.year}</div>
          <div class="timeline-content">
            <h3>{item.event}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section section-darker">
  <div class="container">
    <h2 class="text-center mb-lg" use:fadeUp>What We <span class="text-accent">Do</span></h2>
    <div class="departments-grid">
      {#each departments as dept}
        <div use:fadeUp>
          <Card title={dept.name} class="dept-card">
            <p>{dept.desc}</p>
          </Card>
        </div>
      {/each}
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

  .two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
    align-items: center;
  }

  @media (max-width: 768px) {
    .two-column {
      grid-template-columns: 1fr;
      gap: var(--spacing-md);
    }
  }

  .values-list {
    list-style: none;
  }

  .values-list li {
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
  }

  .values-list strong {
    color: var(--text-primary);
  }

  .rounded-img {
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--border-strong);
  }

  .timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }

  .timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 120px;
    width: 2px;
    background-color: var(--border-strong);
  }

  @media (max-width: 600px) {
    .timeline::before {
      left: 20px;
    }
  }

  .timeline-item {
    display: flex;
    margin-bottom: var(--spacing-lg);
    position: relative;
  }

  .timeline-year {
    width: 120px;
    flex-shrink: 0;
    font-weight: 800;
    font-size: 1.5rem;
    color: var(--accent-orange);
    padding-right: var(--spacing-md);
    text-align: right;
  }

  @media (max-width: 600px) {
    .timeline-item {
      flex-direction: column;
    }
    .timeline-year {
      width: auto;
      text-align: left;
      padding-left: 40px;
      margin-bottom: var(--spacing-xs);
    }
  }

  .timeline-content {
    flex-grow: 1;
    padding-left: var(--spacing-md);
    position: relative;
  }

  @media (max-width: 600px) {
    .timeline-content {
      padding-left: 40px;
    }
  }

  .timeline-content::before {
    content: '';
    position: absolute;
    top: 8px;
    left: -6px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: var(--accent-orange);
    box-shadow: 0 0 0 4px var(--bg-main);
  }

  @media (max-width: 600px) {
    .timeline-content::before {
      left: 14px;
      top: -35px;
    }
  }

  .timeline-content h3 {
    margin-bottom: var(--spacing-xs);
  }

  .departments-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-md);
  }

  :global(.dept-card) {
    height: 100%;
  }
</style>
