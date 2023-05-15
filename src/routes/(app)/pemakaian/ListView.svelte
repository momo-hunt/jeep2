<script>
  import { getHalfMonth, tanggalIndo } from "$lib/helper";

  export let list;
</script>

<ul>
  {#each list as d}
    <li>
      <div class="left">
        <small>{getHalfMonth(d.tanggal_kembali)}</small>
        <div>{new Date(d.tanggal_kembali).getDate()}</div>
      </div>
      <div class="right">
        <h3>{d.keperluan} ({d.tujuan})</h3>
        <p>Km {d.km_akhir}</p>
        <small class="muted"
          >{d.created_by.name} - {tanggalIndo(d.created_at)}</small
        >
      </div>
      <a href={`/pemakaian/${d.id}`} class="backdrop">&nbsp;</a>
    </li>
  {/each}
</ul>

<style>
  ul li {
    position: relative;
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
    border-bottom: 1px solid var(--bg-5);
  }

  ul li:hover {
    background: var(--bg-1);
  }

  .backdrop {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .left {
    padding-right: 1rem;
    border-right: 1px solid var(--bg-1);
    text-align: right;
  }

  .left > div {
    font-size: 1.2em;
  }

  .right h3 {
    color: var(--bg-2);
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }

  .right p {
    opacity: 0.8;
  }

  .right small.muted {
    color: var(--bg-3);
    opacity: 0.6;
  }
</style>
