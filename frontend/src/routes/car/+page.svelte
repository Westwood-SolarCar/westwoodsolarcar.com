<script lang="ts">
  import { carSpecs } from '$lib/data';
  import { fadeUp } from '$lib/actions/scrollAnimation';

  const specsList = [
    { label: 'Weight', value: carSpecs.weight },
    { label: 'Dimensions', value: carSpecs.dimensions },
    { label: 'Powertrain', value: carSpecs.powertrain },
    { label: 'Battery', value: carSpecs.battery },
    { label: 'Top Speed', value: carSpecs.topSpeed },
    { label: 'Materials', value: carSpecs.materials }
  ];

  const highlights = [
    {
      title: 'Aerodynamic Optimization',
      desc: 'Extensive CFD (Computational Fluid Dynamics) simulations resulted in a tear-drop shaped canopy that reduces drag by 20% compared to our previous model.',
      image: 'https://placehold.co/400x300/1e1e21/a0a0a5?text=Aero'
    },
    {
      title: 'Custom Battery Management System',
      desc: 'Our electrical team developed a proprietary BMS that monitors individual cell temperatures and voltages in real-time, maximizing efficiency and safety.',
      image: 'https://placehold.co/400x300/1e1e21/a0a0a5?text=BMS'
    },
    {
      title: 'Carbon Fiber Monocoque',
      desc: 'To achieve extreme weight reduction without compromising structural integrity, the entire chassis is constructed from aerospace-grade carbon fiber.',
      image: 'https://placehold.co/400x300/1e1e21/a0a0a5?text=Chassis'
    }
  ];
</script>

<svelte:head>
  <title>The Car | Westwood Solar Car</title>
</svelte:head>

<section class="hero car-hero">
  <div class="hero-bg">
    <img src="https://placehold.co/1920x1080/0a0a0c/a0a0a5?text=Car+Hero+Image" alt="WSC-26" class="hero-image" />
  </div>
  <div class="hero-overlay"></div>
  
  <div class="container hero-content animate-fade-in">
    <h2 class="subtitle">Introducing</h2>
    <h1 class="title">{carSpecs.name}</h1>
    <p class="mission-text">The pinnacle of student-led automotive engineering. Faster, lighter, and more efficient than ever before.</p>
  </div>
</section>

<section class="section section-darker">
  <div class="container">
    <div class="specs-container">
      <div class="specs-info" use:fadeUp>
        <h2>Technical <span class="text-accent">Specifications</span></h2>
        <p class="mb-lg">Every component of {carSpecs.name} was meticulously designed to extract maximum performance from the sun's energy.</p>
        
        <ul class="specs-list">
          {#each specsList as spec}
            <li>
              <span class="spec-label">{spec.label}</span>
              <span class="spec-value">{spec.value}</span>
            </li>
          {/each}
        </ul>
      </div>
      
      <div class="specs-visual" use:fadeUp>
        <img src="https://placehold.co/600x400/333333/a0a0a5?text=Car+Blueprint" alt="Car Blueprint" class="blueprint-img" />
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2 class="text-center mb-lg" use:fadeUp>Engineering <span class="text-accent">Highlights</span></h2>
    
    <div class="features-grid">
      {#each highlights as highlight}
        <div class="feature-item" use:fadeUp>
          <img src={highlight.image} alt={highlight.title} class="feature-img" />
          <div class="feature-content">
            <h3>{highlight.title}</h3>
            <p>{highlight.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .car-hero {
    min-height: 80vh;
  }

  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, var(--bg-main) 0%, transparent 60%),
                linear-gradient(to right, var(--bg-main) 0%, transparent 80%);
    z-index: -1;
  }

  .specs-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
    align-items: center;
  }

  @media (max-width: 768px) {
    .specs-container {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }
  }

  .specs-list {
    list-style: none;
    border-top: 1px solid var(--border-strong);
  }

  .specs-list li {
    display: flex;
    padding: var(--spacing-sm) 0;
    border-bottom: 1px solid var(--border-subtle);
  }

  @media (max-width: 480px) {
    .specs-list li {
      flex-direction: column;
      gap: 0.25rem;
    }
  }

  .spec-label {
    width: 150px;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.875rem;
    flex-shrink: 0;
  }

  .spec-value {
    font-weight: 500;
    color: var(--text-primary);
  }

  .blueprint-img {
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--border-strong);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
  }

  .feature-item {
    background-color: var(--bg-surface);
    border: 1px solid var(--border-subtle);
    border-radius: 4px;
    overflow: hidden;
    transition: transform var(--transition-base);
  }

  .feature-item:hover {
    transform: translateY(-5px);
  }

  .feature-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid var(--border-subtle);
  }

  .feature-content {
    padding: var(--spacing-md);
  }

  .feature-content h3 {
    margin-bottom: var(--spacing-xs);
    font-size: 1.25rem;
  }

  .feature-content p {
    margin: 0;
    font-size: 0.95rem;
  }
</style>
