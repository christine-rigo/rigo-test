<script>
	import { navColor } from '$/stores/nav.store';
	import { onMount } from 'svelte';
	import { style } from 'svelte-body';

	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>

<svelte:body use:style={{ background: 'var(--app-color-lunarblue-contrast)' }} />

<section class="container">
	<slot />
</section>

<style lang="scss">
	* {
		--color: var(--app-color-lunarblue);
		--color-contrast: var(--app-color-lunarblue-contrast);

		color: var(--color);
	}

	:global(::selection) {
		background: var(--color);
		color: var(--color-contrast);
	}

	.container {
		width: 100%;
		height: 100%;
		min-height: 100%;

		padding: 2rem 0 2rem 20vw;
	}
</style>
