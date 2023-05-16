<script lang="ts">
	export let discoverMoreHref: string;
</script>

<div class="inner">
	<div class="backdrop" />
	<div class="content">
		<div class="actual-content">
			<div class="top-panel">
				<h2>+ <slot name="title" /></h2>
				<hr />
				<a href={discoverMoreHref}><button>Discover More</button></a>
			</div>

			<div class="bottom-panel">
				<slot name="info-boxes" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	* {
		color: var(--app-color-navy);
	}

	h2 {
		font-size: 3.125rem;
	}

	.content {
		display: grid;
		place-items: center;

		* {
			text-transform: uppercase;
		}
	}

	.actual-content {
		width: 100%;

		& > div {
			width: 100%;

			margin: 2rem 0;
		}
	}

	.top-panel {
		display: flex;
		align-items: center;
		gap: 1.5rem;

		padding-right: 9rem;

		width: 100%;

		h2 {
			color: white;
		}
		hr {
			flex: 1 1 auto;
			display: block;

			background-color: var(--app-color-navy);

			height: 1.1px;

			border: 0;
		}

		button {
			font-family: 'Bebas Neue', sans-serif;

			box-shadow: 0 0 0 1px var(--app-color-navy);

			border-radius: 2rem;

			padding: 1.2rem 2.5rem 1rem 2.5rem;

			font-size: 1.25rem;
			line-height: 1;
			color: white;
			transition: background-color 150ms ease-in;

			&:hover {
				background-color: rgba(0, 0, 0, 0.2);
			}
		}
	}

	.bottom-panel {
		display: grid;
		grid-template-columns: repeat(auto-fit, 11rem);
		gap: 3.2rem;
	}

	@media (min-width: 1024px) {
		.top-panel {
			padding: 0;
		}
	}
</style>
