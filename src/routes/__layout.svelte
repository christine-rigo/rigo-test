<script lang="ts">
	import Nav from '$/components/Nav.svelte';
	import '../css/global.scss';
</script>

<main>
	<aside>
		<Nav />
	</aside>

	<section>
		<slot />
	</section>
</main>

<style lang="scss">
	main {
		height: 100%;
		width: 100%;
	}

	aside {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;

		height: 100%;
		width: 20vw;
	}
</style>
