import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// Every .svelte file is compiled as a custom element, like in our real fragments.
export default defineConfig({
	plugins: [svelte({ compilerOptions: { customElement: true } })]
});
