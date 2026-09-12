<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { site, sponsorTiers } from '$lib/data';
</script>

<svelte:head>
  <title>Sponsors &middot; Westwood Solar Car</title>
  <meta
    name="description"
    content="Sponsor Westwood Solar Car, a first-year student solar car team at Westwood High School in Austin, Texas."
  />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <p class="label">Sponsors</p>
    <h1>We are looking for our first sponsors.</h1>
    <p class="lead">
      A solar car costs more than a school club can raise on its own. Sponsorship pays for
      materials, tools, competition entry, and getting the team and the car to the event.
    </p>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="section-head">
      <h2>Tiers</h2>
    </div>

    <ul class="tiers">
      {#each sponsorTiers as tier}
        <li class:featured={tier.featured}>
          <div class="row">
            <h3>{tier.name}</h3>
            <span class="amount">{tier.amount}</span>
          </div>
          <p>{tier.gets}</p>
        </li>
      {/each}
    </ul>

    <p class="note">
      No company has signed on yet, so this page has no logos on it. Yours would be the first.
      If none of these amounts fit, email us anyway. Donated materials, machine time, and
      advice are worth as much to us as money.
    </p>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="section-head">
      <h2>Getting in touch</h2>
    </div>
    <p>
      Email us with your company name and who to contact, and we will send back what we are
      building, what we still need, and where your logo would go.
    </p>
    <div class="actions">
      <Button href="mailto:{site.email}?subject={encodeURIComponent(`Sponsorship — ${site.name}`)}">
        Email us
      </Button>
      <a class="email" href="mailto:{site.email}">{site.email}</a>
    </div>
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

  .tiers li {
    padding: var(--s-5) 0;
    border-top: 1px solid var(--rule);
  }

  .tiers li:last-child {
    border-bottom: 1px solid var(--rule);
  }

  .tiers li.featured {
    border-top-color: var(--sun);
  }

  .row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--s-4);
    margin-bottom: var(--s-2);
  }

  .amount {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--ink-2);
  }

  .tiers p {
    max-width: 40em;
  }

  .note {
    margin-top: var(--s-6);
    font-size: 0.9375rem;
    color: var(--ink-3);
    max-width: 40em;
  }

  .actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--s-5);
    margin-top: var(--s-5);
  }

  .email {
    color: var(--ink-2);
    border-bottom: 1px solid var(--sun);
    padding-bottom: 1px;
  }

  .email:hover {
    color: var(--sun-ink);
  }
</style>
