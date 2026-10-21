<script lang="ts">
  import { onMount } from 'svelte';
  import Portrait from './Portrait.svelte';
  import type { TeamMember } from '$lib/data';

  let { members, interval = 5000 }: { members: TeamMember[]; interval?: number } = $props();

  let index = $state(0);
  let hovering = $state(false);
  let focused = $state(false);
  let reduceMotion = $state(false);

  const count = $derived(members.length);

  function go(i: number) {
    index = (i + count) % count;
  }

  onMount(() => {
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  // Auto-advance. Re-arms after every slide change and stays idle while the
  // mouse is over the slideshow, a keyboard user is inside it, or reduced motion is on.
  $effect(() => {
    if (reduceMotion || hovering || focused || count < 2) return;
    const current = index;
    const id = setTimeout(() => go(current + 1), interval);
    return () => clearTimeout(id);
  });
</script>

{#if count > 0}
  <section
    class="carousel"
    aria-roledescription="carousel"
    aria-label="Team members"
    onpointerenter={(e) => (hovering = e.pointerType === 'mouse')}
    onpointerleave={() => (hovering = false)}
    onfocusin={(e) => (focused = (e.target as HTMLElement).matches(':focus-visible'))}
    onfocusout={() => (focused = false)}
  >
    <div class="viewport">
      <div class="track" style="transform: translateX(-{index * 100}%)" aria-live="off">
        {#each members as m, i (m.name)}
          <div
            class="slide"
            role="group"
            aria-roledescription="slide"
            aria-label="{i + 1} of {count}"
            inert={i !== index}
          >
            <div class="photo">
              <Portrait src={m.image} name={m.name} />
            </div>

            <div class="text">
              <h3>{m.name}</h3>
              <ul class="roles">
                {#each m.roles as role}
                  <li>{role}</li>
                {/each}
              </ul>
              {#if m.bio}
                <p class="bio">{m.bio}</p>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>

    {#if count > 1}
      <button class="arrow prev" onclick={() => go(index - 1)} aria-label="Previous team member">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
      </button>
      <button class="arrow next" onclick={() => go(index + 1)} aria-label="Next team member">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    {/if}
  </section>
{/if}

<style>
  .carousel {
  position: relative;
}

  .viewport {
    overflow: hidden;
  }

  .track {
    display: flex;
    transition: transform 0.55s var(--ease);
  }

  /* Photo on the left half, text on the right half. */
  .slide {
    flex: 0 0 100%;
    min-width: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: clamp(420px, 72vh, 700px);
  }

  .photo {
    min-height: 0;
    background: var(--paper-2);
  }

  /* Let the photo fill its half instead of Portrait's fixed 3:4 box. */
  .photo :global(.portrait) {
    aspect-ratio: auto;
    height: 100%;
  }

  .photo :global(img) {
    object-fit: contain;
    object-position: center;
  }

  .photo :global(.fallback span) {
    font-size: clamp(4rem, 12vw, 9rem);
  }

  .text {
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding: var(--s-7) calc(var(--gutter) + 4.5rem) var(--s-6) var(--s-7);
    overflow-y: auto;
  }

  .text h3 {
    margin-top: var(--s-3);
    font-size: clamp(2.75rem, 6.5vw, 6rem);
    font-weight: 700;
    line-height: 0.95;
    letter-spacing: -0.02em;
    overflow-wrap: anywhere;
  }

  .roles {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s-2);
    margin-top: var(--s-5);
  }

  .roles li {
    padding: 0.3rem 0.6rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink-2);
    border: 1px solid var(--rule);
    border-radius: 2px;
  }

  .bio {
    margin-top: var(--s-5);
    max-width: 32em;
    font-size: 1.0625rem;
    line-height: 1.55;
  }

  /* Arrows sit at the left and right edges of the screen. */
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    color: var(--ink);
    background: var(--paper);
    border: 1px solid var(--ink);
    border-radius: 2px;
    transition: background-color var(--t), color var(--t), border-color var(--t);
  }

  .arrow:hover {
    background: var(--sun);
    border-color: var(--sun);
    color: var(--on-sun);
  }

  .prev {
    left: var(--gutter);
  }

  .next {
    right: var(--gutter);
  }

  @media (max-width: 720px) {
    .slide {
      grid-template-columns: 1fr;
      grid-template-rows: 340px auto;
      height: auto;
    }

    .text {
      padding: var(--s-5) var(--gutter) var(--s-6);
      overflow: visible;
    }

    .text h3 {
      font-size: clamp(2.5rem, 12vw, 3.5rem);
    }

    /* Keep the arrows on the photo, not in the middle of the whole slide. */
    .arrow {
      top: 170px;
    }
  }
</style>