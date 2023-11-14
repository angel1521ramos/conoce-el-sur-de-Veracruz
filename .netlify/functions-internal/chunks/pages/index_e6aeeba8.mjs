/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot, e as addAttribute, f as renderComponent } from '../astro/server_d07ed82c.mjs';
import 'clsx';
import { $ as $$Navbar, a as $$NavOption, d as $$Menu, b as $$Footer, c as $$Layout } from './PostsLayout_4f391f4a.mjs';

const $$Astro$5 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/blog/Title.astro", void 0);

const $$Astro$4 = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Posts;
  return renderTemplate`${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-8">${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/blog/Posts.astro", void 0);

const $$Astro$3 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const { etiqueta = "", titulo = "", descripcion = "", link = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"><a href="#" class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"><svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"></path></svg>${etiqueta}</a><h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">${titulo}</h2><p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">${descripcion}</p><a${addAttribute(link, "href")} class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read
      more
<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></div>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/blog/Card.astro", void 0);

const $$Astro$2 = createAstro();
const $$Carrusel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Carrusel;
  return renderTemplate`${maybeRenderHead()}<div id="custom-controls-gallery" class="relative w-full" data-carousel="slide"><!-- Carousel wrapper --><div class="relative h-56 overflow-hidden rounded-lg md:h-96"><!-- Item 1 -->${renderSlot($$result, $$slots["default"])}<!-- Item 1 --></div><div class="flex justify-center items-center pt-4"><button type="button" class="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev><span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white"><svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"></path></svg><span class="sr-only">Previous</span></span></button><button type="button" class="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next><span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white"><svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg><span class="sr-only">Next</span></span></button></div></div>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/Carrusel.astro", void 0);

const $$Astro$1 = createAstro();
const $$CarruselImg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CarruselImg;
  const { link = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="hidden duration-700 ease-in-out" data-carousel-item><img${addAttribute(link, "src")} class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""></div>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/CarruselImg.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const imagen = "https://scontent.fmid1-3.fna.fbcdn.net/v/t39.30808-6/350975952_514236867474399_3146924486109421848_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFi34o-gocXgFSLl6nWts7HKcCXB6pDowUpwJcHqkOjBTY3PY_GgStCShzt2_SLQsPt0b34_wP9Agioj0-2XfLj&_nc_ohc=0lCe9bQHQWIAX9-mE6m&_nc_ht=scontent.fmid1-3.fna&oh=00_AfDHHwzLPnoAiEBgFguo6oQom62zuFR8c_QFYCnoJfhv8A&oe=6557D9E8", link = "https://www.facebook.com/profile.php?id=100092898635950", nombre = "p\xE1gina oficial de conoce el sur de Veracruz";
  const articulos = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post_1.md": () => import('./post_1_1a6e1e8b.mjs'),"./posts/post_2.md": () => import('./post_2_1842935d.mjs'),"./posts/post_3.md": () => import('./post_3_6dc8e8cb.mjs')}), () => "./posts/*.md");
  const imagenes = await Astro2.glob(/* #__PURE__ */ Object.assign({"./images/image_1.md": () => import('./image_1_e566d858.mjs'),"./images/image_2.md": () => import('./image_2_c139c582.mjs'),"./images/image_3.md": () => import('./image_3_9d90648f.mjs'),"./images/image_4.md": () => import('./image_4_36c18340.mjs')}), () => "./images/*.md");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "imagen": imagen, "link": link, "nombre": nombre }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/", "nombre": "Inicio" })}${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/galeria", "nombre": "Galeria" })}` })}${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Title", $$Title, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Carrusel", $$Carrusel, {}, { "default": ($$result5) => renderTemplate`${imagenes.map((x) => renderTemplate`${renderComponent($$result5, "CarruselImg", $$CarruselImg, { "link": x.frontmatter.link })}`)}` })}` })}${renderComponent($$result3, "Posts", $$Posts, {}, { "default": ($$result4) => renderTemplate`${articulos.map((x) => renderTemplate`${renderComponent($$result4, "Card", $$Card, { "etiqueta": x.frontmatter.etiqueta, "titulo": x.frontmatter.titulo, "descripcion": x.frontmatter.descripcion, "link": x.frontmatter.redireccion })}`)}` })}` })}${renderComponent($$result2, "Footer", $$Footer, { "link": link, "nombre": nombre })}` })}`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/index.astro", void 0);

const $$file = "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
