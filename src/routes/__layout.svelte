<script lang="ts">
	import Nav from '$/components/Nav.svelte';
	import '$/css/global.scss';
</script>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		min-height: 100%;
		width: 100%;
	}
</style>
