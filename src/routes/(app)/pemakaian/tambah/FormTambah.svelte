<script>
  import FormX from "$lib/components/FormX.svelte";
  import { formatFormDate, formatFormTime } from "$lib/helper";
  import Spinner from "$lib/elements/Spinner.svelte";

  export let data;
  export let value;
  let title = "form-tambah-pemakaian";
  let action = "/pemakaian?/add";
  let km_awal = value?.km_akhir || null;
  let km_akhir = null;
  let tgl = {
    tanggal_berangkat: null,
    tanggal_kembali: null,
    jam_berangkat: null,
    jam_kembali: null,
  };

  let loading = false;
</script>

<FormX {action} {title} on:success on:error bind:loading>
  {#each data?.fields as { label, ...f }}
    {#if f.type == "date"}
      <label for={f.name}>{label}</label>
      <input {...f} value={formatFormDate(tgl[f.name])} disabled={loading} />
    {:else if f.type == "time"}
      <label for={f.name}>{label}</label>
      <input {...f} value={formatFormTime(tgl[f.name])} disabled={loading} />
    {:else if f.type == "select"}
      <label for={f.name}>{label}</label>
      <select {...f} disabled={loading}>
        {#each data?.listSopir as [label, value]}
          <option {value}>{label}</option>
        {/each}
      </select>
    {:else if f.name == "km_awal"}
      <label for={f.name}>{label}</label>
      <input {...f} bind:value={km_awal} disabled={loading} />
    {:else if f.name == "km_akhir"}
      <label for={f.name}>{label}</label>
      <input {...f} bind:value={km_akhir} disabled={loading} min={km_awal} />
    {:else if f.name == "km_pemakaian"}
      <label for={f.name}>{label}</label>
      <input {...f} value={km_akhir - km_awal} disabled={loading} />
    {:else}
      <label for={f.name}>{label}</label>
      <input {...f} disabled={loading} />
    {/if}
  {/each}

  <button type="submit" disabled={loading}>
    {#if loading}
      <Spinner />
    {:else}
      <span>Simpan</span>
    {/if}
  </button>
</FormX>
