<script>
  import FormX from "../../../lib/components/FormX.svelte";
  import ModalX from "../../../lib/components/ModalX.svelte";
  export let show;
  export let title;
  export let action;
  let loading;
</script>

<ModalX bind:show>
  <section>
    <FormX {action} {title} bind:loading>
      <input type="text" name="as" />
    </FormX>
  </section>
</ModalX>
