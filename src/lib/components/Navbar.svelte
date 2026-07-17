<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';

  let isScrolled = $state(false);
  let isMobileMenuOpen = $state(false);
  let theme = $state('dark');

  onMount(() => {
    theme = document.documentElement.getAttribute('data-theme') ?? 'dark';

    const handleScroll = () => {
      isScrolled = window.scrollY > 12;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'The Car', path: '/car' },
    { name: 'Sponsors', path: '/sponsors' }
  ];

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }
</script>

<header class="navbar" class:scrolled={isScrolled || isMobileMenuOpen}>
  <div class="container nav-container">
    <a href="/" class="logo" onclick={closeMobileMenu} aria-label="Westwood Solar Car home">
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
        <circle cx="16" cy="13" r="5" fill="var(--accent)" />
        <g stroke="var(--accent)" stroke-width="2" stroke-linecap="round">
          <line x1="16" y1="3.5" x2="16" y2="5.5" />
          <line x1="23.4" y1="5.6" x2="22" y2="7" />
          <line x1="8.6" y1="5.6" x2="10" y2="7" />
          <line x1="25.5" y1="13" x2="23.5" y2="13" />
          <line x1="8.5" y1="13" x2="6.5" y2="13" />
        </g>
        <path
          d="M5 24.5 Q16 20.5 27 24.5"
          stroke="currentColor"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
      <span class="logo-text">Westwood <em>Solar Car</em></span>
    </a>

    <nav class="nav-links" aria-label="Primary">
      {#each navLinks as link}
        <a href={link.path} class="nav-link" class:active={page.url.pathname === link.path}>
          {link.name}
        </a>
      {/each}
    </nav>

    <div class="nav-actions">
      <button
        class="theme-toggle"
        onclick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {#if theme === 'dark'}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        {:else}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        {/if}
      </button>

      <a href="/contact" class="btn btn-primary btn-nav">Contact</a>

      <button
        class="hamburger"
        onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span class="hamburger-line" class:open={isMobileMenuOpen}></span>
        <span class="hamburger-line" class:open={isMobileMenuOpen}></span>
        <span class="hamburger-line" class:open={isMobileMenuOpen}></span>
      </button>
    </div>
  </div>

  {#if isMobileMenuOpen}
    <nav class="mobile-menu" aria-label="Primary mobile">
      {#each navLinks as link}
        <a
          href={link.path}
          class="mobile-nav-link"
          class:active={page.url.pathname === link.path}
          onclick={closeMobileMenu}
        >
          {link.name}
        </a>
      {/each}
      <a href="/contact" class="mobile-nav-link" onclick={closeMobileMenu}>Contact</a>
    </nav>
  {/if}
</header>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav-height);
    z-index: 100;
    border-bottom: 1px solid transparent;
    transition:
      background-color var(--transition-base),
      border-color var(--transition-base);
  }

  .navbar.scrolled {
    background-color: var(--nav-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom-color: var(--border);
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-md);
    height: 100%;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    color: var(--text);
  }

  .logo-text {
    font-family: var(--font-display);
    font-size: 1.0625rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    white-space: nowrap;
  }

  .logo-text em {
    font-style: normal;
    color: var(--accent-text);
  }

  .nav-links {
    display: flex;
    gap: 0.25rem;
  }

  .nav-link {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--text-muted);
    padding: 0.5rem 0.875rem;
    border-radius: var(--radius-full);
  }

  .nav-link:hover {
    color: var(--text);
  }

  .nav-link.active {
    color: var(--text);
    background: var(--accent-soft);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .theme-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: none;
    border: none;
    border-radius: var(--radius-full);
    cursor: pointer;
    color: var(--text-muted);
    transition: color var(--transition-fast), background-color var(--transition-fast);
  }

  .theme-toggle:hover {
    color: var(--text);
    background: var(--accent-soft);
  }

  .btn-nav {
    min-height: 40px;
    padding: 0.5rem 1.25rem;
    font-size: 0.9375rem;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 44px;
    height: 44px;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .hamburger-line {
    width: 22px;
    height: 2px;
    background: var(--text);
    border-radius: 2px;
    transition: transform var(--transition-base), opacity var(--transition-base);
  }

  .hamburger-line.open:first-child {
    transform: translateY(7px) rotate(45deg);
  }

  .hamburger-line.open:nth-child(2) {
    opacity: 0;
  }

  .hamburger-line.open:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .mobile-menu {
    display: none;
    position: absolute;
    top: var(--nav-height);
    left: 0;
    width: 100%;
    background-color: var(--bg);
    flex-direction: column;
    padding: var(--space-sm) clamp(1.25rem, 4vw, 2rem) var(--space-md);
    border-bottom: 1px solid var(--border);
  }

  .mobile-nav-link {
    font-size: 1.0625rem;
    font-weight: 500;
    color: var(--text-muted);
    padding: 0.875rem 0;
    border-bottom: 1px solid var(--border);
  }

  .mobile-nav-link:last-child {
    border-bottom: none;
  }

  .mobile-nav-link.active {
    color: var(--accent-text);
  }

  @media (max-width: 820px) {
    .nav-links,
    .btn-nav {
      display: none;
    }

    .hamburger {
      display: flex;
    }

    .mobile-menu {
      display: flex;
    }
  }
</style>
