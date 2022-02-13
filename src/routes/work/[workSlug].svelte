<script>
	import { navColor } from '$/stores/nav.store';
	import Footer from '$/components/Footer.svelte';
	import { style } from 'svelte-body';
    import { onMount } from 'svelte';
	onMount(() => {
		$navColor = 'var(--app-color-lunarblue)';
	});
</script>

<svelte:body use:style={{ background: 'var(--app-color-lunarblue-contrast)' }} />

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

    .workslugcontainer {
        display: flex;
        flex-direction: column;
    }
</style>

<div class="workslugcontainer">
    <div class="workheader">HEADER</div>
    <div class="workbody">BODY</div>
    <Footer href="/services">Gallagher</Footer>
</div>

