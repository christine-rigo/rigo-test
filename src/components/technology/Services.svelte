<script lang="ts">
  import type { Services } from './types';
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

<div class="services-container">
  {#each services as { type, items } }
    <div class="item-container">
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
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    max-height: 990px;
  }


  @media (min-width: 1440px) {
    .services-container {
      margin-top: 10rem;
      display: grid;
      grid-template-rows: 327px;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 45px;
    }

    .item-container {
      border-radius: 50%;
      border: 1px solid #FAF5EE;
      text-transform: uppercase;
      padding: 3.25rem 3rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h3 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 1rem;
      }
      div {
        overflow: hidden;
        text-align: center;
       p {
          font-size: 8px;
          padding-bottom: 8px;
          max-width: 30ch;
       }
      }
    }
  }
</style>