export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/galeria_12921496.mjs').then(n => n.g);

export { page };
