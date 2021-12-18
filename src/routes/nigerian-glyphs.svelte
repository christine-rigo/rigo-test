<script lang="ts">
	import { navColor } from '$/stores/nav.store';

	import { onMount } from 'svelte';

	onMount(() => {
		$navColor = 'var(--app-color-blue)';
	});
</script>
