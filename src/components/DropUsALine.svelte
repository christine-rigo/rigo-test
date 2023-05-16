<div class="container">
	<div class="item">
		<form
			class="contact-form-grid"
			data-netlify="true"
			data-netlify-recaptcha="true"
			name="contactform"
			action="/thank-you"
			method="POST"
		>
			<input type="hidden" name="form-name" value="contactform" />
			<input type="hidden" name="bot-field" />
			<div class="contact-form-row">
				<div class="col-2">
					<div class="contact-form-label">NAME</div>
					<input required type="text" name="name" class="contact-form-input" />
				</div>
			</div>
			<div class="contact-form-row">
				<div class="col-2">
					<div class="contact-form-label">EMAIL</div>
					<input required type="email" name="email" class="contact-form-input" />
				</div>
				<div class="col-2">
					<div class="contact-form-label">PHONE</div>
					<input required type="tel" name="phone" class="contact-form-input" />
				</div>
			</div>
			<div class="contact-form-row">
				<div class="col-1">
					<div class="contact-form-label">QUERY</div>
					<input required type="text" name="query" class="contact-form-input" />
				</div>
			</div>
			<div data-netlify-recaptcha="true" />
			<div class="contact-form-button">
				<button type="submit">START YOUR ASCENT</button>
			</div>
		</form>
	</div>
</div>

<style lang="scss">
	* {
		--color-contrast: var(--app-color-lunarblue-contrast);

		color: var(--color);
	}

	input {
		border: none;
		background-color: transparent;
		border-bottom: 1px solid #faf5ee;
		color: white;
		width: 100%;
		z-index: 200;
		padding-top: 9px;
	}

	:global(::selection) {
		background: var(--color);
		color: var(--color-contrast);
	}

	.container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding-bottom: 10rem;
	}
	.item {
		flex-grow: 1;
		width: 100%;
		z-index: 100;
		margin-bottom: 2rem;
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
		grid-template-rows: 1fr 1fr 1fr 1fr;
		border: solid 1px #504de6;

		@media (min-width: 1440px) {
			margin-top: 10rem;
		}
	}
	.contact-form-row {
		display: flex;
		flex-direction: row;
		margin-bottom: 6rem;

		.col-2 {
			width: 45%;
			margin-right: 5%;
		}

		.col-1 {
			width: 95%;
		}
	}
	.contact-form-label {
		font-family: 'Bebas Neue';
		font-weight: 400;
		font-size: 24px;
		line-height: 24px;
		text-align: left;
	}
	.contact-form-button {
		align-self: center;
		button {
			font-family: 'Bebas Neue', sans-serif;
			border-radius: 2rem;
			padding: 1.2rem 2.5rem 1rem 2.5rem;
			font-size: 1.25rem;
			line-height: 1;
			border: 1px solid white;
			transition: background-color 150ms ease-in;
			&:hover {
				color: #faf5eebe;
			}
		}
	}

	// Responsive layout
	.reponsive-image {
		width: 100%;
		height: auto;
	}
	@media (max-width: 1023px) {
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

	@media (max-width: 425px) {
		.footer-container {
			margin: 10vw 5vw;
			padding-bottom: 10vw;
		}
	}
</style>
