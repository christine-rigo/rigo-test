<script lang="ts">
	export let borderColor = 'var(--app-color-lunarblue)';
	export let btnColor:string;
    export let cta = "Start Your Ascent";
</script>

<a href="/contact" style="color: {borderColor}">
	<button style="border: 1px solid {borderColor};" class="startyourascentbutton {btnColor}">{cta}</button>
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

    .btn-white {
        transition: background-color 150ms ease-in;
		&:hover {
			background-color: white;
            color: black;
		}
    }

	.btn-red {
		transition: background-color 150ms ease-in;
		&:hover {
			background-color: var(--app-color-red);
            color: white;
		}
	}

	.btn-lunarblue {
		transition: background-color 150ms ease-in;
		&:hover {
			background-color: var(--app-color-lunarblue);
            color: white;
		}
	}

	@media(max-width: 425px) {
		button {
			padding: 3vw 12vw;
		}
	}
</style>