<script lang="ts">
	import Nav from "../Nav.svelte";
	export let navigationBarColor = '';
	export let title = '';
	export let description = '';
	export let coverPhoto = '';
	export let columnSeparator = '';
	export let hdrSvgPath1:string;
	export let hdrSvgPath2:string;
	export let hdrSvgPath3:string;
	export let hdrSvgPath4:string;
	export let hdrInfo1:string;
	export let hdrInfo2:string;
	export let hdrInfo3:string;
	export let hdrInfo4:string;
</script>

<div class="container" style="background: linear-gradient(180deg, rgba(18, 24, 45, 0.75) 15%, rgba(18, 24, 45, 1) 86%), url({coverPhoto}) no-repeat top center/cover;">
	<aside>
		<Nav logoScale={1} navigationBarColor={navigationBarColor} navItemsStyle="align-items: flex-start;" />
	</aside>
	<div class="main">
		<div class="categories">
			<div>+ Creative</div>
			<div>+ Digital Advertising</div>
		</div>
		<div class="heading">
			{title}     
		</div>
		<div class="subheading">
			{description}
		</div>
		<div class="hidden-desktop">
			<svg width="310" height="1" viewBox="0 0 310 1" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line x1="0.461914" y1="0.5" x2="309.386" y2="0.5" stroke="#EE6338"/>
			</svg>				
		</div>
		<div class="adtagscontainer">
			<img class="hidden-mobile" src={columnSeparator} alt="rigo">
			<div class="adtags">
				<div class="adtagtitle">
					<img src={hdrSvgPath1} alt="rigo">
				</div>
				<div class="adtaginfo" style="color: {navigationBarColor}">{hdrInfo1}</div>
			</div>
			<img class="hidden-mobile" src={columnSeparator} alt="rigo">
			<div class="adtags">
				<div class="adtagtitle">
					<img src={hdrSvgPath2} alt="rigo">
				</div>
				<div class="adtaginfo" style="color: {navigationBarColor}">{hdrInfo2}</div>
			</div>
			<img class="hidden-mobile" src={columnSeparator} alt="rigo">
			<div class="adtags">
				<div class="adtagtitle">
					<img src={hdrSvgPath3} alt="rigo">
				</div>
				<div class="adtaginfo" style="color: {navigationBarColor}">{hdrInfo3}</div>
			</div>
			<img class="hidden-mobile" src={columnSeparator} alt="rigo">
			<div class="adtags">
				<div class="adtagtitle">
					<img src={hdrSvgPath4} alt="rigo">
				</div>
				<div class="adtaginfo" style="color: {navigationBarColor}">{hdrInfo4}</div>
			</div>
			<img class="hidden-mobile" src={columnSeparator} alt="rigo">
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		background-size: cover;
		background-color: var(--app-color-navy);
		color: var(--app-color-red);
		min-height: 60vh;

		position: relative;
	}

	aside {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9999;

		display: flex;
		justify-content: center;

		padding: 6% 5% 6% 5%;
	}

	@media(max-width: 768px) {
		aside {
			position: relative;
		}
	}

	.main {
		padding: 6% 15vw 6% 15vw;

		display: flex;
		flex-direction: column;
		gap: 2.5vw;
	}
	.categories {
		display: flex;
		flex-direction: column;
		font-family: 'Satoshi';
		font-style: normal;
		font-weight: normal;
        font-size: 12px;
        line-height: 16px;
		text-transform: uppercase;
        gap: 0.25vw;
		color: var(--app-color-lunarblue-contrast);
	}
    .heading {
        font-family: "Satoshi";
		font-style: normal;
		font-weight: bold;
		font-size: 100px;
		line-height: 100px;
    }
	.subheading {
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
        line-height: 110%;
        max-width: 690px;
		color: var(--app-color-lunarblue-contrast);
	}

	.adtagscontainer {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;

		.adtags {
			display: flex;
			flex-direction: column;
			gap: 1vw;
			width: 128px;
			align-items: center;

			.adtaginfo {
				font-family: 'Satoshi';
				font-style: normal;
				font-weight: normal;
				font-size: 12px;
				line-height: 140%;
				color: var(--app-color-red);
			}
		}
	}
    .hidden-desktop {
        display: none;
    }

    @media(max-width: 425px) {
		.hidden-mobile {
			display: none;
		}
        .container {
            // padding: 4rem 2rem 4rem 2rem;
            gap: 6vw;
        }
        .categories {
            font-size: 12px;
		    line-height: 16px;
            gap: 1vw;
        }
		.heading {
			font-size: 50px;
			line-height: 100px;
		}
        .subheading {
            font-size: 20px;
		    line-height: 110%;
			margin-bottom: 6vw;
        }
        .hidden-desktop {
            display: block;
        }

		.adtags {
			margin-top: 6vw;
			margin-bottom: 6vw;
		}
    }
</style>
