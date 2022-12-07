<script lang="ts">
  import Button from '$/components/thank-you/Button.svelte';
  import Footer from '$/components/Footer.svelte';
import { navColor } from '$/stores/nav.store';
import { onMount } from 'svelte';
import { style } from 'svelte-body';

onMount(() => {
  $navColor = 'var(--app-color-lunarblue)';
});
</script>

<svelte:body use:style={{ background: 'var(--app-color-lunarblue-contrast)' }} />

<svelte:head>
<title> Thank you / Rigo Agency</title>
</svelte:head>

<div>
  <div class="main-content">
    <h1>Thank you.</h1>
    <h2>WE WILL BE IN CONTACT SHORTLY.</h2>
    <Button />
  </div>
  <Footer href="/casestudy/gallagher">Gallagher</Footer>
</div>

<style lang="scss">
  * {
    --color: var(--app-color-lunarblue);
    --color-contrast: var(--app-color-lunarblue-contrast);

    color: var(--color);
  }


  .main-content {
    text-align: center;
    padding-bottom: 4rem;
    margin-bottom: 6rem;
  }

  h1 {
    font-size: 100px;
  }

  h2 {
    margin: 4rem 0;
    font-size: 24px;
  }

</style>
