<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { sponsors } from '$lib/data';
  import { fadeUp } from '$lib/actions/scrollAnimation';

  let formStatus = $state('');

  function handleSubmit(event: Event) {
    event.preventDefault();
    formStatus = 'Thank you! Your message has been sent. We will be in touch shortly.';
    const target = event.target as HTMLFormElement;
    target.reset();
  }
</script>

<svelte:head>
  <title>Sponsors | Westwood Solar Car</title>
</svelte:head>

<section class="section">
  <div class="container page-header animate-fade-in">
    <h1 class="title">Our <span class="text-accent">Partners</span></h1>
    <p class="subtitle">Empowering the next generation of engineers.</p>
  </div>
</section>

<section class="section section-darker">
  <div class="container text-center">
    <!-- Platinum Sponsors -->
    <div class="sponsor-tier mb-xl" use:fadeUp>
      <h2 class="tier-title platinum">Platinum Sponsors</h2>
      <div class="sponsor-logos-grid platinum-grid">
        {#each sponsors.platinum as sponsor}
          <a href={sponsor.link} class="sponsor-logo-wrapper" target="_blank" rel="noopener noreferrer">
            <img src={sponsor.logo} alt={sponsor.name} class="sponsor-logo" />
          </a>
        {/each}
      </div>
    </div>

    <!-- Gold Sponsors -->
    <div class="sponsor-tier mb-xl" use:fadeUp>
      <h2 class="tier-title gold">Gold Sponsors</h2>
      <div class="sponsor-logos-grid gold-grid">
        {#each sponsors.gold as sponsor}
          <a href={sponsor.link} class="sponsor-logo-wrapper" target="_blank" rel="noopener noreferrer">
            <img src={sponsor.logo} alt={sponsor.name} class="sponsor-logo" />
          </a>
        {/each}
      </div>
    </div>

    <!-- Silver Sponsors -->
    <div class="sponsor-tier" use:fadeUp>
      <h2 class="tier-title silver">Silver Sponsors</h2>
      <div class="sponsor-logos-grid silver-grid">
        {#each sponsors.silver as sponsor}
          <a href={sponsor.link} class="sponsor-logo-wrapper" target="_blank" rel="noopener noreferrer">
            <img src={sponsor.logo} alt={sponsor.name} class="sponsor-logo" />
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="partnership-layout">
      <div class="partnership-info" use:fadeUp>
        <h2>Become a <span class="text-accent">Sponsor</span></h2>
        <p>Partnering with Westwood Solar Car means investing in the future of sustainable technology and engineering excellence.</p>
        
        <h3 class="mt-md mb-sm">Benefits of Sponsorship</h3>
        <ul class="benefits-list">
          <li>Logo placement on the solar car, apparel, and website</li>
          <li>Access to our resume book of top engineering students</li>
          <li>Brand visibility at international competitions</li>
          <li>Tax-deductible contribution</li>
        </ul>
      </div>

      <div class="contact-form-container" use:fadeUp>
        <h3>Contact Us</h3>
        {#if formStatus}
          <div class="form-success">
            {formStatus}
          </div>
        {/if}
        <form class="contact-form mt-sm" onsubmit={handleSubmit}>
          <div class="form-group">
            <label for="name">Name / Company</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <Button type="submit">Send Message</Button>
        </form>
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

  .tier-title {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: var(--spacing-md);
    padding-bottom: var(--spacing-xs);
    display: inline-block;
    border-bottom: 2px solid;
  }

  .tier-title.platinum { border-color: #e5e4e2; color: #e5e4e2; }
  .tier-title.gold { border-color: #ffd700; color: #ffd700; }
  .tier-title.silver { border-color: #c0c0c0; color: #c0c0c0; }

  .sponsor-logos-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--spacing-lg);
    align-items: center;
  }

  .sponsor-logo-wrapper {
    background-color: var(--bg-surface-elevated);
    border: 1px solid var(--border-subtle);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform var(--transition-base), border-color var(--transition-base);
  }

  .sponsor-logo-wrapper:hover {
    transform: translateY(-5px);
    border-color: var(--border-strong);
  }

  .platinum-grid .sponsor-logo-wrapper { width: 300px; height: 150px; padding: var(--spacing-md); }
  .gold-grid .sponsor-logo-wrapper { width: 250px; height: 125px; padding: var(--spacing-sm); }
  .silver-grid .sponsor-logo-wrapper { width: 200px; height: 100px; padding: var(--spacing-sm); }

  .sponsor-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: grayscale(100%) opacity(0.8);
    transition: filter var(--transition-base);
  }

  .sponsor-logo-wrapper:hover .sponsor-logo {
    filter: grayscale(0%) opacity(1);
  }

  .partnership-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
  }

  @media (max-width: 768px) {
    .partnership-layout {
      grid-template-columns: 1fr;
    }
  }

  .benefits-list {
    list-style: none;
  }

  .benefits-list li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
  }

  .benefits-list li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent-orange);
    font-weight: bold;
  }

  .contact-form-container {
    background-color: var(--bg-surface);
    padding: var(--spacing-lg);
    border-radius: 4px;
    border: 1px solid var(--border-subtle);
  }

  .form-group {
    margin-bottom: var(--spacing-md);
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: var(--bg-main);
    border: 1px solid var(--border-strong);
    border-radius: 2px;
    color: var(--text-primary);
    font-family: var(--font-sans);
    transition: border-color var(--transition-fast);
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--accent-orange);
  }

  .form-success {
    background-color: rgba(46, 204, 113, 0.1);
    border-left: 4px solid #2ecc71;
    padding: 1rem;
    margin-bottom: 1rem;
    color: #2ecc71;
    font-weight: 500;
  }
</style>
