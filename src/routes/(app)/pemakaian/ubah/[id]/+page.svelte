<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { obj } from "$lib/stores";
  import FormX from "$lib/components/FormX.svelte";
  import Spinner from "$lib/elements/Spinner.svelte";

  import { formatDateForm, formatTimeForm } from "$lib/helper";
  import HeaderTitle from "$lib/components/HeaderTitle.svelte";

  export let data;
  let id = $page?.params?.id;
  let title = "form-ubah-pemakaian";
  let action = "/pemakaian?/update";

  onMount(() => {
    obj.set(`/pemakaian/${id}`);
  });
</script>

<HeaderTitle title="Ubah Pemakaian" />

{#if $obj.loading}
  <Spinner size="l">memuat</Spinner>
{/if}

{#if !$obj.loading}
  <FormX {action} {title} on:submit={{}}>
    <input type="hidden" name="id" value={id} />
    {#each data?.fields as f}
      {#if f.type == "date"}
        <input {...f} value={formatDateForm($obj?.[f.name])} />
      {:else if f.type == "time"}
        <input {...f} value={formatTimeForm($obj?.[f.name])} />
      {:else}
        <input {...f} value={$obj?.[f.name]} />
      {/if}
    {/each}
    <button type="submit">Ubah</button>
  </FormX>
{/if}

<style>
</style>
