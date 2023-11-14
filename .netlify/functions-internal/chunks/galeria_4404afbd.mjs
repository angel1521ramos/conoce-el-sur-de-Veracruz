export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/galeria_c089b8ff.mjs').then(n => n.g);

export { page };
