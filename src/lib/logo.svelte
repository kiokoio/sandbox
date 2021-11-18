<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let init = false;

	onMount(() => {
		init = true;
	});
</script>

<div class="corner">
	{#if init}
		<svg height="100%" width="100%" transition:fade={{ duration: 5000 }}>
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
			<line class="logo" x1="25%" y1="50%" x2="75%" y2="90%" stroke="url(#linear)" />
			<line class="logo" x1="75%" y1="50%" x2="25%" y2="90%" stroke="url(#linear)" />
			<rect
				class="logo"
				x="50%"
				y="10%"
				width="1px"
				height="85%"
				stroke="url(#linear2)"
				fill="url(#linear2)"
			/>
		</svg>
	{/if}
</div>

<style>
	.logo {
		stroke-width: 5%;
		stroke-linecap: round;
	}
</style>
