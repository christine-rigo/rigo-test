<script>
    export let title = "DEFAULT_TITLE";
    export let imgsource = "DEFAULT_IMG";
    export let arrowImg = "";
</script>

<div>
    <div class="card-heading">
        <img alt="rigo" style="width: 100%; height: auto;" src={imgsource}>
        <img class="ascension-caret" alt="rigo" src={arrowImg}>
    </div>
    <div class="title">{title}</div>
</div>

<style lang="scss">
    .title {
        font-family: "Bebas Neue";
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        margin-top: 1vw;
    }

    .card-heading {
        position: relative;
    }

    .ascension-caret {
        position: absolute;
        bottom: -25%;
        right: 5%;
    }
</style>