<script lang="ts">
	export let href: string;
</script>

<a {href}>
	<div class="dot" />
</a>

<style lang="scss">
	a {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 37px;
		width: 21px;

		border-radius: 12px;

		box-shadow: 0 0 0 2px var(--app-color-navy-contrast);
	}

	.dot {
		height: 3px;
		width: 3px;

		border-radius: 50%;
		background-color: var(--app-color-navy-contrast);

		transform: translateY(-7px);
	}
</style>
