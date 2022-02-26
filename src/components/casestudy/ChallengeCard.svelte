<script lang="ts">
import Button from "./Button.svelte";


</script>

<div class="casecardcontainer">
	<div>
		<div class="casecardtitle">Challenge</div>
		<div class="casecarddescription">
			<img src="/casestudy/gallagher-challenge.png" alt="rigo" />
			<p>
				Gallagher sought to understand the trends and output of content marketing in the insurance
				industry. Doing so would help them develop a best practice for content in order to capture a
				larger market share.
			</p>
		</div>
	</div>
	<div>
		<div class="casecardtitle">Solution</div>
		<div class="casecarddescription">
			<img src="/casestudy/gallagher-solution.png" alt="rigo" />
			<p>
				rigo conducted a review of content across the insurance industry delivering a competitive
				analysis and marketing intelligence report based on insurance providers. In this review rigo
				analysed and evaluated the content marketing output and SEO performance of five of
				Gallagher’s key competitors.
			</p>
		</div>
	</div>
	<div>
		<div class="casecardtitle">Result</div>
		<div class="casecarddescription">
			<img src="/casestudy/gallagher-result.png" alt="rigo" />
			<p>
				rigo levelled up Gallagher’s understanding of the norms of content marketing in theinsurance
				sector, identifying strengths and weaknesses across the industry. This allowed us to
				identify a number of flagship content pieces that Gallagher would benefit from adding to
				their website.
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	.casecardcontainer {
		display: flex;
		flex-direction: row;
        align-items: flex-start;
        gap: 2vw;
		padding: 0vw 15vw;
		width: 100vw;

        div {
            flex: 1;
        }
	}

	.casecardtitle {
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: normal;
		font-size: 40px;
		line-height: 100px;
		text-transform: uppercase;

        display: none;
	}

	.casecarddescription {
		font-family: 'Satoshi';
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 16px;

		display: flex;
		flex-direction: row;
		gap: 2vw;
        align-items: flex-start
	}

    @media(max-width: 768px) {
        .casecardcontainer {
            flex-direction: column;
            gap: 6vw;
        }

        .casecardtitle {
            display: block;
        }

        .casecarddescription {
            img {
                display: none;
            }
        }
    }

	@media (max-width: 425px) {
		.casecardtitle {
			font-size: 20px;
			line-height: 24px;
			margin-bottom: 3vw;
		}
		.casecarddescription {
			line-height: 140%;
		}
	}
</style>
