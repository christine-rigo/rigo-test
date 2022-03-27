<script lang="ts">
    export let headerColor = 'var(--app-color-red)';
    export let carouselList = [];

    import { onMount } from 'svelte';
    onMount(() => {
        let slideIndex = 0;

        showSlides();
        function showSlides() {
            let i;
            let slides = Array.from(document.getElementsByClassName("carousel-container") as HTMLCollectionOf<HTMLElement>);
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000); // Change image every 2 seconds
        }
    });
</script>

<div class="container fade">
    {#each carouselList as carousel}
    <div class="carousel-container">
        <div class="carousel-slider" style="background: url({carousel.img}) no-repeat top center/cover"></div>
        <div class="carousel-heading">
            <div class="carousel-heading-left" style="color: {headerColor}">{carousel.index}</div>
            <div class="carousel-heading-right">{carousel.text}</div>
        </div>
    </div>
    {/each}
    <!-- <div class="carousel-container">
        <div class="carousel-slider" style="background: url({carouselImage}) no-repeat top center/cover"></div>
        <div class="carousel-heading">
            <div class="carousel-heading-left" style="color: {headerColor}">01</div>
            <div class="carousel-heading-right"><slot /></div>
        </div>
    </div>
    <div class="carousel-container">
        <div class="carousel-slider" style="background: url('https://via.placeholder.com/728x90.png/FF0000/?text=Image 2') no-repeat top center/cover"></div>
        <div class="carousel-heading">
            <div class="carousel-heading-left" style="color: {headerColor}">02</div>
            <div class="carousel-heading-right"><slot /></div>
        </div>
    </div>
    <div class="carousel-container">
        <div class="carousel-slider" style="background: url('https://via.placeholder.com/728x90.png/FFF/?text=Image 3') no-repeat top center/cover"></div>
        <div class="carousel-heading">
            <div class="carousel-heading-left" style="color: {headerColor}">03</div>
            <div class="carousel-heading-right"><slot /></div>
        </div>
    </div> -->
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: row;
        padding: 0vw 15vw;
        width: 100vw;
    }
    .carousel-container {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .carousel-slider {
        width: 100%;
        height: 423px;
    }
    .carousel-heading {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: normal;
        
        padding: 1.25vw 2vw;
        color: var(--app-color-navy-contrast);
        background-color: var(--app-color-red-contrast);

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2vw;
    }

    .carousel-heading-left {
        font-family: "Bebas Neue";
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 30px;
    }

    .carousel-heading-right {
        max-width: 575px;;
    }

    @media(max-width: 768px) {

    }
    @media(max-width: 425px) {
        .carousel-heading {
            padding: 4vw 1vw;
            font-size: 12px;
            line-height: 140%;
            text-align: center;
        }
        .carousel-slider {
            height: 300px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        .carousel-heading-left {
            display: none;
        }
        .carousel-heading-right {
            color: var(--app-color-red);
        }
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