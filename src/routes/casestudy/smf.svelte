<script>
	import { navColor } from '$/stores/nav.store';
	import Footer from '$/components/Footer.svelte';
	import { style } from 'svelte-body';
	import { onMount } from 'svelte';
	import CaseStudy from '$/components/casestudy/CaseStudy.svelte';
    import StatsCard from '$/components/casestudy/StatsCard.svelte';
    import FullWidthImage from '$/components/casestudy/FullWidthImage.svelte';

    const statistics = [{'stats': '+300%', 'statsTitle': 'engagement'},
                        {'stats': '-40%', 'statsTitle': 'bounce rate'},
                        {'stats': '+80', 'statsTitle': 'leads per<br>month'},
                        {'stats': '+100%', 'statsTitle': 'enquiries'}]
	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>

<svelte:head>
	<title>Case Study / SMF</title>
</svelte:head>

<svelte:body use:style={{ background: 'white' }} />

<div class="workslugcontainer">
	<CaseStudy
		title="SMF: Woodwork Specialists" 
		description="rigo transformed SMF’s dull e-commerce site<br>into a beautiful gallery portfolio; from selling a<br>product, to selling a dream home."
		backgroundColor="#7270FF"
		color="#3BF0C8"
		btnColor="btn-white"
		borderColor="white"
		subheadingColor="white"
		/>

	<div class="main-content">

        <StatsCard statistics={statistics} backgroundColor="" />

		<div class="hero-section">
			<FullWidthImage backgroundImg="/casestudy/smf-content.png" />
		</div>

        <div class="hero-section brand-design-container">
            <div class="smf-container">
                <img src="/casestudy/smf-chair.png" alt="rigo" style="width: 100%">
            </div>
            <div class="brand-design-specs">
                <div>
                    <div class="challenge-card-title">Challenge</div>
				    <div class="challenge-card-desc">
                        Square Metre Flooring is a family-run business that has been operating in Fulham for over 15 years. They specialise in providing high-quality, sustainable wood flooring and interior design solutions to both residential and commercial clients. The business had an outdated website that was not optimised for mobile, difficult to navigate, and lacked essential information about their products and services.
                    </div>
                </div>
                <div>
                    <div class="challenge-card-title">Goals & Targets</div>
				    <div class="challenge-card-desc">
                        Our primary goal was to develop a modern and responsive website that accurately represents the business’ brand and values.  We aimed to make the website user-friendly and easy to navigate, with clear and concise information about products and installation services. We also wanted to improve the website's search engine optimization (SEO) to increase its visibility and attract more organic traffic.
                    </div>
                </div>
            </div>
        </div>
	
        <div class="hero-section">
			<FullWidthImage backgroundImg="/casestudy/smf-vid.png" />
		</div>

        <div class="hero-section">
			<FullWidthImage backgroundImg="/casestudy/smf-turner.png" />
		</div>

        <div class="challehero-section">
			<div>
				<div class="challenge-card-title">Brand & Design</div>
				<div class="challenge-card-desc">rigo focused on clean, modern lines and a neutral colour palette to showcase the beauty and natural warmth of the flooring. We incorporated a Scandinavian design feel as our research showed that this was the most popular search trend across  their target audience base.</div>
			</div>
			<div>
				<div class="challenge-card-title">Development</div>
				<div class="challenge-card-desc">We developed the website using our bespoke building software and integrated a content management system (CMS) to provide the business with flexibility and control over their website content. We ensured that the website was fully responsive and optimised for all devices. </div>
			</div>
			<div>
				<div class="challenge-card-title">Website Content</div>
				<div class="challenge-card-desc">We worked closely with the SMF to develop clear and concise content that accurately represented their brand and values. We incorporated relevant keywords and phrases throughout the website to improve SEO. Content was kept minimalist where possible as the core focus was on the design.</div>
			</div>
			<div>
				<div class="challenge-card-title">SEO</div>
				<div class="challenge-card-desc">We conducted extensive keyword research to identify relevant and high-traffic keywords and phrases that would improve the website's search engine rankings especially within a localised search area. We also implemented a content marketing strategy  to increase the website's visibility and drive traffic.</div>
			</div>
		</div>

        <div class="hero-section">
			<FullWidthImage backgroundImg="/casestudy/smf-full-img-2.png" />
		</div>

        <div class="hero-section" style="">
			<FullWidthImage backgroundImg="/casestudy/smf-layout.png" />
		</div>

        <div class="hero-section" style="">
			<div class="alex-turner-container" style="background-image: url('/casestudy/smf-the-results.png');">
				<div>
					<div class="alex-turner-title">The Results</div>
					<div class="alex-turner-desc">
                        The new website took 6 weeks to develop, from initial consultation to research, design and build stages and the results have been impressive. <br><br>
                        The website's bounce rate has decreased by -40%, and the average session duration has increased by 245%, indicating that users are finding the website more engaging and user-friendly. Organic traffic to the website has increased by over 365% and rising, following its first 4 months of being live and the website's search engine ranking has improved significantly, resulting in a higher number of leads and conversions for the company.
                    </div>
				</div>
			</div>
		</div>
	
		<div style="display: flex; padding: 5vw 2rem; background-color: white; justify-content: space-evenly;">
			<Footer marginleft={'2vw'} marginright={'2vw'} href="/casestudy/gallagher">Gallagher</Footer>
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
		top: 30vh;
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
		padding: 2rem 4rem 0rem 4rem;
	}
    .brand-design-container {
        padding: 2rem 4rem 0rem 4rem;
    }
    .brand-design-specs {
        display: flex;
        flex: 0 0 30%;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 2rem;
    }
	.alex-turner-container {
		padding: 35vh 4rem 4rem 0;
		display: flex;
		background-image: url('/casestudy/alex-turner.png');
		background-position: right;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100%;
		width: 100%;
		justify-content: flex-end;
	}

	.alex-turner-container > div {
		width: 25vw;
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

	.challehero-section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 4rem 4rem 4rem 4rem;
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
        .brand-design-container {
            padding: 2rem 4rem 0rem 4rem;
            display: flex;
            flex-direction: column;
        }
        .brand-design-specs {
            gap: 2rem;
            padding: 4rem 2rem 2rem 2rem;
        }
    }

	@media(max-width: 768px) {
        .main-content {
			position: relative;
			top: -10vh;
		}
		.hero-section {
			padding: 2rem 2rem 0rem 2rem;
		}
		.challehero-section {
			flex-direction: column;
			gap: 4rem;
			padding: 2rem;
		}
		.alex-turner-container > div {
			width: 50vw;
		}

		.alex-turner-container {
			padding: 35vh auto;
		}
        .brand-design-container {
            padding: 2rem 2rem 0rem 2rem;
            display: flex;
            flex-direction: column;
        }
        .brand-design-specs {
            gap: 2rem;
            padding: 4rem 2rem 2rem 2rem;
        }
	}

	@media(max-width: 425px) {
        .alex-turner-container {
			display: flex;
			justify-content: center;
			padding: 16rem 0.5rem 4rem 0.5rem;
		}
	}
</style>
