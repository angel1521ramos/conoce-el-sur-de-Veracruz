import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_914c51b6.mjs';

const _page0  = () => import('./chunks/generic_9397d4dd.mjs');
const _page1  = () => import('./chunks/index_8af66a88.mjs');
const _page2  = () => import('./chunks/galeria_f18e494f.mjs');
const _page3  = () => import('./chunks/image_1_6bbf215c.mjs');
const _page4  = () => import('./chunks/image_2_fcf651da.mjs');
const _page5  = () => import('./chunks/image_3_f1bb1196.mjs');
const _page6  = () => import('./chunks/image_4_79f09a44.mjs');
const _page7  = () => import('./chunks/PostsLayout_22f6df0d.mjs');
const _page8  = () => import('./chunks/post_1_e13a0ae1.mjs');
const _page9  = () => import('./chunks/post_2_a2667517.mjs');
const _page10  = () => import('./chunks/post_3_84eb2fb0.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/galeria.astro", _page2],["src/pages/images/image_1.md", _page3],["src/pages/images/image_2.md", _page4],["src/pages/images/image_3.md", _page5],["src/pages/images/image_4.md", _page6],["src/pages/posts/PostsLayout.astro", _page7],["src/pages/posts/post_1.md", _page8],["src/pages/posts/post_2.md", _page9],["src/pages/posts/post_3.md", _page10]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
