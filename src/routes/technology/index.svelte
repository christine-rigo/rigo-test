<script lang="ts">
	import Footer from '$/components/Footer.svelte';
  import { navColor } from '$/stores/nav.store';
  import { onMount } from 'svelte';
  import ContentSeparator from '$/components/technology/ContentSeparator.svelte';
  import Carousel from '$/components/technology/Carousel.svelte';
  import Services from '$/components/technology/Services.svelte';
	import StartYourAscent from '$/components/technology/StartYourAscent.svelte';
  import AxeBlock from '$/components/technology/AxeBlock.svelte';
  import Blockchain from '$/components/technology/Blockchain.svelte';
  onMount(() => {
		$navColor = 'var(--app-color-yellow)';
	});

  const carouselList = [
    {
      content: 'experts in',
      service: 'salesforce',
      img: '/technology/salesforce.png',
      description: 'Enterprise level Salesforce setup and management across existing and new Salesforce instances. Working with custom components, rigo continue to produce beautiful websites that integrate seamlessly with the full functionality of Salesforce.',
      items: [
        'SALES TRACKER',
        'CUSTOMER TRACKER',
        'END TO END COMMUNICATIONS',
        'EMAIL CAMPAIGNS'
      ]
    },
    {
      service: 'Ecommerce',
      content: 'experts in',
      description: 'E-commerce solutions that integrate intuitive backend tools with beautiful front-end design. The team will help you choose and implement the best platform to support your business objectives, from intelligent stock management to multi-category product launches and scalability.',
      img: '/technology/ecommerce.png',
      items: [
        'PAYMENT PROCESSING SOLUTIONS INCLUDING STRIPE, GOOGLE AND APPLE PAY',
        'CRYPTO PAYMENT GATEWAYS',
        'SHOPIFY & WOOCOMMERCE INTEGRATIONS'
      ]
    },
    {
      service: 'wordpress',
      content: 'experts in',
      description: 'Dynamic and scalable websites that harness the flexibility of the world’s most popular CMS. Make Wordpress work for your business and empower your team to connect directly with customers and manage content at scale.',
      img: '/technology/wordpress.png',
      items: [
        'PLUG-IN DEVELOPMENT',
        'THEME CUSTOMISATION',
        'CMS BUILDS & INTEGRATION'
      ]
    },
    {
      service: 'web3',
      content: 'experts in',
      description: `Cutting edge Web3-powered sites that deliver hyper-personal digital experiences by harnessing decentralised functionality.`,
      description2: 'In 2022 alone our expert team helped our clients generate revenues in excess of $30 million. rigo believe that Web3 is the future of the internet and business and we will support our clients through the technology’s evolution into 2023 and beyond.',
      img: '/technology/web3.png',
      items: [
        'BLOCKCHAIN DEVELOPMENT',
        'DEFI GAMING EXPERIENCES',
        'NFT LAUNCHES & MANAGEMENT',
      ]
    }
  ]
</script>

<section class="main-content">
  <div class="title">
    <h1>Technology</h1>
  </div>
  <p class="services">full stack development, database architecture, cloud architecture, e-commerce & digital brand building.</p>
  <div class="sub">
    <p class="description">rigo is a London-based digital agency specialising in bespoke technology solutions.</p>
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
 
</section>
<div class="start-ascent">
  <StartYourAscent />    
</div>
<section class="section-carousel">
  <Carousel
    carouselList={carouselList}
  />
</section>
<div class="start-ascent">
  <StartYourAscent />    
</div>

<section>
  <AxeBlock />
</section>
<section>
  <Blockchain/>
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
    font-size: 40px;
  }
  .start-ascent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
  }
  .services {
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    font-family: 'Bebas Neue';
    padding: 2rem 0;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
		height: 100%;
		min-height: 100%;
    padding: 0 3.5rem;

    .title {
      text-align: center;      
      color: var(--app-color-yellow);
    }
	}

  .section-carousel {
    padding: 0 3.5rem;
    margin: 8rem 0 4rem 0;
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

  @media (min-width: 768px) {
    .section-carousel {
      margin: 0;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: calc(2.375rem + 1.5vw);
      font-weight: 700;
    }
    .main-content,
    .section-carousel {
      padding: 2rem 15vw;
    }

    .section-carousel {
      margin: 0;
    }
  } 

  @media (min-width: 1440px) {
    h1 {
      font-size: 6.25rem;
      line-height: 200px;
    }

    .footer {
      display: flex;
      padding: 4rem 6rem;
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