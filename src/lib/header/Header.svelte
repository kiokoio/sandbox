<script lang="ts">
</script>

<header>
	<div class="corner" style="width: 50px" />

	<!-- <nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.path === '/blog'}><a sveltekit:prefetch href="/blog">Blog</a></li>
			<li class:active={$page.path === '/contact'}>
				<a sveltekit:prefetch href="/contact">Contact</a>
			</li>
			<li class:active={$page.path === '/donation'}>
				<a sveltekit:prefetch href="/donation">Donation</a>
			</li>
			<li class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>
 -->
	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		height: 50px;
		flex: 0 0 auto;
	}

	.corner {
		width: 50;
		height: 50;
		display: flex;
		justify-content: flex-start;
	}
</style>
