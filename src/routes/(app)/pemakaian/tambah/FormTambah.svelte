<script>
  import FormX from "$lib/components/FormX.svelte";
  import InputX from "$lib/elements/InputX.svelte";
  import ButtonSubmit from "$lib/elements/ButtonSubmit.svelte";
  import { formatFormDate, formatFormTime } from "$lib/helper";
  import SelectX from "$lib/elements/SelectX.svelte";

  export let data;
  let title = "form-tambah-pemakaian";
  let action = "/pemakaian?/add";
  let km_awal = 0;
  let km_akhir = 0;
</script>

<FormX {action} {title} on:submit>
  {#each data?.fields as { label, ...f }}
    {#if f.type == "date"}
      <label for={f.name}>{label}</label>
      <input {...f} value={formatFormDate()} />
    {:else if f.type == "time"}
      <label for={f.name}>{label}</label>
      <input {...f} value={formatFormTime()} />
    {:else if f.type == "select"}
      <label for={f.name}>{label}</label>
      <select>
        {#each [["Santoso", "1"], ["Askep", "2"], ["Lain", "3"]] as [label, value]}
          <option {value}>{label}</option>
        {/each}
      </select>
    {:else if f.name == "km_awal"}
      <label for={f.name}>{label}</label>
      <input {...f} bind:value={km_awal} />
    {:else if f.name == "km_akhir"}
      <label for={f.name}>{label}</label>
      <input {...f} bind:value={km_akhir} />
    {:else if f.name == "km_pemakaian"}
      <label for={f.name}>{label}</label>
      <input {...f} value={km_akhir - km_awal} />
    {:else}
      <label for={f.name}>{label}</label>
      <input {...f} />
    {/if}
  {/each}

  <ButtonSubmit>Simpan</ButtonSubmit>
</FormX>

<style>
  label {
    display: block;
    margin: 0.5rem 0 0.2rem 0;
    color: var(--bg-2);
    opacity: 0.8;
  }

  input,
  select {
    background: none;
    border: none;
    outline: none;
    color: var(--bg-3);
    background: var(--bg-5);
    outline: 1px solid var(--bg-1);
    border-radius: 4px;
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: inherit;
    margin-bottom: 0.5rem;
  }

  input:focus,
  select:focus {
    outline-color: var(--bg-2);
    outline-offset: 2px;
    background: var(--bg-2);
    color: var(--black);
  }
</style>
