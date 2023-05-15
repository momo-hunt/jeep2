<script>
  import { page } from "$app/stores";
  import { obj } from "$lib/stores";
  import { onMount } from "svelte";
  import Spinner from "$lib/elements/Spinner.svelte";
  import { viewTanggalIndo } from "$lib/helper";
  import HeaderTitle from "$lib/components/HeaderTitle.svelte";

  export let data;
  let id = $page?.params?.id;

  onMount(() => {
    obj.set($page.url);
  });
</script>

<HeaderTitle title="Detail Pemakaian" />

{#if $obj.loading}
  <Spinner size="l">memuat</Spinner>
{/if}

{#if !$obj.loading}
  <a href={`/pemakaian/ubah/${id}`} role="button" class="action">Ubah</a>

  <section>
    {#each data?.fields as { name, label }}
      <div>
        <span>{label}</span>
        {#if name == "tanggal_berangkat" || name == "tanggal_kembali"}
          <h3>{viewTanggalIndo($obj?.[name], "date")}</h3>
        {:else if name == "jam_berangkat" || name == "jam_kembali"}
          <h3>{viewTanggalIndo($obj?.[name], "time")}</h3>
        {:else}
          <h3>{$obj?.[name].name ?? $obj?.[name]}</h3>
        {/if}
      </div>
    {/each}
  </section>
{/if}

<style>
  section > div {
    border-bottom: 1px solid var(--bg-5);
    padding: 0.5rem 1rem;
  }

  section > div > h3 {
    margin: 0 0.5rem;
    color: var(--bg-2);
  }

  section > div > span {
    opacity: 0.6;
    color: var(--bg-3);
  }

  .action {
    margin: 1rem;
    width: 50%;
    text-align: center;
  }
</style>
