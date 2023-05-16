<div class="homegridcontainer">
	<div
		class="homegrid grid1"
		style="background: url('/home/grid-1.png') no-repeat top center/cover;"
	/>
	<div
		class="homegrid grid2"
		style="background: url('/home/grid-2.svg') no-repeat top center/cover;"
	/>
	<div
		class="homegrid grid3"
		style="background: url('/home/grid-3.svg') no-repeat top center/cover;"
	>
		<a href="/creative/volta" style="display:inline-block;width: 100%; height: 100%;" />
	</div>
	<div
		class="homegrid grid4"
		style="background: url('/home/grid-4.svg') no-repeat top center/cover;"
	>
		<a href="/data/gallagher" style="display:inline-block;width: 100%; height: 100%;" />
	</div>
	<div
		class="homegrid grid5"
		style="background: url('/home/grid-5.svg') no-repeat top center/cover;"
	/>
	<div
		class="homegrid grid6"
		style="background: url('/home/grid-6.png') no-repeat top center/cover;"
	/>

	<div
		class="homegrid grid7"
		style="background: url('/home/grid-7.svg') no-repeat top center/cover;"
	>
		<a
			href="/digital-advertising/volta-site-traffic"
			style="display:inline-block;width: 100%; height: 100%;"
		/>
	</div>
	<div
		class="homegrid grid8"
		style="background: url('/home/grid-8.svg') no-repeat top center/cover;"
	/>
	<div
		class="homegrid grid9"
		style="background: url('/home/grid-9-new.svg') no-repeat top center/cover;"
	>
		<a href="/technology" style="display:inline-block;width: 100%; height: 100%;" />
	</div>

	<div
		class="homegrid grid10"
		style="background: url('/home/grid-10.png') no-repeat top center/cover;"
	/>
	<div
		class="homegrid grid11"
		style="background: url('/home/grid-11.svg') no-repeat top center/cover;"
	/>
	<div
		class="homegrid grid12"
		style="background: url('/home/grid-12.png') no-repeat top center/cover;"
	/>

	<div
		class="homegrid grid13"
		style="background: url('/home/grid-13.svg') no-repeat top center/cover;"
	/>
	<div
		class="homegrid grid14"
		style="background: url('/home/grid-14.png') no-repeat top center/cover;"
	/>
	<div
		class="homegrid grid15"
		style="background: url('/home/grid-15.png') no-repeat top center/cover;"
	/>
</div>

<style lang="scss">
	.homegridcontainer {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-items: center;
	}

	.homegrid {
		flex: 1 1 30%;
		width: 100%;
		height: 38vw;
		text-align: center;
	}

	@media (max-width: 425px) {
		.homegrid {
			flex: 1 1 50%;
			height: 60vw;
		}

		.grid1 {
			order: 1;
		}

		.grid2 {
			order: 2;
		}

		.grid4 {
			order: 3;
		}

		.grid5 {
			order: 4;
		}

		.grid7 {
			order: 5;
		}

		.grid8 {
			order: 6;
		}

		.grid10 {
			order: 7;
		}

		.grid9 {
			order: 8;
		}

		.grid13 {
			order: 9;
		}

		.grid15 {
			order: 10;
		}

		.grid11 {
			order: 11;
		}

		.grid14 {
			order: 12;
		}

		.grid6 {
			order: 13;
		}

		.grid3 {
			order: 14;
		}

		.grid12 {
			order: 15;
			display: none;
		}
	}
</style>
