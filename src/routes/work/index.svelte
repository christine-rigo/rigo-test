<script lang="ts">
	import ScrollerIndicator from '$/components/ScrollerIndicator.svelte';
	import ServiceInformationalSection from '$/components/services/ServiceInformationalSection.svelte';
	import ServicesSummary from '$/components/services/ServicesSummary.svelte';
	import SiBox from '$/components/services/SIBox.svelte';
	import Hr from '$/components/utils/Hr.svelte';
	import { navColor } from '$/stores/nav.store';
	import { browser } from '$app/env';
	import { inview } from 'svelte-inview';
	import Footer from '$/components/Footer.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		$navColor = 'var(--app-color-lunarblue-contrast)';
	});

</script>

<svelte:head>
	<title>Work / Rigo Agency</title>
</svelte:head>

<div class="work-page-container" style="padding: 0rem 2rem 2rem 2rem;">
	<div>
        <h1>Our Work</h1>
    </div>
	<div class="showcase-container-1">
		<a href="/casestudy/volta">
			<div class="showcase-card">
				<div class="showcase-img" style="background-image: url('/work-img/volta-work.jpg'); background-size: cover;"></div>
				<div class="showcase-title">VOLTA</div>
				<div class="showcase-category">
					<div>+ CREATIVE</div>
					<div>+ DIGITAL ADVERTISING</div>
					<div>+ SUSTAINABILITY</div>
				</div>
			</div>
		</a>
		<a href="casestudy/gallagher">
			<div class="showcase-card">
				<div class="showcase-img" style="background-image: url('/work-img/gallagher-work.png'); background-size: cover;"></div>
				<div class="showcase-title">GALLAGHER</div>
				<div class="showcase-category">
					<div>+ DATA</div>
					<div>+ CREATIVE</div>
					<div>+ FINANCIAL SERVICES</div>
				</div>
			</div>
		</a>
	</div>
	<!-- <div class="showcase-container-2" >
		<div class="showcase-card">
			<div class="showcase-img" style="background-image: url('/work-img/broadscale-work.png'); background-size: cover;"></div>
			<div class="showcase-title">BROADSCALE</div>
			<div class="showcase-category">
				<div>+ DIGITAL ADVERTISING</div>
				<div>+ CREATIVE</div>
				<div>+ TECHNICAL</div>
			</div>
		</div>
		<div class="showcase-card" >
			<div class="showcase-img" style="background-image: url('/work-img/district-work.png'); background-size: cover;"></div>
			<div class="showcase-title">DISTRICT</div>
			<div class="showcase-category">
				<div>+ DATA</div>
				<div>+ DIGITAL ADVERTISING</div>
			</div>
		</div>
	</div> -->
</div>

<Footer href="/services">Services</Footer>

<style lang="scss">
	h1 {
        font-size: calc(2.375rem + 1.5vw);
    }
    @media (min-width: 1200px) {
        h1 {
            font-size: 5.5rem;
        }
    }
	.work-page-container {
		margin-right: 9rem;
		margin-bottom: 6rem;
	}
	.showcase-container-1 {
		margin-top: 4rem;
		display: grid;
		grid-template-columns: 2.6fr 1fr;
		gap: 0.5rem;
	}
	.showcase-container-2 {
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: 0.5rem;
	}
	.showcase-card {
		display: grid;
		grid-template-rows: 8fr 1fr 1fr;
		cursor: pointer;
		.showcase-img {
			height: 400px;
		}
		.showcase-title {
			font-family: 'Bebas Neue', sans-serif;
			font-weight: 400;
			font-style: normal;
			font-size: 40px;
			line-height: 48px;
			margin-top: 0.22rem;
			color: var(--app-color-lunarblue-contrast);
		}
		.showcase-category {
			font-size: 12px;
			line-height: 16.2px;
			font-weight: 400;
			display: flex;
			justify-content: start;
			gap: 1rem;
			color: var(--app-color-lunarblue-contrast);
		}
	}
	@media(max-width: 1023px) {
		.showcase-container-1, .showcase-container-2 {
			grid-template-columns: 1fr;
		}
		.work-page-container {
			margin-right: 0rem;
		}
	}
</style>
