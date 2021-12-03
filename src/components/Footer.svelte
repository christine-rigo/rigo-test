<script lang="ts">
	import InstagramSvg from './svg/InstagramSVG.svelte';
	import LinkedInSvg from './svg/LinkedInSVG.svelte';
	import Logo from './svg/Logo.svelte';
	import TheDotsSvg from './svg/TheDotsSVG.svelte';

	export let href: string;
</script>

<footer>
	<section class="top">
		<span class="up-next"> UP NEXT: </span>

		<a {href}>
			<slot />
		</a>
	</section>

	<section class="middle">
		<div class="s1">
			<Logo /> hello@rigo.agency
		</div>

		<div class="s2">
			20-22 Wenlock Road, London, N1 7GU Ascent Marketing Group Ltd, trading as rigo is a company
			registered in England and Wales with company number 13040428, VAT Registered: 766352117.
		</div>

		<div class="s3">
			<TheDotsSvg />
			<LinkedInSvg />
			<InstagramSvg />
		</div>

		<div class="s4">
			<a href="#sitemap">Site Map</a>
			<a href="#privacy">Privacy Policy</a>
		</div>
	</section>

	<section class="bottom">Copyright &copy; Rigo 2021</section>
</footer>

<style lang="scss">
	footer {
		--internal-color: var(--color, white);

		display: grid;
		grid-template-rows: 1fr 1fr 0.5fr;

		margin-right: 9rem;

		border: solid 1px var(--internal-color);

		&,
		* {
			color: var(--internal-color);
		}
	}

	.top {
		padding: 1rem 2rem;

		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1rem;

		border-bottom: solid 1px var(--internal-color);

		.up-next {
			font-family: 'Bebas Neue', sans-serif;
			font-size: 1.25rem;

			padding-top: 0.8rem;

			height: 100%;
			width: max-content;

			display: inline-block;
		}

		a {
			font-weight: 500;
			font-size: 2.5rem;
			// font-family: ;
		}
	}

	.middle {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 0.4fr;

		font-size: 0.8rem;

		border-bottom: solid 1px var(--internal-color);

		& > div {
			display: flex;
			justify-content: center;
			align-items: center;

			padding: 1rem;
		}

		.s1 {
			border-right: solid 1px var(--internal-color);

			gap: 1rem;
		}

		.s2 {
			border-right: solid 1px var(--internal-color);
		}

		.s3 {
			border-right: solid 1px var(--internal-color);

			gap: 1.5rem;

			:global(svg) {
				width: 1.5rem;
				height: 1.5rem;
			}
		}

		.s4 {
			flex-direction: column;
		}
	}

	.bottom {
		display: grid;
		place-items: center;
	}
</style>
