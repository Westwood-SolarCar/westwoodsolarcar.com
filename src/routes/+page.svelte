<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { site, teamMembers } from '$lib/data';

  const facts = [
    { label: 'Students', value: String(teamMembers.length) },
    { label: 'Season', value: 'First' },
    { label: 'Competition', value: site.competition }
  ];

  const work = [
    {
      name: 'Design',
      body: 'The car is modelled in CAD before anything is cut. Body shape, frame layout, and where the battery and array go.'
    },
    {
      name: 'Build',
      body: 'Students do the fabrication and the wiring. Nothing gets ordered as a finished assembly if we can make it ourselves.'
    },
    {
      name: 'Race',
      body: `The ${site.competition} runs over several days. Cars have to pass a safety inspection first, then they are scored on the distance they cover.`
    }
  ];
</script>

<svelte:head>
  <title>Westwood Solar Car</title>
  <meta
    name="description"
    content="Westwood Solar Car is a student engineering team at Westwood High School in Austin, Texas, building a solar-powered car for the Solar Car Challenge."
  />
</svelte:head>

<section class="hero">
  <div class="container">
    <p class="label">{site.school} &middot; {site.city}</p>

    <h1>We're building<br />a solar car.</h1>

    <div class="intro">
      <div>
        <p class="lead">
          Westwood Solar Car is run by students. We design the car, build it, raise the money
          for it, and drive it. This is our first season entering the {site.competition}, so a
          lot of this site is still a plan rather than a result.
        </p>
        <div class="actions">
          <Button href="/team">Meet the team</Button>
          <Button href="/sponsors" variant="outline">Sponsor us</Button>
        </div>
      </div>

      <dl class="facts">
        {#each facts as fact}
          <div>
            <dt class="label">{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        {/each}
      </dl>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <h2>What we do</h2>
    </div>

    <div class="cells three">
      {#each work as item}
        <article class="cell">
          <h3>{item.name}</h3>
          <p>{item.body}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="section-head">
      <h2>Where we are right now</h2>
    </div>
    <p>
      Early. The team is split into design, electrical, build, and operations groups, and the
      work at the moment is CAD, sourcing parts, and raising money. There is no finished car
      to show yet.
    </p>
    <p>
      When there is, it goes on this site as photographs and measured numbers rather than a
      rendering. Until then the car page says what we are working on and not much more.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="cells two">
      <article class="cell">
        <h3>Students</h3>
        <p>
          You do not need experience. Most of us did not have any. Tell us what you want to
          learn and we will find you something to work on.
        </p>
        <Button href="/contact" variant="outline">Get in touch</Button>
      </article>
      <article class="cell">
        <h3>Sponsors</h3>
        <p>
          Sponsorship pays for materials, tools, competition entry, and travel. It is the main
          reason a team like ours can compete at all.
        </p>
        <Button href="/sponsors">Sponsorship</Button>
      </article>
    </div>
  </div>
</section>

<style>
  .hero {
    padding: var(--s-8) 0 var(--s-7);
  }

  .hero h1 {
    margin: var(--s-4) 0 var(--s-7);
    font-size: clamp(2.75rem, 8vw, 5.5rem);
    line-height: 0.96;
    letter-spacing: -0.02em;
  }

  .intro {
    display: grid;
    grid-template-columns: minmax(0, 7fr) minmax(0, 4fr);
    gap: var(--s-8);
    align-items: start;
  }

  @media (max-width: 860px) {
    .intro {
      grid-template-columns: 1fr;
      gap: var(--s-6);
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s-3);
    margin-top: var(--s-6);
  }

  .facts > div {
    padding: var(--s-3) 0;
    border-top: 1px solid var(--rule);
  }

  .facts > div:last-child {
    border-bottom: 1px solid var(--rule);
  }

  .facts dt {
    margin-bottom: var(--s-1);
  }

  .facts dd {
    font-family: var(--font-display);
    font-size: 1.375rem;
    font-weight: 600;
    color: var(--ink);
  }

  .narrow {
    max-width: var(--max);
  }

  .narrow > * {
    max-width: 44em;
  }

  .narrow p + p {
    margin-top: var(--s-4);
  }

  .cells.three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .cells.two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    .cells.three,
    .cells.two {
      grid-template-columns: 1fr;
    }
  }

  .cell :global(.btn) {
    margin-top: var(--s-5);
  }
</style>
