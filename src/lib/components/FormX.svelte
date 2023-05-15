<script>
  import { createEventDispatcher } from "svelte";
  import { enhance } from "$app/forms";

  const dispatch = createEventDispatcher();
  export let action;
  export let title = undefined;
  let submitted = { load: false };
</script>

<form
  {title}
  {action}
  method="post"
  use:enhance={() => {
    dispatch("submit", { ...submitted, load: true });
    return async ({ result }) => {
      console.log("result " + title, result);
      dispatch("submit", { ...submitted, load: false });

      if (result.status == 200)
        return dispatch("submit", { ...submitted, success: result.data });
      return dispatch("submit", { ...submitted, error: result.data });
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
