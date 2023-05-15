<script>
  import { page } from "$app/stores";
  import { obj } from "$lib/stores";
  import { onMount } from "svelte";
  import Spinner from "$lib/elements/Spinner.svelte";
  import { viewTanggalIndo } from "$lib/helper";

  export let data;
  let id = $page?.params?.id;

  onMount(() => {
    obj.set($page.url);
  });
</script>

<h2>Detail</h2>

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
          <h3>{$obj?.[name]}</h3>
        {/if}
      </div>
    {/each}
  </section>
{/if}

<style>
  h2 {
    margin: 1rem;
  }

  section > div {
    border-bottom: 1px solid lightgray;
    padding: 0.5rem 1rem;
  }

  section > div > h3 {
    margin: 0 0.5rem;
  }

  section > div > span {
    opacity: 0.6;
  }

  .action {
    margin: 1rem;
    width: 50%;
    text-align: center;
  }
</style>
