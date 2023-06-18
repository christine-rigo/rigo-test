<script>
	import StatisticBox from "./StatisticBox.svelte";

    export let statistics;
    export let backgroundColor = "white";
    export let color = "#181818";
</script>

<div class="stats-section">
    <div class="stats-container">
        {#each statistics as statistic}
        <StatisticBox
            statistic={statistic} 
            backgroundColor={backgroundColor}
            color={color}
        />
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
        bottom: -60px;
        right: 3%;
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