<script>
  export let title;
</script>

<header>
  <h2>{title}</h2>
  <div><slot /></div>
</header>

<style>
  h2 {
    font-family: "Poppins", sans-serif;
    margin: 1rem;
    color: var(--bg-4);
  }
</style>
