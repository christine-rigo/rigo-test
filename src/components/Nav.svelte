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
		<a href="#todo">Work</a>
		<a href="/services" sveltekit:prefetch>Services</a>
		<a href="/about" sveltekit:prefetch>About</a>
		<a href="/team" sveltekit:prefetch>Team</a>
		<a href="/contact">Contact</a>
	</nav>
</div>

<style lang="scss">
	.nav-container {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		width: max-content;

		:global(svg path) {
			transition: fill 0.2s ease-in;
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
	}

	a {
		color: var(--color);

		transition: color 0.2s ease-in;

		width: max-content;
	}
</style>
