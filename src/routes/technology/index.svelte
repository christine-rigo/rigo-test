<script lang="ts">
	import { inview } from 'svelte-inview';
	import Footer from '$/components/Footer.svelte';
	import Card from '$/components/technology/ImageTextCard.svelte';
	import RollingText from '$/components/technology/RollingText.svelte';
	import FullpageSlider from '$/components/technology/FullpageSlider.svelte';
	import CaseStudy from '$/components/technology/CaseStudyCard.svelte';

	// import function to register Swiper custom elements
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();

	// inview vars
	let vidBannerInview: boolean;
	let introInview: boolean;

	let stepsSliderInview: boolean;
	// let introInview: boolean;

	const strengths = [
		{
			title: 'combining realistic goals',
			image: '/technology/strength1.png',
			description:
				"We understand your business's needs and align them with set targets to help you achieve measurable success.",
		},
		{
			title: 'and a versatile support structure',
			image: '/technology/strength2.png',
			description:
				'Our services include regular updates, security checks and backups to keep your website up-to-date. Our team is also skilled in cloud hosting support. Your website will run smoothly at all times.',
		},
		{
			title: 'with creative experience',
			image: '/technology/strength3.png',
			description:
				"Whether you're looking to create a brand-new website or upgrade an existing one, our creative team will wow you with high quality, visually stunning designs that exceed expectations!",
		},
	];
	const caseStudy = [
		{
			image: '',
			link: '/casestudy/volta',
			project_name: 'VOLTA',
			title: 'VOLTA',
			description:
				'An online platform focusing on sustainable living. Volta’s mission is to encourage As many people as possible to transition to a more sustainable lifestyle.',
			metrics: [
				{
					pre: '+',
					value: 112,
					append: '%',
					text: 'page views in first 3 months',
				},
				{
					pre: '+',
					value: 403,
					append: '%',
					text: 'increase in monthly users in first 12 months',
				},
				{
					pre: '+',
					value: 120,
					append: 'K',
					text: 'impressions in 1 month campaign',
				},
				{
					pre: '+',
					value: 1,
					append: '',
					text: 'Listed in Google News on first application',
				},
			],
		},
		{
			image: '/technology/tn-cs2.webp',
			project_name: 'GALLAGHER',
			link: '/casestudy/volta',
			title: 'GALLAGHER',
			description: 'Global insurance broker, risk management expert & business consultancy',
			metrics: [
				{
					pre: '+',
					value: 3,
					append: '',
					text: 'month campaign',
				},
				{
					pre: '+',
					value: 5,
					append: '',
					text: 'competitors scored',
				},
				{
					pre: '+',
					value: 30,
					append: '',
					text: 'key content pieces created',
				},
				{
					pre: '+',
					value: 29,
					append: 'K',
					text: 'words written',
				},
			],
		},
		{
			image: '',
			link: '#',
			project_name: 'Axe block',
			title: 'Axe block',
			description:
				'Axe Block Management needed a new website that reflected their extensive experience and set them up to grow their business online',
			metrics: [
				{
					pre: '+',
					value: 100,
					append: '%',
					text: 'engagement',
				},
				{
					pre: '-',
					value: 35,
					append: '%',
					text: 'bounce rate',
				},
				{
					pre: '+',
					value: 220,
					append: '%',
					text: 'social media impact',
				},
				{
					pre: '+',
					value: 260,
					append: '%',
					text: 'enquiries increase',
				},
			],
		},
	];
	const csFeature = {
		image: '',
		project_name: 'SMF',
		title: 'High end woodwork specialists',
		description:
			'rigo transformed SMF’s dull e-commerce site into a beautiful gallery portfolio; from selling a product, to selling a dream home.',
		metrics: [
			{
				pre: '+',
				value: 300,
				append: '%',
				text: 'engagement',
			},
			{
				pre: '-',
				value: 40,
				append: '%',
				text: 'bounce rate',
			},
			{
				pre: '+',
				value: 80,
				append: '',
				text: 'leads per month',
			},
			{
				pre: '',
				value: 100,
				append: '%',
				text: 'enquiries',
			},
		],
	};
</script>

<svelte:head>
	<title>Technology / Rigo Agency</title>
</svelte:head>

<div class="main">
	<section
		class="video-banner snap"
		use:inview={{ rootMargin: '-50px', unobserveOnEnter: true }}
		on:change={({ detail }) => {
			vidBannerInview = detail.inView;
		}}
	>
		<video autoplay loop muted playsinline>
			<source src="https://landing.sqmflooring.co.uk/rigo_v4.mp4" type="video/mp4" />
		</video>
		<!-- <button class:animate={vidBannerInview}
			><img src="/technology/play-button.png" alt="play button" /></button
		> -->
	</section>

	<section
		class="intro snap"
		use:inview={{ threshold: 0.3, unobserveOnEnter: false }}
		on:change={({ detail }) => {
			introInview = detail.inView;
		}}
	>
		<div class="round-text" class:animate={introInview}>
			<span class="first">rigo creates impactful web experiences.</span>
			<span class="second"
				>Our expert team promises success at every stage of your project's journey</span
			>
		</div>
		<div class="container">
			<h2>
				Create <span class="big-text" class:animate={introInview}>big</span> brand experiences
			</h2>
			<h2>
				Without a <br /> <span class="big-brand" class:animate={introInview}>big brand budget</span>
			</h2>
			<p>
				As an experienced website development company we understand that every business is unique.
				No matter the size or scale of the projects we undertake, our services are always tailored
				to your demands.
			</p>
			<button
				class="contact-button"
				data-tf-popup="EHpJH0kW"
				data-tf-opacity="100"
				data-tf-size="100"
				data-tf-iframe-props="title=Rigo Landing Page Trial"
				data-tf-transitive-search-params
				data-tf-medium="snippet">Start your ascent</button
			><script src="//embed.typeform.com/next/embed.js"></script>
		</div>
	</section>

	<section class="benefits first">
		<div class="container">
			<div class="text">
				<h2>
					Work <br /> with <br /> experts
				</h2>
			</div>
			<div class="image">
				<img src="/technology/sign.png" alt="sign" />
			</div>
		</div>
	</section>

	<section class="benefits second">
		<div class="container">
			<div class="text">
				<p>
					“To us, they’re not just a company we outsource to, they’re integral to our business now
					and part of the team.”<br /><br />
					Clare farah<br />co-founder, volta
				</p>
				<h2>
					Fullstack,<br /> front-end,<br /> back-end.
				</h2>
			</div>
			<div class="image">
				<img src="/technology/plane.png" alt="airplane" />
			</div>
		</div>
	</section>

	<section class="strengths">
		{#each strengths as data}
			<Card {...data} />
		{/each}
	</section>

	<section
		class="stepsSlideshow"
		use:inview={{ rootMargin: '-50px', unobserveOnEnter: false }}
		on:change={({ detail }) => {
			stepsSliderInview = detail.inView;
			console.log(stepsSliderInview);
			if (stepsSliderInview) {
				// Start swiper
				const swiper = document.querySelector('.swiper').swiper;
				swiper.autoplay.start();
			} else {
				// Stop swiper
				const swiper = document.querySelector('.swiper').swiper;
				swiper.autoplay.stop();
				swiper.slideTo(0);
			}
		}}
	>
		<RollingText />
		<swiper-container class="swiper" speed="1550" delay="2000">
			<swiper-slide>
				<FullpageSlider
					step="01"
					title="T NZUKO"
					--fp-bg-color="#FFB436"
					--fp-top-heading="#504DE6"
				>
					<span slot="heading"> Consultation & onboarding </span>
					<div class="step1-content" slot="content">
						Nobody knows your business better than you.<br /> Help us understand what you do and
						what keeps you going.<br />Tell us all about your goals and target audience. Our team
						will then create a roadmap to make your website dreams a reality!
					</div>
					<img slot="icon" class="step-icon" src="/technology/step1.png" alt="Step 1" />
				</FullpageSlider>
			</swiper-slide>

			<swiper-slide>
				<FullpageSlider
					step="02"
					title="INYOCHA"
					--fp-bg-color="#6562F5"
					--fp-top-heading="#FFAA1C"
				>
					<span slot="heading"> Consultation & onboarding </span>
					<div class="step2-content" slot="content">
						We're strategic thinkers who love a challenge. With a deep market understanding,<br />
						we’ll identify specific growth opportunities to keep you up to speed.<br />
						You will have complete visibility into the project scope, timeline, and budget at every step
						of the way.
					</div>
					<img slot="icon" class="step-icon" src="/technology/step2.png" alt="Step 2" />
				</FullpageSlider>
			</swiper-slide>

			<swiper-slide>
				<FullpageSlider step="03" title="AZUKA" --fp-bg-color="#36E0BA" --fp-top-heading="#EE6338">
					<span slot="heading"> Meet your pod </span>
					<div class="step3-content" slot="content">
						We are brand builders. Our creative team will meet with you for an initial free
						consultation around branding, positioning, content & communication style.<br />
						We’ll work closely with you to highlight your business USP, strengths and values. With custom,
						carefully crafted design, we’re sure we can help you stand out!
					</div>
					<img slot="icon" class="step-icon" src="/technology/step3.png" alt="Step 3" />
				</FullpageSlider>
			</swiper-slide>

			<swiper-slide>
				<FullpageSlider step="04" title="ANARA" --fp-bg-color="#EE6338" --fp-top-heading="#36E0BA">
					<span slot="heading"> Project kick off </span>
					<div class="step4-content" slot="content">
						We're ready to bring your website to life! Every little development milestone,
						information flow and project deliverable will be shared with you.<br />
						Our team will rigorously test the website to ensure it's bug-free and optimised, and launch
						it with the confidence of a winner!
					</div>
					<img slot="icon" class="step-icon" src="/technology/step4.png" alt="Step 4" />
				</FullpageSlider>
			</swiper-slide>
		</swiper-container>
		<RollingText />
	</section>

	<section class="testimonials">
		<div class="container">
			<div class="title">Our work speaks for itself</div>
			<div class="testimonial-wrap">
				<div class="testimonial">
					I loved working with Stephen and the rigo team, they kept me informed at every stage of
					the project and set clear measurable goals to ensure the website launch was a success<br
					/><br />
					Mark Fuller, Founder <br />
					Axe Block Management
				</div>
				<div class="testimonial">
					“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua”<br /><br />
					Testimonial, Someone nice
				</div>
			</div>
		</div>
	</section>

	<a href="/casestudy/smf">
		<section class="cs-feature">
			<div class="cs-inner">
				<div class="container">
					<div class="text">
						<CaseStudy {...csFeature} class={'cs-feat'} />
					</div>
				</div>
				<div class="image">
					<video autoplay muted loop playsinline>
						<source src="https://landing.sqmflooring.co.uk/smflaptop-v3.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		</section>
	</a>

	<section class="cs-list-container">
		<div class="cs-list">
			{#each caseStudy as data, i}
				<CaseStudy {...data} class={'case-study-' + (i + 1)} />
			{/each}
		</div>
	</section>

	<section class="footer">
		<Footer hideUpNext={true} marginright="0" href="/casestudy/gallagher">Gallagher</Footer>
	</section>
</div>

<style lang="scss">
	.main {
		// scroll-snap-type: y proximity;
		// overflow-y: scroll;
		height: 100vh;
		.snap {
			scroll-snap-align: center;
			// height: 100%;
			width: 100%;
		}
	}

	// Video banner
	.video-banner {
		position: relative;
		height: fit-content;
		// max-height: 1000px;
		background-color: var(--app-color-lunarblue);
		background-image: url('/technology/rigo-logo-big.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: 100%;
		> button {
			height: auto;
			width: 120px;
			position: absolute;
			transform: translateY(-50%);
			margin: 0 auto;
			top: 50%;
			left: 0;
			right: 0;
			opacity: 0;
			transition: 0.8s ease all;
			&.animate {
				opacity: 1;
			}
		}
		video {
			width: 100%;
		}
	}

	// Intro
	.intro {
		background-color: white;
		position: relative;
		overflow: hidden;
		padding: 100px 15px;
		display: grid;
		justify-content: center;
		align-content: center;
		.container {
			width: 530px;
			margin: 0 auto;
			text-align: center;
			@media (max-width: 768px) {
				width: 100%;
			}
		}
		h2 {
			color: var(--app-color-lunarblue);
			font-family: 'Bebas Neue', sans-serif;
			font-weight: 400;
			font-size: clamp(55px, 10vw, 80px);
			line-height: 0.9;
			+ h2 {
				margin-top: 12px;
			}
			&:last-of-type {
				margin-bottom: 40px;
			}
		}
		p {
			color: var(--app-color-navy);
			margin-bottom: 30px;
		}
		.round-text {
			position: absolute;
			top: 35%;
			left: 8%;
			display: flex;
			align-items: center;
			width: 140px;
			height: 140px;
			padding: 15px;
			background-color: #36e0ba;
			color: #015643;
			border-radius: 50%;
			font-size: 12px;
			text-align: center;
			line-height: 1.35;
			transition: 0.8s ease transform 2s;
			.first,
			.second {
				transition: 0.4s ease all 2s;
			}
			.second {
				opacity: 0;
				position: absolute;
				left: 0;
				padding: 15px;
			}
			@media (max-width: 768px) {
				display: none;
			}
		}
		.round-text.animate {
			animation: round-tag-toright 5s ease-in-out 1s infinite alternate;
			.first {
				animation: round-text-opacity 5s ease-in-out 1s infinite alternate;
			}
			.second {
				animation: round-text-opacity 5s ease-in-out 1s infinite alternate-reverse;
			}
		}

		.contact-button {
			font-family: 'Bebas Neue', sans-serif;
			font-size: 20px;
			font-weight: 400;
			line-height: 0.9;
			color: var(--app-color-navy);
			border: 1px solid var(--app-color-navy);
			border-radius: 25px;
			transition: 0.3s ease all;
			&:hover {
				border-color: var(--app-color-lunarblue);
				background-color: var(--app-color-lunarblue);
				color: white;
			}
		}

		.big-text {
			transition: color 0.4s ease-in 0.4s, font-size 0.8s ease 0.4s;
		}
		.big-text.animate {
			color: var(--app-color-red);
			font-size: 170%;
		}

		.big-brand {
			position: relative;
			padding: 0 10px;
			cursor: default;
			&:before {
				content: '';
				position: absolute;
				width: 100%;
				height: 4px;
				background-color: var(--app-color-red);
				left: 0;
				top: calc(50% - 4px);
				transform: rotate(-2deg) scale(0);
				transition: transform 1s ease 0.4s;
			}
		}
		.big-brand.animate:before {
			transform: rotate(-2deg);
		}
		.big-brand.animate:hover:before {
			transform: rotate(-2deg) scale(0);
		}
	}

	// Benefit
	.benefits {
		padding: 13vh 30px;
		// min-height: 100vh;
		display: grid;
		align-items: center;
		h2 {
			font-family: 'Bebas Neue', sans-serif;
			font-size: 130px;
			font-weight: 400;
			line-height: 0.9;
		}
		.container {
			display: flex;
			gap: 4rem;
			max-width: 100%;
			margin: 0 auto;
		}

		&.first {
			background-color: var(--app-color-red);
			h2 {
				color: #b02a01;
			}
		}
		&.second {
			background-color: var(--app-color-lunarblue);
			.image {
				order: -1;
			}
			h2,
			p {
				color: #2b2996;
			}
			p {
				font-family: 'Bebas Neue', sans-serif;
				font-size: 20px;
				line-height: 0.9;
				width: 300px;
				margin-bottom: 50px;
			}
		}
	}

	@media (max-width: 1023px) {
		.benefits {
			display: flex;
			flex-direction: column;

			.container {
				flex-direction: column;
				gap: 0;

				.text {
					padding: 35px;
				}

				h2 {
					font-size: clamp(60px,14vw,100px);
				}
			}
		}
		.benefits.first {
			padding: 50px 0 0;
		}
		.benefits.second {
			padding: 0 0 50px;
		}
	}

	// Strengths
	.strengths {
		background-color: white;
		padding: 30px 0;
		display: grid;
		grid-template-columns: 1fr;
		gap: 30px;
		@media (min-width: 1023px) {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	// Workflow
	.step1-content {
		max-width: 445px;
		margin: 0 auto;
	}
	.step3-content,
	.step4-content {
		max-width: 570px;
		margin: 0 auto;
	}
	.step-icon {
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		margin: 0 auto;
		transform: translateY(-50%);
	}

	// Testimonials
	.testimonials {
		background-color: white;
		color: #12182e;
		padding: 120px 30px 100px;

		@media (min-width: 768px) {
			padding: 210px 30px 150px;
		}
		.container {
			display: flex;
			flex-wrap: wrap;
			max-width: 1380px;
			margin: 0 auto;
			gap: 60px;
			justify-content: center;
			@media (min-width: 768px) {
				padding-inline: 30px;
				justify-content: space-between;
			}
		}
		.testimonial-wrap {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			@media (min-width: 768px) {
				flex: 1 0;
				gap: 60px;
			}
		}
		.title,
		.testimonial {
			max-width: 336px;
		}
		.title {
			font-size: 80px;
			font-family: 'Bebas Neue', sans-serif;
			line-height: 0.9;
			@media (min-width: 768px) {
				max-width: 400px;
				margin-right: 20px;
			}
		}
		.testimonial {
			line-height: 1.3;
		}
	}

	// Case Study

	.cs-feature {
		background-color: white;
		padding-top: 30px;
		overflow: hidden;

		@media (min-width: 1024px) {
			padding-bottom: 150px;
		}
		.cs-inner {
			position: relative;
			background-color: #18181a;
			padding: 1px 0;
		}
		.container {
			max-width: 1380px;
			margin: 0 auto;
			@media (min-width: 1024px) {
				display: flex;
			}
		}
		.text {
			@media (min-width: 1024px) {
				max-width: 370px;
			}
		}
		.image {
			width: 100%;
			height: 100%;
			// height: 300px;
			top: 0;
			right: 0;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: right;
			@media (min-width: 1024px) {
				position: absolute;
				width: 60vw;
				height: 100%;

			}
			video {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

	}
	.cs-feature :global(.cs-feat) {
		--cs-color: var(--app-color-green);
		margin-top: -20px;
		@media (min-width: 1024px) {
			margin-bottom: -30px;
			text-align: left;
		}
	}
	.cs-feature :global(.cs-feat .tag) {
		@media (min-width: 1024px) {
			margin-left: 30px;
			margin-bottom: 55px;
		}
	}
	.cs-feature :global(.cs-feat .title) {
		color: var(--app-color-green);
		@media (min-width: 1024px) {
			font-size: 60px;
		}
	}
	.cs-feature :global(.cs-feat .title),
	.cs-feature :global(.cs-feat .desc) {
		@media (min-width: 1024px) {
			padding-left: 30px;
			padding-right: 30px;
		}
	}
	.cs-feature :global(.cs-feat .metrics) {
		@media (min-width: 1024px) {
			padding-bottom: 0;
		}
	}
	.cs-list-container {
		position: relative;
	}
	.cs-list-container::before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: 50%;
		z-index: -1;
		background: url('/technology/tn-cs1.webp') no-repeat center center / cover;
	}
	.cs-list-container::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		width: 50%;
		z-index: -1;
		background: url('/technology/tn-cs3.webp') no-repeat center center / cover;
	}
	.cs-list {
		display: grid;
		@media (min-width: 768px) {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			max-width: 1570px;
			margin-inline: auto;
		}
	}
	.cs-list :global(.case-study-1) {
		--cs-color: var(--app-color-yellow);
	}
	.cs-list :global(.case-study-2) {
		--cs-color: var(--app-color-blue);
	}
	.cs-list :global(.case-study-3) {
		--cs-color: var(--app-color-red);
	}


	// Footer
	.footer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 3rem 0;
		background-color: var(--app-color-navy);
	}

	/* Animations */
	@keyframes round-tag-toright {
		0%,
		40% {
			transform: translateX(0) scale(1);
		}
		60%,
		100% {
			transform: translateX(68vw) scale(1.5);
		}
	}
	@keyframes round-text-opacity {
		0%,
		40% {
			opacity: 1;
		}
		60%,
		100% {
			opacity: 0;
		}
	}
</style>
