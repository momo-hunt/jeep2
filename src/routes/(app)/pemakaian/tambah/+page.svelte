<script>
  import FormX from "$lib/components/FormX.svelte";
  import InputX from "$lib/elements/InputX.svelte";
  import ButtonSubmit from "$lib/elements/ButtonSubmit.svelte";
  import { formatFormDate, formatFormTime } from "$lib/helper";
  import SelectX from "$lib/elements/SelectX.svelte";
  import { goto } from "$app/navigation";

  export let data;
  let title = "form-tambah-pemakaian";
  let action = "/pemakaian?/add";

  let km_awal = 0;
  let km_akhir = 0;

  function onSubmit(e) {
    let res = e.detail;
    console.log(res);
    if (res.success) goto(`/pemakaian/${res.success.id}`);
  }
</script>

<h2>Tambah Pemakaian</h2>

<FormX {action} {title} on:submit={onSubmit}>
  {#each data?.fields as f}
    {#if f.type == "date"}
      <InputX {...f} value={formatFormDate()} />
    {:else if f.type == "time"}
      <InputX {...f} value={formatFormTime()} />
    {:else if f.type == "select"}
      <SelectX
        {...f}
        value="1"
        option={[
          ["Santoso", "1"],
          ["Askep", "2"],
          ["Lain", "3"],
        ]}
      />
    {:else if f.name == "km_awal"}
      <InputX {...f} />
      <input {...f} bind:value={km_awal} />
    {:else if f.name == "km_akhir"}
      <InputX {...f} />
      <input {...f} bind:value={km_akhir} />
    {:else if f.name == "km_pemakaian"}
      <InputX {...f} />
      <input {...f} value={km_akhir - km_awal} />
    {:else}
      <InputX {...f} />
    {/if}
  {/each}

  <ButtonSubmit>Simpan</ButtonSubmit>
</FormX>

<style>
  h2 {
    margin: 1rem;
  }

  input {
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: inherit;
  }
</style>
