<script>
    export let name = "DEFAULT_NAME"
    export let title = "DEFAULT_TITLE"
    export let triadNameColor = "";
    
    export let flexDirection = "column";
    export let flexMargin = "0vw 26%";
    export let textAlign = "center";
</script>

<div class="triad-card" style="flex-direction: {flexDirection}; margin: {flexMargin};">
    <div class="triad-header">
        <div class="triad-image"><img style="width: 100%; height: auto; position: absolute; bottom: 0px;" alt="rigo" src="/casestudy/triad-card.png"></div>
        <div class="triad-name" style="background-color: {triadNameColor};">{name}</div>
        <div class="triad-title">{title}</div>
    </div>
    <div class="triad-description" style="text-align: {textAlign}">
        <slot></slot>
    </div>
</div>

<style lang="scss">
    .triad-card {
        text-align: center;
        color: var(--app-color-lunarblue-contrast);

        display: flex;
        gap: 3vw;

        margin-bottom: 3vw;
    }

    .triad-header {
        width: 137px;
        margin: auto;

        display: flex;
        flex-direction: column;
        gap: 0.5vw;
    }

    .triad-description {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
    }
    .triad-image {
        position: relative;
        margin: auto;
        height: 137px;
        width: 137px;
    }
    .triad-name {
        font-family: "Bebas Neue";
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        text-align: center;

        padding: 0.5vw 0vw;
    }

    .triad-title {
        font-family: "Bebas Neue";
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
    }

    @media(max-width: 768px) {
        .triad-card {
            margin: 0vw 8%;
            margin-bottom: 4vw;
            gap: 4vw;
        }

        .triad-card {
            flex-direction: column !important;
        }

        .triad-description {
            text-align: center !important;
        }
    }

    @media(max-width: 425px) {
        .triad-card {
            margin: 0vw 8%;
            margin-bottom: 25vw;
            gap: 10vw;
        }
    }
</style>