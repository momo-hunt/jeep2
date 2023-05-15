<script>
  export let type = "submit";
  export let load = false;
  export let disabled = load ? true : false;
  export let value = undefined;
  export let name = undefined;
</script>

<button {type} {name} {value} disabled={disabled ?? load}>
  <slot />
</button>

<style>
  button {
    margin-top: 1rem;
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: inherit;
  }
</style>
