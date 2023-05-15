<script lang="ts">
	export let carouselList = [];
	import { onMount } from 'svelte';
	let slideIndex = 0;

	function handleClick(count) {
		const nextIndex = slideIndex + count;
		if (nextIndex >= carouselList.length) {
			return (slideIndex = 0);
		} else if (nextIndex < 0) {
			return (slideIndex = carouselList.length);
		}
		slideIndex += count;
	}
</script>

<div class="carousel-container">
	<img
		class="arrow left hide-mobile"
		src="/technology/arrowleft.png"
		alt="rigo"
		on:click={() => handleClick(-1)}
	/>
	<img
		class="arrow right hide-mobile"
		src="/technology/arrowright.png"
		alt="rigo"
		on:click={() => handleClick(1)}
	/>
	<div class="carousel-content">
		<div class="carousel-slide">
			<img class="carousel-image" src={carouselList[slideIndex].img} alt="rigo" />
			<div class="carousel-details">
				<div class="carousel-slide-title">
					<img
						class="arrow left hide-desktop"
						src="/technology/arrowleft.png"
						alt="rigo"
						on:click={() => handleClick(-1)}
					/>
					<img
						class="arrow right hide-desktop"
						src="/technology/arrowright.png"
						alt="rigo"
						on:click={() => handleClick(1)}
					/>
					<h2>
						{carouselList[slideIndex].content} <span>{carouselList[slideIndex].service}</span>
					</h2>
				</div>
				<p>{carouselList[slideIndex].description}</p>
				{#if carouselList[slideIndex].description2}
					<br />
					<p>{carouselList[slideIndex].description2}</p>
				{/if}
				<ul>
					{#each carouselList[slideIndex].items as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.carousel-container {
		box-sizing: border-box;
		position: relative;
		transition: all 0.5s ease-out;
	}

	.arrow {
		position: absolute;
		transform: translateY(50%);
		cursor: pointer;
		&.left {
			left: -1em;
		}
		&.right {
			right: -1em;
		}

		&.hide-mobile {
			display: none;
		}
	}

	.carousel-slide {
		&:not(:first-child) {
			display: none;
		}
	}
	.carousel-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 350px;
		.carousel-image {
			width: 100%;
			height: auto;
			object-fit: cover;
		}

		.carousel-details {
			text-align: center;
			.carousel-slide-title {
				position: relative;
				padding: 2rem 1rem;
				align-items: center;
				h2 {
					font-size: 40px;
					font-family: 'Bebas Neue';
					line-height: 0.9;
					span {
						display: block;
						color: var(--app-color-yellow);
					}
				}
			}

			p {
				font-size: 12px;
				font-family: 'Satoshi';
				padding: 0 1rem;
			}

			ul {
				list-style: none;
				font-family: 'Satoshi';
				font-size: 12px;
				padding-top: 1rem;
			}

			ul li::before {
				content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
				color: white; /* Change the color */
				display: inline-block; /* Needed to add space between the bullet and the text */
				width: 1em; /* Also needed for space (tweak if needed) */
				margin-left: -2.5em; /* Also needed for space (tweak if needed) */
			}
		}
	}

	@media (min-width: 768px) {
		.carousel-container {
			padding: 5rem 4rem;
		}

		.carousel-slide {
			.carousel-image {
				width: 65%;
			}
		}
	}
	@media (min-width: 1024px) {
		.carousel-container {
			padding: 0;
		}

		.carousel-slide {
			display: flex;
			flex-direction: row-reverse;
			gap: 3vw;
			.carousel-image {
				height: auto;
			}

			.carousel-details {
				text-align: left;
				margin-right: 20px;
				align-self: baseline;
				.carousel-slide-title {
					padding: 0;
					padding-bottom: 1rem;

					h2 {
						span {
							display: inline-block;
						}
					}
				}

				p {
					padding: 0;
					font-size: 16px;
				}
			}
		}
		.arrow {
			top: 45%;
			&.left {
				left: -5em;
			}

			&.right {
				right: -1em;
			}
			&.hide-mobile {
				display: block;
			}

			&.hide-desktop {
				display: none;
			}
		}
	}

	@media (min-width: 1440px) {
		.carousel-container {
			min-width: 1079px;
		}
	}

	@media (min-width: 1441px) {
		.carousel-slide {
			.carousel-image {
				width: 100%;
			}
		}
	}
</style>
