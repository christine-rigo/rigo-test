<script>
	import Footer from '../Footer.svelte';
</script>

<div class="inner">
	<div class="backdrop" />
	<div class="content">
		<div class="actual-content">
			<div class="categories">
				<div class="category-name-section" style="--color: var(--app-color-yellow)">
					<h2>+ technology</h2>
					<hr />
					<a href="/technology"><button>Discover More</button></a>
				</div>

				<div class="category-name-section" style="--color: var(--app-color-green)">
					<h2>+ data</h2>
					<hr />
					<a href="/data/gallagher"><button>Discover More</button></a>
				</div>

				<div class="category-name-section" style="--color: var(--app-color-red)">
					<h2>+ creative</h2>
					<hr />
					<a href="/creative/volta"><button>Discover More</button></a>
				</div>

				<div class="category-name-section" style="--color: var(--app-color-blue)">
					<h2>+ digital advertising</h2>
					<hr />
					<a href="/digital-advertising/volta-site-traffic"><button>Discover More</button></a>
				</div>
			</div>

			<span style="flex: 1 1 auto" />

			<Footer href="/work" --color="var(--app-color-navy-contrast)">Our Work</Footer>
		</div>
	</div>
</div>

<style lang="scss">
	h2 {
		font-size: 3.125rem;
	}

	.backdrop {
		display: flex;

		position: fixed;
		z-index: -1;
		top: 0;
		left: 0;

		background-color: var(--bgcolor);

		width: 100%;
		height: 100%;
	}

	.content {
		display: grid;
		place-items: center;
	}

	.actual-content {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;

		& > div {
			width: 100%;

			margin: 5rem 0;
		}
	}

	.categories {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		* {
			text-transform: uppercase;
		}
	}

	.category-name-section {
		--color: var(--app-color-navy);

		* {
			color: var(--color);
		}

		display: flex;
		align-items: center;
		gap: 1.5rem;

		width: 100%;

		hr {
			flex: 1 1 auto;
			display: block;

			background-color: var(--color);

			height: 1.1px;

			border: 0;
		}

		button {
			box-shadow: 0 0 0 1px var(--app-color-navy);
			border-radius: 2rem;

			padding: 1.2rem 2.5rem 1rem 2.5rem;

			background-color: var(--color);
			color: var(--app-color-navy);

			font-family: 'Bebas Neue', sans-serif;
			font-size: 1.25rem;
			line-height: 1;

			transition: background-color 150ms ease-in;

			&:hover,
			&:focus-visible {
				background-color: var(--app-color-navy-contrast);
			}
		}
	}

	@media (min-width: 1440px) {
		span {
			display: none;
		}
	}
</style>
