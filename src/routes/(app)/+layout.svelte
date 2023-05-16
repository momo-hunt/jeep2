<script>
  import { page } from "$app/stores";
  export let data;

  let links = [
    { label: "Beranda", href: "/" },
    { label: "Pemakaian", href: "/pemakaian" },
    { label: "Tambah", href: "/pemakaian/tambah" },
  ];
</script>

<div class="title">
  <span>- Jeep Kaba -</span>
  <span>{data?.user?.name}</span>
</div>
<header>
  {#each links as { label, href }}
    <a {href} class:active={href == $page?.url?.pathname}>{label}</a>
  {/each}
</header>

<section>
  <slot />
</section>

<style>
  .title {
    margin: 0.2rem 1rem;
    display: flex;
    justify-content: space-between;
  }

  header {
    display: flex;
    background: var(--bg-5);
    margin-bottom: 1rem;
  }

  header a {
    text-align: center;
    width: 100%;
    padding: 0.5rem 1rem;
    background: inherit;
  }

  header a:hover {
    filter: brightness(1.5);
  }

  header a.active {
    border-bottom: 2px solid var(--bg-4);
    color: var(--bg-4);
  }

  section {
    margin-bottom: 4rem;
  }
</style>
