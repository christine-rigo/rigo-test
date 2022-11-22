<script lang="ts">
  export let heading = 'DEFAULT_HEADING';
  export let imgUrl = 'DEFAULT_HEADING';
</script>

<div class="cardcontainer">
  <div>
      <div class="cardtitle">experts in <span>{heading}</span></div>
      <div class="carddescription">
          <slot/>
      </div>
  </div>
  
  <div style="">
      <img alt="rigo" style="width: 100%; max-width: 732px; height: auto;" src={imgUrl} />
  </div>
</div>
<style lang="scss">
  .cardcontainer {
    display: flex; 
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    gap: 3vw;

    div:first-child {
      flex: 1;
      text-align: left;
    }

    div:nth-child(2) {
      flex: 3;
    }
  }

  .cardtitle {
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    text-transform: uppercase;
    transform: translateY(-15px);
    text-transform: uppercase;
    span {
      color: var(--app-color-yellow);
    }
  }

  .carddescription {
    font-family: 'Satoshi';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    transform: translateY(-15px);
  }

  @media(max-width: 768px) {
    .cardcontainer {
      flex-direction: column;
      gap: 12vw;
      div:first-child {
        text-align: center;
      }
    }
   
  }

  @media(max-width: 425px) {
    .cardcontainer {
      flex-direction: column;
      gap: 12vw;
    }
    .cardtitle {
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 3vw;
      text-align: center;
    }
    
    .carddescription {
      line-height: 140%;
      text-align: center;
    }
  }
</style>
