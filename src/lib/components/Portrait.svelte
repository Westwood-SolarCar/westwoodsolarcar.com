<script lang="ts">
  let { src, name }: { src: string | null; name: string } = $props();

  let failed = $state(false);

  const initials = $derived(
    name
      .trim()
      .split(/\s+/)
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()
  );
</script>

<div class="portrait">
  {#if src && !failed}
    <img {src} alt="Portrait of {name}" loading="lazy" decoding="async" onerror={() => (failed = true)} />
  {:else}
    <div class="fallback" role="img" aria-label="No photo of {name} yet">
      <span>{initials}</span>
    </div>
  {/if}
</div>

<style>
  .portrait {
    aspect-ratio: 3 / 4;
    overflow: hidden;
    background: var(--paper-2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .fallback {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background: var(--paper-2);
  }

  .fallback span {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 600;
    color: var(--ink-3);
    line-height: 1;
  }
</style>
