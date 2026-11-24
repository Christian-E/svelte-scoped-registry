<!-- The shadow option takes a ShadowRootInit, so we can give the shadow root our scoped registry -->
<svelte:options
	customElement={{
		tag: 'svelte-fragment',
		shadow: { mode: 'open', customElementRegistry: registry }
	}}
/>

<script>
	import { registry } from './registry.js';
</script>

<div class="content">
	<dv-button>Save</dv-button>
	<dv-badge>New</dv-badge>
</div>

<style>
	.content {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		min-height: 3rem;
	}
</style>
