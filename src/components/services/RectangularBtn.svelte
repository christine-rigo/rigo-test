<script lang="ts">
    export let cta:string;
    export let href:string;
    export let btnColor:string;
</script>

<a href={href}>
    <div class="service-container-body-right-btn {btnColor}">{cta}</div>
</a>

<style lang="scss">
    .btn-lunarblue {
        color: var(--app-color-lunarblue-contrast);
        border: 1px solid var(--app-color-lunarblue);

		transition: background-color 150ms ease-in;
		&:hover {
			background-color: var(--app-color-lunarblue);
            color: white;
		}
	}

    .btn-red {
        color: var(--app-color-lunarblue-contrast);
        border: 1px solid var(--app-color-red);

		&:hover {
			background-color: var(--app-color-red);
            color: white;
		}
	}

    .btn-green {
        color: var(--app-color-lunarblue-contrast);
        border: 1px solid var(--app-color-green);

		transition: background-color 150ms ease-in;
		&:hover {
			background-color: var(--app-color-green);
            color: white;
		}
	}

    .service-container-body-right-btn {
        font-family: "Bebas Neue";
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.02em;

        padding: 0.75vw;
        cursor: pointer;
    }

    @media(max-width: 768px) {
        .service-container-body-right-btn {
            padding: 2vw 6vw;
        }
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