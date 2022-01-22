<script>
	import { navColor } from '$/stores/nav.store';
	import { onMount } from 'svelte';
	import { style } from 'svelte-body';

	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>



<svelte:body use:style={{ background: 'var(--app-color-lunarblue-contrast)' }} />

<div class="">
    <div>
        <h1>Your climb is ours <br>& we're here to help <br>your business reach <br>its potential</h1>
    </div>
    <div class="homepage-grid">
        <div class="container">
            <div class="item-row">
                <div class="item-card">
                    <div class="item-title"></div>
                    <div class="item-body" style="background-color: #34D4B0">
                        <p style="color: white;text-align: center; position: relative; top: 40%; font-size: 20px; font-weight: 700">+ DATA</p>
                    </div>
                </div>
                <div class="item-card"></div>
                <div class="item-card">
                    <div class="item-title">
                        02 HEADS ARE BETTER THAN 01
                    </div>
                    <div class="item-body" style="background-image: url('/services-img/2-heads-are-better.png'); background-size: cover; background-repeat: no-repeat;">
                        <h4 style="color: white;text-align: center; position: relative; top: 45%;">+ DATA</h4>
                    </div>
                </div>
                <div class="item-card"></div>
                <div class="item-card">
                    <div class="item-body" style="background-color: #FFB436">
                        <p style="color: white;text-align: center; position: relative; top: 40%; font-size: 20px; font-weight: bold">+ TECHNICAL</p>
                    </div>
                </div>
            </div>
    
            <!-- 2nd row -->
            <div class="item-row">
                <div class="item-card"></div>
                <div class="item-card">
                    <div class="item-title">OUR MISSION</div>
                    <div class="item-body">
                        <span style="text-transform: uppercase; font-weight: bold; font-size: 0.7rem;">To create marketing solutions that empower authentic brands to reach their potential.</span></div>
                </div>
                <div class="item-card">
                    <div class="item-title">SERVICES</div>
                    <div class="item-body" style="background-image: url('/services-img/baloon-71-72 2.png'); background-size: cover; background-repeat: no-repeat;"></div>
                </div>
                <div class="item-card"></div>
                <div class="item-card translate-item">
                    <div class="item-title">TESIMONIAL/VOLTA</div>
                    <div class="item-body">
                        <span style="text-transform: uppercase; font-weight: bold; font-size: 0.7rem;">To us, they’re not just a company we outsource to, they’re integral to our business now and part of the team.”</span>
                    </div>
                </div>
                <div class="item-card translate-item">
                    <div class="item-title">
                        CONNECT WITH US
                    </div>
                    <div class="item-body" style="background: #4E5AE4; background-image: url('/services-img/insta.png'); background-size: contain; background-repeat: no-repeat; background-position: 75%;"></div>
                </div>
                <div class="item-card"></div>
                <div class="item-card translate-item">
                    <div class="item-title">
                        CONNECT WITH US
                    </div>
                    <div class="item-body" style="background: #EE6338; background-image: url('/services-img/linkedin.png'); background-size: 100px; background-repeat: no-repeat; background-position: 50% 50%;">
                    </div>
                </div>
            </div>
    
            <!-- 3rd row -->
            <div class="item-row">
                <div class="item-card">
                    <div class="item-title">VOLTA</div>
                    <div class="item-body" style="background-image: url('/services-img/usgs-nF1FvXdJL7o-unsplash 1.jpg'); background-size: cover; background-repeat: no-repeat;"></div>
                </div>
                <div class="item-card"></div>
                <div class="item-card">
                    <div class="item-title">+ DIGITAL ADVERTISING</div>
                    <div class="item-body" style="background-image: url('/services-img/digital-ads.png'); background-size: cover; background-repeat: no-repeat;"></div>
                </div>
                <div class="item-card"></div>
                <div class="item-card">
                    <div class="item-body" style="background-color: #EE6338;">
                        <h4 style="color: white;text-align: center; position: relative; top: 45%; font-size: 20px">+ CREATIVE</h4>
                    </div>
                </div>
                <div class="item-card"></div>
                <div class="item-card translate-item">
                    <div class="item-title">THINK AHEAD</div>
                    <div class="item-body" style="background-color: #12182D; background-image: url('/services-img/rigo-mission-1.png'); background-size: 95px; background-repeat: no-repeat; background-position: 50%;"></div>
                </div>
            </div>
            
            <!-- 4th row -->
            <div class="item-row">
                <div class="item-card">
                    <div class="item-title">GALLAGHER</div>
                    <div class="item-body" style="background-image: url('/services-img/matthew-henry-VviFtDJakYk-unsplash 1.png'); background-size: cover; background-repeat: no-repeat;"></div>
                </div>
                <div class="item-card"></div>
                <div class="item-card"></div>
                <div class="item-card">
                    <div class="item-title">MEET CO-FOUNDER STEPHEN</div>
                    <div class="item-body">
                        <span style="text-transform: uppercase; font-weight: bold; font-size: 0.7rem;">I’m immensely proud to work with a savvy team of digital marketers, copywriters, dEesigners & developers who turn our clients dreams into reality, solving complex problems at high speeds ON A DAILY BASIS.</span>
                    </div>
                </div>
                <div class="item-card"></div>
                <div class="item-card translate-item">
                    <div class="item-title">WHO</div>
                    <div class="item-body" style="background-image: url('/services-img/stairs.png'); background-size: cover; background-repeat: no-repeat;">
                    </div>
                </div>
            </div>
            
            <!-- 5th row -->
            <div class="item-row">
                <div class="item-card"></div>
                <div class="item-card"></div>
                <div class="item-card">
                    <div class="item-title">MEET CO-FOUNDER ELLIE</div>
                    <div class="item-body">
                        <span style="text-transform: uppercase; font-weight: bold; font-size: 0.7rem;">We co-founded rigo with a goal to create campaigns that put credible and creative content at the heart of multichannel campaigns, from conception to execution.</span>
                    </div>
                </div>
                <div class="item-card">
                    <div class="item-title"></div>
                    <div class="item-body" style="background-image: url('/services-img/green-grass.png'); background-size: cover; background-repeat: no-repeat;">
                    </div>
                </div>
                <div class="item-card"></div>
                <div class="item-card translate-item">
                    <div class="item-title">ARE WE?</div>
                    <div class="item-body" style="background-image: url('/services-img/stairs.png'); background-size: cover; background-repeat: no-repeat;">
                    </div>
                </div>
                <div class="item-card"></div>
                <div class="item-card translate-item">
                    <div class="item-title">MEET PETE</div>
                    <div class="item-body">
                        <span style="text-transform: uppercase; font-weight: bold; font-size: 0.7rem;">I've had the opportunity of helping several clients apply successfully to Google News, helping them reach wider audiences.</span>
                    </div>
                </div>
            </div>
            
            <div class="item-row">
                <div class="item-card"></div>
                <div class="item-card">
                    <div class="item-title"></div>
                    <div class="item-body" style="background-color: #504DE6;">
                        <p style="color: white;text-align: center; position: relative; top: 40%; font-size: 20px; font-weight: 700">+ DIGITAL ADVERTISING</p>
                    </div>
                </div>
                <div class="item-card"></div>
                <div class="item-card">
                    <div class="item-title">
                        CONNECT WITH US
                    </div>
                    <div class="item-body" style="background: #FFAA1C"></div>
                </div>
                <div class="item-card"></div>
                <div class="item-card translate-item">
                    <div class="item-title">MEET INDI</div>
                    <div class="item-body">
                        <span style="text-transform: uppercase; font-weight: bold; font-size: 0.7rem;">I’m proud of helping business owners and organisations reach their goals, whether they are just starting off, or already established.</span>
                    </div>
                </div>
                <div class="item-card translate-item">
                    <div class="item-title">CONTACT US</div>
                    <div class="item-body" style="background-image: url('/services-img/contact-us.png'); background-size: cover; background-repeat: no-repeat;"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
	* {
		--color: var(--app-color-lunarblue);
		--color-contrast: var(--app-color-lunarblue-contrast);

		color: var(--color);
	}

	:global(::selection) {
		background: var(--color);
		color: var(--color-contrast);
	}

    h1 {
        font-size: calc(2.375rem + 1.5vw);
    }

    @media (min-width: 1200px) {
        h1 {
            font-size: 5.5rem;
        }
    }

    .homepage-grid {
        margin-top: 100px;
        margin-bottom: 500px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
    }
    .item-row {
        flex: 1 0 30%;
        margin: 0px 2px 0px 2px;
        min-height: 190px;
        min-width: 185px;
    }

    .item-title {
        font-family: 'Satoshi' !important;
        font-weight: 400 !important;
        font-style: normal !important;
        font-size: 12px;
        line-height: 17px;
        height: 29px;
    }
    .item-card {
        height: 190px;
        min-width: 190px;
    }

    @media (min-width: 1440px) {
        .item-row {
            flex: 1 0 16%;
            min-height: 190px;
            min-width: 185px;
        }
        .item-card {
            height: 190px;
            min-width: 185px;
        }
    }

    .item-body {
        height: 100%;
        width: 100%;
    }

    .item-body span {
        font-size: 20px !important;
        font-family: 'Bebas Neue';
        font-weight: 400 !important;
        font-style: normal !important;
        line-height: 19px !important;
    }

    .translate-item {
        transform: translateY(-29px);
    }
</style>