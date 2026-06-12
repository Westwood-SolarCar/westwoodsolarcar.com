<script lang="ts">
  import type { Snippet } from 'svelte';

  let { 
    variant = 'primary', 
    href = undefined,
    type = 'button',
    class: className = '',
    children
  }: { 
    variant?: 'primary' | 'outline';
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    class?: string;
    children?: Snippet;
  } = $props();
</script>

{#if href}
  <a {href} class="btn btn-{variant} {className}">
    {@render children?.()}
  </a>
{:else}
  <button {type} class="btn btn-{variant} {className}">
    {@render children?.()}
  </button>
{/if}
