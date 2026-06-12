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

  const benefits = [
    {
      icon: '◎',
      title: 'STEM Investment',
      desc: 'Directly support student engineering education and hands-on learning in your community.'
    },
    {
      icon: '◈',
      title: 'Brand Visibility',
      desc: 'Reach parents, educators, students, and industry professionals at regional and national competitions.'
    },
    {
      icon: '◇',
      title: 'Tax Benefits',
      desc: 'Contributions may qualify as charitable donations. Consult your tax professional for details.'
    },
    {
      icon: '◉',
      title: 'Community Impact',
      desc: 'Partner with an organization that gives back through outreach, workshops, and STEM advocacy.'
    }
  ];
</script>

<svelte:head>
  <title>Sponsors | Westwood Solar Car</title>
</svelte:head>

<section class="hero-section">
  <div class="container">
    <p class="hero-label">Partnership</p>
    <h1 class="hero-title">Our <span class="text-accent">Sponsors</span></h1>
    <p class="hero-desc">
      Westwood Solar Car is grateful for the organizations and individuals who make our program possible. Explore sponsorship opportunities below.
    </p>
  </div>
</section>

<!-- Platinum Sponsors -->
<section class="sponsor-tier section-darker">
  <div class="container">
    <div class="tier-header">
      <span class="tier-badge platinum">Platinum</span>
      <div class="tier-price">$2,500+</div>
    </div>
    <p class="tier-desc">Premier visibility across all materials, websites, and competition presentations. Includes exclusive team liaison and presentation opportunities.</p>
    <ul class="tier-benefits">
      <li>Large logo on solar car</li>
      <li>Premier website placement</li>
      <li>Featured in all media</li>
      <li>Team presentation access</li>
      <li>Dedicated sponsor report</li>
      <li>Event tickets & recognition</li>
    </ul>
    <div class="sponsor-logos">
      {#each sponsors.platinum as sponsor}
        <div class="sponsor-logo-item">
          <div class="logo-placeholder">{sponsor.name.split(' ').map((w) => w[0]).join('').slice(0,2)}</div>
          <span class="sponsor-name">{sponsor.name}</span>
        </div>
      {/each}
      <div class="sponsor-logo-item empty">
        <div class="logo-placeholder empty-placeholder">Your Logo</div>
        <a href="/contact" class="get-in-touch">Get in Touch</a>
      </div>
    </div>
  </div>
</section>

<!-- Gold Sponsors -->
<section class="sponsor-tier section">
  <div class="container">
    <div class="tier-header">
      <span class="tier-badge gold">Gold</span>
      <div class="tier-price">$1,000–$2,499</div>
    </div>
    <p class="tier-desc">Prominent recognition across team materials, website, and competition events with logo placement on robot.</p>
    <ul class="tier-benefits">
      <li>Medium logo on solar car</li>
      <li>Website recognition</li>
      <li>Social media feature</li>
      <li>Competition recognition</li>
      <li>Sponsor update report</li>
    </ul>
    <div class="sponsor-logos">
      {#each sponsors.gold as sponsor}
        <div class="sponsor-logo-item">
          <div class="logo-placeholder">{sponsor.name.split(' ').map((w) => w[0]).join('').slice(0,2)}</div>
          <span class="sponsor-name">{sponsor.name}</span>
        </div>
      {/each}
      <div class="sponsor-logo-item empty">
        <div class="logo-placeholder empty-placeholder">Your Logo</div>
        <a href="/contact" class="get-in-touch">Get in Touch</a>
      </div>
    </div>
  </div>
</section>

<!-- Silver Sponsors -->
<section class="sponsor-tier silver-tier">
  <div class="container">
    <div class="tier-header">
      <span class="tier-badge silver">Silver</span>
      <div class="tier-price">$500–$999</div>
    </div>
    <p class="tier-desc">Website recognition and inclusion in all season-end materials and team presentations.</p>
    <ul class="tier-benefits">
      <li>Logo on team materials</li>
      <li>Website recognition</li>
      <li>Social media mention</li>
      <li>Season-end report</li>
    </ul>
    <div class="sponsor-logos">
      {#each sponsors.silver as sponsor}
        <div class="sponsor-logo-item">
          <div class="logo-placeholder">{sponsor.name.split(' ').map((w) => w[0]).join('').slice(0,2)}</div>
          <span class="sponsor-name">{sponsor.name}</span>
        </div>
      {/each}
      <div class="sponsor-logo-item empty">
        <div class="logo-placeholder empty-placeholder">Your Logo</div>
        <a href="/contact" class="get-in-touch">Get in Touch</a>
      </div>
    </div>
  </div>
</section>

<!-- Bronze Sponsors -->
<section class="sponsor-tier bronze-tier">
  <div class="container">
    <div class="tier-header">
      <span class="tier-badge bronze">Bronze</span>
      <div class="tier-price">$100–$499</div>
    </div>
    <p class="tier-desc">Website recognition and acknowledgment in team materials and communications.</p>
    <ul class="tier-benefits">
      <li>Website recognition</li>
      <li>Thank-you acknowledgment</li>
      <li>Season-end mention</li>
    </ul>
    <div class="sponsor-logos">
      {#each sponsors.bronze as sponsor}
        <div class="sponsor-logo-item">
          <div class="logo-placeholder">{sponsor.name.split(' ').map((w) => w[0]).join('').slice(0,2)}</div>
          <span class="sponsor-name">{sponsor.name}</span>
        </div>
      {/each}
      <div class="sponsor-logo-item empty">
        <div class="logo-placeholder empty-placeholder">Your Logo</div>
        <a href="/contact" class="get-in-touch">Get in Touch</a>
      </div>
    </div>
  </div>
</section>

<!-- Why Sponsor Section -->
<section class="section why-sponsor-section">
  <div class="container">
    <h2 class="section-title text-center mb-lg">Why Sponsor <span class="text-accent">Westwood?</span></h2>
    <div class="benefits-grid">
      {#each benefits as benefit, i}
        <div class="benefit-card" use:fadeUp style="animation-delay: {i * 0.1}s">
          <div class="benefit-icon">{benefit.icon}</div>
          <h3>{benefit.title}</h3>
          <p>{benefit.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Become a Sponsor CTA -->
<section class="section cta-section">
  <div class="container">
    <div class="cta-content text-center" use:fadeUp>
      <h2>Become a <span class="text-accent">Sponsor</span></h2>
      <p class="cta-text">
        Interested in partnering with Westwood Solar Car? We'd love to discuss how we can work together to advance STEM education and solar vehicle engineering.
      </p>
      <div class="cta-buttons">
        <Button href="/contact">Contact Us</Button>
        <a href="mailto:contact@westwoodracing.com" class="email-link">Send an Email</a>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    padding: var(--spacing-xl) 0 var(--spacing-lg);
    text-align: center;
  }

  .hero-label {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-xs);
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: var(--spacing-sm);
  }

  .hero-desc {
    font-size: 1.125rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  .sponsor-tier {
    padding: var(--spacing-lg) 0;
    border-bottom: 1px solid var(--border-subtle);
  }

  .sponsor-tier:last-of-type {
    border-bottom: none;
  }

  .sponsor-tier.section-darker {
    background-color: var(--bg-section-alt);
  }

  .tier-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
  }

  .tier-badge {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.35rem 0.75rem;
    border-radius: var(--border-radius);
  }

  .tier-badge.platinum {
    background-color: var(--accent-orange);
    color: white;
  }

  .tier-badge.gold {
    background: linear-gradient(135deg, var(--accent-orange), #ff8c00);
    color: white;
  }

  .tier-badge.silver {
    background: var(--bg-surface-elevated);
    color: var(--text-primary);
    border: 1px solid var(--border-strong);
  }

  .tier-badge.bronze {
    background: var(--bg-surface);
    color: var(--text-secondary);
    border: 1px solid var(--border-subtle);
  }

  .tier-price {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-primary);
  }

  .tier-desc {
    font-size: 1rem;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-md);
    max-width: 700px;
    line-height: 1.6;
  }

  .tier-benefits {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-lg);
  }

  .tier-benefits li {
    position: relative;
    padding-left: 1.5rem;
    font-size: 0.95rem;
    color: var(--text-secondary);
  }

  .tier-benefits li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--accent-orange);
    font-weight: bold;
  }

  .sponsor-logos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: var(--spacing-md);
  }

  .sponsor-logo-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xs);
  }

  .logo-placeholder {
    width: 100%;
    aspect-ratio: 3 / 2;
    background: var(--bg-surface-elevated);
    border: 1px solid var(--border-subtle);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.5rem;
    color: var(--text-secondary);
    transition: transform var(--transition-base), border-color var(--transition-base);
  }

  .logo-placeholder:not(.empty-placeholder):hover {
    transform: translateY(-4px);
    border-color: var(--accent-orange);
  }

  .empty-placeholder {
    background: var(--bg-surface);
    border-style: dashed;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-tertiary);
  }

  .sponsor-name {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-align: center;
  }

  .get-in-touch {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--accent-orange);
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  .get-in-touch:hover {
    color: var(--accent-orange-hover);
    text-decoration: underline;
  }

  .why-sponsor-section {
    background-color: var(--bg-section-alt);
  }

  .section-title {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-lg);
  }

  .benefit-card {
    background-color: var(--bg-surface);
    border: 1px solid var(--border-subtle);
    border-radius: var(--border-radius);
    padding: var(--spacing-lg);
    text-align: center;
    transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
  }

  .benefit-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    border-color: var(--accent-orange);
  }

  .benefit-icon {
    font-size: 2.5rem;
    margin-bottom: var(--spacing-sm);
    color: var(--accent-orange);
    line-height: 1;
  }

  .benefit-card h3 {
    font-size: 1.25rem;
    margin-bottom: var(--spacing-sm);
  }

  .benefit-card p {
    font-size: 0.95rem;
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .cta-section {
    background-color: var(--bg-section-alt);
  }

  .cta-content {
    max-width: 700px;
    margin: 0 auto;
  }

  .cta-content h2 {
    margin-bottom: var(--spacing-sm);
  }

  .cta-text {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-lg);
  }

  .cta-buttons {
    display: flex;
    gap: var(--spacing-md);
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .email-link {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  .email-link:hover {
    color: var(--accent-orange);
  }
</style>