<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
		flex: 1 1 auto;
	}

	/* width */
	:root::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	:root::-webkit-scrollbar-track {
		background: #15151a;
	}

	/* Handle */
	:root::-webkit-scrollbar-thumb {
		width: 5px;
		background: linear-gradient(180deg, #37ff3c, #3bbfff);
		border-radius: 5px;
	}

	/* Handle on hover */
	:root::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style>
