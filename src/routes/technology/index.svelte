<script lang="ts">
	import Footer from '$/components/Footer.svelte';
  import { navColor } from '$/stores/nav.store';
  import { onMount } from 'svelte';
  import ContentSeparator from '$/components/technology/ContentSeparator.svelte';
  import Carousel from '$/components/technology/Carousel.svelte';
  import Services from '$/components/technology/Services.svelte';
	onMount(() => {
		$navColor = 'var(--app-color-yellow)';
	});

  const carouselList = [
    {
      experts: 'Salesforce',
      img: '/technology/salesforce.png',
      description: 'rigo works with enterprise level clients building custom components and articles for salesforce. We have the expertise and knowledge to produce beautiful looking sites optimised for performance and with the full force of Salesforce powering it.',
      items: [
        'SALES TRACKER',
        'CUSTOMER TRACKER',
        'END TO END COMMUNICATIONS',
        'EMAIL CAMPAIGNS'
      ]
    },
    // {
    //   experts: 'Ecommerce',
    //   img: '/technology/ecommerce.png'
    // }
  ]
</script>

<section class="main-content">
  <div class="title">
    <h1>Technology</h1>
  </div>
  <p class="services">We cover full stack development, database architecture, cloud architecture, e-commerce & digital brand building.</p>
  <div class="sub">
    <p class="description">rigo is a London-based digital agency specialising in web development and delivering bespoke technology-led solutions for digital brands, publishers, content producers, and aspirational businesses looking to get to the next level. </p>
  </div>
  <ContentSeparator
    content1="/technology/28m.png"
    content2="/technology/240k.png"
    content3="/technology/90p.png"
    content4="/technology/1000+.png"
    columnSeparator="/technology/Line 2.png"
    info1="Raised NFT Sales"
    info2="Accumulative visits per month"
    info3="Average page score on Google page speed insights"
    info4="Collective Sites built"
  />

  <Services />

  <Carousel
    carouselList={carouselList}
  />
  
</section>

<section class="gif-container">
  <div class="gif-card">
    <img class="static" style="width: 100%; height: auto; max-height: 712px;" src="/nftcon/static_gif_1.png" alt="rigo">
    <img class="active" style="width: 100%; height: auto; max-height: 712px;" src="/nftcon/PlanetXolo.gif" alt="rigo">
  </div>
  <div class="gif-card">
    <img class="static" style="width: 100%; height: auto; max-height: 712px;" src="/nftcon/static_gif_2.png" alt="rigo">
    <img class="active" style="width: 100%; height: auto; max-height: 712px;" src="/nftcon/NFTCON.gif" alt="rigo">
  </div>
  <div class="gif-card">
    <img class="static" style="width: 100%; height: auto; max-height: 712px;" src="/nftcon/static_gif_3.png" alt="rigo">
    <img class="active" style="width: 100%; height: auto; max-height: 712px;" src="/nftcon/Arkh.gif" alt="rigo">
  </div>
</section>

<section class="footer">
  <Footer marginright=0 href="/casestudy/gallagher">Gallagher</Footer>
</section>

<style lang="scss">
  h1 {
      font-size: calc(2.375rem + 1.5vw);
      font-weight: 700;
  }

  .services {
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    font-family: 'Bebas Neue';
  }

  .sub {
    display: flex;
    justify-content: center;
    .description {
      font-size: 1rem;
      font-weight: 400;
      line-height: 22px;
      text-align: center;
      max-width: 78ch;
    }
  }

  .main-content {
		width: 100%;
		height: 100%;
		min-height: 100%;
    padding: 2rem 5rem 2rem 20vw;

    .title {
      text-align: center;      
      padding-top: 3rem;
      color: var(--app-color-yellow);
    }
	}

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    background-color: var(--app-color-lunarblue);
  }

  .gif-container {
    display: flex;
    flex-direction: row;

    .gif-card {
        flex: 1 0 32%;
        position: relative;
    }

    .static {
        position: absolute;
    }
    .static:hover {
        opacity: 0;
    }
  }

  @media (min-width: 1440px) {
      h1 {
          font-size: 6.25rem;
          line-height: 200px;
      }

      .footer {
        padding: 8rem 0;
      }
  }


  @media(max-width: 425px) {
    .gif-container {
        flex-direction: column;
        .gif-card {
            flex: 1;
            position: relative;
        }
    }
  }
</style>