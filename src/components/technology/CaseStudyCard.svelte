<script lang="ts">
	export let image: String;
	export let project_name: String;
	export let title: String;
	export let description: String;
	export let metrics: Array<any>;
</script>

<article style="background-image: url({image})" class={$$props.class}>
	<div>
		<div class="tag">CASE STUDY / {project_name}</div>
		<h3 class="title">{title}</h3>
		<div class="desc">{description}</div>
	</div>

	<div class="metrics">
		{#each metrics as metric}
			<div class="block">
				<h4>{metric.pre} {metric.value}{metric.append}</h4>
				<p>{metric.text}</p>
			</div>
		{/each}
	</div>
</article>

<style lang="scss">
	article {
		position: relative;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.tag {
		text-align: center;
		font-size: 20px;
		width: 214px;
		background-color: var(--cs-color);
		margin: 0 auto 80px;
		padding: 10px;
		color: var(--app-color-navy);
	}
	.title,
	.desc,
	.tag {
		font-weight: 400;
		line-height: 0.9;
		font-family: 'Bebas Neue', sans-serif;
	}
	.title,
	.desc {
		padding-left: 30px;
		padding-right: 30px;
		@media (min-width: 768px) {
			padding-left: 60px;
			padding-right: 60px;
		}
	}
	.title {
		font-size: 80px;
		margin-bottom: 20px;
	}
	.desc {
		font-size: 30px;
		max-width: 500px;
		margin: 0 auto;
	}
	.metrics {
		padding: 50px 30px;
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		max-width: 400px;
		justify-content: center;
		margin: 0 auto;
		.block {
			background-color: var(--cs-color);
			color: var(--app-color-navy);
			width: 147px;
			min-height: 147px;
			border-radius: 25px;
			text-align: center;
			font-size: 13px;
			line-height: 1.3;
			font-weight: 500;
			padding: 30px 22px;
			h4 {
				font-family: 'Bebas Neue', sans-serif;
				font-size: 32px;
				font-weight: 400;
			}
		}
	}
</style>
