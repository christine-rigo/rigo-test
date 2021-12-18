<script>
	import { navColor } from '$/stores/nav.store';
	import { onMount } from 'svelte';
	import { style } from 'svelte-body';

	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>

<svelte:body use:style={{ background: 'var(--app-color-lunarblue-contrast)' }} />

<div style="display: contents;">
	<slot />
</div>

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
</style>
