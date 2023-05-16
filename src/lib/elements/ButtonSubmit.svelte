<script>
  import Spinner from "./Spinner.svelte";

  export let loading = false;
</script>

<button type="submit" disabled={loading}>
  {#if loading}
    <Spinner>...</Spinner>
  {:else}
    <span><slot /></span>
  {/if}
</button>
