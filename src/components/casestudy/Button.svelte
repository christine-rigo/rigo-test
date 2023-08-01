<script lang="ts">
	export let borderColor = 'var(--app-color-lunarblue)';
	export let btnColor:string;
</script>

<!-- This can be commented out as long as Rigo Nav is present -->
<!-- <script src="//embed.typeform.com/next/embed.js"></script> -->

<button
	style="color: {borderColor}; border: 1px solid {borderColor}"
	class="contact-button-tf startyourascentbutton {btnColor}"
	data-tf-popup="EHpJH0kW"
	data-tf-opacity="100"
	data-tf-size="100"
	data-tf-iframe-props="title=Rigo Landing Page Trial"
	data-tf-transitive-search-params
	data-tf-medium="snippet">Start your ascent</button>

<style lang="scss">
    button {
		z-index: 999;
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 24px;
		text-align: center;

		border: 1px solid var(--app-color-lunarblue);
		box-sizing: border-box;
		border-radius: 100vw;
	}

	.btn-red {
		transition: background-color 150ms ease-in;
		&:hover {
			background-color: var(--app-color-red) !important;
            color: white !important;
		}
	}

	.btn-lunarblue {
		transition: background-color 150ms ease-in;
		&:hover {
			background-color: var(--app-color-lunarblue) !important;
            color: white !important;
		}
	}

	.btn-white {
		transition: background-color 150ms ease-in;
		&:hover {
			background-color: white !important;
            color: black !important;
		}
	}
</style>