<script>
  import { goto } from "$app/navigation";
  import HeaderTitle from "$lib/components/HeaderTitle.svelte";
  import FormTambah from "./FormTambah.svelte";

  export let data;

  function onSubmit(e) {
    let res = e.detail;
    console.log(res);
    goto(`/pemakaian/${res.id}`);
  }
</script>

<HeaderTitle title="Tambah Pemakaian" />

<FormTambah {data} on:success={onSubmit} on:error />

<style>
</style>
