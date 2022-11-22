<script lang="ts">
  export let carouselList = [];
  let slideIndex = 0;
  import Card from './Card.svelte';

</script>

<div class="carousel-container">
  <img class="left" style="width: 30px; height:30px;" src="/technology/arrowleft.png" alt="rigo">
  <div class="card-container fade">
    <Card
      heading={carouselList[slideIndex].experts}
      imgUrl={carouselList[slideIndex].img}
    >
    <br>
    <p>{carouselList[slideIndex].description}</p>
    <br>
    <ul>
      {#each carouselList[slideIndex].items as item}
        <li>{item}</li>
      {/each}
    </ul>
    </Card>
  </div>
  <img class="right" style="width: 30px; height:30px;" src="/technology/arrowright.png" alt="rigo">
</div>
<style lang="scss">
  .carousel-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  img {
    align-self: center;
    cursor: pointer;
  }

  p {
    max-width: 40ch;
  }

  @media(max-width: 768px) {
    p {
      max-width: 60ch;
    }
  }

  .card-container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin-top: 10rem;
    min-height: 600px;
    padding-left: 6rem;
  }

  ul {
    list-style: none; /* Remove default bullets */
  }

  ul li::before {
    content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: white; /* Change the color */
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }

  /* Fading animation */
  .fade {
      animation-name: fade;
      animation-duration: 1.5s;
  }
  @keyframes fade {
      from {
          opacity: .4
      }
      to {
          opacity: 1
      }
  }
</style>