<script>
  export let label;
  export let value;
</script>

<section>
  <button type="button" on:click={() => (value = !value)}>{label}</button>
</section>

<style>
  section {
    text-align: center;
    margin: 1rem;
  }
  button {
    background: var(--bg-1);
    padding: 0.5rem 2rem;
    border-radius: 4px;
    width: 100%;
  }
</style>
