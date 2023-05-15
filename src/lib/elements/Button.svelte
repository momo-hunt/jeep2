<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<button type="button" on:click={() => dispatch("click")}><slot /></button>

<style>
  button {
    cursor: pointer;
    width: 50%;
    display: block;
    margin: auto;
    padding: 0.5rem 1rem;
    background: none;
    outline: none;
    border: 1px solid;
    border-color: rgba(128, 128, 128, 0.5);
  }

  button:hover {
    transition: border 0.3s ease;
    border-color: rgba(128, 128, 128, 1);
  }
</style>
