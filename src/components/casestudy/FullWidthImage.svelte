<script>
    export let backgroundImg = "";
</script>

<div class="fullwidth-container" style="background-image: url({backgroundImg});"></div>

<style lang="scss">
    .fullwidth-container {
		background-size: cover; 
		background-position: center; 
		background-repeat: no-repeat;
		height: 813px; // 237px;
		width: 100%;
	}
    @media(max-width: 1024px) {
        .fullwidth-container {
			height: 600px;
		}
    }
    @media(max-width: 768px) {
        .fullwidth-container {
			height: 400px;
		}
    }
    @media(max-width: 425px) {
        .fullwidth-container {
			height: 275px;
		}
    }
</style>