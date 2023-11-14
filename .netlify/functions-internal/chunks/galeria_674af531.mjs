export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/galeria_2abb58d1.mjs').then(n => n.g);

export { page };
