<script lang="ts">
  import Button from '$/components/thank-you/Button.svelte';
  import Footer from '$/components/Footer.svelte';
  import { navColor } from '$/stores/nav.store';
  import { onMount } from 'svelte';
  import { style } from 'svelte-body';

  onMount(() => {
    $navColor = 'var(--app-color-lunarblue)';

    // LinkedIn Insight Tag
    let _linkedin_partner_id = "5560713";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);

    (function(l) {
      if (!l) {
        window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
        window.lintrk.q = [];
      }
      var s = document.getElementsByTagName("script")[0];
      var b = document.createElement("script");
      b.type = "text/javascript";
      b.async = true;
      b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      s.parentNode.insertBefore(b, s);
    })(window.lintrk);
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

  <!-- LinkedIn Insight Tag -->
  <noscript>
    <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=5560713&fmt=gif" />
  </noscript>
  <!-- End of LinkedIn Insight Tag -->

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
