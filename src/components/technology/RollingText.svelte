<script lang="ts">
	export let text = 'our approach / workflow';
</script>

<section class="rolling temp">
	<div>
		{#each { length: 15 } as _, i}
			<span>{text}</span>
		{/each}
	</div>
</section>

<style lang="scss">
	.rolling {
		overflow: hidden;
		padding: 20px 0;
		background-color: var(--app-color-navy);
		color: var(--app-color-green);
		font-family: 'Bebas Neue', sans-serif;
		font-size: 20px;
		line-height: 0.9;
		font-weight: 400;
		> div {
			display: flex;
			gap: 30px;
			animation: scroll-back-forth 12s linear infinite;
		}
		span {
			flex: 1 0;
			min-width: fit-content;
		}
	}

	@keyframes scroll-back-forth {
		0% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(calc(-100% + (30 * 30px)));
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
