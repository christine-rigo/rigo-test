<script lang="ts">
	import Nav from "../Nav.svelte";
	import Button from '$/components/casestudy/Button.svelte';
	import { onMount, onDestroy , createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let title = '';
	export let description = '';
	export let backgroundColor = '';
	export let color = '';
	export let btnColor = '';
	export let borderColor = 'var(--app-color-lunarblue)';
	export let subheadingColor = 'var(--app-color-navy)';
	export let headingRef;

	function handleResize() {
		// get the elements
		var element1 = document.getElementById('heading');
		var element2 = document.getElementById('subheading');

		// get their positions
		var rect1 = element1.getBoundingClientRect();
		var rect2 = element2.getBoundingClientRect();

		// calculate the gap
		var gap = rect2.top - (rect1.top + rect1.height);
		dispatch('message', gap);
	}

	onMount(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
	});
	
	
</script>

<div class="container" style="background-color: {backgroundColor}; color: {color}">
	<aside>
		<Nav logoScale={1} navigationBarColor={'white'} navItemsStyle="align-items: flex-start;" />
	</aside>
	<div class="main">
		<div id="heading" class="heading" bind:this={headingRef}>
			{title}     
		</div>
		<div id="subheading" class="subheading" style="color:{subheadingColor}">
			{@html description}
		</div>
		<div>
			<Button btnColor="{btnColor}" borderColor="{borderColor}" />
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		background-size: cover;
		background-color: var(--app-color-navy);
		color: var(--app-color-lunarblue);
		position: relative;
		width: 100vw;
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

	.main {
		padding: 6% 15vw 35vh 15vw;
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	@media(max-width: 768px) {
		aside {
			position: relative;
		}

		.container {height: auto;}
		.main {
			padding: 6% 15vw 15vh 15vw;
		}
	}

	.categories {
		display: flex;
		flex-direction: column;
		font-family: 'Satoshi';
		font-style: normal;
		font-weight: normal;
        font-size: 12px;
        line-height: 16px;
		text-transform: uppercase;
        gap: 0.25vw;
		color: var(--app-color-lunarblue-contrast);
	}
    .heading {
        font-family: "Bebas Neue", "Satoshi";
		font-style: normal;
		font-weight: 700;
		font-size: 130px;
		line-height: 80%;
    }
	.subheading {
		font-family: 'Satoshi';
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
        line-height: 140%;
		color: var(--app-color-navy);
	}

	.adtagscontainer {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;

		.adtags {
			display: flex;
			flex-direction: column;
			gap: 1vw;
			width: 128px;
			align-items: center;

			.adtaginfo {
				font-family: 'Satoshi';
				font-style: normal;
				font-weight: normal;
				font-size: 12px;
				line-height: 140%;
				color: var(--app-color-lunarblue);
			}
		}
	}
    .hidden-desktop {
        display: none;
    }

    @media(max-width: 425px) {
		.main {
			align-items: center;
			padding: 6% 15vw 15vh 15vw;
		}
		.hidden-mobile {
			display: none;
		}
        .container {
            // padding: 4rem 2rem 4rem 2rem;
            gap: 6vw;
        }
        .categories {
            font-size: 12px;
		    line-height: 16px;
            gap: 1vw;
        }
		.heading {
			font-size: 80px;
			line-height: 80%;
		}
        .subheading {
            font-size: 20px;
		    line-height: 110%;
			margin-bottom: 6vw;
        }
        .hidden-desktop {
            display: block;
        }

		.adtags {
			margin-top: 6vw;
			margin-bottom: 6vw;
		}
    }

		@media (min-width: 1441px) {
			.container {
				height: auto;
			}
		}
</style>
