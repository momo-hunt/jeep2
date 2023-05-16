<script>
  import { obj } from "$lib/stores";
  import {
    viewTanggalIndo,
    tanggalIndo,
    formatNumberRibuan,
  } from "$lib/helper";
  export let fields;
</script>

<article>
  <small class="muted">
    Dibuat {$obj?.created_by?.name} pada {tanggalIndo($obj?.created_at)}
  </small>
</article>

<section>
  {#each fields as { name, label, ...f }}
    <div>
      <span>{label}</span>
      {#if name == "tanggal_berangkat" || name == "tanggal_kembali"}
        <h3>{viewTanggalIndo($obj?.[name], "date")}</h3>
      {:else if name == "jam_berangkat" || name == "jam_kembali"}
        <h3>{viewTanggalIndo($obj?.[name], "time")}</h3>
      {:else if f.type == "number"}
        <h3>{formatNumberRibuan($obj?.[name])}</h3>
      {:else}
        <h3>{$obj?.[name]?.name ?? $obj?.[name]}</h3>
      {/if}
    </div>
  {/each}
</section>

<style>
  section {
    background: var(--black-1);
    margin-top: 1rem;
  }

  section > div {
    border-bottom: 1px solid var(--black);
    padding: 0.5rem 1rem;
  }

  section > div > h3 {
    margin: 0 0.5rem;
    color: var(--bg-3);
  }

  section > div > span {
    opacity: 0.6;
    color: var(--bg-2);
  }

  article {
    margin: 1rem;
    color: var(--bg-2);
  }
</style>
