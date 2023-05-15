<script>
  import FormX from "$lib/components/FormX.svelte";
  import { formatFormDate, formatFormTime } from "$lib/helper";

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

  <button type="submit">Simpan</button>
</FormX>

<style>
  label {
    display: block;
    margin: 0.5rem 0 0.2rem 0;
    color: var(--bg-2);
    opacity: 0.8;
    font-size: 0.9em;
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
    background: var(--bg-1);
    color: var(--white);
  }

  button[type="submit"] {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    background: var(--bg-4);
    padding: 1rem;
    font-size: inherit;
    width: 100%;
    border-radius: 4px;
    margin-top: 1rem;
    color: inherit;
    text-transform: uppercase;
    outline: 1px solid var(--bg-5);
  }

  button[type="submit"]:hover {
    transition: all 0.3s ease;
    background: var(--bg-1);
    outline: 1px solid var(--bg-3);
  }
</style>
