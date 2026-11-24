<!-- The host app. It uses component library v1.17 from the global registry. -->
<script module>
	import { defineComponentLib } from './component-lib.js';
	import './fragment/Fragment.svelte';
	import './vanilla-fragment.js';

	defineComponentLib(customElements, '1.17');
</script>

<h1>Svelte + scoped custom element registries</h1>
<p class="lede">
	The host defines component library <b>v1.17</b> (grey) globally. Both fragments bring <b>v1.37</b> (green, with the new
	<code>dv-badge</code>) in their own scoped registry.
</p>

<div class="cards">
	<section class="card host">
		<h2>Host app</h2>
		<p class="built">Component library v1.17, global registry</p>
		<p class="expected">Expected: grey v1.17 button, no badge (v1.17 has no <code>dv-badge</code>)</p>
		<div class="stage">
			<dv-button>Host action</dv-button>
		</div>
	</section>

	<section class="card fragment">
		<h2>Svelte fragment</h2>
		<p class="built">Component library v1.37, scoped registry via <code>shadow: {'{ customElementRegistry }'}</code></p>
		<p class="expected">Expected: green v1.37 button and a yellow ★ New badge</p>
		<div class="stage">
			<svelte-fragment></svelte-fragment>
		</div>
	</section>

	<section class="card fragment">
		<h2>Same fragment without Svelte (control)</h2>
		<p class="built">Component library v1.37, scoped registry via <code>attachShadow</code> + <code>innerHTML</code></p>
		<p class="expected">Expected: green v1.37 button and a yellow ★ New badge</p>
		<div class="stage">
			<vanilla-fragment></vanilla-fragment>
		</div>
	</section>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 2rem;
		background: #f1f3f6;
		color: #1b1d24;
		font: 1rem/1.5 system-ui, sans-serif;
	}
	h1 { margin: 0 0 0.25rem; font-size: 1.5rem; }
	.lede { margin: 0 0 2rem; color: #5b6070; }
	.cards { display: grid; gap: 1.25rem; grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr)); }
	.card { background: white; border-radius: 12px; padding: 1.25rem; box-shadow: 0 1px 3px rgb(0 0 0 / 0.12); border-top: 6px solid var(--accent); }
	.card h2 { margin: 0; font-size: 1.1rem; }
	.card .built { margin: 0.1rem 0 0.75rem; color: #5b6070; font-size: 0.9rem; }
	.expected { margin: 0 0 1rem; padding: 0.5rem 0.75rem; border-radius: 8px; background: #f1f3f6; font-size: 0.85rem; }
	.host { --accent: #7a8394; }
	.fragment { --accent: #0f9d76; }
	.stage { padding: 1rem; border: 2px dashed #d0d5dd; border-radius: 8px; }
</style>
