<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { obj } from "$lib/stores";
  import { goto } from "$app/navigation";
  import FormX from "$lib/components/FormX.svelte";
  import Spinner from "$lib/elements/Spinner.svelte";

  import { formatFormDate, formatFormTime } from "$lib/helper";
  import HeaderTitle from "$lib/components/HeaderTitle.svelte";

  export let data;
  let id = $page?.params?.id;
  let title = "form-ubah-pemakaian";
  let action = "/pemakaian?/update";
  let loading = false;

  function submitSuccess(e) {
    obj.set(e.detail);
    goto(`/pemakaian/${e.detail.id}`);
  }

  function submitError(e) {
    alert("Ada kesalahan !");
  }

  onMount(() => {
    obj.get(`/pemakaian/${id}`);
  });
</script>

<HeaderTitle title="Ubah Pemakaian" />

{#if $obj.loading}
  <Spinner size="l">memuat data</Spinner>
{/if}

{#if !$obj.loading}
  <FormX
    {action}
    {title}
    on:success={submitSuccess}
    bind:loading
    on:error={submitError}
  >
    <input type="hidden" name="id" value={id} />
    {#each data?.fields as { label, ...f }}
      {#if f.type == "date"}
        <label for={f.name}>{label}</label>
        <input
          {...f}
          value={formatFormDate($obj?.[f.name])}
          disabled={loading}
        />
      {:else if f.type == "time"}
        <label for={f.name}>{label}</label>
        <input
          {...f}
          value={formatFormTime($obj?.[f.name])}
          disabled={loading}
        />
      {:else if f.type == "select"}
        <label for={f.name}>{label}</label>
        <select {...f} disabled={loading}>
          {#each data?.listSopir as [label, value]}
            <option {value}>{label}</option>
          {/each}
        </select>
      {:else}
        <label for={f.name}>{label}</label>
        <input
          {...f}
          value={$obj?.[f.name]?.name ?? $obj?.[f.name]}
          disabled={loading}
        />
      {/if}
    {/each}

    <button type="submit" disabled={loading}>
      {#if loading}
        <Spinner />
      {:else}
        <span>Ubah</span>
      {/if}
    </button>
  </FormX>
{/if}
