<script>
	import { navColor } from '$/stores/nav.store';
	import Footer from '$/components/Footer.svelte';
	import { style } from 'svelte-body';
	import { onMount } from 'svelte';
    import Nav from "$/components/Nav.svelte";

	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>

<svelte:head>
	<title>Rigo Agency</title>
</svelte:head>

<svelte:body use:style={{ background: 'var(--app-color-navy)' }} />

<div class="homepage">
    <div class="home-container">
        <aside>
            <Nav logoScale={1} navigationBarColor="var(--app-color-navy-contrast)" navItemsStyle="align-items: flex-start;" />
        </aside>
        <div class="homegridcontainer">
            <div class="homegrid" style="background: url('/home/grid-1.png') no-repeat top center/cover;"></div>
            <div class="homegrid" style="background: url('/home/grid-2.svg') no-repeat top center/cover;"></div>
            <div class="homegrid" style="background: url('/home/grid-3.svg') no-repeat top center/cover;"></div>
            
            <div class="homegrid" style="background: url('/home/grid-4.svg') no-repeat top center/cover;"></div>
            <div class="homegrid" style="background: url('/home/grid-5.svg') no-repeat top center/cover;"></div>
            <div class="homegrid" style="background: url('/home/grid-6.png') no-repeat top center/cover;"></div>

            <div class="homegrid" style="background: url('/home/grid-7.svg') no-repeat top center/cover;"></div>
            <div class="homegrid" style="background: url('/home/grid-8.svg') no-repeat top center/cover;"></div>
            <div class="homegrid" style="background: url('/home/grid-9.svg') no-repeat top center/cover;"></div>

            <div class="homegrid" style="background: url('/home/grid-10.png') no-repeat top center/cover;"></div>
            <div class="homegrid" style="background: url('/home/grid-11.svg') no-repeat top center/cover;"></div>
            <div class="homegrid" style="background: url('/home/grid-12.svg') no-repeat top center/cover;"></div>

            <div class="homegrid" style="background: url('/home/grid-13.svg') no-repeat top center/cover;"></div>
            <div class="homegrid" style="background: url('/home/grid-14.png') no-repeat top center/cover;"></div>
            <div class="homegrid" style="background: url('/home/grid-15.svg') no-repeat top center/cover;"></div>
        </div>
    </div>

	<div style="display: flex; padding: 15vw 5vw 15vw 5vw; background-color: var(--app-color-navy); justify-content: space-evenly;">
		<Footer marginleft={'2vw'} marginright={'2vw'} href="/services">Services</Footer>
	</div>
</div>

<style lang="scss">
	* {
		--color: var(--app-color-navy-contrast);
		--color-contrast: var(--app-color-navy-contrast);

		color: var(--color);
	}

	:global(::selection) {
		background: var(--color);
		color: var(--color-contrast);
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

    .homegridcontainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-items: center;

        .homegrid {
            flex: 1 1 30%;
            width: 100%;
            height: 38vw;
            text-align: center;
        }
    }
</style>
