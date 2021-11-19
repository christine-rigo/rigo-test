<div class="nav-container">
	<img class="logo" src="/logo.png" width="74" height="31" alt="Rigo Agency logo" />

	<nav>
		<!-- TODO -->
		<a href="#todo">Work</a>
		<a href="#todo">Services</a>
		<a href="#todo">Team</a>
		<a href="#todo">Contact</a>
	</nav>
</div>

<style lang="scss">
	.nav-container {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		width: max-content;
	}

	.logo {
		width: 6rem;
		height: auto;
	}

	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
	}

	a {
		color: var(--app-color-navy-contrast);

		width: max-content;
	}
</style>
