<script lang="ts">
  import { site } from '$lib/data';
</script>

<footer>
  <div class="container grid">
    <div>
      <p class="name">{site.name}</p>
      <p class="blurb">
        A student engineering team at {site.school}, building a solar car for the
        {site.competition}.
      </p>
    </div>

    <nav aria-label="Footer">
      <p class="label">Site</p>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/team">Team</a></li>
        <li><a href="/car">The car</a></li>
        <li><a href="/sponsors">Sponsors</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>

    <div>
      <p class="label">Contact</p>
      <ul>
        <li><a href="mailto:{site.email}">{site.email}</a></li>
        {#if site.instagram}
          <li><a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
        {/if}
      </ul>
      <p class="place">{site.city}</p>
    </div>
  </div>
</footer>

<style>
  footer {
    border-top: 1px solid var(--rule);
    padding: var(--s-7) 0;
    margin-top: var(--s-8);
  }

  .grid {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr);
    gap: var(--s-6);
  }

  @media (max-width: 720px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }

  .name {
    font-weight: 600;
    color: var(--ink);
  }

  .blurb {
    margin-top: var(--s-2);
    max-width: 28em;
    font-size: 0.9375rem;
  }

  .label {
    margin-bottom: var(--s-2);
  }

  li a {
    display: inline-block;
    padding: 0.2rem 0;
    font-size: 0.9375rem;
    color: var(--ink-2);
  }

  li a:hover {
    color: var(--sun-ink);
    text-decoration: underline;
  }

  .place {
    margin-top: var(--s-3);
    font-size: 0.9375rem;
    color: var(--ink-3);
  }
</style>
