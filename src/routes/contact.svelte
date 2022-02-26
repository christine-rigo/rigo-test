<script lang="ts">
	import Footer from '$/components/Footer.svelte';
	import { navColor } from '$/stores/nav.store';
	import { onMount } from 'svelte';
	import { style } from 'svelte-body';

	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>

<svelte:body use:style={{ background: 'var(--app-color-lunarblue-contrast)' }} />

<svelte:head>
	<title>Contact Us / Rigo Agency</title>
</svelte:head>

<div style="padding: 0rem 2rem 2rem 2rem;">
    <div class="container">
        <div class="item">
            <div class="contact-form-info">
                <div>
                    <h1>Drop Us a Line</h1>
                    <img class="hidden-1024" src="/contact-svg/arrow-2.svg" alt="rigo line" width="172px" style="transform: translate(270px, -35px);">
                </div>
                <div>
                    <img style="transform: translateY(-10px)" src="/contact-svg/hr-line.svg" alt="contact rigo" height="5px" width="57px">
                    <p>We'd love to hear from you.</p>
                    <div class="contact-form-image"><img class="" src="/contact-img/contact-us.png" alt="contact rigo"></div>
                </div>
                
            </div>
        </div>
        <div class="item">
            <div class="contact-form-grid">
                <div class="contact-form-row">
                    <div class="contact-form-label">NAME</div>
                    <div class="contact-form-input"></div>
                </div>
                <div class="contact-form-row">
                    <div class="contact-form-label">QUERY</div>
                    <div class="contact-form-input"></div>
                </div>
                <div class="contact-form-row">
                    <div class="contact-form-label">EMAIL</div>
                    <div class="contact-form-input"></div>
                </div>
                <div class="contact-form-row">
                    <div class="contact-form-label">PHONE</div>
                    <div class="contact-form-input"></div>
                </div>
                <div class="contact-form-button">
                    <button>START YOUR ASCENT</button>
                </div>
            </div>
        </div>
    </div>
    <br><br><br>
    <div style="display: contents;">
        <Footer href="#volta">Volta</Footer>
    </div>
</div>

<style lang="scss">
	* {
		--color: var(--app-color-lunarblue);
		--color-contrast: var(--app-color-lunarblue-contrast);

		color: var(--color);
	}

    h1 {
		padding-right: 7rem;
	}

	// Class for responsive h1
	h1 {
        font-size: calc(2.375rem + 1.5vw);
    }
    @media (min-width: 1200px) {
        h1 {
            font-size: 5.5rem;
        }
    }

	:global(::selection) {
		background: var(--color);
		color: var(--color-contrast);
	}

    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-right: 9rem;
    }
    .item {
        flex-grow: 1;
        width: 100%;
        margin-bottom: 2rem;
    }
    @media(min-width: 1440px) {
        .item {
            width: 30%;
        }
    }
    .sub-item {
        display: flex;
        flex-direction: column;
        text-align: center;

        div {
            margin-top: 75px;
        }

        div img {
            width: 100%;
        }
    }
    .contact-form-info {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: stretch;

        div {
            flex: 1;
        }
    }
    .contact-form-image {
        margin-top: 50px;
    }
    .contact-form-grid {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 1fr 3fr 1fr 1fr 3fr;
        border: solid 1px #504de6;
        height: 512px;

        @media(min-width: 1440px) {
            margin-top: 10rem;
        }
    }
    .contact-form-row {
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-template-rows: auto;
    }
    .contact-form-row:not(:last-child) {
        border-bottom: solid 1px #504de6;
    }
    .contact-form-label {
        font-family: 'Bebas Neue';
        font-weight: 400;
        font-size: 24px;
        line-height: 24px;
        text-align: center;
        align-self: center;
    }
    .contact-form-button {
        display: grid;
        justify-self: center;
        align-self: center;
        button {
			font-family: 'Bebas Neue', sans-serif;
			box-shadow: 0 0 0 1px #504de6;
			border-radius: 2rem;
			padding: 1.2rem 2.5rem 1rem 2.5rem;
			font-size: 1.25rem;
			line-height: 1;
			transition: background-color 150ms ease-in, box-shadow 150ms ease-in;
			&:hover {
				background-color: #504de6;
                color: white;
				box-shadow: 0px 1.8px 4.5px rgba(0, 0, 0, 0.1), 0px 14px 36px rgba(0, 0, 0, 0.2);
			}
		}
    }
    .contact-form-input {
        border-left: solid 1px #504de6;
    }

    // Responsive layout
    .reponsive-image {
        width: 100%;
        height: auto;
    }
    @media(max-width: 1023px) {
        h1 {
		padding-right: 0rem;
	    }

        .container {
            margin-right: 0rem;
        }

        .contact-form-image {
            width: 100%;
        }

        .hidden-1024 {
            display: none;
        }
    }
</style>
