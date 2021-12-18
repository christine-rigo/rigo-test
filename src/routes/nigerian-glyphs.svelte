<script lang="ts">
	import Footer from '$/components/Footer.svelte';
	import Hr from '$/components/utils/Hr.svelte';
	import { navColor } from '$/stores/nav.store';
	import { onMount } from 'svelte';

	onMount(() => {
		$navColor = 'var(--app-color-blue)';
	});
</script>

<h1>Nigerian Glyphs</h1>

<br /><br />

<div class="main-content">
	<div class="banner">
		<Hr /> <br />
		XXXX
	</div>

	<br /><br /><br />

	<div class="glyphs">
		<div class="glyph">
			<img src="/glyphs-svg/you-have-changed.svg" alt="You Have changed glyph" />
			<p style="--color: var(--app-color-green)">You have changed</p>
		</div>

		<div class="glyph">
			<img src="/glyphs-svg/understanding.svg" alt="You Have changed glyph" />
			<p style="--color: var(--app-color-yellow)">Understanding</p>
		</div>

		<div class="glyph">
			<img src="/glyphs-svg/think-ahead.svg" alt="You Have changed glyph" />
			<p style="--color: var(--app-color-red)">Think ahead</p>
		</div>

		<div class="glyph">
			<img src="/glyphs-svg/two-heads-better-than-one.svg" alt="You Have changed glyph" />
			<p style="--color: var(--app-color-blue)">Two heads are better than one</p>
		</div>

		<div class="glyph">
			<img src="/glyphs-svg/speech.svg" alt="You Have changed glyph" />
			<p style="--color: var(--app-color-red)">Speech</p>
		</div>

		<div class="glyph">
			<img src="/glyphs-svg/unity.svg" alt="You Have changed glyph" />
			<p style="--color: var(--app-color-blue)">Unity</p>
		</div>

		<div class="glyph">
			<img src="/glyphs-svg/reflection.svg" alt="You Have changed glyph" />
			<p style="--color: var(--app-color-green)">Reflection</p>
		</div>

		<div class="glyph">
			<img src="/glyphs-svg/strength.svg" alt="You Have changed glyph" />
			<p style="--color: var(--app-color-yellow)">Strength</p>
		</div>
	</div>
</div>

<div style="display: contents;">
	<Footer href="/services">Our Services</Footer>
</div>

<style lang="scss">
	* {
		--color: var(--app-color-blue);
		--color-contrast: var(--app-color-blue-contrast);

		color: var(--color);
	}

	:global(::selection) {
		background: var(--color);
		color: var(--color-contrast);
	}

	.main-content {
		width: 100%;

		padding: 2rem 8vw 10rem 6vw;
	}

	.banner {
		padding: 0 2vw;
	}

	.glyphs {
		display: grid;
		grid-template-columns: repeat(auto-fill, 129px);
		gap: 8rem;
	}

	.glyph {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.5rem;

		width: 129px;

		img {
			height: 90px;
			width: auto;
		}

		p {
			font-size: 0.75rem;
			text-transform: uppercase;
			text-align: center;
		}
	}
</style>
