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
	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>

<svelte:head>
	<title>Case Study / Gallagher</title>
</svelte:head>

<svelte:body use:style={{ background: 'var(--app-color-red)' }} />

<div class="workslugcontainer">
	<CaseStudy />

	<div class="section2">
		<div class="challenge-container">
			<ChallengeCard></ChallengeCard>
			<Button borderColor="var(--app-color-red)" />
		</div>
		<div class="ascension-container">
			<AscensionCard title="Creative" imgsource="/casestudy/gallagher-ascension-1.png" />
			<AscensionCard title="Digital Advertising" imgsource="/casestudy/gallagher-ascension-2.png" />
		</div>
		<Carousel carouselImage="/casestudy/gallagher-carousel-1.png">
			To ensure comparable data sets rigo only analysed articles with 2%+ website traffic, this helped us identify the articles driving the conversation in the sector
		</Carousel>
		<ExtremeCard heading="Research" imgUrl="/casestudy/gallagher-research.png">
			Research included exploration of search engine traffic and competitor funnels. This gave Gallagher a snapshot of what’s happening in the industry and oversight of why certain pieces of content were performing well. 
            <br><br>
            A custom ranking system ensured analysis remained subjective in terms of style and
            formatting, but objective in terms of commercial impact.
		</ExtremeCard>
	</div>

	<div class="section3">
		<div>
			<TriadCard name="Alex Turner" title="Senior Copywriter">
				“Working on the Gallagher account has been a reminder of why we place so much importance on research and data intelligence.
				<br><br>
				As a team we took the initial learnings and put them to work to create thought-provoking content that reaffirms Gallagher’s position as a heavyweight in the insurance sector to newcomers and existing customers alike.” 
			</TriadCard>
			<div />
		</div>
		<Button borderColor="var(--app-color-red)" />
	</div>

	<div style="display: flex; padding: 15vw 15vw 15vw 15vw; background-color: var(--app-color-navy-contrast); justify-content: space-evenly;">
		<Footer marginleft={'2vw'} marginright={'2vw'} href="/services">Gallagher</Footer>
	</div>
</div>

<style lang="scss">
	* {
		--color: var(--app-color-red);
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
	}
</style>
