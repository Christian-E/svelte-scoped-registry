// Control: the same fragment without Svelte, so the browser parses the markup inside the shadow root.
import { defineComponentLib } from './component-lib.js';

const registry = new CustomElementRegistry();
defineComponentLib(registry, '1.37');

class VanillaFragment extends HTMLElement {
	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: 'open', customElementRegistry: registry });
		shadowRoot.innerHTML = `
			<style>
				.content { display: flex; align-items: center; gap: 0.75rem; min-height: 3rem; }
			</style>
			<div class="content">
				<dv-button>Save</dv-button>
				<dv-badge>New</dv-badge>
			</div>
		`;
	}
}
customElements.define('vanilla-fragment', VanillaFragment);
