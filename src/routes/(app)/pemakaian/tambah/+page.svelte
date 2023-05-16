<script>
  import { onMount } from "svelte";
  import { obj } from "$lib/stores";
  import { goto } from "$app/navigation";
  import HeaderTitle from "$lib/components/HeaderTitle.svelte";
  import FormTambah from "./FormTambah.svelte";
  import Spinner from "$lib/elements/Spinner.svelte";

  export let data;

  function onSubmit(e) {
    let res = e.detail;
    console.log(res);
    goto(`/pemakaian/${res.id}`);
  }

  onMount(() => {
    obj.get(`/pemakaian?limit=1`);
  });

  // $: console.log($obj);
</script>

<HeaderTitle title="Tambah Pemakaian" />

{#if $obj?.loading}
  <Spinner size="l">Tunggu...</Spinner>
{/if}

{#if !$obj?.loading}
  <FormTambah {data} on:success={onSubmit} on:error value={$obj?.data?.[0]} />
{/if}
