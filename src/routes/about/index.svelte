<script>
	import Footer from '$/components/Footer.svelte';
	import StartYourAscent from '$/components/StartYourAscent.svelte';
	import Hr from '$/components/utils/Hr.svelte';
	import { navColor } from '$/stores/nav.store';
	import { onMount } from 'svelte';
	import { style } from 'svelte-body';

	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>

<svelte:head>
	<title>About / Rigo Agency</title>
</svelte:head>

<svelte:body use:style={{ background: 'var(--app-color-lunarblue-contrast)' }} />

<h1 class="tagline">
	<span class="we-are"> We Are: </span>
	copywriters, designers, developers, strategists
</h1>

<section class="main-content">
	<div class="content">
		<Hr />
		<br />
		<p>
			Mission: <br />
			<b> To create marketing solutions that empower authentic brands to reach their potential. </b>
		</p>
		<br />
		<p>
			rigo works hand in hand with ambitious marketing teams, as a single group, pushing towards a
			successful ascent.
		</p>
		<br />
		<p>The route map for that ascent is unique to every business.</p>
		<br />
		<p>
			But whether it's to rise through the ranks of Google, climb from new brand to household name,
			or take a new product from launch to industry leader...
		</p>
		<br />
		<p><b>Your climb is ours and we're here to help your business reach its potential.</b></p>
		<br /><br />
		<p><b>rigo - to ascend</b></p>
		<br />
		<p>rigo means <i>to ascend</i> in Igbo; co-founder Stephen's family language</p>
	</div>

	<div class="images">
		<img
			src="/about/about-img-2.png"
			alt="3 people working in a workspace"
			style="transform: translateY(-100px);"
		/>

		<img src="/about/about-img-1.png" alt="stairs" style="transform: translate(-100px, -10px);" />
	</div>
</section>

<section class="qualities">
	<section class="quality">
		<img src="/services-svg/agile.svg" alt="Agile" />
		<h2>AGILE</h2>
		<p>The destination is set but the path there is not.</p>
		<strong>We Stay focused.</strong>
	</section>

	<section class="quality">
		<img src="/services-svg/people-first.svg" alt="People First" />
		<h2>PEOPLE-FIRST</h2>
		<p>Scaling new heights demands new approaches.</p>
		<strong>Diversity is valued.</strong>
	</section>

	<section class="quality">
		<img src="/services-svg/smart.svg" alt="Smart" />
		<h2>SMART</h2>
		<p>The shortest route isn't alwaysthe fastest.</p>
		<strong>Data is our map.</strong>
	</section>

	<section class="quality">
		<img src="/services-svg/agile.svg" alt="Agile" />
		<h2>TOGETHER</h2>
		<p>Reaching the summit relies on teamwork.</p>
		<strong>We climb together.</strong>
	</section>
</section>

<br /><br /><br />

<div class="start-ascent">
	<StartYourAscent />
</div>

<br /><br /><br /> <br /><br /><br />

<div style="display: contents;">
	<Footer href="/contact">Contact Us</Footer>
</div>

<style lang="scss">
	* {
		--color: var(--app-color-lunarblue);
		--color-contrast: var(--app-color-lunarblue-contrast);

		color: var(--color);
	}

	:global(::selection) {
		background: var(--color);
		color: var(--color-contrast);
	}

	h1 {
		color: var(--color);

		.we-are {
			color: var(--color-contrast);

			-webkit-text-stroke: 1px var(--color);
		}
	}

	h1 {
		font-size: calc(2.375rem + 1.5vw);
	}
	@media (min-width: 1200px) {
		h1 {
			font-size: 5.5rem;
		}
	}
	.main-content {
		width: 100%;

		padding: 2rem 10vw 15rem 8vw;

		display: grid;
		grid-template-columns: 1fr 1.5fr;

		.images {
			display: grid;
			place-items: end;
		}
	}

	.qualities {
		padding: 2rem 8vw 2rem 0vw;

		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	}

	.quality {
		display: grid;
		place-items: center;
		gap: 1.5rem;

		img {
			height: 85.6px;
			width: auto;
		}

		h2 {
			font-family: 'Bebas Neue', sans-serif;
			font-weight: 400;
		}

		p {
			text-align: center;
		}
	}

	p {
		font-size: 16px;
	}

	.start-ascent {
		display: flex;
		justify-content: center;

		padding-right: 10vw;

		width: 100%;
	}

	@media (min-width: 1024px) {
		p {
			font-size: 22px;
		}
		.main-content {
			padding: 2rem 0 15rem 0;
		}

		.qualities {
			padding: 2rem 0;
		}

		.start-ascent {
			padding-right: 0;
		}
	}

	@media (max-width: 767px) {
		.tagline {
			padding: 0 2rem;
		}
		.main-content {
			display: block;
			padding: 2rem;
		}
		.qualities {
			display: flex;
			flex-direction: column;
			gap: 5vw;
			padding: 2rem;
		}
		.start-ascent {
			padding-right: 0;
		}
	}
</style>
