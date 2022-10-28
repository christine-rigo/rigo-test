<script>
	import { navColor } from '$/stores/nav.store';
	import Footer from '$/components/Footer.svelte';
    import Logo from '$/components/svg/Logo.svelte';
	import { style } from 'svelte-body';
	import { onMount } from 'svelte';
    import Nav from "$/components/Nav.svelte";
    import ButtonRigoPopup from "$/components/ButtonRigoPopup.svelte";
import HomeGrid from '$/components/home/HomeGrid.svelte';

	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';

        document.querySelector('.rigoprelaunch').classList.remove('animate');

        const rigoPopup = document.querySelector('#rigo-mode');
        rigoPopup.addEventListener('click', function(e) {
            document.querySelector('.rigoprelaunch').classList.add('animate');
            document.querySelector('.home-container').classList.remove('hidden');
            document.querySelector('.home-footer').classList.remove('hidden');
            document.querySelector('.homepage').classList.remove('stop-scrolling');
        })
	});
</script>

<svelte:head>
	<title>Rigo Agency</title>
</svelte:head>

<svelte:body use:style={{ background: 'var(--app-color-navy)' }} />

<div class="homepage " style="position: relative;">
    <div class="rigoprelaunch animate">
        <div class="prelaunch-logo" style="width:97%; max-width:450px;margin-bottom:-1.5vw;background:url(/static/home/bats.png) center top / contain no-repeat;text-align:center; margin-bottom:-4vw;"><a style="display:flex; justify-content:center; align-items:center; width: 35vw; max-width:150px; margin:1rem auto 2rem;" href="/"><Logo scale={2} /></a></div>
        <div class="prelaunch-title">
            <div class="prelaunch-heading">Your climb is ours.<br>We're here to help your business reach its potential.</div>
            <div class="prelaunch-subheading"><strong style="color: #FFF">/ˈrɛdʒəʊ/ rigo  –  to ascend</strong>. rigo means to <i style="">ascend</i> in Igbo; co-founder Stephen’s family language.</div>
        </div>
        <div style="position:relative;">
            <div class="prelaunch-btn" id="rigo-mode" style="background:white;border-radius:50px;">
                <ButtonRigoPopup btnColor="btn-white" cta="Discover More"></ButtonRigoPopup>
            </div>
            <img style="position:absolute; right:0; transform:translateX(130%) translateY(-70%); width:clamp(4rem,18vw,100px);" src="/static/home/pumpkin.png" alt="" srcset="">
        </div>
    </div>

    <div class="home-container hidden">
        <aside>
            <Nav logoScale={1} navigationBarColor="var(--app-color-navy-contrast)" navItemsStyle="align-items: flex-start;" />
        </aside>
        <HomeGrid></HomeGrid>
    </div>

	<div class="home-footer hidden" style="display: flex; padding: 15vw 5vw 15vw 5vw; background-color: var(--app-color-navy); justify-content: space-evenly;">
		<Footer marginleft={'2vw'} marginright={'2vw'} href="/services">Services</Footer>
	</div>
</div>

<style lang="scss">
	* {
		--color: var(--app-color-lunarblue-contrast);
		--color-contrast: var(--app-color-navy-contrast);

		color: var(--color);
	}

	:global(::selection) {
		background-color: var(--color);
		color: var(--color-contrast);
	}

    .animate {
        transform: translateY(-200vh);
    }

    .rigoprelaunch {
        transition: all 1.25s ease-in;

        position: absolute;
        min-height: 100vh;
        width: 100vw;
        // background-color: var(--app-color-lunarblue-contrast);
        background-color: #504DE6;
        z-index: 99999;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4vw;

        padding-bottom: 4rem;

        div {
            // color: var(--app-color-lunarblue);
            color: #FFF;
        }
    }

    .prelaunch-logo {
        padding-top: clamp(7rem, 5.5vw, 160px);
        padding-bottom: clamp(2rem, 3vw, 6rem);

        @media screen and (max-width: 768px) {
            padding-top: clamp(5rem, 5.5vw, 160px);
            padding-bottom: clamp(2rem, 3vw, 6rem);
        }

        a {
            // --color: var(--app-color-lunarblue);
            --color: #FFF;
        }
    }

    .prelaunch-title {
        text-align: center;
        padding: 0vw 28vw;

        .prelaunch-heading {
            font-family: 'Bebas Neue';
            font-style: normal;
            font-weight: 400;
            font-size: 50px;
            line-height: 90%;
        }

        .prelaunch-subheading {
            margin-top: 1vw; font-family: 'Satoshi';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 140%;
        }
    }
    @media(max-width: 425px) {
        .prelaunch-title {
            padding: 0vw 10vw;
        }
    }

    .hidden {
        display: none !important;
    }

    .stop-scrolling {
        height: 100%;
        overflow: hidden;
    }

    .home-container {
        background-size: cover;
		background-color: var(--app-color-navy);
		color: var(--app-color-red);
		min-height: 60vh;

		position: relative;
    }

	aside {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9999;

		display: flex;
		justify-content: center;

		padding: 6% 5% 6% 5%;
	}

	@media(max-width: 768px) {
		aside {
			position: relative;
		}
	}
</style>
