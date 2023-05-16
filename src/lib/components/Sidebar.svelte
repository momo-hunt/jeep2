<script>
  import { fly, fade } from "svelte/transition";
  import { page } from "$app/stores";
  export let link;
  export let show;
  export let user;
</script>

{#if show}
  <section transition:fade>
    <nav in:fly={{ x: -100 }} out:fly={{ x: -100 }}>
      <article>
        <h2>--Jeep Kaba--</h2>
        <h3>Admin-Dashboard</h3>
        <div class="profile">{user?.name}</div>
        <a href="/logout" role="button">Logout</a>
      </article>
      {#if link}
        {#each link as { label, href }}
          <a {href} class:active={$page?.url?.pathname == href}>{label}</a>
        {/each}
      {/if}
    </nav>
    <button class="backdrop" on:click={() => (show = false)} />
  </section>
{/if}

<style>
  /* * {
    border: 1px solid red;
  } */

  section {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    background: rgba(0, 0, 0, 0.5);
  }

  section nav {
    width: 60%;
    background: var(--bg-5);
    display: flex;
    flex-direction: column;
  }

  nav a {
    overflow: hidden;
    position: relative;
    padding: 0.5rem 1rem;
    background: inherit;
    transition: all 0.3s ease;
  }

  nav a:hover,
  nav a.active {
    transition: all 0.3s ease;
    background: var(--bg-1);
    color: var(--bg-3);
  }

  nav a.active::before {
    content: "";
    position: absolute;
    right: -8px;
    height: 50%;
    aspect-ratio: 1/1;
    transform: rotate(45deg);
    background: var(--bg-4);
  }

  section article {
    padding: 1rem;
    text-align: center;
  }

  section article h2 {
    color: var(--bg-3);
  }

  section article .profile {
    margin-top: 1rem;
    background: rgba(0, 0, 0, 0.3);
    padding: 0.2rem 0;
  }

  section .backdrop {
    width: 40%;
  }
</style>
