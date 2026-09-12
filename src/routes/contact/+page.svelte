<script lang="ts">
  import { site } from '$lib/data';
</script>

<svelte:head>
  <title>Contact &middot; Westwood Solar Car</title>
  <meta
    name="description"
    content="Contact Westwood Solar Car about sponsorship or joining the team."
  />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <p class="label">Contact</p>
    <h1>Get in touch.</h1>
    <p class="lead">
      One inbox, checked by students. Say which of these you are and we will get back to you.
    </p>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <dl class="reasons">
      <div>
        <dt>Sponsors</dt>
        <dd>Include your company name and who to contact. See the <a href="/sponsors">tiers</a> first if you want.</dd>
      </div>
      <div>
        <dt>Students at {site.school}</dt>
        <dd>Tell us what you want to work on. No experience needed, and there is no application.</dd>
      </div>
      <div>
        <dt>Anyone else</dt>
        <dd>Questions about the team or the competition are welcome.</dd>
      </div>
    </dl>

    <a class="email" href="mailto:{site.email}">{site.email}</a>
  </div>
</section>

<style>
  /* Keep the page's left edge, limit only the line length. */
  .narrow {
    max-width: var(--max);
  }

  .narrow > * {
    max-width: 44em;
  }

  .reasons div {
    padding: var(--s-4) 0;
    border-top: 1px solid var(--rule);
  }

  .reasons div:last-child {
    border-bottom: 1px solid var(--rule);
  }

  .reasons dt {
    font-weight: 600;
    color: var(--ink);
    margin-bottom: var(--s-1);
  }

  .reasons dd {
    color: var(--ink-2);
    max-width: 40em;
  }

  .reasons a {
    color: var(--sun-ink);
    text-decoration: underline;
  }

  .email {
    display: inline-block;
    margin-top: var(--s-6);
    font-family: var(--font-display);
    font-size: clamp(1.375rem, 3vw, 2rem);
    font-weight: 600;
    color: var(--ink);
    border-bottom: 2px solid var(--sun);
    word-break: break-all;
  }

  .email:hover {
    color: var(--sun-ink);
  }
</style>
