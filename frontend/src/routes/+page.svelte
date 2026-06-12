<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Card from '$lib/components/Card.svelte';
  import { fadeUp } from '$lib/actions/scrollAnimation';
  
  const stats = [
    { label: 'Team Members', value: '14' },
    { label: 'Track Miles', value: '500+' },
    { label: 'Solar Arrays Designed', value: '3' },
    { label: 'Years Active', value: '2' }
  ];

  const highlights = [
    {
      title: 'Texas Motor Speedway',
      image: 'https://placehold.co/600x400/333333/a0a0a5?text=TMS+Race',
      desc: 'Competing on the world-renowned closed track, pushing our engineering limits in endurance racing.'
    },
    {
      title: 'Cross-Country Ready',
      image: 'https://placehold.co/600x400/333333/a0a0a5?text=Cross+Country',
      desc: 'Designing a vehicle capable of navigating real-world roads using only the power of the sun.'
    },
    {
      title: 'Scrutineering Success',
      image: 'https://placehold.co/600x400/333333/a0a0a5?text=Scrutineering',
      desc: 'Passing rigorous electrical and mechanical safety inspections required by the Solar Car Challenge.'
    }
  ];
</script>

<svelte:head>
  <title>Westwood Solar Car Racing | High School Engineering</title>
  <meta name="description" content="Westwood Solar Car is a high school student-led engineering team dedicated to competing in the national Solar Car Challenge." />
</svelte:head>

<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  
  <div class="container hero-content animate-fade-in">
    <h2 class="subtitle">High School Engineering Excellence</h2>
    <h1 class="title">Westwood<br><span class="text-accent">Solar Car</span></h1>
    <p class="mission-text">Designing, building, and racing solar-powered vehicles for the national Solar Car Challenge.</p>
    <div class="hero-actions">
      <Button href="/car">Explore The Car</Button>
      <Button href="/sponsors" variant="outline">Partner With Us</Button>
    </div>
  </div>
</section>

<section class="section section-darker">
  <div class="container">
    <div class="stats-grid">
      {#each stats as stat}
        <div class="stat-item" use:fadeUp>
          <div class="stat-value">{stat.value}</div>
          <div class="stat-label">{stat.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header" use:fadeUp>
      <h2>The <span class="text-accent">Solar Car Challenge</span></h2>
      <Button href="/about" variant="outline">Our Story</Button>
    </div>
    
    <div class="highlights-grid mt-lg">
      {#each highlights as item}
        <div use:fadeUp>
          <Card title={item.title} image={item.image}>
            <p>{item.desc}</p>
          </Card>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section section-darker cta-section">
  <div class="container text-center" use:fadeUp>
    <h2>Join the <span class="text-accent">Legacy</span></h2>
    <p class="cta-text mx-auto mt-sm mb-md">We are always looking for passionate high school students to join our engineering, design, and business teams.</p>
    <Button href="/team">Become a Member</Button>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: var(--nav-height);
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* Using a linear gradient as a placeholder for the hero image */
    background: linear-gradient(135deg, var(--bg-surface-elevated) 0%, var(--bg-main) 100%);
    z-index: -2;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 0%, var(--bg-main) 100%);
    z-index: -1;
  }

  .hero-content {
    max-width: 800px;
  }

  .subtitle {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-sm);
  }

  .title {
    margin-bottom: var(--spacing-md);
  }

  .mission-text {
    font-size: 1.5rem;
    color: var(--text-primary);
    max-width: 600px;
    margin-bottom: var(--spacing-lg);
  }

  .hero-actions {
    display: flex;
    gap: var(--spacing-sm);
  }

  @media (max-width: 600px) {
    .hero-actions {
      flex-direction: column;
    }
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-lg);
    text-align: center;
  }

  .stat-value {
    font-size: 3.5rem;
    font-weight: 800;
    color: var(--accent-orange);
    line-height: 1;
    margin-bottom: var(--spacing-xs);
  }

  .stat-label {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-secondary);
    font-weight: 600;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    .section-header {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--spacing-md);
    }
  }

  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--spacing-md);
  }

  .cta-section {
    padding: var(--spacing-xl) 0;
  }

  .cta-text {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
</style>
