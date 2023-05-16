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
  <h4>- Jeep Kaba -</h4>
  <span>{data?.user?.name}</span>
  <a href="/logout" role="button">Logout</a>
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
    margin: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .title h4 {
    margin-right: auto;
  }

  .title a[role="button"] {
    color: red;
  }

  header {
    display: flex;
    background: var(--bg-5);
    margin-bottom: 1rem;
  }

  header a {
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
