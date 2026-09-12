<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';

  let open = $state(false);
  let theme = $state<'light' | 'dark'>('light');

  onMount(() => {
    const current = document.documentElement.getAttribute('data-theme');
    theme = current === 'dark' ? 'dark' : 'light';
  });

  // Close the drawer whenever the route changes.
  $effect(() => {
    void page.url.pathname;
    open = false;
  });

  const links = [
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'The Car', path: '/car' },
    { name: 'Sponsors', path: '/sponsors' }
  ];

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* private mode */
    }
  }

  const isActive = (path: string) => page.url.pathname === path;
</script>

<header class="nav">
  <div class="container row">
    <a href="/" class="mark" aria-label="Westwood Solar Car home">
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <circle cx="12" cy="10" r="7" fill="var(--sun)" />
        <rect x="2" y="19" width="20" height="2" fill="currentColor" />
      </svg>
      <span>Westwood <b>Solar Car</b></span>
    </a>

    <nav class="links" aria-label="Primary">
      {#each links as link}
        <a href={link.path} aria-current={isActive(link.path) ? 'page' : undefined}>{link.name}</a>
      {/each}
    </nav>

    <div class="actions">
      <button
        class="theme"
        onclick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
      >
        {#if theme === 'dark'}
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
          </svg>
        {:else}
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
          </svg>
        {/if}
      </button>

      <a href="/contact" class="btn btn-primary btn-sm contact">Contact</a>

      <button
        class="burger"
        onclick={() => (open = !open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <span class:open></span>
        <span class:open></span>
      </button>
    </div>
  </div>

  {#if open}
    <nav id="mobile-menu" class="drawer" aria-label="Primary">
      {#each links as link}
        <a href={link.path} aria-current={isActive(link.path) ? 'page' : undefined}>{link.name}</a>
      {/each}
      <a href="/contact" aria-current={isActive('/contact') ? 'page' : undefined}>Contact</a>
    </nav>
  {/if}
</header>

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 50;
    height: var(--nav-h);
    background: var(--paper);
    border-bottom: 1px solid var(--rule);
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--s-5);
    height: 100%;
  }

  .mark {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-family: var(--font-display);
    font-size: 1.375rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    line-height: 1;
    white-space: nowrap;
  }

  .mark b {
    font-weight: 700;
  }

  .links {
    display: flex;
    gap: var(--s-5);
    height: 100%;
  }

  .links a {
    display: flex;
    align-items: center;
    height: var(--nav-h);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-2);
    border-bottom: 2px solid transparent;
    transition: color var(--t);
  }

  .links a:hover {
    color: var(--ink);
  }

  .links a[aria-current='page'] {
    color: var(--ink);
    border-bottom-color: var(--sun);
  }

  .actions {
    display: flex;
    align-items: center;
    gap: var(--s-3);
  }

  .theme {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    color: var(--ink-2);
    border: 1px solid var(--rule);
    border-radius: 2px;
    transition: color var(--t), border-color var(--t);
  }

  .theme:hover {
    color: var(--ink);
    border-color: var(--ink);
  }

  .burger {
    display: none;
    position: relative;
    width: 38px;
    height: 38px;
    border: 1px solid var(--ink);
    border-radius: 2px;
  }

  .burger span {
    position: absolute;
    left: 9px;
    width: 18px;
    height: 2px;
    background: var(--ink);
    transition: transform var(--t);
  }

  .burger span:first-child {
    top: 14px;
  }

  .burger span:last-child {
    top: 22px;
  }

  .burger span.open:first-child {
    transform: translateY(4px) rotate(45deg);
  }

  .burger span.open:last-child {
    transform: translateY(-4px) rotate(-45deg);
  }

  .drawer {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    background: var(--paper);
    border-bottom: 1px solid var(--rule);
    padding: 0 var(--gutter) var(--s-4);
  }

  .drawer a {
    padding: var(--s-4) 0;
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1;
    border-bottom: 1px solid var(--rule);
  }

  .drawer a[aria-current='page'] {
    color: var(--sun-ink);
  }

  @media (max-width: 820px) {
    .links,
    .contact {
      display: none;
    }

    .burger {
      display: block;
    }

    .drawer {
      display: flex;
    }
  }
</style>
