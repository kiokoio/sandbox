<script context="module" lang="ts">
	import Card, { Actions, ActionIcons, Content, Media } from '@smui/card';
	import IconButton, { Icon } from '@smui/button';
	import type { Navigation } from '$lib/types/Navigation';
</script>

<script lang="ts">
	export let nav: Navigation;
</script>

<div>
	<Card padded class="card">
		<div style="padding: 1rem;">
			<h3 style="margin: 0;">{nav.title}</h3>
		</div>
		<Content>
			{@html nav.content}<br /><br />
			<!-- <a href={nav.path}>{nav.label}</a> -->
		</Content>
		<Actions>
			<ActionIcons>
				{#if nav.button}
					<IconButton
						on:click={() => window.open('https://www.linkedin.com/company/evokko')}
						aria-label="contact"
						title="contact"
					>
						<Icon class="material-icons">{nav.label}</Icon>
					</IconButton>
				{:else}
					<Icon class="material-icons">{nav.label}</Icon>
				{/if}
			</ActionIcons>
		</Actions>
	</Card>
</div>

<style>
	card {
		width: 400px;
	}
</style>
