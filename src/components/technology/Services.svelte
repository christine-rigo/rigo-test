<script lang="ts">
  import type { Services } from './types';
  import { inview } from 'svelte-inview';

  let isInView;

  // TODO: Set this to props for dynamic purposes
  const services: Array<Services> = [{
    type: 'design',
    items: [
      'client consultation',
      'design engine',
      'brand engine',
      'site mapping',
      'wireframing',
      'ux & ui',
      'responsive design'
    ],
  }, {
    type: 'development',
    items: [
      'scoping',
      'modern frameworks (react typescript)',
      'automated testing',
      'quality assurance testing',
      'web development',
      'responsive design',
      'mobile app development',
      'commerce sites',
    ]
  }, {
    type: 'infrastructure',
    items: [
      'scalable cloud infrastructure',
      'storage',
      'networking',
      'hosting',
      'back ops',
      'continuous integration',
      'continuous deployment',
      'global content distribution network(cdn)',
    ]
  }]
</script>

<div class="services-container"
class:cotainerInview="{isInView}"
use:inview={{ unobserveOnEnter: false, rootMargin: '10%' }}
on:change={({ detail }) => {
  isInView = detail.inView;
}}
>
  {#each services as { type, items } }
    <div class="item-container"
    class:inview="{isInView}"
    >
      <h3>{type}</h3>
      {#each items as item}
      <div>
       <p>{item}</p>
      </div>
      {/each}
    </div>
  {/each}
</div>

<style lang="scss">
  .services-container {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 990px;
  }
  .item-container {
    border-radius: 50%;
    border: 1px solid #FAF5EE;
    text-transform: uppercase;
    width: calc(100% - 20px);
    height: 300px;
    max-width: 300px;
    margin: 1.5rem 0;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform .75s ease-in-out .25s, opacity .5s ease-in-out .25s; 
    h3 {
      font-size: 16px;
      padding-bottom: 1rem;
      color: var(--app-color-yellow);
    }
    p {
      font-size: 10px;
      text-align: center;
      max-width: 25ch;
    }
  }

  @media(min-width: 425px) {
    .services-container {
      align-items: center;
    }

    .item-container {
      width: 400px;
    }
  }

  @media (min-width: 768px) {
    .services-container {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
  @media (min-width: 1024px) {
   

    .item-container {
      padding: 1rem 0;
      padding-bottom: 0;
      h3 {
        font-size: 18px;
        font-weight: 700;
        color: white;
      }
      div {
        overflow: hidden;
        text-align: center;
       p {
          font-size: 10px;
          padding-bottom: 4px;
          width: 140px;
       }
      }
    }
  }

  @media (min-width:1286px) {
    .item-container:nth-child(1) {
      transform: translateX(50%);
    }
    .item-container:nth-child(3) {
      transform: translateX(-50%);
    }

    .item-container{ opacity: .5; }

    .item-container.inview:hover ~ div,
    .item-container.inview:has(~ div:hover) {
        opacity:.1;
    }
    .item-container.inview:hover {
      transform:scale(1.1);
    }

    .item-container.inview:hover,
    .item-container.inview:has(~ div:hover) {
      transition-delay: 0;
      transition-duration: .35s;
      transition-timing-function: ease-in;
    }


    .item-container.inview {
      opacity: 1;
      transform: translateX(0);
    }

  }

  @media (min-width: 1440px) {
    .services-container {
      margin-top: 8rem;
      justify-content: space-between;

      .item-container {
        height: 326px;
        max-width: 326px;
      }
    }
  }

  @media (min-width: 1441px) {
    .services-container {

    }
  }
</style>