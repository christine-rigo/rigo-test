<script>
	import { navColor } from '$/stores/nav.store';
	import Footer from '$/components/Footer.svelte';
	import { style } from 'svelte-body';
	import { onMount } from 'svelte';
	import Carousel from '$/components/casestudy/Carousel.svelte';
	import Button from '$/components/casestudy/Button.svelte';
	import TriadCard from '$/components/casestudy/TriadCard.svelte';
	import AscensionCard from '$/components/casestudy/AscensionCard.svelte';
	import ExtremeCard from '$/components/casestudy/ExtremeCard.svelte';
	import CaseStudy from '$/components/casestudy/CaseStudy.svelte';
	import ChallengeCard from '$/components/casestudy/ChallengeCard.svelte';

	const carouselList = [
		{ 'index': '01', 'img': '/casestudy/volta-carousel-1.png', 'text': '‘Future-positive’ tone and content – inspiring followers with the innovation and progress'},
        { 'index': '02', 'img': '/casestudy/volta-carousel-2.png', 'text': 'Committed to quality and quantity reasures readers that Volta is a trusted information source'},
        { 'index': '03', 'img': '/casestudy/volta-carousel-3.png', 'text': 'Tailored to an intelligent audience at a level that drives new conversations in technology, science and the environment'}
	]
	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>

<svelte:head>
	<title>Case Study / Volta</title>
</svelte:head>

<svelte:body use:style={{ background: 'var(--app-color-lunarblue)' }} />

<div class="workslugcontainer">
	<CaseStudy navigationBarColor="var(--app-color-lunarblue)" 
		title="Volta" 
		description="An online platform focusing on sustainable living. Volta's mission is to encourage as many people as possible to transition to a more sustainable lifestyle."
		coverPhoto="/casestudy/volta-cover.png" 
		columnSeparator="/casestudy/volta-line-separator.svg"
		hdrSvgPath1="/casestudy/volta-cs-1.svg"
		hdrSvgPath2="/casestudy/volta-cs-2.svg"
		hdrSvgPath3="/casestudy/volta-cs-3.svg"
		hdrSvgPath4="/casestudy/volta-cs-4.svg"
		hdrInfo1="page views in first 3 months"
		hdrInfo2="impressions in 1 month campaign"
		hdrInfo3="increase in monthly users in first 12 months"
		hdrInfo4="Listed in Google News on first application"
		/>

	<div class="section2">
		<div class="challenge-container">
			<ChallengeCard 
				challengeImg="/casestudy/volta-challenge.svg"
				challenge="Volta is a rapidly expanding source of inspirational news. rigo has helped them to make the leap and attract an even larger audience, while maintaining the scale and quality of their content."
				solutionImg="/casestudy/volta-solution.svg"
				solution="rigo creates regular news articles, interviews and campaigns to drive engagment. From pitching to production, the team integrates with Volta to deliver a seamless service."
				resultImg="/casestudy/volta-result.svg"
				result="With regular features, a successful Google News application and carefully targeted campaigns, the site has seen substantial growth in traffic and an influx of big name partners."
			/>
			<Button btnColor="btn-lunarblue" borderColor="var(--app-color-lunarblue)" />
		</div>
		<div class="ascension-container">
			<AscensionCard title="Creative" imgsource="/casestudy/volta-ascension-1.png" arrowImg="/casestudy/volta-ascension-arrow.svg" />
			<AscensionCard title="Digital Advertising" imgsource="/casestudy/volta-ascension-2.png" arrowImg="/casestudy/volta-ascension-arrow.svg" />
		</div>
		<Carousel headerColor="var(--app-color-lunarblue)" carouselList={carouselList} />
		<ExtremeCard heading="Extreme E" imgUrl="/casestudy/volta-extreme.png">
			Volta was given the nod as a trusted outlet to report on Extreme E’s 2021 inaugural season, focusing on the organisation’s legacy projects.
			<br><br>
			rigo attended the Ocean X Prix in Lac Rose, Senegal over the course of a week, creating live event coverage, conducting interviews with big names - including Nico Rosberg - and supporting the Volta team as a key coverage provider for the championship.
		</ExtremeCard>
	</div>

	<div class="section3">
		<div class="section3-flex" style="display: flex;">
			<div style="flex: 1">
				<TriadCard textAlign="left" flexMargin="0vw 10%" flexDirection="row" name="Clare Farah" title="Co-Founder, Volta" triadNameColor="var(--app-color-lunarblue)">
					“Prior to working with rigo, we were outsourcing much of our articles to a whole plethora of journalists and content writers.
					<br><br>
					Rigo has changed this for us entirely now within no time, they were generating and delivering excellent SEO-optimised content and engaging on
					our socials whilst simultaneously generating new marketing plans to support
					our directives.
					<br><br>
					To us, they’re not just a company we outsource to, they’re integral to our business now and part of the team.”
				</TriadCard>
			</div>
			<div style="flex: 1">
				<TriadCard textAlign="left" flexMargin="0vw 10%" flexDirection="row-reverse" name="Pete Adams" title="Copywriter, Rigo" triadNameColor="var(--app-color-lunarblue)">
					“Work on the account has evolved over time, from a more passive news-watching approach to actively going out to generate original stories of our own.
					<br><br>
					“Using best practice journalistic techniques, stories needed to be backed up with sources, fitting in with the future-positive narrative of the client.
					<br><br>
					Senegal [to cover Extreme E] was undoubtedly a highlight, as it let me firmly put my journalist hat on and become that roving reporter I’ve always dreamt of being.”
				</TriadCard>
			</div>
		</div>
		<Button btnColor="btn-lunarblue" borderColor="var(--app-color-lunarblue)" />
	</div>

	<div style="display: flex; padding: 15vw 5vw 15vw 5vw; background-color: var(--app-color-navy-contrast); justify-content: space-evenly;">
		<Footer marginleft={'2vw'} marginright={'2vw'} href="/casestudy/gallagher">Gallagher</Footer>
	</div>
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

	.workslugcontainer {
		display: flex;
		flex-direction: column;
	}

	.section2 {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8vw;
		background-color: var(--app-color-navy-contrast);
		padding: 4rem 2rem 4rem 2rem;
	}

	.ascension-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 2vw;
		padding: 0vw 15vw;
        width: 100vw;
	}

	.challenge-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4vw;
	}

	.section3 {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 4rem 15vw 4rem 15vw;
		background-color: var(--app-color-navy);
		width: 100vw;
		gap: 4vw;
	}

	@media(max-width: 768px) {
		.challenge-container {
			gap: 8vw;
		}
	}

	@media(max-width: 425px) {
		.section2 {
			gap: 20vw;
		}
		.challenge-container {
			gap: 12vw;
		}
		.ascension-container {
			flex-direction: column;
			gap: 12vw;
		}
        .casecardtitle {
            font-size: 20px;
		    line-height: 24px;
            margin-bottom: 3vw;
        }
        .casecarddescription {
		    line-height: 140%;
        }

		.section3 {
			gap: 16vw;
		}
		.section3-flex {
			flex-direction: column;
			gap: 12vw;
		}
	}
</style>
