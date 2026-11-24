// A tiny stand-in for our Lit-based component library.
// Every call returns fresh classes, like a separately bundled copy of one library version.
import { LitElement, html, css, unsafeCSS } from 'lit';

const VERSIONS = {
	'1.17': { color: '#7a8394', hasBadge: false },
	'1.37': { color: '#0f9d76', hasBadge: true } // dv-badge is new in 1.37
};

export function defineComponentLib(registry, version) {
	const { color, hasBadge } = VERSIONS[version];

	class DvButton extends LitElement {
		static styles = css`
			button {
				display: inline-flex;
				align-items: center;
				gap: 0.6rem;
				padding: 0.6rem 1rem;
				border: 0;
				border-radius: 8px;
				background: ${unsafeCSS(color)};
				color: white;
				font: 600 1rem system-ui, sans-serif;
				cursor: pointer;
			}
			.version {
				padding: 0.1rem 0.45rem;
				border-radius: 999px;
				background: rgb(255 255 255 / 0.25);
				font-size: 0.75rem;
			}
		`;

		render() {
			return html`<button><slot></slot><span class="version">v${version}</span></button>`;
		}
	}
	registry.define('dv-button', DvButton);

	if (hasBadge) {
		class DvBadge extends LitElement {
			static styles = css`
				:host {
					display: inline-block;
					padding: 0.2rem 0.6rem;
					border-radius: 999px;
					background: #fde68a;
					color: #713f12;
					font: 600 0.8rem system-ui, sans-serif;
				}
			`;

			render() {
				return html`★ <slot></slot>`;
			}
		}
		registry.define('dv-badge', DvBadge);
	}
}
