<script>
  import { onMount } from "svelte";
  import { list } from "$lib/stores";
  import ListView from "./ListView.svelte";
  import Spinner from "$lib/elements/Spinner.svelte";
  import HeaderTitle from "$lib/components/HeaderTitle.svelte";

  onMount(() => {
    list.fetchData($list, "pemakaian", {
      limit: 10,
      page: 1,
    });
  });

  // $: console.log($list);
</script>

<HeaderTitle title="Daftar Pemakaian" />

{#if !$list.pemakaian.loading && $list.pemakaian.data.length > 0}
  <ListView list={$list?.pemakaian?.data} />
{/if}

{#if $list.pemakaian.loading}
  <Spinner size="l">memuat</Spinner>
{/if}

{#if $list.pemakaian.more && !$list.pemakaian.loading}
  <button type="button" on:click={() => list.fetchMore($list, "pemakaian")}
    >Lebih banyak</button
  >
{/if}

<style>
  button {
    margin: 2rem 1rem;
    cursor: pointer;
    width: calc(100% - 2rem);
    display: block;
    padding: 0.5rem 1rem;
    border: 1px solid;
    border-color: var(--bg-1);
    color: var(--bg-2);
  }

  button:hover {
    transition: all 0.3s ease;
    border-color: var(--bg-2);
    color: var(--bg-3);
  }
</style>
