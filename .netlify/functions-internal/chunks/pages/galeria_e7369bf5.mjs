/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot, e as addAttribute, f as renderComponent } from '../astro/server_d07ed82c.mjs';
import 'clsx';
import { $ as $$Navbar, a as $$NavOption, b as $$Footer, c as $$Layout } from './PostsLayout_4f391f4a.mjs';

const $$Astro$2 = createAstro();
const $$Galery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Galery;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-3 md:grid-cols-3 gap-4 sm:mx-3 lg:mx-7 xl:mx-32 2xl:mx-48">${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/Galery.astro", void 0);

const $$Astro$1 = createAstro();
const $$GaleryImg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GaleryImg;
  const { link = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div><img class="h-full w-full rounded-lg"${addAttribute(link, "src")} alt=""></div>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/GaleryImg.astro", void 0);

const $$Astro = createAstro();
const $$Galeria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Galeria;
  const imagenes = await Astro2.glob(/* #__PURE__ */ Object.assign({"./images/image_1.md": () => import('./image_1_e566d858.mjs'),"./images/image_2.md": () => import('./image_2_c139c582.mjs'),"./images/image_3.md": () => import('./image_3_9d90648f.mjs'),"./images/image_4.md": () => import('./image_4_36c18340.mjs')}), () => "./images/*.md");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "imagen": "https://scontent.fmid1-3.fna.fbcdn.net/v/t39.30808-6/350975952_514236867474399_3146924486109421848_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFi34o-gocXgFSLl6nWts7HKcCXB6pDowUpwJcHqkOjBTY3PY_GgStCShzt2_SLQsPt0b34_wP9Agioj0-2XfLj&_nc_ohc=0lCe9bQHQWIAX9-mE6m&_nc_ht=scontent.fmid1-3.fna&oh=00_AfDHHwzLPnoAiEBgFguo6oQom62zuFR8c_QFYCnoJfhv8A&oe=6557D9E8", "link": "https://www.facebook.com/profile.php?id=100092898635950", "nombre": "p\xE1gina oficial de conoce el sur de Veracruz" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/", "nombre": "Inicio" })}${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/galeria", "nombre": "Galeria" })}` })}${renderComponent($$result2, "Galery", $$Galery, {}, { "default": ($$result3) => renderTemplate`${imagenes.map((x) => renderTemplate`${renderComponent($$result3, "GaleryImg", $$GaleryImg, { "link": x.frontmatter.link })}`)}` })}${renderComponent($$result2, "Footer", $$Footer, { "link": "https://www.facebook.com/profile.php?id=100092898635950", "nombre": "p\xE1gina oficial de conoce el sur de Veracruz" })}` })}`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/galeria.astro", void 0);

const $$file = "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/galeria.astro";
const $$url = "/galeria";

export { $$Galeria as default, $$file as file, $$url as url };
