<script>
  import { createEventDispatcher } from "svelte";
  import { enhance } from "$app/forms";

  const dispatch = createEventDispatcher();
  export let action;
  export let title = undefined;
  export let loading = false;
</script>

<form
  {title}
  {action}
  method="post"
  use:enhance={() => {
    loading = true;
    return async ({ result }) => {
      loading = false;
      console.log("result " + title, result);

      if (result.status == 200) return dispatch("success", result.data);
      return dispatch("error", result.data);
    };
  }}
>
  <slot />
</form>

<style>
  form {
    margin: 0.5rem 1rem;
  }
</style>
