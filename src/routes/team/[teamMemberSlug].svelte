<script context="module" lang="ts">
	import Footer from '$/components/Footer.svelte';
	import Hr from '$/components/utils/Hr.svelte';
	import type { Member, PEOPLE } from '$/data/team';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, params: { teamMemberSlug } }) => {
		const req = await fetch(`/api/team/${teamMemberSlug}.json`);

		if (req.status === 404) {
			return {
				status: 404,
				error: 'Not found',
			};
		}

		if (!req.ok) {
			return {
				status: 500,
				error: 'Something went wrong',
			};
		}

		const data = await req.json();

		return {
			status: 200,
			props: {
				teamMember: data,
			},
		};
	};

	function capitalize(str: string) {
		return str.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
	}
</script>

<script lang="ts">
	export let teamMember: Member & { next: keyof typeof PEOPLE | 'our services' };

	$: ({ name, title, description, hobbies, achievements, next } = teamMember);
</script>

<svelte:head>
	<title>{capitalize(name)} / Team / Rigo Agency</title>
</svelte:head>

<h1>
	<span class="we-are"> We Are: </span>
	rigo
</h1>

<section class="main-content">
	<div class="content">
		<Hr />

		<br />

		<p>{@html description}</p>

		<br />
		<br />

		{#if hobbies}
			<p>
				<b class="quality">HOBBIES: </b>
				{@html hobbies}
			</p>

			<br /><br />
		{/if}

		{#if achievements}
			<p>
				<b class="quality"> ACHIEVEMENTS: </b>
				{@html achievements}
			</p>

			<br /><br />
		{/if}

		<p class="contact-details">
			<strong>{name}</strong> <br />
			<strong>{title}</strong>
		</p>
	</div>

	<div class="images">
		<img
			src="https://placekitten.com/g/340/497"
			alt="3 people working in a workspace"
			style="transform: translateY(-130px);"
		/>

		<img
			src="https://placekitten.com/g/340/154"
			alt="stairs"
			style="transform: translate(0, -50px);"
		/>
	</div>
</section>

<Footer
	href="/{next === 'our services' ? 'services' : 'team/' + next.toLowerCase().replace(' ', '-')}"
>
	{#if next === 'our services'}
		Our Services
	{:else}
		Meet {capitalize(next)}
	{/if}
</Footer>

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

	h1 {
        font-size: calc(2.375rem + 1.5vw);
    }
    @media (min-width: 1200px) {
        h1 {
            font-size: 5.5rem;
        }
    }

	.quality {
		font-family: 'Bebas Neue', sans-serif;
		font-weight: 400;
		font-size: 1.25rem;
	}

	.main-content {
		width: 100%;

		padding: 2rem 10vw 15rem 8vw;

		display: grid;
		grid-template-columns: 1fr 1fr;

		.images {
			display: grid;
			place-items: end;
		}
	}

	.contact-details * {
		font-family: 'Bebas Neue', sans-serif;
		font-weight: 400;
		font-size: 2rem;
		text-transform: uppercase;
		line-height: 1;
	}

	@media(max-width: 1023px) {
		h1 {
			padding-right: 0;
		}
	}
</style>
