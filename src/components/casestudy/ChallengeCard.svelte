<script lang="ts">
	export let challengeImg = '';
	export let challenge = '';
	export let solutionImg = '';
	export let solution = '';
	export let resultImg = '';
	export let result = '';
</script>

<div class="casecardcontainer">
	<div>
		<div class="casecardtitle">Challenge</div>
		<div class="casecarddescription">
			<img src={challengeImg} alt="rigo" />
			<p>{challenge}</p>
		</div>
	</div>
	<div>
		<div class="casecardtitle">Solution</div>
		<div class="casecarddescription">
			<img src={solutionImg} alt="rigo" />
			<p>{solution}</p>
		</div>
	</div>
	<div>
		<div class="casecardtitle">Result</div>
		<div class="casecarddescription">
			<img src={resultImg} alt="rigo" />
			<p>{result}</p>
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
