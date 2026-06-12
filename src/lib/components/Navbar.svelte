<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  let isScrolled = $state(false);
  let isMobileMenuOpen = $state(false);
  let theme = $state('dark');

  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    theme = savedTheme || preferredTheme;

    const applyTheme = () => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    };

    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };

    applyTheme();
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  $effect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Car', path: '/car' }
  ];

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }
</script>

<nav class="navbar" class:scrolled={isScrolled}>
  <div class="container nav-container">
    <a href="/" class="logo" onclick={closeMobileMenu}>
      WESTWOOD <span class="logo-accent">SOLAR CAR</span>
    </a>
    
    <!-- Desktop Links -->
    <div class="nav-links">
      {#each navLinks as link}
        <a 
          href={link.path} 
          class="nav-link" 
          class:active={$page.url.pathname === link.path}
        >
          {link.name}
        </a>
      {/each}
      <button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle Theme">
        {#if theme === 'dark'}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        {:else}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        {/if}
      </button>
    </div>

    <!-- Mobile Hamburger Button -->
    <button class="hamburger" onclick={toggleMobileMenu} aria-label="Toggle menu">
      <span class="hamburger-line" class:open={isMobileMenuOpen}></span>
      <span class="hamburger-line" class:open={isMobileMenuOpen}></span>
      <span class="hamburger-line" class:open={isMobileMenuOpen}></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if isMobileMenuOpen}
    <div class="mobile-menu animate-fade-in">
      {#each navLinks as link}
        <a 
          href={link.path} 
          class="mobile-nav-link" 
          class:active={$page.url.pathname === link.path}
          onclick={closeMobileMenu}
        >
          {link.name}
        </a>
      {/each}
      <button class="mobile-nav-link theme-toggle-mobile" onclick={toggleTheme}>
        {#if theme === 'dark'}
          Switch to Light Mode
        {:else}
          Switch to Dark Mode
        {/if}
      </button>
    </div>
  {/if}
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav-height);
    z-index: 100;
    transition: background-color var(--transition-base), border-bottom var(--transition-base);
    border-bottom: 1px solid transparent;
  }

  .navbar.scrolled {
    background-color: var(--nav-bg);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-subtle);
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-family: var(--font-main);
  }

  .logo-accent {
    color: var(--accent-orange);
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform var(--transition-fast), color var(--transition-fast);
  }

  .theme-toggle:hover {
    transform: scale(1.1);
    color: var(--accent-orange);
  }

  .nav-link {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    position: relative;
    padding: 0.5rem 0;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent-orange);
    transition: width var(--transition-base);
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
  }
  
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 101;
  }

  .hamburger-line {
    width: 2rem;
    height: 0.25rem;
    background: var(--text-primary);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  .hamburger-line.open:first-child {
    transform: rotate(45deg);
  }

  .hamburger-line.open:nth-child(2) {
    opacity: 0;
  }

  .hamburger-line.open:nth-child(3) {
    transform: rotate(-45deg);
  }

  .mobile-menu {
    display: none;
    position: absolute;
    top: var(--nav-height);
    left: 0;
    width: 100%;
    background-color: var(--bg-surface);
    flex-direction: column;
    padding: var(--spacing-md);
    border-bottom: 1px solid var(--border-subtle);
  }

  .mobile-nav-link {
    font-size: 1.25rem;
    padding: var(--spacing-sm) 0;
    border-bottom: 1px solid var(--border-subtle);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .mobile-nav-link:last-child {
    border-bottom: none;
  }

  .mobile-nav-link.active {
    color: var(--accent-orange);
  }

  .theme-toggle-mobile {
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    color: var(--text-primary);
    font-family: inherit;
  }

  @media (max-width: 768px) {
    .nav-links {
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
