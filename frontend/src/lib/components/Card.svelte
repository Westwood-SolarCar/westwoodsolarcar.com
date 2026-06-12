<script lang="ts">
  import type { Snippet } from 'svelte';

  let { 
    title = '',
    image = '',
    class: className = '',
    children
  }: { 
    title?: string;
    image?: string;
    class?: string;
    children?: Snippet;
  } = $props();
</script>

<div class="card {className}">
  {#if image}
    <div class="card-image-wrapper">
      <img src={image} alt={title} class="card-image" loading="lazy" />
    </div>
  {/if}
  <div class="card-content">
    {#if title}
      <h3 class="card-title">{title}</h3>
    {/if}
    {@render children?.()}
  </div>
</div>

<style>
  .card-image-wrapper {
    position: relative;
    width: 100%;
    padding-top: 60%; /* Aspect ratio */
    overflow: hidden;
  }

  .card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
  }

  /* Hover effect for image */
  :global(.card:hover) .card-image {
    transform: scale(1.05);
  }

  .card-content {
    padding: var(--spacing-sm) 0;
  }

  .card-title {
    margin-top: 0;
    margin-bottom: var(--spacing-xs);
    font-size: 1.25rem;
  }
</style>
