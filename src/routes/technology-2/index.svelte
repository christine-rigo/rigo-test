<script lang="ts">
	import FullpageSection from '$/components/technology/FullpageSlider.svelte';
</script>

<FullpageSection step="01" title="T NZUKO" --fp-bg-color="#FFB436" --fp-top-heading="#504DE6">
	<span slot="heading"> Consultation & onboarding </span>
	<div class="step1-content" slot="content">
		Nobody knows your business better than you.<br /> Help us understand what you do and what keeps
		you going.<br />Tell us all about your goals and target audience. Our team will then create a
		roadmap to make your website dreams a reality!
	</div>
	<img slot="icon" class="icon" src="/technology/step1.png" alt="Step 1" />
</FullpageSection>

<FullpageSection step="02" title="INYOCHA" --fp-bg-color="#6562F5" --fp-top-heading="#FFAA1C">
	<span slot="heading"> Consultation & onboarding </span>
	<div class="step2-content" slot="content">
		We're strategic thinkers who love a challenge. With a deep market understanding,<br /> we’ll
		identify specific growth opportunities to keep you up to speed.<br />
		You will have complete visibility into the project scope, timeline, and budget at every step of the
		way.
	</div>
	<img slot="icon" class="icon" src="/technology/step2.png" alt="Step 2" />
</FullpageSection>

<FullpageSection step="03" title="AZUKA" --fp-bg-color="#36E0BA" --fp-top-heading="#EE6338">
	<span slot="heading"> Meet your pod </span>
	<div class="step3-content" slot="content">
		We are brand builders. Our creative team will meet with you for an initial free consultation
		around branding, positioning, content & communication style.<br />
		We’ll work closely with you to highlight your business USP, strengths and values. With custom, carefully
		crafted design, we’re sure we can help you stand out!
	</div>
	<img slot="icon" class="icon" src="/technology/step3.png" alt="Step 3" />
</FullpageSection>

<FullpageSection step="04" title="ANARA" --fp-bg-color="#EE6338" --fp-top-heading="#36E0BA">
	<span slot="heading"> Project kick off </span>
	<div class="step4-content" slot="content">
		We're ready to bring your website to life! Every little development milestone, information flow
		and project deliverable will be shared with you.<br />
		Our team will rigorously test the website to ensure it's bug-free and optimised, and launch it with
		the confidence of a winner!
	</div>
	<img slot="icon" class="icon" src="/technology/step4.png" alt="Step 4" />
</FullpageSection>

<style lang="scss">
	.step1-content {
		max-width: 445px;
		margin: 0 auto;
	}
	.step3-content,
	.step4-content {
		max-width: 570px;
		margin: 0 auto;
	}
	.icon {
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		margin: 0 auto;
		transform: translateY(-50%);
	}
</style>
