<div class="info-box">
	<h3><slot name="title" /></h3>
	<p><slot name="description" /></p>
</div>

<style lang="scss">
	.info-box {
		display: grid;
		grid-template-columns: inherit;
		grid-template-rows: auto 1fr;
		gap: 1rem;

		width: max-content;
	}

	h3 {
		font-size: 1.5625rem;
		font-family: 'Bebas Neue', sans-serif;

		font-weight: 400;
	}

	p {
		font-weight: 500;
	}
</style>
