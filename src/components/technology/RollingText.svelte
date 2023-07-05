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
			animation: scroll-back-forth 12s linear infinite alternate;
		}
		span {
			flex: 1 0;
			min-width: fit-content;
		}
	}

	@keyframes scroll-back-forth {
		to {
			transform: translateX(0);
		}
		from {
			transform: translateX(calc(-100% + (30 * 30px)));
		}
	}
</style>
