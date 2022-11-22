<script lang="ts">
	import Nav from '$/components/Nav.svelte';
	import '$/css/global.scss';
</script>

<main>
	<aside>
		<Nav />
	</aside>

  <section class="container">
    <slot />
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

	section {
		min-height: 100%;
		width: 100%;
	}

  @media(min-width: 1024px) {
		aside {
			position: absolute;
			width: 20vw;
			height: 100%;
			padding: 3rem 0;
		}
	}
</style>
