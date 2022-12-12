<script lang="ts">
	import ScrollerIndicator from '$/components/ScrollerIndicator.svelte';
	import ServiceInformationalSection from '$/components/services/ServiceInformationalSection.svelte';
import ServicesPageXs from '$/components/services/ServicesPageXs.svelte';
	import ServicesSummary from '$/components/services/ServicesSummary.svelte';
	import SiBox from '$/components/services/SIBox.svelte';
	import Hr from '$/components/utils/Hr.svelte';
	import { navColor } from '$/stores/nav.store';
	import { browser } from '$app/env';
	import { inview } from 'svelte-inview';

	$: isChrome =
		browser &&
		'chrome' in window &&
		navigator.userAgent.includes('Edg') &&
		!('brave' in window.navigator);
</script>

<svelte:head>
	<title>Services / Rigo Agency</title>
</svelte:head>

<div class="services-page-container" class:is-chrome={isChrome}>
	<div class="hidden-xs">
		<section
			class="service services-home"
			style="--elevation: 0"
			use:inview={{ threshold: 0.3 }}
			on:enter={() => ($navColor = 'var(--app-color-navy-contrast)')}
		>
			<div class="inner">
				<div class="content">
					<div class="backdrop" />

					<div class="text-content">
						<h1>Services</h1>

						<div class="description">
							<Hr />

							<p>
								<br />
								Services developed from years of problem solving for brands just like yours.

								<br /><br />

								Elevate credibility with diligently crafted thought leadership content; create a
								website from scratch with persuasive copy, eye-catching design and seamless UX, or
								increase your lead flow with email marketing.
							</p>

							<br />

							<ScrollerIndicator href="#technical-services-section" />
						</div>
					</div>

					<div class="image">
						<img src="/services-img/baloon-71-72 1.png" alt="Hero banner" />
					</div>
				</div>
			</div>
		</section>

		<section
			class="service service-informational technical"
			id="technical-services-section"
			style="--elevation: 1"
			use:inview={{ threshold: 0.7 }}
			on:enter={() => ($navColor = 'var(--app-color-navy)')}
		>
			<ServiceInformationalSection discoverMoreHref="/technology">
				<svelte:fragment slot="title">technology</svelte:fragment>

				<svelte:fragment slot="info-boxes">
					<SiBox>
						<span slot="title">design websites</span>
						<span slot="description">
						ux, ui, site mapping, wireframing, brand engine, copy, full suite branding, brand refresh, 
						comerce strategy
						</span>
					</SiBox>

					<SiBox>
						<span slot="title">development</span>
						<span slot="description"> ecommerce, portfolio, cms, site crawl application, seo, blogs </span>
					</SiBox>

					<SiBox>
						<span slot="title">infrastructure</span>
						<span slot="description">design, ux, seo, copy and development. everything you need with rigo.</span>
					</SiBox>

					<SiBox>
						<span slot="title">skill set</span>
						<span slot="description">full stack development, cloud architecture, database architecture</span>
					</SiBox>
				</svelte:fragment>
			</ServiceInformationalSection>
		</section>

		<section class="service service-informational data" style="--elevation: 2">
			<ServiceInformationalSection discoverMoreHref="/data/gallagher">
				<svelte:fragment slot="title">data</svelte:fragment>

				<svelte:fragment slot="info-boxes">
					<SiBox>
						<span slot="title">seo</span>
						<span slot="description">
							start by finding your target search terms, them watch your traffic and leads grow as you
							climb through the ranks.
						</span>
					</SiBox>

					<SiBox>
						<span slot="title">data dashboard</span>
						<span slot="description">
							start by finding your target search terms, them watch your traffic and leads grow as you
							climb through the ranks.
						</span>
					</SiBox>

					<SiBox>
						<span slot="title">marketing intelligence</span>
						<span slot="description">
							Audits and analyse your content and that of your competitors’ to identify gaps and
							opportunities.
						</span>
					</SiBox>
				</svelte:fragment>
			</ServiceInformationalSection>
		</section>

		<section class="service service-informational creative" style="--elevation: 3">
			<ServiceInformationalSection discoverMoreHref="/creative/volta">
				<svelte:fragment slot="title">creative</svelte:fragment>

				<svelte:fragment slot="info-boxes">
					<SiBox>
						<span slot="title">original articles</span>
						<span slot="description">
							from idea to publication, thought leadership pieces to showcase your expertise and build
							trust with your customers
						</span>
					</SiBox>

					<SiBox>
						<span slot="title">tone of voice</span>
						<span slot="description">
							succinct messaging documents, or full brand consultations to overhaul your tone of
							voice. Do what’s needed.
						</span>
					</SiBox>

					<SiBox>
						<span slot="title">social</span>
						<span slot="description"> coming soon </span>
					</SiBox>

					<SiBox>
						<span slot="title"> branding </span>
						<span slot="description">
							make your new business real with the essential brand assets for launch
						</span>
					</SiBox>

					<SiBox>
						<span slot="title"> google News </span>
						<span slot="description">
							the content and experience needed to get your publication or website accepted to google
							news
						</span>
					</SiBox>
				</svelte:fragment>
			</ServiceInformationalSection>
		</section>

		<section
			class="service service-informational digital-advertising"
			style="--elevation: 4"
			use:inview={{ threshold: 0.4 }}
			on:enter={() => ($navColor = 'var(--app-color-navy)')}
		>
		<ServiceInformationalSection discoverMoreHref="/digital-advertising/volta-site-traffic">
				<svelte:fragment slot="title">digital advertising</svelte:fragment>

				<svelte:fragment slot="info-boxes">
					<SiBox>
						<span slot="title"> linkedin campaigns </span>
						<span slot="description">
							in-depth audience targeting and standout creative will get your business n front of the
							right audience
						</span>
					</SiBox>

					<SiBox>
						<span slot="title">paid search</span>
						<span slot="description">
							highly targeted cost-effective campaigns that drive quality interactions and attract
							leads
						</span>
					</SiBox>

					<SiBox>
						<span slot="title"> digital pr </span>
						<span slot="description">
							build relationships and share something that gets people talking
						</span>
					</SiBox>

					<SiBox>
						<span slot="title"> email marketing </span>
						<span slot="description">
							powerful automated email welcome series, nurture your contacts and leads into customers.
						</span>
					</SiBox>
				</svelte:fragment>
			</ServiceInformationalSection>
		</section>

		<section
			class="service summary"
			style="--elevation: 5"
			use:inview={{ threshold: 0.6 }}
			on:enter={() => ($navColor = 'var(--app-color-navy-contrast)')}
		>
			<ServicesSummary />
		</section>
	</div>

	<div class="servicespage-xs">
		<ServicesPageXs></ServicesPageXs>	
	</div>
</div>

<style lang="scss">
	.services-page-container {
		width: 100%;
		height: 100%;
		min-height: 100%;

		&.is-chrome :global(.inner) {
			transform: translate3d(0, 0, 0);
		}
	}

	* {
		color: var(--app-color-navy);
	}

	h1 {
        font-size: calc(2.375rem + 1.5vw);
    }
    @media (min-width: 1200px) {
        h1 {
            font-size: 5.5rem;
        }
    }

	.servicespage-xs {
		display: none;
	}
	@media(max-width: 425px) {
		.hidden-xs {
			display: none;
		}

		.servicespage-xs {
			display: flex;
		}
	}

	.service {
		--bgcolor: var(--app-color-navy);

		height: 98vh;
		width: 100%;

		position: relative;
		top: 0;

		:global(.inner) {
			position: absolute;
			z-index: var(--elevation);

			display: grid;
			grid-template-columns: 1fr;

			overflow: hidden;

			padding: 2rem 0 2rem 20vw;

			width: 100%;
			height: 100%;

			clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
			// clip: rect(0, auto, auto, 0);

			// @supports (-webkit-overflow-scrolling: touch) {
			// 	clip: unset;
			// 	clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
			// }
		}

		:global(.inner .content) {
			position: fixed;
			top: 2rem;
			left: 20vw;

			transform: scale3d(1, 1, 1);

			background-attachment: fixed;

			height: calc(100% - 4rem);
			width: calc(100% - 20vw);
		}

		:global(.backdrop) {
			display: flex;

			transform: scale3d(1, 1, 1);

			position: fixed;
			z-index: -1;
			top: 0;
			left: 0;

			background-color: var(--bgcolor);

			width: 100%;
			height: 100%;
		}

		&.service-informational {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		&.services-home .inner .content {
			--bgcolor: var(--app-color-navy);

			display: grid;
			grid-template-columns: 1fr 1fr;

			* {
				color: var(--app-color-navy-contrast);
			}

			.text-content {
				display: flex;
				flex-direction: column;
				gap: 2rem;
			}

			.description {
				align-self: flex-end;
				padding: 5rem 0rem 5rem 0rem;
				width: 75%;
			}

			.image {
				display: grid;
				place-items: center;
			}
		}

		&.technical {
			--bgcolor: var(--app-color-yellow);
		}

		&.data {
			--bgcolor: var(--app-color-green);
		}

		&.creative {
			--bgcolor: var(--app-color-red);
		}

		&.digital-advertising {
			--bgcolor: var(--app-color-blue);
		}

		&.summary {
			--bgcolor: var(--app-color-navy);
		}
	}

	@media(max-width: 1023px) {
		.service .inner .content {
			position: static;
		}
	}
</style>
