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

        const rigoPopup = document.querySelector('#rigo-mode');
        rigoPopup.addEventListener('click', function(e) {
            document.querySelector('.rigoprelaunch').remove();
            const homeContainer = document.querySelector('.home-container');
            homeContainer.classList.remove('hidden');
            document.querySelector('.homepage').classList.remove('stop-scrolling');
        })
	});
</script>

<svelte:head>
	<title>Rigo Agency</title>
</svelte:head>

<svelte:body use:style={{ background: 'var(--app-color-navy)' }} />

<div class="homepage stop-scrolling" style="position: relative;">
    <div class="rigoprelaunch">
        <div class="prelaunch-logo"><a href="/"><Logo scale={2} /></a></div>
        <div class="prelaunch-title">
            <div class="prelaunch-heading">Your climb is ours.<br>We're here to help your business reach its potential.</div>
            <div class="prelaunch-subheading"><strong style="color: var(--app-color-lunarblue)">/ˈrɛdʒəʊ/ rigo  –  to ascend</strong>. rigo means to ascend in Igbo; co-founder Stephen’s family language.</div>
        </div>
        <div class="prelaunch-btn" id="rigo-mode"><ButtonRigoPopup btnColor="btn-lunarblue" cta="Discover More"></ButtonRigoPopup></div>
    </div>

    <div class="home-container hidden">
        <aside>
            <Nav logoScale={1} navigationBarColor="var(--app-color-navy-contrast)" navItemsStyle="align-items: flex-start;" />
        </aside>
        <HomeGrid></HomeGrid>
    </div>

	<div style="display: flex; padding: 15vw 5vw 15vw 5vw; background-color: var(--app-color-navy); justify-content: space-evenly;">
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

    .rigoprelaunch {
        position: absolute;
        height: 100vh;
        width: 100vw;
        background-color: var(--app-color-lunarblue-contrast);
        z-index: 99999;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4vw;

        div {
            color: var(--app-color-lunarblue);
        }
    }

    .prelaunch-logo {
        a {
            --color: var(--app-color-lunarblue);
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
        display: none;
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
