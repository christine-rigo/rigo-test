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
	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>

<svelte:head>
	<title>Case Study / Volta</title>
</svelte:head>

<svelte:body use:style={{ background: 'var(--app-color-lunarblue-contrast)' }} />

<div class="workslugcontainer">
	<CaseStudy />

	<div class="section2">
		<div class="casecardcontainer">
			<div>
				<div class="casecardtitle">Challenge</div>
				<div class="casecarddescription">
					Volta is a rapidly expanding source of inspirational news. rigo has helped them to make
					the leap and attract an even larger audience, while maintaing the scale and quality of
					their content.
				</div>
			</div>
			<div>
				<div class="casecardtitle">Solution</div>
				<div class="casecarddescription">
					Rigo creates regular news articles, interviews and campaigns to drive engagment. From
					pitching to production, the team integrates with Volta to deliver a seamless service.
				</div>
			</div>
			<div>
				<div class="casecardtitle">Result</div>
				<div class="casecarddescription">
					With regular features, a successful Google News application and carefully targeted
					campaigns, the site has seen substantial growth in traffic and an influx of big name
					partners.
				</div>
			</div>
		</div>
		<Button />
		<div class="ascension-container">
			<AscensionCard title="Creative" imgsource="/work-img/ascension-img-1.png" />
			<AscensionCard title="Digital Advertising" imgsource="/work-img/ascension-img-2.png" />
		</div>
		<Carousel />
		<ExtremeCard />
	</div>

	<div class="section3">
		<div>
			<div style="display: flex; flex-direction: column; gap: 12vw;">
				<TriadCard name="Clare Farah" title="Co-Founder, Volta">
					“Rigo was generating and delivering excellent SEO-optimised content and engaging on our
					socials whilst simultaneously generating new marketing plans to support our directives.
					<br /><br />
					To us, they’re not just a company we outsource to, they’re integral to our business now and
					part of the team.”
				</TriadCard>
				<TriadCard name="Pete Adams" title="Copywriter, Rigo">
					“Work on the account has evolved over time, from a more passive news-watching approach to
					actively going out to generate original stories of our own.
					<br /><br />
					“Using best practice journalistic techniques, stories needed to be backed up with sources,
					fitting in with the future-positive narrative of the client.”
				</TriadCard>
			</div>
			<div />
		</div>
		<Button />
	</div>

	<div style="display: flex; padding: 15vw 2rem 15vw 2rem; background-color: var(--app-color-navy-contrast)">
		<Footer marginleft={'2vw'} marginright={'2vw'} href="/services">Gallagher</Footer>
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
		gap: 15vw;
		background-color: var(--app-color-navy-contrast);
		padding: 4rem 2rem 4rem 2rem;
	}

	.casecardtitle {
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: normal;
        font-size: 40px;
        line-height: 100px;
		text-transform: uppercase;
	}

	.casecarddescription {
		font-family: 'Satoshi';
		font-style: normal;
		font-weight: normal;
        font-size: 12px;
        line-height: 16px;
	}

	.casecardcontainer {
		display: flex;
		flex-direction: column;
		gap: 12vw;
	}

	.ascension-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	@media(max-width: 425px) {
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

	.section3 {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15vw;
		padding: 4rem 2rem 4rem 2rem;
		background-color: var(--app-color-navy);
	}
</style>
