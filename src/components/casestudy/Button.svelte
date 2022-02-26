<script lang="ts">
	export let borderColor = 'var(--app-color-lunarblue)';
</script>

<button style="border: 1px solid {borderColor}" class="startyourascentbutton">Start Your Ascent</button>

<style lang="scss">
    button {
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 24px;
		text-align: center;
		padding: 1.25vw 4vw;

		border: 1px solid var(--app-color-lunarblue);
		box-sizing: border-box;
		border-radius: 100vw;
	}

	@media(max-width: 425px) {
		button {
			padding: 3vw 12vw;
		}
	}
</style>