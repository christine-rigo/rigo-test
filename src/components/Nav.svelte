<script lang="ts">
	import { navColor } from '$/stores/nav.store';
	import Logo from './svg/Logo.svelte';
</script>

<div class="nav-container" style="--color: {$navColor}">
	<a href="/">
		<Logo scale={1.8} />
	</a>

	<nav>
		<!-- TODO -->
		<a href="/work">Work</a>
		<a href="/services" sveltekit:prefetch>Services</a>
		<a class="hidden-xs" href="/about" sveltekit:prefetch>About</a>
		<a href="/team" sveltekit:prefetch>Team</a>
		<a href="/contact">Contact</a>
	</nav>
</div>

<style lang="scss">
	.nav-container {
		display: flex;
		flex-direction: row;
		gap: 0rem;

		width: max-content;

		:global(svg path) {
			transition: fill 0.2s ease-in;
		}
	}

	nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 8px;
	}

	a {
		color: var(--color);

		transition: color 0.2s ease-in;
		font-size: 13px;
		width: max-content;
	}

	@media(min-width: 1024px) {
		nav {
			flex-direction: column;
		}
		.nav-container {
			flex-direction: column;
		}
	}
	@media(min-width: 768px) {
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
	@media(max-width: 1024px) {
		.hidden-xs {
			display: none;
		}
	}
	@media(max-width: 768px) {
		.nav-container > a {
			transform: scale(0.7);
		}
	}
</style>
