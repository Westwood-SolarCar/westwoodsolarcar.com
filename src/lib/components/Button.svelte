<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    variant = 'primary',
    size = 'md',
    href = undefined,
    type = 'button',
    class: className = '',
    children
  }: {
    variant?: 'primary' | 'accent' | 'outline';
    size?: 'md' | 'sm';
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    class?: string;
    children?: Snippet;
  } = $props();

  const classes = $derived(
    ['btn', `btn-${variant}`, size === 'sm' ? 'btn-sm' : '', className].filter(Boolean).join(' ')
  );
</script>

{#if href}
  <a {href} class={classes}>
    {@render children?.()}
  </a>
{:else}
  <button {type} class={classes}>
    {@render children?.()}
  </button>
{/if}
