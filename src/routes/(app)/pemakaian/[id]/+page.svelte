<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { obj } from "$lib/stores";
  import Spinner from "$lib/elements/Spinner.svelte";

  import HeaderTitle from "$lib/components/HeaderTitle.svelte";
  import Detail from "./Detail.svelte";
  import Action from "./Action.svelte";

  export let data;
  let id = $page?.params?.id;

  onMount(() => {
    obj.get(`/pemakaian/${id}`);
  });
</script>

<HeaderTitle title="Detail Pemakaian" />

{#if $obj.loading}
  <Spinner size="l">memuat</Spinner>
{/if}

{#if !$obj.loading}
  <Action {id} />

  <Detail fields={data?.fields} />
{/if}
