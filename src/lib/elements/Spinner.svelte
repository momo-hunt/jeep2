<script>
  export let size = "";
</script>

<section class:l={size}>
  <div class="lds-dual-ring" class:l={size} />
  <span><slot /></span>
</section>

<style>
  /* * {
    border: 1px solid red;
  } */

  section {
    position: relative;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section.l {
    height: 4.5rem;
  }
  section span {
    position: relative;
    /* background: white; */
    animation: spanAni 4s linear infinite;
    color: var(--bg-2);
  }

  @keyframes spanAni {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    20% {
      opacity: 1;
      transform: translateY(0%);
    }
    80% {
      opacity: 1;
      transform: translateY(0%);
    }
    100% {
      opacity: 0;
      transform: translateY(100%);
    }
  }

  .lds-dual-ring {
    position: absolute;
    width: 3rem;
    height: 3rem;
  }

  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    margin: 12px;
    border-radius: 50%;
    border: 3px solid lightgray;
    border-color: var(--bg-3) transparent var(--bg-3) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  .lds-dual-ring.l {
    width: 4.5rem;
    height: 4.5rem;
  }

  .lds-dual-ring.l::after {
    width: 3rem;
    height: 3rem;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
