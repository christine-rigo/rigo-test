<script lang="ts">
    export let heading = 'DEFAULT_HEADING';
    export let imgUrl = 'DEFAULT_HEADING';
</script>

<div class="container">
    <div>
        <div class="casecardtitle">{heading}</div>
        <div class="casecarddescription">
            <slot/>
        </div>
    </div>
    
    <div style="">
        <img alt="rigo" style="width: 100%; height: auto;" src={imgUrl} />
    </div>
</div>

<style lang="scss">
    .container {
		display: flex; 
		flex-direction: row;
		text-align: center;
        padding: 0vw 15vw;
        width: 100vw;
		justify-content: space-between;
		gap: 3vw;

		div:first-child {
			flex: 1;
			text-align: left;
		}

		div:nth-child(2) {
			flex: 3;
		}
	}

	.casecardtitle {
		font-family: 'Bebas Neue';
		font-style: normal;
		font-weight: normal;
        font-size: 40px;
		text-transform: uppercase;

        transform: translateY(-15px);
	}

	.casecarddescription {
		font-family: 'Satoshi';
		font-style: normal;
		font-weight: normal;
        font-size: 12px;
        line-height: 16px;

        transform: translateY(-15px);
	}

    @media(max-width: 768px) {
        .container {
            flex-direction: column;
            gap: 12vw;
        }
    }

    @media(max-width: 425px) {
        .container {
            flex-direction: column;
            gap: 12vw;
        }
        .casecardtitle {
            font-size: 20px;
		    line-height: 24px;
            margin-bottom: 3vw;

            text-align: center;
        }
        
        .casecarddescription {
		    line-height: 140%;

            text-align: center;
        }
    }
</style>
