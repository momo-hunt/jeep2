<script>
  import { goto } from "$app/navigation";
  import FormTambah from "./FormTambah.svelte";

  export let data;

  function onSubmit(e) {
    let res = e.detail;
    console.log(res);
    if (res.success) goto(`/pemakaian/${res.success.id}`);
  }
</script>

<h2>Tambah Pemakaian</h2>

<FormTambah {data} on:submit={onSubmit} />

<style>
  h2 {
    font-family: "Poppins", sans-serif;
    /* font-weight: 600; */
    margin: 1rem;
    color: var(--bg-2);
  }
</style>
