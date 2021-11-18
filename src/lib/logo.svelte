<script>
	import { fade, fly } from 'svelte/transition';

	let visible = false;
</script>

<div class="holder">
	<label>
		<input type="checkbox" bind:checked={visible} />
		visible
	</label>
	{#if visible}
		<svg height="600px" width="100%">
			<defs>
				<linearGradient id="linear" x1="50%" y1="0%" x2="50%" y2="100%" spreadMethod="pad">
					<stop offset="0%" stop-color="#37ff3c" stop-opacity="0.0" />
					<stop offset="20%" stop-color="#37ff3c" stop-opacity="1.0" />
					<stop offset="80%" stop-color="#3bbfff" stop-opacity="1.0" />
					<stop offset="100%" stop-color="#3bbfff" stop-opacity="0.0" />
				</linearGradient>
				<linearGradient id="linear2" x1="50%" y1="0%" x2="50%" y2="100%" spreadMethod="pad">
					<stop offset="0%" stop-color="#37ff3c" stop-opacity="0.0" />
					<stop offset="50%" stop-color="#37ff3c" stop-opacity="1.0" />
					<stop offset="90%" stop-color="#3bbfff" stop-opacity="1.0" />
					<stop offset="100%" stop-color="#3bbfff" stop-opacity="0.0" />
				</linearGradient>
			</defs>
			<line
				class="logo"
				x1="25%"
				y1="50%"
				x2="75%"
				y2="90%"
				stroke="url(#linear)"
				in:fly={{ y: 200, duration: 1000 }}
				out:fade={{ duration: 1000 }}
			/>
			<line
				class="logo"
				x1="75%"
				y1="50%"
				x2="25%"
				y2="90%"
				stroke="url(#linear)"
				in:fly={{ x: 200, duration: 2000 }}
				out:fade={{ duration: 2000 }}
			/>
			<rect
				class="logo"
				x="50%"
				y="10%"
				width="1px"
				height="85%"
				stroke="url(#linear2)"
				fill="url(#linear2)"
				fill-opacity="0.0"
				in:fly={{ y: -200, duration: 3000 }}
				out:fade={{ duration: 3000 }}
			/>
		</svg>
	{/if}
</div>

<style>
	.holder {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: left;
	}
	.logo {
		stroke-width: 3.5%;
		stroke-linecap: round;
	}

	svg {
		flex: 1;
	}
</style>
