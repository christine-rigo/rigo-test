<script>

</script>

<div class="blockchain-container">
  <div class="content">
    <div class="content-wrapper">
      <h2>Blockchain</h2>
      <div class="description">
        <div>
          <h3>blochain at rigo</h3>
          <p>
            Unleash the power of blockchain technology with thoughtful, powerful, and efficient blockchain app development services that will help your project takeoff. 
            <br><br>
            Our in-house developers deliver industry leading services and solutions for enterprise businesses and start-ups.
            <br><br>
            Build projects with custom consensus algorithms, tokenized assets, private nodes, and custom service architecture.
          </p>
        </div>
        <div>
          <h3>web3 experience</h3>
          <p>rigo has invested heavily in building our Web3 knowledge and experience, with a particular focus on the Ethereum blockchain. This has proven invaluable to the successful NFT projects we have worked on recently, raising over $30 million in revenue.</p>
          <ul class="web3-list">
            <li>
              <a href="https://planetxolo.com/" target="_blank">Planet Xolo</a>
            </li>
            <li>
              <a href="https://clucoin.com" target="_blank">Clucoin</a>
            </li>
            <li>
              <a href="https://nftcon.org/" target="_blank">NFTCon</a>
            </li>
            <li>
              <a href="https://arkh.com/" target="_blank">Arkh AR</a>
            </li>
            <li>
              <a href="https://squishysquadnft.com/" target="_blank">Squishy squad</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>services</h3>
          <ul class="services-list">
            <li>Consultancy & tech solutions</li>
            <li>Project management</li>
            <li>Audience/Traffic monetization strategy</li>
            <li>Digital identity management</li>
            <li>CMS development</li>
            <li>Full Stack development capabilities</li>
            <li>WooCommerce integration</li>
            <li>Bespoke theme and plugin development</li>
            <li>Commerce strategy</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="ascent">
    <a href="/contact">Start your ascent</a>
  </div>
</div>

<style lang="scss">
  .blockchain-container {
    background-color: var(--app-color-lunarblue);
    padding: 0 60px;
    border: 0;

    h2 {

      font-family: 'Satoshi';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 100px;
      color: #36E0BA;

    }

    .description {
      margin-top: 2rem;
      max-width: 234px;

      div:not(:first-child) {

       padding-top: 4rem;

      }
    }
    
    h3 {
      font-family: 'Bebas Neue';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 24px;
      text-transform: uppercase;
      color: #36E0BA;
      line-height: 16pxs;
    }

    p {
      font-size: 12px;
      font-weight: 400;
      font-family: 'Satoshi';
    }

  }

  .ascent {
    display: flex;
    justify-content: center;
    padding: 6rem 0 4rem;

    a {
      color: #36E0BA;
      text-transform: uppercase;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.25rem;
      line-height: 1;

      padding: 1rem 3rem 0.8rem 3rem;

      box-shadow: 0 0 0 1px #36E0BA;
      border-radius: 36px;

      transition: all 0.2s ease-in-out;

      &:hover {
        box-shadow: 0 0 0 1px #36E0BA, 0px 1.8px 4.5px rgba(0, 0, 0, 0.1),
          0px 14px 36px rgba(0, 0, 0, 0.2);

        color: var(--color-contrast);

        background-color: #36E0BA;
      }

    }

  }
  
  ul {
    list-style: none;
    font-family: 'Satoshi';
    font-size: 12px;
  }

  ul.web3-list {
    
    li {

      a {
        text-decoration: underline;
        color: white;
      }

    }

  }
  
  p {
    margin-top: 1rem;
  }

  ul.services-list {
    text-transform: uppercase;
    max-width: 305px;
    margin-top: 1rem;
  }

  ul li::before {
    content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: white; /* Change the color */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -2.5em; /* Also needed for space (tweak if needed) */
  }


  @media(min-width: 1024px) {
    .blockchain-container {
      padding: 0;
      padding-top: 120px;

      h2 {
        font-size: 100px;
        line-height: 100px;
      }

      .content {
        display: flex;
        justify-content: center;
        align-items: center;

        .content-wrapper {

          .description {
            display: grid;
            margin-top: 4rem;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 80px;
            max-width: 964px;

            div:not(:first-child) {
              padding: 0;
            }

          }

        }

      }

    }

  } 
</style>