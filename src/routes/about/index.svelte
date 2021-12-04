<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const req = await fetch('/api/test.json');
		const data = await req.json();

		console.log(data);

		return {
			status: 200
		};
	};
</script>

Hello
