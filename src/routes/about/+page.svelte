<script lang="ts">
  import { site } from '$lib/data';

  const groups = [
    { name: 'Design and CAD', body: 'Body shape, frame layout, suspension, and the drawings everything else is built from.' },
    { name: 'Electrical', body: 'Solar array, battery pack, wiring, and the safety systems the rules require.' },
    { name: 'Build', body: 'Fabrication and assembly. Turning the drawings into a car that actually exists.' },
    { name: 'Finance and operations', body: 'Fundraising, sponsorship, budgeting, and getting the team and the car to the event.' }
  ];
</script>

<svelte:head>
  <title>About &middot; Westwood Solar Car</title>
  <meta
    name="description"
    content="Westwood Solar Car is a student engineering team at Westwood High School in Austin, Texas, entering the Solar Car Challenge for the first time."
  />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <p class="label">About</p>
    <h1>A first-year team at {site.school}.</h1>
    <p class="lead">
      Westwood Solar Car is run by students. We design the car, build it, raise the money for
      it, and drive it. This is our first year entering the {site.competition}.
    </p>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="section-head">
      <h2>Why we are doing this</h2>
    </div>
    <p>
      A school engineering class usually stops at the drawing. This does not. Someone has to
      pick the parts, order them, find out they do not fit, and fix it. That gap between a
      design that looks right and a car that passes inspection is the whole point.
    </p>
    <p>
      Nobody on the team had built a car before this year. We are learning CAD, wiring,
      composites, and budgeting by getting them wrong first, which is slower than reading
      about them and works considerably better.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <h2>How the team is organised</h2>
    </div>

    <div class="cells groups">
      {#each groups as group}
        <article class="cell">
          <h3>{group.name}</h3>
          <p>{group.body}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="section-head">
      <h2>The competition</h2>
    </div>
    <p>
      The {site.competition} is a national event for high school teams. Before a car is allowed
      to run it has to pass scrutineering, a detailed electrical and mechanical safety
      inspection. Teams that pass then race for several days, either on a closed track or on a
      cross-country route, and are scored on the distance they cover.
    </p>
    <p>
      Track years have been held at {site.venue}. As a first-year team our goal is to build a
      car that passes inspection and finishes, not to win it.
    </p>
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

  .narrow p + p {
    margin-top: var(--s-4);
  }

  .groups {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    .groups {
      grid-template-columns: 1fr;
    }
  }
</style>
