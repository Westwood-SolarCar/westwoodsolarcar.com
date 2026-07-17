<script lang="ts">
  import { fadeUp } from '$lib/actions/scrollAnimation';

  const values = [
    {
      title: 'Innovation',
      desc: 'Constantly seeking better, more efficient solutions to hard engineering problems.'
    },
    {
      title: 'Excellence',
      desc: 'Demanding the highest quality in every component we design and build.'
    },
    {
      title: 'Teamwork',
      desc: 'Succeeding together through collaboration, trust, and shared ownership.'
    },
    {
      title: 'Sustainability',
      desc: 'Engineering a cleaner future, one solar-powered mile at a time.'
    }
  ];

  const departments = [
    {
      name: 'Mechanical',
      desc: 'Structural integrity, suspension, steering, and aerodynamics.',
      icon: 'M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495'
    },
    {
      name: 'Electrical',
      desc: 'Battery systems, motor controllers, and power distribution.',
      icon: 'M3.75 13.5 14.25 2.25 12 10.5h8.25L9.75 21.75 12 13.5H3.75Z'
    },
    {
      name: 'Software',
      desc: 'Telemetry, driver interfaces, and data analysis tools.',
      icon: 'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5'
    },
    {
      name: 'Business',
      desc: 'Sponsorships, outreach, finance, and logistics.',
      icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941'
    }
  ];
</script>

<svelte:head>
  <title>About | Westwood Solar Car</title>
  <meta
    name="description"
    content="Westwood Solar Car is a crucible for future engineers, a student-led team competing in the national Solar Car Challenge since 2020."
  />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">About the team</span>
    <h1>Built by students, driven by the sun.</h1>
    <p class="lead">
      Westwood Solar Car is more than a high school racing team. It's a crucible for future
      engineers, innovators, and leaders.
    </p>
  </div>
</section>

<section class="section">
  <div class="container mission-grid">
    <div class="mission-copy" use:fadeUp>
      <span class="eyebrow">Our mission</span>
      <h2>Hands-on engineering, from first sketch to finish line.</h2>
      <p>
        We push the boundaries of sustainable transportation while giving students unparalleled
        hands-on experience in design, manufacturing, and project management, all in pursuit of
        the national Solar Car Challenge.
      </p>
    </div>
    <div class="values-grid">
      {#each values as value, i}
        <div class="panel value-card" use:fadeUp={{ delay: i * 70 }}>
          <h3>{value.title}</h3>
          <p>{value.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <div class="section-head" use:fadeUp>
      <span class="eyebrow">Departments</span>
      <h2>Four teams, one car.</h2>
    </div>

    <div class="departments-grid">
      {#each departments as dept, i}
        <article class="panel dept-card" use:fadeUp={{ delay: i * 70 }}>
          <span class="icon-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d={dept.icon} />
            </svg>
          </span>
          <h3>{dept.name}</h3>
          <p>{dept.desc}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .mission-grid {
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
    gap: var(--space-xl);
    align-items: start;
  }

  @media (max-width: 860px) {
    .mission-grid {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
  }

  .mission-copy h2 {
    margin-bottom: var(--space-sm);
  }

  .mission-copy p {
    max-width: 36em;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-sm);
  }

  @media (max-width: 520px) {
    .values-grid {
      grid-template-columns: 1fr;
    }
  }

  .value-card {
    padding: var(--space-md);
  }

  .value-card h3 {
    font-size: 1.0625rem;
    margin-bottom: var(--space-2xs);
    color: var(--accent-text);
  }

  .value-card p {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .departments-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: var(--space-md);
  }

  .dept-card h3 {
    margin: var(--space-md) 0 var(--space-2xs);
  }

  .dept-card p {
    font-size: 0.9375rem;
    line-height: 1.6;
  }
</style>
