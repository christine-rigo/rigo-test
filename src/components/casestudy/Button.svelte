<script lang="ts">
	export let borderColor = 'var(--app-color-lunarblue)';
	export let btnColor:string;
</script>

<a href="/contact" style="color: {borderColor}">
	<button style="border: 1px solid {borderColor};" class="startyourascentbutton {btnColor}">Start Your Ascent</button>
</a>

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

	.btn-red {
		transition: background-color 150ms ease-in, box-shadow 150ms ease-in;
		&:hover {
			background-color: var(--app-color-red);
            color: white;
			box-shadow: 0px 1.8px 4.5px rgba(0, 0, 0, 0.1), 0px 14px 36px rgba(0, 0, 0, 0.2);
		}
	}

	.btn-lunarblue {
		transition: background-color 150ms ease-in, box-shadow 150ms ease-in;
		&:hover {
			background-color: var(--app-color-lunarblue);
            color: white;
			box-shadow: 0px 1.8px 4.5px rgba(0, 0, 0, 0.1), 0px 14px 36px rgba(0, 0, 0, 0.2);
		}
	}

	@media(max-width: 425px) {
		button {
			padding: 3vw 12vw;
		}
	}
</style>