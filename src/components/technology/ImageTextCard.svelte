<script lang="ts">
	export let title: String;
	export let image: String;
	export let description: String;
</script>

<div class="card">
	<div class="title" style="background-image: url({image})">
		<h3>{title}</h3>
	</div>
	<div class="desc">{description}</div>
</div>

<style lang="scss">
	.title {
		height: clamp(600px, 40vw, 709px);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		h3 {
			font-family: 'Bebas Neue', sans-serif;
			font-size: 80px;
			font-weight: 400;
			line-height: 0.9;
			color: #fff;
			padding: 0px 20px;
			max-width: 395px;
		}
	}
	.desc {
		color: var(--app-color-navy);
		font-size: 15px;
		line-height: 1.3;
		padding: 20px;
	}
</style>
