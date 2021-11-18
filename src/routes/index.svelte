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
	<div class="title">
		{#if init}
			<h1 style="font-size: 100px" transition:typewriter>evokko</h1>
		{/if}
	</div>
	<Logo />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.title {
		position: relative;
		width: 350px;
		height: 250px;
		/* padding: 0 0 calc(100% * 495 / 2048) 0; */
		background: linear-gradient(135deg, #37ff3c, #3bbfff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.card-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 30px;
	}

	@media screen and (max-width: 900px) {
		.card-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: space-between;
			gap: 30px;
		}
	}
</style>
