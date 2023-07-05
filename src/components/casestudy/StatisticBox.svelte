<script>
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    export let statistic;
    export let backgroundColor;
    export let color;

    const duration = 1000; // Duration of the animation in milliseconds
    let value;

    value = tweened(0, { duration, easing: cubicOut });
    value.set(statistic.stats);
</script>

<div class="stats-card" style="background: {backgroundColor}; color: {color}">
    <div class="stats-lead">{statistic.presign}{$value.toFixed(0)}{statistic.postsign}</div>
    <div class="stats-title">{@html statistic.statsTitle}</div>
</div>

<style lang="scss">
    .stats-card {
        background: #3BF0C8;
        border-radius: 24.4297px;
        padding: 2.5rem 2.5rem;
    }
    .stats-lead {
        font-family: 'Bebas Neue';
        font-style: normal;
        font-weight: bold;
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
        font-weight: bold;
    }
</style>