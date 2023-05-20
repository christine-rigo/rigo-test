<script>
    export let statistics = [];
    export let backgroundColor = "white";
    export let color = "#181818";
</script>

<div class="stats-section">
    <div class="stats-container">
        {#each statistics as statistic}
        <div class="stats-card" style="background: {backgroundColor}; color: {color}">
            <div class="stats-lead">{statistic.stats}</div>
            <div class="stats-title">{@html statistic.statsTitle}</div>
        </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .stats-section {
        display: flex;
        justify-content: flex-end;
        padding: 0rem 4rem 0rem 4rem;
    }
    .stats-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 10px; /* Optional: Set the gap between grid items */
        position: relative;
        bottom: -6vh;
        right: 5%;
    }
    .stats-card {
        background: #3BF0C8;
        border-radius: 24.4297px;
        padding: 3rem 3rem;
    }
    .stats-lead {
        font-family: 'Bebas Neue';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 30px;
        text-align: center;
    }
    .stats-title {
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 140%;
        text-align: center;
    }
    @media(max-width: 768px) {
        .stats-section {
            padding: 1rem 2rem 1rem 2rem;
            justify-content: center;
        }
        .stats-container {
            bottom: 0px;
            right: 0%;
        }
	}

	@media(max-width: 425px) {
        .stats-card {
            padding: 2rem;
        }
	}
</style>