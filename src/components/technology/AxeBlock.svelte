<script lang="ts">
  import StartYourAscent from './StartYourAscent.svelte';
  const listItems = [
    'fast, modern site',
    'search optimised',
    'distinct branding',
    'campaign pages',
    'flexibility to grow',
    'user-friendly cms',
  ];
</script>

<div class="axeblock-container">
  <div class="hidden-desktop">
    <h2 class="axeblock-title">axe block <span>case study</span></h2>
    <div class="axeblock-image" style="background-image: url('/technology/AxeBlockCasestudy.gif'); background-size: cover;"></div>
    <div class="axeblock-content">
      <h3>Website Development</h3>
      <p>
        Starting with a loose overview of the content requirements, rigo mapped out the user flow across the website, Drip-feeding information to build a user’s understanding before presenting them with a compelling conversion action.
        <br><br>
        Rigo’s designers took this and - in close collaboration with the development team - created a design that could be delivered at speed, while retaining the impact the client was looking for. 
        <br><br>
        Axe Block fed back with some final details and thoughts, before everything was handed across to rigo’s developers to bring to life.
      </p>
      <br>
      <a href="https://the-dots.com/projects/axe-block-management-775355">Read the full case study</a>
      <br><br>
      <br>
      <h3>requirements</h3>
      <ul>
        {#each listItems as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  </div>

  <div class="hidden-mobile">
    <div class="axeblock-image">
      <img src="/technology/AxeBlockCasestudy.gif" alt="rigo"/>
    </div>
    <div class="axeblock-content">
      <h2 class="axeblock-title">axe block <span>case study</span></h2>
      <div class="content-grid">
        <div>
          <h3>Website Development</h3>
          <p>
            Starting with a loose overview of the content requirements, rigo mapped out the user flow across the website, Drip-feeding information to build a user’s understanding before presenting them with a compelling conversion action.
            <br><br>
            Rigo’s designers took this and - in close collaboration with the development team - created a design that could be delivered at speed, while retaining the impact the client was looking for. 
            <br><br>
            Axe Block fed back with some final details and thoughts, before everything was handed across to rigo’s developers to bring to life.
          </p>
          <br>
          <a href="https://the-dots.com/projects/axe-block-management-775355">Read the full case study</a>
        </div>
        <div>
          <h3>requirements</h3>
          <ul>
            {#each listItems as item}
              <li>{item}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>

</div>

<div class="start-ascent">
  <StartYourAscent />
</div>

<style lang="scss">
  .axeblock-container {
    width: 100%;
    background-color: rgba(80, 77, 230, 0.1);
    padding: 4rem 3.5rem 5rem;
    .axeblock-title {
      text-align: center;
      font-size: 40px;
      font-weight: bold;
      text-transform: uppercase;
      font-family: 'Bebas Neue';
      margin-bottom: 3.0625rem;
      span {
        color: var(--app-color-yellow);
      }
    }

    .axeblock-image {
      height: 175px;
    }

    .hidden-desktop,
    .hidden-mobile {
      .axeblock-content {
        margin-top: 3.3125rem;
        h3 {
          font-family: 'Bebas Neue';
          font-size: 24px;
          font-weight: bold;
          line-height: 22px;
          letter-spacing: 0em;
          color: var(--app-color-yellow);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 12px;
          line-height: 16.2px;
          font-family: 'Satoshi';
        }

        a {
          text-decoration: underline;
          color: white;
          font-size: 16px;
          font-family: 'Satoshi';
        }

        li {
          text-transform: uppercase;
        }
      }
    }
  }
  .hidden-mobile {
    display: none;
  }


  ul {
    list-style: none;
    font-family: 'Satoshi';
    font-size: 16px;
  }

  ul li::before {
    content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: white; /* Change the color */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -2.5em; /* Also needed for space (tweak if needed) */
  }

  .start-ascent {
    display: flex;
    justify-content: center;
    padding-top: 5rem;
    background-color: rgba(80, 77, 230, 0.1);
  }


  @media (min-width: 768px) {
    .axeblock-container {
      padding-bottom: 0;
      .axeblock-image {
        height: 367px;
      }
    }

    .start-ascent {
      padding-bottom: 5rem;
    }
  }

  @media (min-width: 1024px) {
    .axeblock-container {
      padding: 10rem 2rem 0 2rem;
      .axeblock-title {
        margin-bottom: 2.3125rem;
      }
      .hidden-mobile {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        .axeblock-image {
          width: 100%;
          max-width: 725px;
          flex: 60%;
        }

        .axeblock-content {
          flex-basis: 40%;
          padding-left: 40px;
          margin: 0;
          
          h2 {
            text-align: left;
          }

          .content-grid {
            display: grid;
            grid-template-columns: 1fr 190px;
            column-gap: 16px;
          }
        }
      }
    }
    .hidden-desktop {
      display: none;
    }
    
  }

  @media(min-width: 1440px) {
    .axeblock-container {
      display: table;
      padding: 10rem 15vw;
      padding-bottom: 0;
    }
  }

  
</style>