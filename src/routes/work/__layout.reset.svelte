<script lang="ts">
	import Nav from '$/components/Nav.svelte';
	import '$/css/global.scss';
</script>

<main>
	<aside>
		<Nav />
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
	}

	aside {
		position: static;
		top: 0;
		left: 0;
		z-index: 9999;

		display: flex;
		justify-content: center;

		padding: 2rem 0;

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
		// padding: 0rem 2rem 2rem 2rem;
	}

	@media(min-width: 1024px) {
		aside {
			position: absolute;
			width: 20vw;
			height: 100%;
			padding: 3rem 0;
		}
		.container {
			padding: 2rem 0 2rem 20vw;
		}
	}
</style>
