<script>
  export let type = "text";
  export let name = undefined;
  export let label = undefined;
  export let value = "";
  export let placeholder = undefined;
  export let required = undefined;
  export let readonly = undefined;
  export let step = undefined;
</script>

{#if label}
  <label for={name}>{label}</label>
{/if}

{#if type == "number"}
  <!-- <input {name} {value} {placeholder} {required} {readonly} {step} /> -->
{:else}
  <input {type} {name} {value} {placeholder} {required} {readonly} {step} />
{/if}

<style>
  label {
    display: block;
    margin-top: 0.5rem;
  }
  input {
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: inherit;
  }
</style>
