<script lang="ts">
	export const prerender = true;
	import { onMount } from 'svelte';
	import Logo from '$lib/logo.svelte';

	let init = false;

	onMount(() => {
		init = true;
	});

	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.002);

		return {
			duration,
			tick: (t) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<section>
	<div class="logo" style="height : 75%; ">
		<Logo />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.logo {
		position: relative;
		width: 500px;
		height: 700px;
		min-height: 700px;

		/* padding: 0 0 calc(100% * 495 / 2048) 0; */
	}
</style>
