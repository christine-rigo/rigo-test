<script lang="ts">
	import { navColor } from '$/stores/nav.store';
	import Logo from './svg/Logo.svelte';

	export let logoScale = 1.8;
	export let navigationBarColor = '';
	export let navItemsStyle = 'align-items: center;';
</script>

<div class="nav-container" style="--color: {navigationBarColor || $navColor}">
	<a href="/">
		<Logo scale={logoScale} />
	</a>

	<nav style={navItemsStyle}>
		<!-- TODO -->
		<a href="/work">Work</a>
		<a href="/services" sveltekit:prefetch>Services</a>
		<a class="hidden-xs" href="/about" sveltekit:prefetch>About</a>
		<!-- <a href="/team" sveltekit:prefetch>Team</a> -->
		<!-- <a href="/contact">Contact</a> -->
		<button
			class="contact-button-tf"
			data-tf-popup="EHpJH0kW"
			data-tf-opacity="100"
			data-tf-size="100"
			data-tf-iframe-props="title=Rigo Landing Page Trial"
			data-tf-transitive-search-params
			data-tf-medium="snippet"
			style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#0445AF;color:#fff;font-size:20px;border-radius:25px;padding:0 33px;font-weight:bold;height:50px;cursor:pointer;line-height:50px;text-align:center;margin:0;text-decoration:none;"
			>Contact</button
		><script src="//embed.typeform.com/next/embed.js"></script>
	</nav>
</div>

<style lang="scss">
	.contact-button-tf {
		all: unset !important;
		font-family: Helvetica, Arial, sans-serif !important;
		display: inline-block !important;
		max-width: 100% !important;
		white-space: nowrap !important;
		overflow: hidden !important;
		text-overflow: ellipsis !important;
		background-color: #ffffff !important;
		color: #504de6 !important;
		font-size: 15px !important;
		border-radius: 25px !important;
		padding: 6px 23px !important;
		font-weight: bold !important;
		height: auto !important;
		cursor: pointer !important;
		/* line-height: 50px; */
		text-align: center !important;
		margin: 0 !important;
		text-decoration: none !important;
	}

	.nav-container {
		display: flex;
		flex-direction: row;
		gap: 0rem;

		width: max-content;

		:global(svg path) {
			transition: fill 0.2s ease-in;
		}
	}
	@media (max-width: 1023px) {
		.nav-container {
			padding-left: 2rem;
			padding-right: 2rem;
			justify-content: space-between;
			width: 100%;
		}
	}

	nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 8px;
	}

	a {
		color: var(--color);

		transition: color 0.2s ease-in;
		font-size: 13px;
		width: max-content;
	}

	@media (min-width: 1024px) {
		nav {
			flex-direction: column;
		}
		.nav-container {
			flex-direction: column;
		}
	}
	@media (min-width: 768px) {
		.nav-container {
			gap: 2rem;
		}

		nav {
			gap: 1rem;
		}

		nav a {
			font-size: 16px;
		}
	}
	@media (max-width: 1024px) {
		.hidden-xs {
			display: none;
		}
	}
	@media (max-width: 768px) {
		.nav-container > a {
			transform: scale(0.7);
			transform-origin: left;
		}
		.nav-container {
			padding: 0;
		}
	}
</style>
