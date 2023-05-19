<script>
  export let show;
</script>

<header>
  <button class="menubar" on:click={() => (show = true)}>&Xi;</button>
</header>

<style>
  header {
    background: var(--bg-1);
  }

  button.menubar {
    cursor: pointer;
    /* border: 1px solid white; */
    background: inherit;
    padding: 0.5rem 1rem;
  }

  button.menubar:hover {
    filter: brightness(1.3);
  }
</style>
