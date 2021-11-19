<script>
	import ScrollerIndicator from '$/components/ScrollerIndicator.svelte';
</script>

<svelte:head>
	<title>Services / Rigo Agency</title>
</svelte:head>

<div class="services-page-container">
	<section class="service services-home">
		<div class="text-content">
			<h1>Services</h1>

			<div class="description">
				<hr style="width: 57px; margin: 0;" />

				<p>
					<br />
					Services developed from years of problem solving for brands just like yours.

					<br /><br />

					Elevate credibility with diligently crafted thought leadership content; create a website
					from scratch with persuasive copy, eye-catching design and seamless UX, or increase your
					lead flow with email marketing.
				</p>

				<br />

				<ScrollerIndicator href="#technical-services-section" />
			</div>
		</div>

		<div class="image">
			<img src="https://placekitten.com/g/482/521" alt="Hero banner" />
		</div>
	</section>

	<section class="service service-informational technical" id="technical-services-section">
		Hello 1
	</section>

	<section class="service service-informational data">
		<!--  -->
		Hello 1
	</section>

	<section class="service service-informational creative">
		<!--  -->
		Hello 1
	</section>

	<section class="service service-informational digital-advertising">
		<!--  -->
		Hello 1
	</section>

	<section class="service summary">
		<!--  -->
		Hello 1
	</section>
</div>

<style lang="scss">
	.services-page-container {
		width: 100%;
		height: 100%;
		min-height: 100%;
	}

	h1 {
		font-size: 6.25rem;
	}

	h2 {
		font-size: 3.125rem;
	}

	h3 {
		font-size: 1.5625rem;
	}

	.service {
		height: 99vh;
		width: 100%;

		position: sticky;
		top: 0;

		padding: 2rem 0 2rem 20vw;

		&.service-informational {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		&.services-home {
			display: grid;
			grid-template-columns: 1fr 1fr;

			.text-content {
				display: flex;
				flex-direction: column;
				gap: 2rem;
			}

			.description {
				align-self: flex-end;

				width: 75%;
			}

			.image {
				display: grid;
				place-items: center;
			}
		}

		&.technical {
			background-color: var(--app-color-yellow);
		}

		&.data {
			background-color: var(--app-color-green);
		}

		&.creative {
			background-color: var(--app-color-red);
		}

		&.digital-advertising {
			background-color: var(--app-color-blue);
		}

		&.summary {
			background-color: var(--app-color-navy);
		}
	}
</style>
