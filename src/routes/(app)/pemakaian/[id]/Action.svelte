<script>
  export let id;
</script>

<section>
  <a href={`/pemakaian/tambah`} role="button" class="action">Tambah Baru</a>
  <a href={`/pemakaian/ubah/${id}`} role="button" class="action">Ubah</a>
</section>

<style>
  section {
    margin: 1rem;
    display: flex;
    gap: 1rem;
  }

  section > * {
    width: 100%;
    text-align: center;
  }
</style>
