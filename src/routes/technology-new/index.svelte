<script lang="ts">
	import Footer from '$/components/Footer.svelte';
	import Button from '$/components/casestudy/Button.svelte';
	import Card from '$/components/technology/ImageTextCard.svelte';
	import RollingText from '$/components/technology/RollingText.svelte';

	const strengths = [
		{
			title: 'combining realistic goals',
			image: '/technology/strength1.png',
			description:
				"We understand your business's needs and align them with set targets to help you achieve measurable success.",
		},
		{
			title: 'and a versatile support structure',
			image: '/technology/strength2.png',
			description:
				'Our services include regular updates, security checks and backups to to keep your website up-to-date. Our team is also skilled in cloud hosting support. Your website will run smoothly at all times.',
		},
		{
			title: 'with creative experience',
			image: '/technology/strength3.png',
			description:
				"Whether you're looking to create a brand-new website or upgrade an existing one, our creative team will wow you with high quality, visually stunning designs that exceed expectations!",
		},
	];
</script>

<section class="video-banner">
	<button><img src="/technology/play-button.png" alt="play button" /></button>
</section>

<section class="intro">
	<div class="round-text">rigo creates impactful web experiences.</div>
	<div class="container">
		<h2>Create big brand experiences</h2>
		<h2>Without a <br /> big brand budget</h2>
		<p>
			As an experienced website development company we understand that every business is unique. No
			matter the size or scale of the projects we undertake, our services are always tailored to
			your demands.
		</p>
		<Button borderColor="var(--app-color-navy)" btnColor="none" />
	</div>
</section>

<section class="benefits first">
	<div class="container">
		<div class="text">
			<h2>
				Work <br /> with <br /> experts
			</h2>
		</div>
		<div class="image">
			<img src="/technology/sign.png" alt="sign" />
		</div>
	</div>
</section>

<section class="benefits second">
	<div class="container">
		<div class="text">
			<p>
				“To us, they’re not just a company we outsource to, they’re integral to our business now and
				part of the team.”<br /><br />
				Clare farah<br />co-founder, volta
			</p>
			<h2>
				Fullstack,<br /> front-end,<br /> back-end.
			</h2>
		</div>
		<div class="image">
			<img src="/technology/plane.png" alt="airplane" />
		</div>
	</div>
</section>

<section class="strengths">
	{#each strengths as data}
		<Card {...data} />
	{/each}
</section>

<RollingText />
<RollingText />

<section class="footer">
	<Footer hideUpNext={true} marginright="0" href="/casestudy/gallagher">Gallagher</Footer>
</section>

<style lang="scss">
	// Video banner
	.video-banner {
		position: relative;
		min-height: 100vh;
		background-color: var(--app-color-lunarblue);
		background-image: url('/technology/rigo-logo-big.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: 100%;
		> button {
			height: auto;
			width: 120px;
			position: absolute;
			transform: translateY(-50%);
			margin: 0 auto;
			top: 50%;
			left: 0;
			right: 0;
		}
	}

	// Intro
	.intro {
		background-color: white;
		position: relative;
		overflow: hidden;
		padding: 100px 15px;
		.container {
			width: 530px;
			margin: 0 auto;
			text-align: center;
		}
		h2 {
			color: var(--app-color-lunarblue);
			font-family: 'Bebas Neue', sans-serif;
			font-weight: 400;
			font-size: 80px;
			line-height: 0.9;
			+ h2 {
				margin-top: 12px;
			}
			&:last-of-type {
				margin-bottom: 40px;
			}
		}
		p {
			color: var(--app-color-navy);
			margin-bottom: 30px;
		}
		.round-text {
			position: absolute;
			top: 35%;
			left: 8%;
			display: flex;
			align-items: center;
			width: 140px;
			height: 140px;
			padding: 15px;
			background-color: #36e0ba;
			color: #015643;
			border-radius: 50%;
			font-size: 12px;
			text-align: center;
			line-height: 1.35;
		}
	}

	// Benefit
	.benefits {
		padding: 100px 15px;
		h2 {
			font-family: 'Bebas Neue', sans-serif;
			font-size: 130px;
			font-weight: 400;
			line-height: 0.9;
		}
		.container {
			padding: 0 6vw;
			display: flex;
			justify-content: space-between;
			max-width: 1600px;
			margin: 0 auto;
		}

		&.first {
			background-color: var(--app-color-red);
			h2 {
				color: #b02a01;
			}
		}
		&.second {
			background-color: var(--app-color-lunarblue);
			h2,
			p {
				color: #2b2996;
			}
			p {
				font-family: 'Bebas Neue', sans-serif;
				font-size: 20px;
				line-height: 0.9;
				width: 300px;
				margin-bottom: 50px;
			}
		}
	}

	// Strengths
	.strengths {
		background-color: white;
		padding: 30px 0;
		display: grid;
		gap: 30px;
		@media (min-width: 768px) {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	// Footer
	.footer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 3rem 0;
		background-color: var(--app-color-navy);
	}
</style>
