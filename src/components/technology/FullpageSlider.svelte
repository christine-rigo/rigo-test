<script lang="ts">
	export let step = '';
	export let title = '';
</script>

<section class="fp-section">
	<div class="top-heading">
		<slot name="heading" />
	</div>

	<div class="title">
		<div class="step">Step {step}</div>
		<div class="text">{title}</div>
	</div>

	<div class="content">
		<slot name="content" />
	</div>

	<div class="icon">
		<slot name="icon" />
	</div>
</section>

<style lang="scss">
	.fp-section {
		position: relative;
		min-height: calc(100vh - 116px);
		background-color: var(--fp-bg-color);
		text-align: center;
		// padding-top: 10vh;
		// padding-bottom: 10vh;
		padding-top: 2rem;
		padding-bottom: 2rem;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}
	.top-heading {
		font-family: 'Bebas Neue', sans-serif;
		color: var(--fp-top-heading);
		font-size: 50px;
		line-height: .9;
	}
	.title {
		font-family: 'Bebas Neue', sans-serif;
		color: #12182e;
		font-size: clamp(120px, 30vw, 320px);
		line-height: 0.8;
		text-transform: uppercase;
		.step {
			-webkit-text-fill-color: transparent;
			-webkit-text-stroke: 1px;
		}
	}
	.content {
		color: #12182e;
		max-width: 727px;
		margin: 0 auto;
		padding-inline: 20px;
	}
	.icon {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
