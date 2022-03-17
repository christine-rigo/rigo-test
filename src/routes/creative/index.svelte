<script lang="ts">
	import ScrollerIndicator from '$/components/ScrollerIndicator.svelte';
	import ServiceInformationalSection from '$/components/services/ServiceInformationalSection.svelte';
	import ServicesPageXs from '$/components/services/ServicesPageXs.svelte';
	import ServicesSummary from '$/components/services/ServicesSummary.svelte';
	import SiBox from '$/components/services/SIBox.svelte';
	import Hr from '$/components/utils/Hr.svelte';
	import { navColor } from '$/stores/nav.store';
	import { browser } from '$app/env';
	import { inview } from 'svelte-inview';

	$: isChrome =
		browser &&
		'chrome' in window &&
		navigator.userAgent.includes('Edg') &&
		!('brave' in window.navigator);
</script>

<svelte:head>
	<title>Creative / Rigo Agency</title>
</svelte:head>



<style lang="scss">

</style>
