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
</style>
