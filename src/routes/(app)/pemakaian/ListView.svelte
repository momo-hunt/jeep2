<script>
  import { getHalfMonth, tanggalIndo } from "$lib/helper";

  export let list = [
    {
      id: "51f98745-7ebd-495f-97cb-8f153adb7e91",
      no_spj: "asd",
      sopir: 1,
      tujuan: "asd",
      keperluan: "dinas bri",
      tanggal_berangkat: "2023-04-19T17:00:00.000Z",
      jam_berangkat: "",
      tanggal_kembali: "2023-04-19T17:00:00.000Z",
      jam_kembali: "",
      km_awal: "",
      km_akhir: "",
      km_pemakaian: "",
      created_by: [Object],
      created_at: "2023-05-11T04:31:18.246Z",
      updated_by: "",
      updated_at: "2023-05-11T04:31:18.246Z",
    },
    {
      id: "ee80acca-f273-4cf7-87f3-db9c82c0eb65",
      no_spj: "ad",
      sopir: 1,
      tujuan: "dampit",
      keperluan: "dinas",
      tanggal_berangkat: "2023-05-19T17:00:00.000Z",
      jam_berangkat: "1899-12-30T03:17:56.000Z",
      tanggal_kembali: "2023-05-19T17:00:00.000Z",
      jam_kembali: "1899-12-30T08:17:56.000Z",
      km_awal: 2,
      km_akhir: 123,
      km_pemakaian: 121,
      created_by: [Object],
      created_at: "2023-05-11T05:25:45.698Z",
      updated_by: "",
      updated_at: "2023-05-11T05:25:45.698Z",
    },
  ];
</script>

<ul>
  {#each list as d}
    <li>
      <a href={`/pemakaian/${d.id}`} class="backdrop">&nbsp;</a>
      <div class="left">
        <small>{getHalfMonth(d.tanggal_kembali)}</small>
        <div>{new Date(d.tanggal_kembali).getDate()}</div>
      </div>
      <div class="right">
        <h3>{d.keperluan} ({d.tujuan})</h3>
        <div>Km {d.km_akhir}</div>
        <small class="muted"
          >{d.created_by.name} - {tanggalIndo(d.created_at)}</small
        >
      </div>
    </li>
  {/each}
</ul>

<style>
  ul li {
    position: relative;
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
    border-bottom: 1px solid lightgray;
  }

  ul li:hover {
    background: lightgray;
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
    border-right: 1px solid lightgray;
    text-align: right;
  }
</style>
