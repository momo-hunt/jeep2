<script>
  import FormX from "$lib/components/FormX.svelte";
  import ButtonSubmit from "$lib/elements/ButtonSubmit.svelte";
  import { goto } from "$app/navigation";
  export let data;
  export let error;

  let loading = false;

  function sukses(e) {
    goto(data?.redirectTo);
  }
  //   console.log(data);
</script>

<FormX
  action="/login?/login"
  title="form-login"
  on:success={sukses}
  on:error={() => (error = true)}
  bind:loading
>
  <section>
    <input type="text" name="username" placeholder="Username" required />
    <input type="password" name="password" placeholder="Password" required />
    <ButtonSubmit {loading}>Login</ButtonSubmit>
  </section>
</FormX>

<style>
  section {
    background: var(--bg-5);
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  section input {
    background: var(--black);
    padding: 1rem;
  }
</style>
