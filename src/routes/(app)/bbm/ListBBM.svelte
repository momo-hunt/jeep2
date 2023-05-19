<script>
  import { formatNumberRibuan, getHalfMonth, distanceDate } from "$lib/helper";
  import { list } from "$lib/stores";
  export let name;
</script>

<ul>
  {#each $list?.[name]?.data as d}
    <li>
      <div class="left">
        <p>{getHalfMonth(d.document_date)}</p>
        <h3>{new Date(d.document_date).getDate()}</h3>
      </div>
      <div>
        <h3>
          {formatNumberRibuan(d?.kuantum)}
          Liter
        </h3>
        <p>Rp. {formatNumberRibuan(d?.curency)},-</p>
        <small>Santoso - {distanceDate(d?.document_date)}</small>
      </div>
    </li>
  {/each}
</ul>

<style>
  ul li {
    border-bottom: 1px solid var(--bg-1);
    padding: 1rem;
    display: flex;
    gap: 1rem;
  }

  ul li h3 {
    color: var(--bg-2);
  }

  ul li .left {
    text-align: right;
  }

  ul li small {
    opacity: 0.6;
  }
</style>
