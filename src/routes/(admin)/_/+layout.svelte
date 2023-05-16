<script>
  import { beforeNavigate } from "$app/navigation";
  import Navbar from "$lib/components/Navbar.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";

  export let data;
  let isShowSidebar = false;

  beforeNavigate(() => (isShowSidebar = false));

  //   $: console.log(data);
</script>

<Navbar bind:show={isShowSidebar} />
<Sidebar link={data?.link} bind:show={isShowSidebar} user={data?.user} />
<slot />

<style>
  :global(body) {
    color: var(--bg-2);
    background: black;
  }
</style>
