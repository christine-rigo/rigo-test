<script>
	import { navColor } from '$/stores/nav.store';
	import { onMount } from 'svelte';
	import { style } from 'svelte-body';

	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>

<svelte:head>
	<title>About / Rigo Agency</title>
</svelte:head>

<svelte:body use:style={{ background: 'var(--app-color-lunarblue-contrast)' }} />

<section class="container">
	<h1>
		<span class="we-are"> We Are: </span>
		copywriters, designers, developers, strategists
	</h1>
</section>

<style lang="scss">
	:global(::selection) {
		background: var(--app-color-lunarblue);
		color: var(--app-color-lunarblue-contrast);
	}

	h1 {
		color: var(--app-color-lunarblue);
		line-height: 1.2;
	}

	h1 {
		font-size: 6.25rem;

		.we-are {
			color: var(--app-color-lunarblue-contrast);

			-webkit-text-stroke: 1px var(--app-color-lunarblue);
		}
	}

	.container {
		width: 100%;
		height: 100%;
		min-height: 100%;

		padding: 2rem 0 2rem 20vw;
	}
</style>
