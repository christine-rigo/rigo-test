<script>
	import { navColor } from '$/stores/nav.store';
	import Footer from '$/components/Footer.svelte';
	import { style } from 'svelte-body';
	import { onMount } from 'svelte';
	import CaseStudy from '$/components/casestudy/CaseStudy.svelte';
	import StatsCard from '$/components/casestudy/StatsCard.svelte';
	import FullWidthImage from '$/components/casestudy/FullWidthImage.svelte';

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

    const statistics = [{'stats': 280, 'statsTitle': 'traffic<br>to site', 'presign': '+', 'postsign': '%'},
                        {'stats': 1, 'statsTitle': 'Google<br>rank', 'presign': 'PAGE', 'postsign': ''},
                        {'stats': 120, 'statsTitle': 'page<br>engagement', 'presign': '+', 'postsign': '%'},
                        {'stats': 40, 'statsTitle': 'bounce<br>rate', 'presign': '-', 'postsign': '%'}]

	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>

<svelte:head>
	<title>Case Study / Gallagher</title>
</svelte:head>

<svelte:body use:style={{ background: 'white' }} />

<div class="workslugcontainer">
	<CaseStudy on:message={handleGap} bind:headingRef={headingRef} 
		title="Axe Block Management" 
		description="Axe Block Management needed a new website that reflected their<br>extensive experience and set them up to grow their business online."
		backgroundColor="var(--app-color-navy)"
		color="var(--app-color-red)"
		btnColor="btn-red"
		borderColor="var(--app-color-red)"
        subheadingColor="white"
		/>

	<div id="main-content" class="main-content">

		<StatsCard statistics={statistics} backgroundColor="var(--app-color-red)" color="white" />

		<div class="hero-section">
			<FullWidthImage backgroundImg="/casestudy/axeblock-content.png" />
		</div>
	
		<div class="content-section">
			<div class="content-card-row">
				<div class="content-card-row-field" style="background: #EE6338; flex: 1">
					<div class="card-content-preheader"></div>
					<div class="card-content-title" style="color: #FFB436">Service Delivery Included</div>
					<div class="card-content-desc" style="color: white;">Brand build & logo design, Website design, Technology migration from WIX to WordPress, Implemented a Wordpress build, 3D Map design, Copywriting & sitewrite, Case study development, Video testimonials, Digital marketing campaign, Social media management, Setting up Google Analytics tracking, Blog writing</div>
				</div>
				<div class="content-card-row-field" style="background: #FFB436; flex: 1">
					<div class="card-content-title" style="color: #EE6338;">Site Requirements</div>
					<div class="card-content-desc">
                        <ul style="list-style-position: inside; padding: 0;">
                            <li>Fast, modern site</li>
                            <li>Search optimised</li>
                            <li>Distinct branding</li>
                            <li>Campaign-focused pages</li>
                            <li>Flexibility to grow</li>
                            <li>User-friendly CMS</li>
                        </ul>
                    </div> 
				</div>
			</div>
		</div>
	
		<div class="hero-section" style="padding-top: 1rem; padding-bottom: 1rem">
			<div class="extreme-container">
				<div class="extreme-card-container">
					<div class="extreme-card">
						<div class="extreme-title">Brand Development</div>
						<div class="extreme-desc">
                            Axe Block approached rigo with their requirements for a website build. But to achieve the client’s objectives, rigo identified a need to consolidate the brand vision.<br>
                            Included as part of the onboarding process, rigo led a brand exploration session with Axe Block’s director Mark and his team at their offices in Victoria, London.<br>
                            The focus was on understanding the leadership’s team vision of the business, their company values and culture.<br>
                            Rigo took the insights from this session and combined it with a deep dive into the analytics of Axe Block’s existing digital presence and their target audience’s activity online
                        </div>
					</div>
					<div class="extreme-card">
						<div class="extreme-title">Web Development</div>
						<div class="extreme-desc">
                            With the brand vision more tightly defined, rigo could overhaul the website design to incorporate the client’s wishes and deliver a design more inline with Mark and his team’s overall vision.<br>
                            Starting with a loose overview of the content requirements, rigo mapped out the user flow across the website, drip-feeding information to build a user’s understanding before presenting them with a compelling conversion action.<br>
                            Rigo’s designers took this and - in close collaboration with the development team - created a design that could be delivered at speed, while retaining the impact the client was looking for.<br>
                            Axe Block fed back with some final details and thoughts, before everything was handed across to rigo’s developers to bring to life.
                        </div>
					</div>
				</div>
				<div style="flex: 0 0 70%; width: 100%"><img style="width: 100%" src="/casestudy/the_office.png" alt="rigo"></div>
			</div>
		</div>
	
        <div class="hero-section" style="padding-bottom: 1rem;">
			<FullWidthImage backgroundImg="/casestudy/blank.png" />
		</div>

        <div class="hero-section">
			<FullWidthImage backgroundImg="/casestudy/axeblock_quote.png" />
		</div>

        <div class="challenge-section">
			<div style="flex: 0 0 30%">
				<div class="challenge-card-title">Rigo Approach</div>
				<div class="challenge-card-desc">Our approach to new websites is a little different from other agencies. We really want to get to know the companies we work with, so we can better understand exactly what their business needs are from their new website. Whether it’s a simple brochure site or a more complex Ecommerce platform or content management system, it’s crucial for us to build an understanding of what you are really trying to achieve before outlining our vision.</div>
			</div>
			<div style="flex: 0 0 70%">
				<div class="challenge-card-title">Solution</div>
				<div class="challenge-card-desc">
                    Through careful consultation between the management team and rigo’s developers, a solution was found which allowed Axe Block to move to a new platform that would achieve their objectives with minimal impact on their marketing budget and timelines.<br>
                    Rigo advised that with a Wordpress build they would have a lot more flexibility in terms of design and access to supporting plugins that could help the site stay up to date. A Wordpress build would also allow the provision of a really easy to use Content Management System (CMS) that the team could use to update the website themselves.<br>
                    For Axe Block Management we knew that the main focus for the site was to showcase the great work and vast experience that Mark and his team had amassed over their 40+ years of business within the block management sector. Although a new company, the team has been in the game for decades and over that time they had built up a reputation for great commitment to customer service, something which was really important for them to display clearly through the website.<br>
                    Mark, the director of the company, also had a pretty clear vision of how he wanted the site to look in terms of the colour scheme and graphics. He also was really focused on displaying the South West London presence of the business having over 20+ estates under management in the area. With this knowledge in mind we went about designing a site that was clean and crisp with stylistic visuals and a map which worked as a focal point highlighting the areas that Axe Block Management serves.
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
    @media(max-width: 1024px) {
		.extreme-container {
			flex-direction: column;
		}
		.extreme-card-container {
			gap: 2rem;
		}
	}
	.hero-section {
		display: flex;
		padding: 0rem 36px 0rem 36px;
	}
	.content-section {
		display: flex;
		flex-direction: column;
		padding: 0rem 36px 0rem 36px;
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
		background-image: url('/casestudy/axeblock_quote.png');
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
		padding: 5vw 36px;
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
			top: -8vh;
		}
		.hero-section {
			padding: 0rem 36px;
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
