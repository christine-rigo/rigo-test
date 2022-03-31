<script>
	import { navColor } from '$/stores/nav.store';
	import Footer from '$/components/Footer.svelte';
	import { style } from 'svelte-body';
	import { onMount } from 'svelte';
	import Carousel from '$/components/casestudy/Carousel.svelte';
	import Button from '$/components/Button.svelte';
	import TriadCard from '$/components/casestudy/TriadCard.svelte';
	import AscensionCard from '$/components/casestudy/AscensionCard.svelte';
	import ExtremeCard from '$/components/casestudy/ExtremeCard.svelte';
	import CaseStudy from '$/components/casestudy/CaseStudy.svelte';
	import ChallengeCard from '$/components/casestudy/ChallengeCard.svelte';
    import DropUsALine from '$/components/DropUsALine.svelte';
import Logo from '$/components/svg/Logo.svelte';

	const carouselList = [
		{ 'index': '01', 'img': '/casestudy/gallagher-carousel-1.png', 'text': 'To ensure comparable data sets rigo only analysed articles with 2%+ website traffic, this helped us identify the articles driving the conversation in the sector'},
        { 'index': '02', 'img': '/casestudy/gallagher-carousel-2.png', 'text': 'When producing new articles, rigo addressed Gallagher’s value proposition, capabilities and thought leader status to create content with a purpose'},
	]

	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>

<svelte:head>
	<title>NFTCON Miami / Rigo Agency</title>
</svelte:head>

<svelte:body use:style={{ background: 'var(--app-color-lunarblue-contrast)' }} />

<div class="">
    <section class="navigation-container">
        <div><a href="/services">Services</a></div>
        <div><a href="/work">Work</a></div>
        <div><a href="/contact">Contact</a></div>
    </section>

    <section class="main-container">
        <div class="main-container-1">
            <a href="/"><Logo scale={2} /></a>
        </div>
        <div class="main-container-2">
            <div class="main-container-2-subheading-1">Websites & marketing for the blockhain space</div>
            <div class="main-container-2-subheading-2">From NFTs to tokens & breakthrough projects, from concept to mint day - meet your new marketing partner.</div>
        </div>
        <div class="main-container-3">
            <Button borderColor="white" btnColor="btn-white" cta="Contact Us"></Button>
        </div>
    </section>

    <section class="services-container">

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

    <section class="contact-container">
        <DropUsALine></DropUsALine>
    </section>

    <section class="footer-container">
        <Footer marginright="0rem" href="/">Rigo Agency</Footer>
    </section>
</div>

<style lang="scss">
	* {
		--color: white;
		--color-contrast: var(--app-color-lunarblue);

		color: var(--color);
	}

	:global(::selection) {
		background: var(--color);
		color: var(--color-contrast);
	}

    .navigation-container {
        padding: 2.5vw 0vw;
        margin: auto;
        position: absolute;
        left: 0;
        right: 0;
        margin-left: 0;
        margin-right: 0;
        width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 3vw;

        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #FAF5EE;
        cursor: pointer;
    }

    .main-container {
        background: var(--app-color-lunarblue) url("/nftcon/playupwards.svg") no-repeat top left;
        padding: 0vw 21vw;
        height: 70vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        gap: 4vw;

        .main-container-1 {
            display: flex;
            justify-content: center;
        }

        .main-container-2 {
            display: flex;
            flex-direction: column;
            justify-content: center;

            gap: 1vw;

            .main-container-2-subheading-1 {
                font-family: 'Satoshi';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;

                color: var(--app-color-green);
                letter-spacing: 0.15em;

                text-transform: uppercase;
            }

            .main-container-2-subheading-2 {
                font-family: 'Bebas Neue';
                font-style: normal;
                font-weight: 400;
                font-size: 40px;
                line-height: 36px;
                
                color: white;
                text-transform: uppercase;
            }
        }
    }
    @media(max-width: 425px) {
        .main-container {
            padding: 0vw 9vw;
        }
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

    .contact-container {
        padding: 4vw 8vw;
    }
    @media(max-width: 425px) {
        .contact-container {
            padding: 16vw 8vw;
        }
    }

    .footer-container {
        padding: 4vw 8vw;
        background-color: var(--app-color-lunarblue);
    }
    @media(max-width: 425px) {
        .footer-container {
            padding: 16vw 8vw;
        }
    }
</style>
