<script>
  export let label = undefined;
  export let option = [];
  export let value = null;
  export let name = undefined;
  export let disabled = false;
</script>

<div>
  {#if label}
    <label for={name}>{label}</label>
  {/if}
  <select {name} id={name} {disabled} {value}>
    {#each option as [label, value]}
      <option {value}>{label}</option>
    {/each}
  </select>
</div>

<style>
  label {
    display: block;
    margin-top: 0.5rem;
  }

  select {
    border: none;
    outline: 1px solid hsl(0, 0%, 75%);
    border-radius: 4px;
    width: 100%;
    padding: 1rem;
    font-size: inherit;
    color: inherit;
  }
</style>
