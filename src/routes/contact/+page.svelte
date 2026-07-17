<script lang="ts">
  import { fadeUp } from '$lib/actions/scrollAnimation';

  const email = 'contact@westwoodracing.com';
</script>

<svelte:head>
  <title>Contact | Westwood Solar Car</title>
  <meta
    name="description"
    content="Get in touch with Westwood Solar Car about sponsorships, joining the team, or the program."
  />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Get in touch</span>
    <h1>Let's talk.</h1>
    <p class="lead">
      Whether you want to sponsor the team, join as a student, or just learn more about the
      program, send us an email and we'll get back to you.
    </p>
  </div>
</section>

<section class="section">
  <div class="container contact-grid">
    <article class="panel contact-card" use:fadeUp>
      <span class="icon-chip">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
      </span>
      <h2>Sponsorships</h2>
      <p>
        Interested in partnering with the team? Include your company name and the best contact
        person in your message, and we'll follow up with tier details.
      </p>
      <a
        class="btn btn-primary"
        href="mailto:{email}?subject=Sponsorship%20inquiry%20%E2%80%94%20Westwood%20Solar%20Car"
      >
        Email about sponsoring
      </a>
    </article>

    <article class="panel contact-card" use:fadeUp={{ delay: 80 }}>
      <span class="icon-chip">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      </span>
      <h2>Join the team</h2>
      <p>
        Westwood students: no experience needed. Tell us what you're interested in: design,
        electrical, build, software, or business, and we'll take it from there.
      </p>
      <a
        class="btn btn-outline"
        href="mailto:{email}?subject=Joining%20Westwood%20Solar%20Car"
      >
        Email about joining
      </a>
    </article>
  </div>

  <div class="container">
    <p class="direct-line" use:fadeUp>
      Or write to us directly at
      <a href="mailto:{email}" class="email-link">{email}</a>
    </p>
  </div>
</section>

<style>
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-md);
  }

  .contact-card h2 {
    font-size: 1.375rem;
    margin: var(--space-md) 0 var(--space-xs);
  }

  .contact-card p {
    font-size: 0.9375rem;
    line-height: 1.65;
    margin-bottom: var(--space-md);
    max-width: 38em;
  }

  .direct-line {
    margin-top: var(--space-lg);
    font-size: 0.9375rem;
    color: var(--text-faint);
  }

  .email-link {
    color: var(--accent-text);
    font-weight: 500;
  }

  .email-link:hover {
    text-decoration: underline;
  }
</style>
