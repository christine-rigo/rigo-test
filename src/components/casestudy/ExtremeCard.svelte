<div class="container">
    <div>
        <div class="casecardtitle">Extreme E</div>
        <div class="casecarddescription">
            Volta was given the nod as a trusted outlet to report on Extreme E’s 2021 inaugural season,
            focusing on the organisation’s legacy projects.
            <br /><br />
            rigo attended the Ocean X Prix in Lac Rose, Senegal over the course of a week, creating live event
            coverage, conducting interviews with big names - including Nico Rosberg - and supporting the Volta
            team as a key coverage provider for the championship.
        </div>
    </div>
    
    <div>
        <img alt="rigo" style="width: 100%; height: auto" src="/work-img/case-study-volta-img-1.png" />
    </div>
</div>

<style lang="scss">
    .container {
		display: flex; 
		flex-direction: row;
		text-align: center;
        padding: 0vw 7vw;
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
        line-height: 100px;
		text-transform: uppercase;
	}

	.casecarddescription {
		font-family: 'Satoshi';
		font-style: normal;
		font-weight: normal;
        font-size: 12px;
        line-height: 16px;
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
        }
        
        .casecarddescription {
		    line-height: 140%;
        }
    }
</style>
