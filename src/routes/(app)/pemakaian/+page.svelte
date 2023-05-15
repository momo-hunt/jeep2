<script>
  import ListView from "./ListView.svelte";
  import { list } from "$lib/stores";
  import { onMount } from "svelte";
  import Button from "$lib/elements/Button.svelte";
  import Spinner from "$lib/elements/Spinner.svelte";

  onMount(() => {
    list.fetchData($list, "pemakaian", { limit: 10, page: 1 });
  });

  $: console.log($list);
</script>

<h2>Pemakaian</h2>

{#if !$list.pemakaian.loading || $list.pemakaian.data.length > 0}
  <ListView list={$list?.pemakaian?.data} />
{/if}

{#if $list.pemakaian.loading}
  <Spinner size="l">memuat</Spinner>
{/if}

{#if $list.pemakaian.more && !$list.pemakaian.loading}
  <Button on:click={() => list.fetchMore($list, "pemakaian")}>Lebih</Button>
{/if}

<style>
  h2 {
    margin: 1rem;
  }
</style>
