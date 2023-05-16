<script lang="ts">
	import InstagramSvg from './svg/InstagramSVG.svelte';
	import LinkedInSvg from './svg/LinkedInSVG.svelte';
	import Logo from './svg/Logo.svelte';
	import TheDotsSvg from './svg/TheDotsSVG.svelte';

	export let marginright = '0rem';
	export let marginleft = '0rem';
	export let href: string;

	export let hideUpNext = false;
</script>

<footer style="margin-left: {marginleft}; margin-right: {marginright};">
	<section class="top">
		<span class="up-next" style="opacity: {hideUpNext ? 0 : 1}"> UP NEXT: </span>

		<a {href} style="display: {hideUpNext ? 'none' : 'block'}">
			<slot />
		</a>
	</section>

	<section class="middle">
		<div class="s1">
			<Logo /> <span class="hidden-m">hello@rigo.agency</span>
		</div>

		<div class="s2">
			20-22 Wenlock Road, London, N1 7GU<br />Ascent Marketing Group Ltd, trading as rigo is a
			company registered in England and Wales with company number 13040428, VAT Registered:
			766352117.
		</div>

		<div class="s3">
			<a href="https://the-dots.com/pages/rigo-458527">
				<TheDotsSvg />
			</a>
			<a href="https://www.linkedin.com/company/rigo-agency">
				<LinkedInSvg />
			</a>
			<a href="https://www.instagram.com/rigo.agency">
				<InstagramSvg />
			</a>
		</div>

		<div class="s4 hidden-m">
			<a href="#sitemap">Site Map</a>
			<a href="/privacy">Privacy Policy</a>
			<a href="/nigerian-glyphs" sveltekit:prefetch>Nigerian Glyphs</a>
		</div>
	</section>

	<section class="bottom">Copyright &copy; Rigo 2023</section>
</footer>

<style lang="scss">
	footer {
		--internal-color: var(--color, white);
		display: flex;
		flex-direction: column;
		border: solid 1px var(--internal-color);
		&,
		* {
			color: var(--internal-color);
		}
	}

	.top {
		padding: 1rem 2rem;
		display: flex;
		flex: 1;
		flex-wrap: row;
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
			font-weight: bold;
			font-size: 2.5rem;
			&:hover {
				text-decoration: underline;
			}
			// font-family: ;
		}
	}

	.middle {
		display: flex;
		font-size: 0.8rem;
		flex-direction: row;
		font-size: 10px;
		border-bottom: solid 1px var(--internal-color);

		& > div {
			display: flex;
			justify-content: center;
			align-items: center;

			padding: 1rem;
		}

		.s1 {
			flex: 2;
			gap: 1rem;
			border-right: solid 1px var(--internal-color);
		}

		.s2 {
			flex: 2;
			border-right: solid 1px var(--internal-color);
		}

		.s3 {
			flex: 2;
			gap: 1.5rem;
			border-right: solid 1px var(--internal-color);
			:global(svg) {
				width: 2.5rem;
				height: 2.5rem;
			}
		}

		.s4 {
			flex: 1;
			flex-direction: column;
			gap: 0.5rem;

			a {
				line-height: 1.1;
				text-align: center;
			}
		}
	}

	.bottom {
		display: flex;
		justify-content: center;
		padding: 12px 2rem;
		font-size: 10px;
	}

	@media (max-width: 1023px) {
		footer {
			margin-right: 0rem;
		}
		.middle {
			flex-direction: column;
			justify-content: center;
			flex-wrap: wrap;

			.s1,
			.s2,
			.s3 {
				border-right: none;
				border-bottom: solid 1px var(--internal-color);
			}
			.s2 {
				text-align: center;
			}

			.s3 {
				:global(svg) {
					width: 1.75rem;
					height: 1.75rem;
				}
			}
			.s3 {
				border-bottom: none;
			}
		}
		.hidden-m {
			display: none !important;
		}
	}

	@media (max-width: 425px) {
		footer {
			margin-right: 0 !important;
		}
	}

	@media (min-width: 1024px) {
		.middle,
		.bottom {
			font-size: 14px;
		}
	}
</style>
