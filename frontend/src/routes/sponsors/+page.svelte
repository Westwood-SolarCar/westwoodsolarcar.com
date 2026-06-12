<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { sponsors } from '$lib/data';
  import { fadeUp } from '$lib/actions/scrollAnimation';

  let formStatus = $state('');

  function handleSubmit(event: Event) {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    const name = String(formData.get('name') || 'A sponsor contact').trim();
    const email = String(formData.get('email') || '');
    const message = String(formData.get('message') || '').trim();

    const subject = encodeURIComponent(`Sponsorship inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name / Company: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:contact@westwoodracing.com?subject=${subject}&body=${body}`;
    formStatus = 'Your email app should open with a sponsorship draft. Send it from there.';
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
          <article class="sponsor-card sponsor-card--platinum">
            <span class="sponsor-chip">Platinum Partner</span>
            <div class="sponsor-mark">{sponsor.name.split(' ').map((word) => word[0]).slice(0, 2).join('')}</div>
            <h3>{sponsor.name}</h3>
            <p>Supporting our build, outreach, and competition season.</p>
          </article>
        {/each}
      </div>
    </div>

    <!-- Gold Sponsors -->
    <div class="sponsor-tier mb-xl" use:fadeUp>
      <h2 class="tier-title gold">Gold Sponsors</h2>
      <div class="sponsor-logos-grid gold-grid">
        {#each sponsors.gold as sponsor}
          <article class="sponsor-card sponsor-card--gold">
            <span class="sponsor-chip">Gold Partner</span>
            <div class="sponsor-mark">{sponsor.name.split(' ').map((word) => word[0]).slice(0, 2).join('')}</div>
            <h3>{sponsor.name}</h3>
            <p>Fueling innovation, travel, and team resources.</p>
          </article>
        {/each}
      </div>
    </div>

    <!-- Silver Sponsors -->
    <div class="sponsor-tier" use:fadeUp>
      <h2 class="tier-title silver">Silver Sponsors</h2>
      <div class="sponsor-logos-grid silver-grid">
        {#each sponsors.silver as sponsor}
          <article class="sponsor-card sponsor-card--silver">
            <span class="sponsor-chip">Silver Partner</span>
            <div class="sponsor-mark">{sponsor.name.split(' ').map((word) => word[0]).slice(0, 2).join('')}</div>
            <h3>{sponsor.name}</h3>
            <p>Helping us grow our lab, tools, and community impact.</p>
          </article>
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

  .sponsor-card {
    width: 100%;
    max-width: 320px;
    min-height: 180px;
    padding: var(--spacing-md);
    border: 1px solid var(--border-subtle);
    border-radius: 18px;
    background-color: var(--bg-surface);
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
    text-align: left;
    transition: transform var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base);
  }

  :global([data-theme="dark"]) .sponsor-card {
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.01));
    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.24);
  }

  :global([data-theme="light"]) .sponsor-card {
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.96));
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
  }

  .sponsor-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent-orange);
    box-shadow: 0 18px 30px rgba(15, 23, 42, 0.14);
  }

  .sponsor-chip {
    display: inline-block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--accent-orange);
    margin-bottom: 0.75rem;
  }

  .sponsor-mark {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--accent-orange), #ffb36b);
    color: #111;
    font-weight: 800;
    letter-spacing: 0.08em;
    margin-bottom: 0.75rem;
  }

  .sponsor-card h3 {
    margin-bottom: 0.35rem;
    font-size: 1.1rem;
  }

  .sponsor-card p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 0.95rem;
  }

  .platinum-grid .sponsor-card { min-height: 210px; }
  .gold-grid .sponsor-card { min-height: 190px; }
  .silver-grid .sponsor-card { min-height: 170px; }

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
