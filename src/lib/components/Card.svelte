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
  .card {
    background-color: var(--bg-surface);
    border: 1px solid var(--border-subtle);
    border-radius: var(--border-radius);
    overflow: hidden;
    transition: transform var(--transition-base), box-shadow var(--transition-base);
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }

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

  .card:hover .card-image {
    transform: scale(1.05);
  }

  .card-content {
    padding: var(--spacing-sm);
  }

  .card-title {
    margin-top: 0;
    margin-bottom: var(--spacing-xs);
    font-size: 1.25rem;
  }
</style>
