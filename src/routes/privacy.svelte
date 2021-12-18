<script lang="ts">
	import Footer from '$/components/Footer.svelte';
	import { navColor } from '$/stores/nav.store';
	import { onMount } from 'svelte';

	onMount(() => {
		$navColor = 'var(--app-color-green)';
	});
</script>

<svelte:head>
	<title>Privacy Policy / Rigo Agency</title>
</svelte:head>

<h1>Privacy Policy</h1>

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

<div style="display: contents;">
	<Footer href="#volta">Volta</Footer>
</div>

<style lang="scss">
	* {
		--color: var(--app-color-green);
		--color-contrast: var(--app-color-green-contrast);

		color: var(--color);
	}

	:global(::selection) {
		background: var(--color);
		color: var(--color-contrast);
	}
</style>
