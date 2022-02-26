<script>
    export let name = "DEFAULT_NAME"
    export let title = "DEFAULT_TITLE"
</script>

<div class="triadcontainer">
    <div class="triadheading">
        <div style="position: relative;">
            <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M68.5752 0.175781L127.898 102.926H9.25246L68.5752 0.175781Z" fill="#333333"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M77.8247 62.6506C77.8247 65.0635 76.8662 67.3776 75.16 69.0838C73.4538 70.79 71.1397 71.7485 68.7268 71.7485C66.3139 71.7485 63.9998 70.79 62.2936 69.0838C60.5874 67.3776 59.6289 65.0635 59.6289 62.6506C59.6289 60.2377 60.5874 57.9236 62.2936 56.2174C63.9998 54.5113 66.3139 53.5527 68.7268 53.5527C71.1397 53.5527 73.4538 54.5113 75.16 56.2174C76.8662 57.9236 77.8247 60.2377 77.8247 62.6506ZM73.2758 62.6506C73.2758 63.8571 72.7965 65.0141 71.9434 65.8672C71.0903 66.7203 69.9333 67.1996 68.7268 67.1996C67.5203 67.1996 66.3633 66.7203 65.5102 65.8672C64.6571 65.0141 64.1779 63.8571 64.1779 62.6506C64.1779 61.4442 64.6571 60.2871 65.5102 59.434C66.3633 58.5809 67.5203 58.1017 68.7268 58.1017C69.9333 58.1017 71.0903 58.5809 71.9434 59.434C72.7965 60.2871 73.2758 61.4442 73.2758 62.6506Z" fill="#4B4B4B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.7272 44.4551C54.9098 44.4551 43.708 55.6569 43.708 69.4743C43.708 83.2917 54.9098 94.4935 68.7272 94.4935C82.5447 94.4935 93.7464 83.2917 93.7464 69.4743C93.7464 55.6569 82.5447 44.4551 68.7272 44.4551ZM48.257 69.4743C48.257 74.2279 49.8787 78.604 52.5967 82.0794C54.5055 79.5727 56.968 77.5413 59.7918 76.1438C62.6156 74.7462 65.7243 74.0205 68.8751 74.0232C71.985 74.0203 75.0546 74.7272 77.85 76.0902C80.6454 77.4532 83.0927 79.4363 85.0056 81.8884C86.9764 79.3037 88.3033 76.2868 88.8766 73.0875C89.4499 69.8882 89.2531 66.5983 88.3025 63.4901C87.3519 60.3819 85.6748 57.5448 83.4101 55.2134C81.1453 52.8821 78.3579 51.1235 75.2786 50.0833C72.1992 49.0431 68.9165 48.751 65.7019 49.2314C62.4873 49.7118 59.4332 50.9507 56.7925 52.8457C54.1518 54.7407 52.0003 57.2373 50.516 60.1289C49.0318 63.0205 48.2574 66.224 48.257 69.4743ZM68.7272 89.9446C64.028 89.9516 59.4707 88.335 55.8264 85.3683C57.2933 83.2684 59.2457 81.5538 61.5176 80.3706C63.7894 79.1873 66.3135 78.5704 68.8751 78.5722C71.4046 78.5702 73.8982 79.1717 76.1487 80.3268C78.3991 81.4819 80.3415 83.1572 81.8146 85.2137C78.142 88.2767 73.5095 89.9513 68.7272 89.9446Z" fill="#4B4B4B"/>
            </svg>
            <div class="triadname">{name}</div>
            </div>
        <div class="triadtitle">{title}</div>
    </div>
    <div class="subheading">
        <slot></slot>
    </div>
</div>

<style lang="scss">
    * {
        color: var(--app-color-lunarblue-contrast);
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    }

    .triadcontainer {
        gap: 8vw;
    }

    .triadheading {
        display: flex;
        flex-direction: column;
        gap: 1vw;
    }

    .triadname {
        font-family: "Bebas Neue";
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        background-color: var(--app-color-lunarblue);
        padding: 1vw 0vw;
        position: absolute;
        bottom: 0%;
        z-index: 1000;
        min-width: 30vw;
    }

    .triadtitle {
        font-family: "Bebas Neue";
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
    }

    .subheading {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 140%;
        text-align: center;
        padding: 0vw 9.75vw;
    }
</style>