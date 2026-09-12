<script lang="ts">
  import { carSpecs, buildAreas } from '$lib/data';

  const known = carSpecs.filter((spec) => spec.value.trim() !== '');
</script>

<svelte:head>
  <title>The car &middot; Westwood Solar Car</title>
  <meta
    name="description"
    content="The car Westwood Solar Car is designing for its first Solar Car Challenge, and what the team is working on right now."
  />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <p class="label">The car</p>
    <h1>Still being designed.</h1>
    <p class="lead">
      We are a first-year team and the car is not built yet. Rather than put a rendering and a
      set of invented numbers here, this page says what we are working on. It gets replaced
      with photographs and measured specifications once there is a car to photograph.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <h2>What we are working on</h2>
    </div>

    <div class="cells areas">
      {#each buildAreas as area}
        <article class="cell">
          <h3>{area.name}</h3>
          <p>{area.body}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="section-head">
      <h2>Specifications</h2>
    </div>

    {#if known.length}
      <table class="spec-table">
        <tbody>
          {#each known as spec}
            <tr>
              <th scope="row">{spec.label}</th>
              <td>{spec.value}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {:else}
      <p>
        Nothing to publish yet. Weight, dimensions, motor, battery, and array size all depend
        on decisions the team has not finished making, and we would rather leave this empty
        than guess. Check back.
      </p>
    {/if}
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

  .areas {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    .areas {
      grid-template-columns: 1fr;
    }
  }
</style>
