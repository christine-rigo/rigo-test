
<script lang="ts">
	export let infoColor = '';
	export let columnSeparator = '';
	export let content1:string;
	export let content2:string;
	export let content3:string;
	export let content4:string;
	export let info1:string;
	export let info2:string;
	export let info3:string;
	export let info4:string;
</script>

<div class="container">
  <img class="hidden-mobile" src={columnSeparator} alt="rigo">
  <div class="tags">
    <div class="adtagtitle">
      <img src={content1} alt="rigo">
    </div>
    <div class="taginfo" style="color: {infoColor}">{info1}</div>
  </div>
  <img class="hidden-mobile" src={columnSeparator} alt="rigo">
  <div class="tags">
    <div class="adtagtitle">
      <img src={content2} alt="rigo">
    </div>
    <div class="taginfo" style="color: {infoColor}">{info2}</div>
  </div>
  <img class="hidden-mobile" src={columnSeparator} alt="rigo">
  <div class="tags">
    <div class="adtagtitle">
      <img src={content3} alt="rigo">
    </div>
    <div class="taginfo" style="color: {infoColor}">{info3}</div>
  </div>
  <img class="hidden-mobile" src={columnSeparator} alt="rigo">
  <div class="tags">
    <div class="adtagtitle">
      <img src={content4} alt="rigo">
    </div>
    <div class="taginfo" style="color: {infoColor}">{info4}</div>
  </div>
  <img class="hidden-mobile" src={columnSeparator} alt="rigo">
</div>

<style lang="scss">
  .container {
    margin-top: 2.375rem;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;

		.tags {
			display: flex;
			flex-direction: column;
			gap: 1vw;
			width: 128px;
			align-items: center;

			.taginfo {
				font-family: 'Satoshi';
				font-style: normal;
				font-weight: normal;
				font-size: 12px;
				line-height: 140%;
			}
		}
	}
</style>