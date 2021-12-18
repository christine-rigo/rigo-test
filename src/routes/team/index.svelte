<script lang="ts" context="module">
	import Footer from '$/components/Footer.svelte';
	import Hr from '$/components/utils/Hr.svelte';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const req = await fetch('/api/team.json');
		const data = await req.json();

		return {
			status: 200,
			props: {
				team: data,
			},
		};
	};
</script>

<script lang="ts">
	export let team: { name: string; title: string }[];
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

<br /><br />

<section class="team">
	{#each team as { name, title }}
		<a href="/team/{name.replace(' ', '-')}" sveltekit:prefetch>
			<div class="member-card">
				<!-- <img src="https://placekitten.com/g/231/286" alt={name} /> -->

				<div class="member-info">
					<strong>{name}</strong> <br />
					<strong>{title}</strong>
				</div>
			</div>
		</a>
	{/each}
</section>

<br /><br /><br /> <br /><br />

<Footer href="/services">Services</Footer>

<style lang="scss">
	h1 {
		color: var(--color);

		padding-right: 7rem;

		.we-are {
			color: var(--color-contrast);

			-webkit-text-stroke: 1px var(--color);
		}
	}

	strong {
		color: var(--color);
	}

	.we-climb-together {
		padding: 2rem 10vw 15rem 8vw;
	}

	.team {
		display: grid;
		grid-template-columns: repeat(auto-fill, 231px);
		gap: 1.5rem;
	}

	.member-card {
		height: 286px;
		width: 231px;

		background-color: #c4c4c4;

		position: relative;

		strong {
			text-transform: capitalize;
			font-family: 'Bebas Neue', sans-serif;
			font-weight: 400;
			font-size: 1.5625rem;
			line-height: 1;
		}

		.member-info {
			position: absolute;
			left: 0;
			bottom: 0;

			padding: 1rem;
		}
	}
</style>
