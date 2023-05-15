<script>
  import { goto } from "$app/navigation";
  import HeaderTitle from "$lib/components/HeaderTitle.svelte";
  import FormTambah from "./FormTambah.svelte";

  export let data;

  function onSubmit(e) {
    let res = e.detail;
    console.log(res);
    if (res.success) goto(`/pemakaian/${res.success.id}`);
  }
</script>

<HeaderTitle title="Tambah Pemakaian" />

<FormTambah {data} on:submit={onSubmit} />

<style>
</style>
