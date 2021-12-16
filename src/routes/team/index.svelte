<script lang="ts" context="module">
	import Hr from '$/components/utils/Hr.svelte';
	import type { Load } from '@sveltejs/kit';
	import type { Team } from '../api/team.json';

	export const load: Load = async ({ fetch }) => {
		const req = await fetch('/api/team.json');
		const data = await req.json();

		return {
			status: 200,
			props: {
				team: data
			}
		};
	};
</script>

<script lang="ts">
	export let team: Team;

	$: console.log(team);
</script>

<svelte:head>
	<title>Team / Rigo Agency</title>
</svelte:head>

<h1>
	<span class="we-are"> We Are: </span>
	musicians, dog mums, actors, adventurers...
</h1>

<section class="we-climb-together">
	<Hr />

	<br />

	Reaching any summit requires teamwork; <br />
	<strong>We climb together.</strong>
</section>

<style lang="scss">
	h1 {
		font-size: 6.25rem;
		color: var(--color);
		line-height: 1.2;

		padding-right: 7rem;

		.we-are {
			color: var(--color-contrast);

			-webkit-text-stroke: 1px var(--color);
		}
	}

	.we-climb-together {
		padding: 2rem 10vw 15rem 8vw;
	}
</style>
