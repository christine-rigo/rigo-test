<script>
	import { navColor } from '$/stores/nav.store';
	import Footer from '$/components/Footer.svelte';
	import { style } from 'svelte-body';
	import { onMount } from 'svelte';
	import CaseStudy from '$/components/casestudy/CaseStudy.svelte';
	import StatsCard from '$/components/casestudy/StatsCard.svelte';
	import FullWidthImage from '$/components/casestudy/FullWidthImage.svelte';

    const statistics = [{'stats': '+112%', 'statsTitle': 'page views in<br>first 3 months'},
                        {'stats': '+403%', 'statsTitle': 'increase in<br>monthly users in<br>first 12 months'},
                        {'stats': '+120K', 'statsTitle': 'impressions in<br>1 month campaign'},
                        {'stats': '+1', 'statsTitle': 'Listed in Google<br>News on first<br>application'}]

	let headingRef;
	let gap = 0;

	function handleGap(event) {
		gap = event.detail;

		// Set dynamic padding top
		const element = document.getElementById('main-content');
		if (window.innerWidth > 768 && element && headingRef) {
			element.style.top = (headingRef.offsetHeight + gap + (document.documentElement.scrollWidth * 0.06) - 60) + 'px'; // Set the padding as required
			console.log(headingRef.offsetHeight)	
		} else {
			element.style.top = '-8vh';
		}
	}

	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>

<svelte:head>
	<title>Case Study / Volta</title>
</svelte:head>

<svelte:body use:style={{ background: 'white' }} />

<div class="workslugcontainer">
	<CaseStudy on:message={handleGap} bind:headingRef={headingRef} 
		title="Volta: Future Positive" 
		description="An online platform focusing on sustainable living.<br>Volta’s mission is to encourage as many people as<br>possible to transition to a more sustainable lifestyle."
		backgroundColor="#EE6338"
		color="#FFB436"
		btnColor="btn-white"
		borderColor="white"
		subheadingColor="white"
		/>

	<div id="main-content" class="main-content">

		<StatsCard statistics={statistics} backgroundColor="#FFB436" />

		<div class="hero-section">
			<div class="volta-container"></div>
		</div>
	
		<div class="content-section">
			<div class="content-card-row">
				<div class="content-card-row-field" style="background: #EE6338">
					<div class="card-content-preheader">Increase in page</div>
					<div class="card-content-title" style="color: #FFB436">
						+112%
					</div>
					<div class="card-content-desc" style="color: white;">
						With a concerted focus on engaging, original and consistent content from rigo, Volta quickly saw their readership numbers grow with a 112% increase in page views in just the first 3 months of engagement.
					</div>
				</div>
				<div class="content-card-row-field" style="background: #FFB436">
					<div class="card-content-preheader">Total words written &lt; </div>
					<div class="card-content-title" style="color: #EE6338;">100,000</div>
					<div class="card-content-desc">With a concerted focus on engaging, original and consistent content from rigo, Volta quickly saw their readership numbers grow with a 112% increase in page views in just the first 3 months of engagement.</div>
				</div>
			</div>
			<div class="content-card-row">
				<div class="content-card-row-field" style="background: #36E0BA">
					<div class="card-content-preheader">Total Impressions &gt;</div>
					<div class="card-content-title" style="color: #6562F5">
						120,000
					</div>
					<div class="card-content-desc" style="color: black;">Highly targeted LinkedIn campaigns were run to increase touch points with select advertising partners to secure high profile meetings.</div>
				</div>
				<div class="content-card-row-field" style="background: #6562F5">
					<div class="card-content-preheader">User increase +268%<br>Session increase +227%</div>
					<div class="card-content-title" style="color: #36E0BA; position: display;">
						<img src="/casestudy/user-increase.svg" alt="rigo">
					</div>
					<div class="card-content-desc" style="color: white">During the duration of the campaign, the number of website users from social platform redirects increased by 268% (+947 users in total). As compared to the previous period, website sessions also increased by 226.95% or +1,092 sessions!</div>
				</div>
			</div>
		</div>
	
		<div class="hero-section">
			<div class="extreme-container">
				<div class="extreme-card-container">
					<div class="extreme-card">
						<div class="extreme-title">Challenge</div>
						<div class="extreme-desc">Volta is a rapidly expanding source of inspirational news. rigo helped them to make the leap and attract an even larger audience, while maintaining the scale and quality of their content.</div>
					</div>
					<div class="extreme-card">
						<div class="extreme-title">Solution</div>
						<div class="extreme-desc">rigo created regular news articles, interviews and campaigns to drive engagement. From pitching to production, the team integrated with Volta to deliver a seamless service.</div>
					</div>
					<div class="extreme-card">
						<div class="extreme-title">Extreme E</div>
						<div class="extreme-desc">
							Volta was given the nod as a trusted outlet to report on Extreme E’s 2021 inaugural season, focusing on the organisation’s legacy projects.
							rigo attended the Ocean X Prix in Lac Rose, Senegal over the course of a week, creating live event coverage, conducting interviews with big names - including Nico Rosberg - and supporting the Volta team as a key coverage provider for the championship.
						</div>
					</div>
				</div>
				<div style="flex: 0 0 70%; width: 100%"><img style="width: 100%" src="/casestudy/beach.png" alt="rigo"></div>
			</div>
		</div>

		<div class="hero-section">
			<FullWidthImage backgroundImg="/casestudy/desert-car.png" />
		</div>

		<div class="hero-section">
			<div class="alex-turner-container">
				<div>
					<div class="alex-turner-title">Clare Farah<br>Co-founder, Volta</div>
					<div class="alex-turner-desc">
						“Prior to working with rigo, we were outsourcing much of our articles to a whole plethora of journalists and content writers.<br>
						rigo has changed this for us entirely now within no time. They were generating and delivering excellent SEO-optimised content and engaging on our socials whilst simultaneously generating new marketing plans to support our directives.<br>
						To us, they’re not just a company we outsource to, they’re integral to our business now and part of the team!”
					</div>
				</div>
				<div>
					<div class="alex-turner-title">Pete Adams<br>Copywriter, Rigo</div>
					<div class="alex-turner-desc">
						“Work on the account evolved over time, from a more passive news-watching approach to actively going out to generate original stories of our own.<br>
						Using best practice journalistic techniques, stories needed to be backed up with sources, fitting in with the future-positive narrative of the client.<br>
						Senegal [to cover Extreme E] was undoubtedly a highlight, as it let me firmly put my journalist hat on and become that roving reporter I’ve always dreamt of being.”
					</div>
				</div>
			</div>
		</div>

		<div style="display: flex; padding: 5vw 36px; background-color: white; justify-content: space-evenly;">
			<Footer marginleft={'0'} marginright={'0'} href="/casestudy/smf">SMF</Footer>
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
		top: 16vh;
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
	.statistics-section {
		display: flex;
		flex-direction: column;
		padding: 4rem 4rem 0rem 4rem;
	}
	.hero-section {
		display: flex;
		padding: 2rem 36px 0rem 36px;
	}
	.extreme-container {
		display: flex;
	}
	.extreme-card-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 4rem;
	}
	.extreme-title {
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: 700;
		font-size: 35px;
		line-height: 100%;
		color: #181818;
	}
	.extreme-desc {
		font-family: 'Satoshi';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 160%;
		color: #12182E;
	}
	.volta-container {
		background-image: url('/casestudy/volta-content.png');
		background-size: cover; 
		background-position: center; 
		background-repeat: no-repeat;
		height: 813px; // 237px;
		width: 100%;
	}
	.content-section {
		display: flex;
		flex-direction: column;
		padding: 0rem 36px 0rem 36px;
	}
	.content-card-row {
		display: flex;
		flex-direction: wrap;
	}
	.content-card-row-field {
		padding: 6rem 0rem;
		display: flex;
		flex-basis: 50%;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		justify-content: center;
	}
	.card-content-preheader {
		font-family: 'Bebas Neue';
		font-style: normal;
		font-size: 35px;
		line-height: 110%;
		color: #FFFFFF;
		text-align: center;
		font-weight: bold;
	}
	.card-content-title {
		font-family: 'Bebas Neue';
		font-style: normal;
		font-size: 90px;
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
		width: 56%;
	}

	.alex-turner-section {
		display: flex;
		padding: 4rem 4rem 0rem 4rem;
	}

	.alex-turner-container {
		padding: 4rem 4rem 4rem 0;
		display: flex;
		flex-direction: column;
		background-image: url('/casestudy/space.png');
		background-position: right;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100%;
		width: 100%;
		justify-content: flex-end;
		align-items: flex-end;
		gap: 4rem;
	}

	.alex-turner-container > div {
		width: 30%;
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
		padding: 4rem 4rem 0rem 4rem;
		gap: 6rem;
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

	@media(max-width: 1024px) {
		.extreme-container {
			flex-direction: column;
		}
		.extreme-card-container {
			gap: 2rem;
		}
		.alex-turner-container > div {
			width: 48%;
		}
	}

	@media(max-width: 768px) {
		.main-content {
			position: relative;
			top: -8vh;
		}
		.hero-section {
			padding: 2rem 2rem 0rem 2rem;
		}
		.volta-container {
			height: 237px;
		}
		.content-section {
			padding: 0rem;
		}
		.content-card-row {
			flex-direction: column;
		}
		.challenge-section {
			flex-direction: column;
			gap: 4rem;
			padding: 2rem;
		}
		.alex-turner-section {
			display: flex;
			padding: 0rem 2rem 2rem 2rem;
		}
		.alex-turner-container > div {
			width: 50vw;
		}
	}

	@media(max-width: 425px) {
		.card-content-title {
			font-size: 31px;
		}
		.extreme-card-container {
			padding: 2rem;
		}
		.alex-turner-container > div {
			width: 80%;
		}
	}
</style>
