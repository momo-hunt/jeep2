<script>
  import HeaderTitle from "$lib/components/HeaderTitle.svelte";
  import { list } from "$lib/stores";
  import { onMount } from "svelte";
  import ListBbm from "./ListBBM.svelte";
  import Spinner from "$lib/elements/Spinner.svelte";
  import ButtonTambah from "../../../lib/elements/ButtonTambah.svelte";
  import ModalTambah from "./ModalTambah.svelte";

  let name = "sap_gudang";
  let showModalTambahBBM = false;

  onMount(() => {
    list.fetchData($list, name, {
      limit: 10,
      page: 1,
      filter: { material: 91055774, move_type: 261, order: "LU29CAR013" },
      sort: { entry_date: -1 },
    });
  });

  $: console.log($list?.[name]?.data);
</script>

<HeaderTitle title="BBM" />

<ButtonTambah label="Tambah" bind:value={showModalTambahBBM} />

{#if $list?.[name]?.loading}
  <Spinner size="">Memuat</Spinner>
{/if}

{#if $list?.[name]?.data && !$list?.[name]?.loading}
  <ListBbm {name} />
  {#if $list?.[name]?.data.length == 0}
    <p>Belum ada data</p>
  {/if}
{/if}

<ModalTambah
  action="/"
  title="form-tambah-bbm"
  bind:show={showModalTambahBBM}
/>
