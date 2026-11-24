import { defineComponentLib } from '../component-lib.js';

// The fragment brings its own copy of the component library, defined only in its own registry.
export const registry = new CustomElementRegistry();
defineComponentLib(registry, '1.37');
