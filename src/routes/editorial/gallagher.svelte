<script lang="ts">
import RectangularBtn from '$/components/services/RectangularBtn.svelte';

    import { navColor } from '$/stores/nav.store';
	import { onMount } from 'svelte';

	onMount(() => {
		$navColor = 'var(--app-color-lunarblue-contrast)';
	});
</script>

<svelte:head>
	<title>Editorial: Gallagher / Rigo Agency</title>
</svelte:head>

<div class="service-container">
    <div class="service-container-heading hidden-mobile">
        <div>+ Editorial: <span class="service-container-heading-casestudy">Gallagher</span></div>
        <div>
            <a href="/services">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4668 1.15039L9.86776 9.55135" stroke="#FAF5EE" stroke-width="2" stroke-linecap="round"/>
                    <path d="M9.86816 1.1499L1.4672 9.55086" stroke="#FAF5EE" stroke-width="2" stroke-linecap="round"/>
                </svg>     
            </a>           
        </div>
    </div>
    <div class="service-container-body">
        <div class="service-container-body-left">
            <img class="service-container-body-left-img hidden-mobile" src="/services-img/editorial-gallagher.png" alt="rigo">
            <img class="service-container-body-left-img hidden-desktop" src="/services-img/cornerstone-content-xs.png" alt="rigo">
        </div>
        <div class="service-container-body-right">
            <div class="service-container-body-right-btn-group">
                <RectangularBtn cta="next" href="/data/gallagher" btnColor="btn-red"></RectangularBtn>
                <RectangularBtn cta="see full case study" href="/casestudy/gallagher" btnColor="btn-red"></RectangularBtn>
            </div>
            <RectangularBtn cta="Start your ascent" href="/contact" btnColor="btn-red hidden-mobile"></RectangularBtn>
        </div>
    </div>
    <div class="service-container-footer">
        <div class="service-container-heading hidden-desktop">
            + Creative: <span class="service-container-heading-casestudy">Gallagher</span>
        </div>
        <div class="service-container-footer-title" style="color: var(--app-color-lunarblue-contrast)">Cornerstone Content</div>
        <div class="service-container-footer-description">Long and short-form thought leadership content designed to educate and engage readers and reinforce Gallagher’s brand proposition. Topics, keyword selection and approach designed to target content gaps identified in a prior audit.</div>
        <a href="/contact"><div class="service-container-footer-btn hidden-desktop">Start your ascent</div></a>
    </div>
</div>

<style lang="scss">
    .service-container {
        color: var(--app-color-red);
        
        position: absolute;
        z-index: var(--elevation);
        display: grid;
        grid-template-columns: 1fr;
        overflow: hidden;
        padding: 2rem 9vw 2rem 20vw;
        width: 100%;
        height: auto;

        display: flex;
        flex-direction: column;
        gap: 1vw;
    }
    @media(max-width: 768px) {
        .service-container {
            padding: 1rem 12vw 1rem 12vw;
        }
    }

    .service-container-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        font-family: "Satoshi";
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 80px;
        text-transform: uppercase;

        .service-container-heading-casestudy {
            text-transform: capitalize;
            color: var(--app-color-lunarblue-contrast);
        }
    }

    .service-container-body {
        display: flex;
        flex-direction: row;
        gap: 1vw;

        .service-container-body-left {
            flex: 4;

            .service-container-body-left-img {
                width: 100%; 
                height: auto;
            }
        }

        .service-container-body-right {
            flex: 1;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            text-align: center;

            .service-container-body-right-btn-group {
                display: flex;
                flex-direction: column;
                gap: 1vw;
            }
            
            .service-container-body-right-btn {
                font-family: "Bebas Neue";
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 24px;
                text-align: center;
                letter-spacing: 0.02em;
                
                color: var(--app-color-lunarblue-contrast);

                border: 1px solid #EE6338;
                padding: 0.75vw;
                cursor: pointer;
            }
        }
    }

    @media(max-width: 1024px) {
        .service-container-body {
            .service-container-body-left {
                flex: 3;
            }
        }
    }

    @media(max-width: 768px) {
        .service-container-body {
            flex-direction: column;
            gap: 6vw;

            .service-container-body-left {
                .service-container-body-left-img {
                    height: auto;
                    width: 100%;
                }
            }

            .service-container-body-right {
                order: -1;

                .service-container-body-right-btn-group {
                    display: flex;
                    flex-direction: row-reverse;
                    justify-content: space-between;

                    .service-container-body-right-btn {
                        padding: 2vw 6vw;
                    }
                }
            }
        }
    }

    .service-container-footer {
        display: flex;
        flex-direction: row;
        max-width: 50vw;
        gap: 1vw;

        .service-container-footer-title {
            font-family: "Bebas Neue";
            font-style: normal;
            font-weight: normal;
            font-size: 40px;
            line-height: 38px;
            flex: 2;
        }

        .service-container-footer-description {
            color: var(--app-color-lunarblue-contrast);
            flex: 7;
        }
    }
    @media(max-width: 768px) {
        .service-container-footer {
            display: flex;
            flex-direction: column;
            gap: 6vw;

            max-width: 100vw;
            transform: translateY(-1vw);

            border: 1px solid var(--app-color-red);
            padding: 10vw 8vw;

            .service-container-footer-title {
                flex: 1;
                font-family: "Bebas Neue";
                font-style: normal;
                font-weight: normal;
                font-size: 25px;
                line-height: 38px;
            }

            .service-container-footer-description {
                flex: 1;
                font-family: "Satoshi";
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 16px;
            }

            .service-container-heading {
                font-family: "Satoshi";
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 20px;
                text-transform: uppercase;
            }

            .service-container-footer-btn {
                font-family: "Bebas Neue";
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                text-align: center;
                letter-spacing: 0.02em;
                color: var(--app-color-lunarblue-contrast);
                border: 1px solid var(--app-color-red);
                padding: 1.5vw 8vw;
                max-width: 80%;
                margin: 2vw auto;
            }
        }
    }

    .hidden-desktop {
        display: none;
    }

    @media(max-width: 768px) {
        .hidden-mobile {
            display: none;
        }

        .hidden-desktop {
            display: block;
        }
    }
</style>