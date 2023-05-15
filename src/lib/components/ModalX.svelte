<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let show = false;
</script>

{#if show}
  <section>
    <button class="backdrop" on:click={() => dispatch("close")}>&nbsp;</button>
    <article>
      <slot />
    </article>
  </section>
{/if}

<style>
  section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    padding: 10rem 0;
  }

  article {
    position: relative;
    background: white;
    width: 20rem;
    margin: auto;
    border-radius: 4px;
  }

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: none;
    outline: none;
    border: none;
  }
</style>
