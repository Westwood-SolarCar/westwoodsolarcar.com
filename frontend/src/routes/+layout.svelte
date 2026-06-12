<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  // Define slots for children
  let { children } = $props();
</script>

<div class="app-layout">
  <Navbar />
  
  <main>
    {@render children()}
  </main>
  
  <Footer />
</div>

<style>
  .app-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    /* Offset for sticky navbar */
    padding-top: var(--nav-height); 
  }
</style>
