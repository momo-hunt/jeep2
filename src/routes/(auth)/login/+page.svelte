<script>
  import ErrorMsg from "./ErrorMsg.svelte";
  import FormLogin from "./FormLogin.svelte";

  export let data;

  let error = false;
</script>

<header>
  <div class="title">- - Jeep Kaba - -</div>
  <h1>Login</h1>
</header>

<ErrorMsg show={error} />

<FormLogin bind:error {data} />

<style>
  header {
    margin: 4rem 0 2rem 0;
    text-align: center;
  }

  h1 {
    color: var(--bg-4);
  }
</style>
