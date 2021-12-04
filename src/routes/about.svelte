<script>
	import { navColor } from '$/stores/nav.store';
	import { onMount } from 'svelte';
	import { Body } from 'svelte-body';

	onMount(() => {
		$navColor = 'var(--app-color-blue)';
	});
</script>

<svelte:head>
	<title>About / Rigo Agency</title>
</svelte:head>

<Body style="background-color: var(--app-color-navy-contrast)" />
