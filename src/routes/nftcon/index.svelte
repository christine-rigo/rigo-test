<script>
	import { navColor } from '$/stores/nav.store';
	import Footer from '$/components/Footer.svelte';
	import { style } from 'svelte-body';
	import { onMount } from 'svelte';
	import Carousel from '$/components/casestudy/Carousel.svelte';
	import Button from '$/components/Button.svelte';
	import TriadCard from '$/components/casestudy/TriadCard.svelte';
	import AscensionCard from '$/components/casestudy/AscensionCard.svelte';
	import ExtremeCard from '$/components/casestudy/ExtremeCard.svelte';
	import CaseStudy from '$/components/casestudy/CaseStudy.svelte';
	import ChallengeCard from '$/components/casestudy/ChallengeCard.svelte';
	import DropUsALine from '$/components/DropUsALine.svelte';
	import Logo from '$/components/svg/Logo.svelte';

	const carouselList = [
		{
			index: '01',
			img: '/casestudy/gallagher-carousel-1.png',
			text: 'To ensure comparable data sets rigo only analysed articles with 2%+ website traffic, this helped us identify the articles driving the conversation in the sector',
		},
		{
			index: '02',
			img: '/casestudy/gallagher-carousel-2.png',
			text: 'When producing new articles, rigo addressed Gallagher’s value proposition, capabilities and thought leader status to create content with a purpose',
		},
	];

	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>

<svelte:head>
	<title>NFTCON Miami / Rigo Agency</title>
</svelte:head>

<svelte:body use:style={{ background: 'var(--app-color-lunarblue-contrast)' }} />

<div class="">
	<section class="navigation-container">
		<div><a href="/services">Services</a></div>
		<div><a href="/work">Work</a></div>
		<button
			class="contact-button-tf"
			data-tf-popup="EHpJH0kW"
			data-tf-opacity="100"
			data-tf-size="100"
			data-tf-iframe-props="title=Rigo Landing Page Trial"
			data-tf-transitive-search-params
			data-tf-medium="snippet"
			style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#0445AF;color:#fff;font-size:20px;border-radius:25px;padding:0 33px;font-weight:bold;height:50px;cursor:pointer;line-height:50px;text-align:center;margin:0;text-decoration:none;"
			>Contact</button
		><script src="//embed.typeform.com/next/embed.js"></script>
	</section>

	<section class="main-container">
		<div class="main-container-1">
			<a href="/"><Logo scale={2} /></a>
		</div>
		<div class="main-container-2">
			<div class="main-container-2-subheading-1">Websites & marketing for the blockhain space</div>
			<div class="main-container-2-subheading-2">
				From NFTs to tokens & breakthrough projects, from concept to mint day - meet your new
				marketing partner.
			</div>
		</div>
		<div class="main-container-3">
			<Button borderColor="white" btnColor="btn-white" cta="Contact Us" />
		</div>
	</section>

	<section class="services-container" style="position: relative;">
		<div class="services-div">
			<div class="service-card" style="background-color: var(--app-color-yellow)">
				<div class="service-header">+ TECHNICAL</div>
				<div class="service-offers">
					<div class="service-offer">
						<div class="service-offer-title">Brochure Websites</div>
						<div class="service-offer-desc">
							Design, UX, SEO, Copy and Development, Everything you need with Rigo.
						</div>
					</div>
					<div class="service-offer">
						<div class="service-offer-title">Crypto / NFT</div>
						<div class="service-offer-desc">Coming soon</div>
					</div>
					<div class="service-offer" />
					<div class="service-offer" />
					<div class="service-offer" />
				</div>
			</div>
			<div class="service-card" style="background-color: var(--app-color-green)">
				<div class="service-header">+ DATA</div>
				<div class="service-offers">
					<div class="service-offer">
						<div class="service-offer-title">Marketing Intelligence</div>
						<div class="service-offer-desc">
							Audits and analyse your content and that of your competitors’ to identify gaps and
							opportunities.
						</div>
					</div>
					<div class="service-offer">
						<div class="service-offer-title">data dashboard</div>
						<div class="service-offer-desc">
							start by finding your target search terms, them watch your traffic and leads grow as
							you climb through the ranks.
						</div>
					</div>
					<div class="service-offer">
						<div class="service-offer-title">seo</div>
						<div class="service-offer-desc">
							start by finding your target search terms, them watch your traffic and leads grow as
							you climb through the ranks.
						</div>
					</div>
					<div class="service-offer" />
					<div class="service-offer" />
				</div>
			</div>
			<div class="service-card" style="background-color: var(--app-color-red)">
				<div class="service-header">+ CREATIVE</div>
				<div class="service-offers">
					<div class="service-offer">
						<div class="service-offer-title">original articles</div>
						<div class="service-offer-desc">
							from idea to publication, thought leadership pieces to showcase your expertise and
							build trust with your customers
						</div>
					</div>
					<div class="service-offer">
						<div class="service-offer-title">tone of voice</div>
						<div class="service-offer-desc">
							succinct messaging documents, or full brand consultations to overhaul your tone of
							voice. Do what’s needed.
						</div>
					</div>
					<div class="service-offer">
						<div class="service-offer-title">branding</div>
						<div class="service-offer-desc">
							make your new business real with the essential brand assets for launch
						</div>
					</div>
					<div class="service-offer">
						<div class="service-offer-title">google news</div>
						<div class="service-offer-desc">
							the content and experience needed to get your publication or website accepted to
							google news
						</div>
					</div>
					<div class="service-offer">
						<div class="service-offer-title">social</div>
						<div class="service-offer-desc">coming soon</div>
					</div>
				</div>
			</div>
			<div class="service-card" style="background-color: var(--app-color-lunarblue)">
				<div class="service-header">+ DIGITAL ADVERTISING</div>
				<div class="service-offers">
					<div class="service-offer">
						<div class="service-offer-title">linkedin campaigns</div>
						<div class="service-offer-desc">
							in-depth audience targeting and standout creative will get your business n front of
							the right audience
						</div>
					</div>
					<div class="service-offer">
						<div class="service-offer-title">paid search</div>
						<div class="service-offer-desc">
							highly targeted cost-effective campaigns that drive quality Interactions and attract
							leads
						</div>
					</div>
					<div class="service-offer">
						<div class="service-offer-title">digital pr</div>
						<div class="service-offer-desc">
							build relationships and share something that gets people talking
						</div>
					</div>
					<div class="service-offer">
						<div class="service-offer-title">email marketing</div>
						<div class="service-offer-desc">
							powerful automated email welcome series, nurture your contacts and leads into
							customers.
						</div>
					</div>
					<div class="service-offer" />
				</div>
			</div>
		</div>
	</section>

	<section class="gif-container">
		<div class="gif-card">
			<img
				class="static"
				style="width: 100%; height: auto; max-height: 712px;"
				src="/nftcon/static_gif_1.png"
				alt="rigo"
			/>
			<img
				class="active"
				style="width: 100%; height: auto; max-height: 712px;"
				src="/nftcon/PlanetXolo.gif"
				alt="rigo"
			/>
		</div>
		<div class="gif-card">
			<img
				class="static"
				style="width: 100%; height: auto; max-height: 712px;"
				src="/nftcon/static_gif_2.png"
				alt="rigo"
			/>
			<img
				class="active"
				style="width: 100%; height: auto; max-height: 712px;"
				src="/nftcon/NFTCON.gif"
				alt="rigo"
			/>
		</div>
		<div class="gif-card">
			<img
				class="static"
				style="width: 100%; height: auto; max-height: 712px;"
				src="/nftcon/static_gif_3.png"
				alt="rigo"
			/>
			<img
				class="active"
				style="width: 100%; height: auto; max-height: 712px;"
				src="/nftcon/Arkh.gif"
				alt="rigo"
			/>
		</div>
	</section>

	<section class="contact-container">
		<DropUsALine />
	</section>

	<section class="footer-container">
		<Footer marginright="0rem" href="/">Rigo Agency</Footer>
	</section>
</div>

<style lang="scss">
	* {
		--color: white;
		--color-contrast: var(--app-color-lunarblue);

		color: var(--color);
	}

	:global(::selection) {
		background: var(--color);
		color: var(--color-contrast);
	}

	.navigation-container {
		padding: 2.5vw 0vw;
		margin: auto;
		position: absolute;
		left: 0;
		right: 0;
		margin-left: 0;
		margin-right: 0;
		width: 100vw;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 3vw;

		font-family: 'Satoshi';
		font-style: normal;
		font-weight: 700;
		font-size: 12px;
		line-height: 16px;
		color: #faf5ee;
		cursor: pointer;
	}

	.main-container {
		background: var(--app-color-lunarblue) url('/nftcon/playupwards.svg') no-repeat top left;
		padding: 0vw 21vw;
		height: 70vh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;

		gap: 4vw;

		.main-container-1 {
			display: flex;
			justify-content: center;
		}

		.main-container-2 {
			display: flex;
			flex-direction: column;
			justify-content: center;

			gap: 1vw;

			.main-container-2-subheading-1 {
				font-family: 'Satoshi';
				font-style: normal;
				font-weight: 400;
				font-size: 16px;

				color: var(--app-color-green);
				letter-spacing: 0.15em;

				text-transform: uppercase;
			}

			.main-container-2-subheading-2 {
				font-family: 'Bebas Neue';
				font-style: normal;
				font-weight: 400;
				font-size: 40px;
				line-height: 36px;

				color: white;
				text-transform: uppercase;
			}
		}
	}
	@media (max-width: 425px) {
		.main-container {
			padding: 0vw 9vw;
			height: 100vh;
		}
	}

	.services-container {
		display: flex;
		flex-direction: column;

		.services-div {
			margin-left: 2vw;
			padding-left: 5vw;
			background: url('/nftcon/services services services services services services services services.svg')
				repeat-y left top;
		}

		.service-card {
			padding: 2vw 4vw;
			cursor: pointer;

			.service-header {
				font-family: 'Satoshi';
				font-style: normal;
				font-weight: 700;
				font-size: 50px;
				line-height: 40px;
			}

			.service-offers {
				padding-top: 2vw;
				display: flex;
				flex-direction: row;

				.service-offer {
					flex: 1 0 20%;
					.service-offer-title {
						font-family: 'Bebas Neue';
						font-style: normal;
						font-weight: 400;
						font-size: 25px;
						line-height: 25px;
						color: #12182e;
						text-transform: uppercase;
					}
					.service-offer-desc {
						padding-top: 1vw;
						font-family: 'Satoshi';
						font-style: normal;
						font-weight: 400;
						font-size: 13px;
						line-height: 140%;
						color: #12182e;
						text-transform: uppercase;
					}
				}
			}
		}
	}
	@media (max-width: 425px) {
		.services-container {
			.services-div {
				margin-left: 0vw;
				padding-left: 0vw;
			}
			.service-card {
				padding: 4vw 4vw;
				.service-offers {
					padding: 12vw 0vw;
					flex-direction: column;
					gap: 4vw;
					.service-offer {
						flex: 1 0 100%;
					}
				}
			}
		}
	}

	.gif-container {
		display: flex;
		flex-direction: row;

		.gif-card {
			flex: 1 0 32%;
			position: relative;
		}

		.static {
			position: absolute;
		}
		.static:hover {
			opacity: 0;
		}
	}
	@media (max-width: 425px) {
		.gif-container {
			flex-direction: column;
			.gif-card {
				flex: 1;
				position: relative;
			}
		}
	}

	.contact-container {
		padding: 4vw 8vw;
	}
	@media (max-width: 425px) {
		.contact-container {
			padding: 16vw 8vw;
		}
	}

	.footer-container {
		padding: 4vw 8vw;
		background-color: var(--app-color-lunarblue);
	}
	@media (max-width: 425px) {
		.footer-container {
			padding: 16vw 8vw;
		}
	}
</style>
