<script>
  import { onMount } from "svelte";
  import { list } from "$lib/stores";
  import Spinner from "$lib/elements/Spinner.svelte";

  onMount(() => {
    list.fetchData($list, "user", {
      limit: 10,
      page: 1,
    });
  });
</script>

<h2>User</h2>

{#if $list?.user?.loading}
  <Spinner size="l">memuat</Spinner>
{/if}

{#if !$list?.user?.loading && $list?.user?.data}
  <ul>
    {#each $list?.user?.data as d}
      <li>{d.username} - {d.nickname}</li>
    {/each}
  </ul>
{/if}
