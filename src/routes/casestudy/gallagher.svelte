<script>
	import { navColor } from '$/stores/nav.store';
	import Footer from '$/components/Footer.svelte';
	import { style } from 'svelte-body';
	import { onMount } from 'svelte';
	import CaseStudy from '$/components/casestudy/CaseStudy.svelte';
	import StatsCard from '$/components/casestudy/StatsCard.svelte';
	import FullWidthImage from '$/components/casestudy/FullWidthImage.svelte';

    const statistics = [{'stats': '+3', 'statsTitle': 'month<br>campaign'},
                        {'stats': '+5', 'statsTitle': 'competitors<br>scored'},
                        {'stats': '+30', 'statsTitle': 'key content<br>pieces created'},
                        {'stats': '+29K', 'statsTitle': 'words written'}]

	onMount(() => { $navColor = 'var(--app-color-lunarblue)'; });
</script>

<svelte:head>
	<title>Case Study / Gallagher</title>
</svelte:head>

<svelte:body use:style={{ background: 'white' }} />

<div class="workslugcontainer">
	<CaseStudy
		title="Gallagher: Global Insurance Broker" 
		description="Global insurance broker, risk management<br>expert and business consultancy"
		backgroundColor="#36E0BA"
		color="var(--app-color-lunarblue)"
		btnColor="btn-lunarblue"
		/>

	<div class="main-content">

		<StatsCard statistics={statistics} backgroundColor="#6562F5" color="white" />

		<div class="hero-section">
			<FullWidthImage backgroundImg="/casestudy/gallagher-content.png" />
		</div>
	
		<div class="content-section">
			<div class="content-card-row">
				<div class="content-card-row-field" style="background: #EE6338">
					<div class="card-content-preheader">Cornerstone Content</div>
					<div class="card-content-title" style="color: #FFB436">
						+ 30 articles delivered<br>
						+ 29,000 words written
					</div>
					<div class="card-content-desc" style="color: white;">Long and short-form thought leadership content designed to educate and engage readers and reinforce Gallagher’s brand proposition. Topics, keyword selection and approach designed to target content gaps identified in a prior audit.</div>
				</div>
				<div class="content-card-row-field" style="background: #FFB436">
					<div class="card-content-title" style="color: #EE6338;">Identifying<br>Opportunity</div>
					<div class="card-content-desc">A thorough audit of competitors’ digital profiles showed Gallagher where they had content gaps and provided insight to inform an effective framework for the creation of cornerstone content.</div>
				</div>
			</div>
		</div>
	
		<div class="challenge-section">
			<div>
				<div class="challenge-card-title">Challenge</div>
				<div class="challenge-card-desc">Gallagher sought to understand the trends and output of content marketing in the insurance industry. Doing so would help them develop a best practice for content in order to capture a larger market share.</div>
			</div>
			<div>
				<div class="challenge-card-title">Solution</div>
				<div class="challenge-card-desc">rigo conducted a review of content across the insurance industry. We delivered a competitive analysis and marketing intelligence report based on industry trends. In this review, we analysed and evaluated the content marketing output and SEO performance of five of Gallagher’s key competitors.</div>
			</div>
			<div>
				<div class="challenge-card-title">Research</div>
				<div class="challenge-card-desc">rigo levelled up Gallagher’s understanding of content marketing norms in the insurance sector, identifying strengths and weaknesses across the industry. This allowed us to identify a number of flagship content pieces that Gallagher would benefit from adding to their website.</div>
			</div>
			<div>
				<div class="challenge-card-title">Result</div>
				<div class="challenge-card-desc">
					Research included exploration of search engine traffic and competitor funnels. This provided Gallagher with a snapshot of the latest industry trends and oversight of why certain content pieces performed well. A custom ranking system ensured analysis remained subjective in terms of style and formatting, but objective in terms of commercial impact.
				</div>
			</div>
		</div>
	
		<div class="hero-section">
			<div class="alex-turner-container">
				<div>
					<div class="alex-turner-title">Alex Turner<br>Senior Copywriter,<br>Rigo</div>
					<div class="alex-turner-desc">“Working on the Gallagher account has been a reminder of why we place so much importance on research and data intelligence.<br>
						As a team we took the initial learnings and put them to work to create thought-provoking content that reaffirms Gallagher’s position as a heavyweight in the insurance sector to newcomers and existing customers alike.” </div>
				</div>
			</div>
		</div>
	
		<div class="footer-container">
			<Footer marginleft={'0vw'} marginright={'0vw'} href="/casestudy/volta">Volta</Footer>
		</div>
	</div>
</div>

<style lang="scss">
	* {
		--color: var(--app-color-navy);
		--color-contrast: var(--app-color-lunarblue-contrast);

		color: var(--color);
	}

	:global(::selection) {
		background: white;
		color: var(--color-contrast);
	}

	.workslugcontainer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.main-content {
		position: absolute;
		top: 27vh;
        max-width: 1440px;
        margin: auto;
	}
    @media(max-width: 1440px) {
        .main-content {
            margin: 0rem;
        }
    }
	@media(max-width: 1024px) {
        .main-content {
			top: 35vh;
            right: 0;
			left: 0;
        }
    }
	.hero-section {
		display: flex;
		padding: 0rem 4rem 0rem 4rem;
	}
	.content-section {
		display: flex;
		flex-direction: column;
		padding: 0rem 4rem 0rem 4rem;
	}
	.content-card-row {
		display: flex;
		flex-direction: row;
		align-items: stretch;
	}
	.content-card-row-field {
		padding: 6rem 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		justify-content: center;
	}
	.card-content-preheader {
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: 700;
		font-size: 30px;
		line-height: 110%;
		color: #FFFFFF;
		text-align: center;
	}
	.card-content-title {
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: 700;
		font-size: 44px;
		line-height: 90%;
		text-align: center;
	}
	.card-content-desc {
		font-family: 'Satoshi';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 160%;
		text-align: center;
		width: 70%;
	}
	.alex-turner-container {
		padding: 35vh 4rem 4rem 0;
		display: flex;
		background-image: url('/casestudy/alex-turner.png');
		background-position: right;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100%;
		justify-content: flex-end;
	}

	.alex-turner-container > div {
		width: 23%;
	}

	.alex-turner-title {
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: 700;
		font-size: 35px;
		line-height: 100%;
		color: white;
	}

	.alex-turner-desc {
		padding-top: 2rem;
		font-family: 'Satoshi';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 160%;
		color: white;
	}

	.challenge-section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 4rem 8rem 4rem 8rem;
		gap: 2rem;

		div {
			flex: 1;
		}
	}

	.challenge-card-title {
		color: #181818;
		font-family: 'Bebas Neue';
		font-style: normal;
		font-size: 35px;
		line-height: 100%;
	}

	.challenge-card-desc {
		padding-top: 20px;
		color: #181818;
		font-family: 'Satoshi';
		font-weight: 400;
		font-size: 12px;
		line-height: 160%;
	}
	.footer-container {
		display: flex;
		padding: 5vw 4rem;
		background-color: white;
		justify-content: space-evenly;
	}

	@media(max-width: 1024px) {
		.card-content-desc {
			width: 100%;
		}
		.alex-turner-container > div {
			width: 34%;
		}
	}
	@media(max-width: 768px) {
		.main-content {
			position: relative;
			top: -10vh;
		}
		.hero-section {
			padding: 0rem 2rem;
		}
		.content-section {
			padding: 0rem;
		}
		.card-content-desc {
			width: 55%;
		}
		.content-card-row {
			flex-direction: column;
		}
		.challenge-section {
			flex-direction: column;
			gap: 2rem;
			padding: 2rem;
		}
		.alex-turner-container > div {
			width: 44%;
		}

		.alex-turner-container {
			padding: 35vh auto;
		}
		.footer-container {
			padding: 5vw 2rem;
		}
	}

	@media(max-width: 425px) {
		.alex-turner-container {
			display: flex;
			justify-content: center;
			padding: 16rem 0.5rem 4rem 0.5rem;
		}
		.alex-turner-container > div {
			width: 80%;
		}
		.card-content-title {
			font-size: 31px;
		}
		.card-content-desc {
			width: 100%;
		}
	}
</style>
