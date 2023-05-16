<script>
  export let show = false;
</script>

{#if show}
  <section>
    <h2>Error !!!</h2>
    <p>Maaf gagal login.</p>
    <p>Periksa kembali isian anda!</p>
  </section>
{/if}

<style>
  section {
    background: var(--bg-5);
    margin: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: red;
    outline: 1px solid rgba(255, 0, 0, 0.5);
  }

  section h2 {
    margin: 0.5rem 0;
    font-weight: 500;
  }

  section p {
    color: var(--bg-2);
    filter: contrast(0.4);
  }
</style>
