export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/galeria_1eb5d48a.mjs').then(n => n.g);

export { page };
