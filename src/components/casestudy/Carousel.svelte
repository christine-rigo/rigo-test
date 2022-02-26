<div class="container">
    <div class="carousel-container">
        <div><img alt="rigo" style="width: 100%; height: auto" src="/work-img/carousel-img-1.png" /></div>
        <div class="carousel-heading">
            ‘Future-positive’ tone and content – inspiring followers with the innovation and progress
        </div>
    </div>
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: row;
        padding: 0vw 7vw;
    }
    .carousel-container {
        display: flex;
        flex-direction: column;
    }
    .carousel-heading {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: normal;
        
        padding: 1.25vw 2vw;
        color: var(--app-color-navy-contrast);
        background-color: var(--app-color-red-contrast);
    }
    @media(max-width: 425px) {
        .carousel-heading {
            padding: 6vw 10vw;
            font-size: 12px;
            line-height: 140%;
            text-align: center;
        }
    }
</style>