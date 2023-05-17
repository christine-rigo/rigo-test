<script lang="ts">
	import DropUsALine from '$/components/DropUsALine.svelte';
	import Footer from '$/components/Footer.svelte';
	import { style } from 'svelte-body';
	import { navColor } from '$/stores/nav.store';
	import { onMount } from 'svelte';

	onMount(() => {
		$navColor = 'var(--app-color-lunarblue-contrast)';
	});
</script>

<!-- <svelte:body use:style={{ background: 'var(--app-color-lunarblue-contrast)' }} /> -->

<svelte:head>
	<title>Contact Us / Rigo Agency</title>
</svelte:head>

<div class="contact-section">
	<h1>Contact</h1>
	<DropUsALine />

	<div class="footer-container" style="display: contents;">
		<Footer href="/casestudy/volta">Volta</Footer>
	</div>
</div>

<style lang="scss">
	* {
		--color: white;

		color: var(--color);
	}

	h1 {
		color: #504de699;
		opacity: 0.5;
		mix-blend-mode: multiply;
		font-size: 27vw;
		position: absolute;
		z-index: 0;
		pointer-events: none;
	}

	input {
		border: none;
		background-color: var(--app-color-lunarblue-contrast);
		padding: 2vw;
	}

	:global(::selection) {
		background: var(--color);
		color: var(--color-contrast);
	}

	.container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin: 0;
	}
	.item {
		flex-grow: 1;
		width: 100%;
		margin-bottom: 2rem;
	}

	.contact-section {
		padding: 4rem 2rem 4rem 2rem;
	}

	@media (max-width: 425px) {
		div {
			padding: 0rem 2rem 2rem 2rem;
		}
	}

	@media (min-width: 1440px) {
		.item {
			width: 30%;
		}
	}
	.sub-item {
		display: flex;
		flex-direction: column;
		text-align: center;

		div {
			margin-top: 75px;
		}

		div img {
			width: 100%;
		}
	}
	.contact-form-info {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		justify-content: stretch;

		div {
			flex: 1;
		}
	}
	.contact-form-image {
		margin-top: 50px;
	}
	.contact-form-grid {
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: 1fr 3fr 1fr 1fr 3fr;
		border: solid 1px #504de6;
		height: 512px;

		@media (min-width: 1440px) {
			margin-top: 10rem;
		}
	}
	.contact-form-row {
		display: grid;
		grid-template-columns: 1fr 4fr;
		grid-template-rows: auto;
	}
	.contact-form-row:not(:last-child) {
		border-bottom: solid 1px #504de6;
	}
	.contact-form-label {
		font-family: 'Bebas Neue';
		font-weight: 400;
		font-size: 24px;
		line-height: 24px;
		text-align: center;
		align-self: center;
	}
	.contact-form-button {
		display: grid;
		justify-self: center;
		align-self: center;
		button {
			font-family: 'Bebas Neue', sans-serif;
			border-radius: 2rem;
			padding: 1.2rem 2.5rem 1rem 2.5rem;
			font-size: 1.25rem;
			line-height: 1;
			transition: background-color 150ms ease-in;
			&:hover {
				background-color: #504de6;
				color: white;
			}
		}
	}
	.contact-form-input {
		border-left: solid 1px #504de6;
	}

	// Responsive layout
	.reponsive-image {
		width: 100%;
		height: auto;
	}
	@media (max-width: 1023px) {
		.container {
			margin-right: 0rem;
		}

		.contact-form-image {
			width: 100%;
		}

		.hidden-1024 {
			display: none;
		}
	}

	@media (max-width: 425px) {
		.footer-container {
			margin: 10vw 5vw;
			padding-bottom: 10vw;
		}
	}

	@media (min-width: 1024px) {
		h1 {
			top: -120px;
			left: -40px;
		}
	}

	@media (min-width: 1440px) {
		h1 {
			top: -140px;
		}
	}

	@media (min-width: 1920px) {
		h1 {
			top: -205px;
		}
	}
</style>
