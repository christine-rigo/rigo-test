<script lang="ts">
	import Nav from '$/components/Nav.svelte';
	import '$/css/global.scss';
</script>

<main>
	<aside>
		<Nav logoScale={1}/>
	</aside>

	<section>
		<section class="container">
			<slot />
		</section>
	</section>
</main>

<style lang="scss">
	main {
		min-height: 100%;
		width: 100%;
		background-color: var(--app-color-lunarblue);
	}

	aside {
		position: static;
		top: 0;
		left: 0;
		z-index: 9999;

		display: flex;
		justify-content: center;

		padding: 6% 5%;

		height: unset;
		width: unset;
	}

	main > section {
		min-height: 100%;
		width: 100%;
	}

	.container {
		width: 100%;
		height: 100%;
		min-height: 100%;
		background-color: var(--app-color-lunarblue);
		// padding: 0rem 2rem 2rem 2rem;
	}

	@media(min-width: 1024px) {
		aside {
			position: absolute;
		}
		.container {
			padding: 5% 15vw;
		}
	}
</style>
