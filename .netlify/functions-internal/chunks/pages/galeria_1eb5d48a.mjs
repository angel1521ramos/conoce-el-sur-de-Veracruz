import 'html-escaper';
import 'clsx';
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as renderHead, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro/server_86b13b6c.mjs';
/* empty css                             */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Conoce el sur de Veracruz</title>', "</head><body>", '<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script></body></html>'])), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/layouts/Layout.astro", void 0);

const $$Astro$6 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { imagen = "", nombre = "", link = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white border-gray-200 "><div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"><a${addAttribute(link, "href")} class="flex items-center space-x-3 rtl:space-x-reverse"><img${addAttribute(imagen, "src")} class="h-8" alt="Flowbite Logo"><span class="self-center text-2xl font-semibold whitespace-nowrap ">${nombre}</span></a><button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button><div class="hidden w-full md:block md:w-auto" id="navbar-default"><ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">${renderSlot($$result, $$slots["default"])}</ul></div></div></nav>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/Navbar.astro", void 0);

const $$Astro$5 = createAstro();
const $$NavOption = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$NavOption;
  const { nombre = "", link = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(link, "href")} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">${nombre}</a></li>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/NavOption.astro", void 0);

const $$Astro$4 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const { nombre = "", link = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white rounded-lg shadow m-4"><div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"><span class="text-sm text-gray-500 sm:text-center">© 2023 <a${addAttribute(link, "href")} class="hover:underline">${nombre}</a>. All Rights Reserved.
</span><ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0"><li><a href="#" class="hover:underline me-4 md:me-6">About</a></li><li><a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a></li><li><a href="#" class="hover:underline me-4 md:me-6">Licensing</a></li><li><a href="#" class="hover:underline">Contact</a></li></ul></div></footer>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Container;
  return renderTemplate`${maybeRenderHead()}<div class="p-4">${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/Container.astro", void 0);

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
  const imagenes = [
    {
      link: "https://scontent.fmid1-3.fna.fbcdn.net/v/t39.30808-6/401085519_224091037364183_1954866231995672563_n.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHSTA5W6xwFT0MTDaZ8WG6AVm9zouOVgsZWb3Oi45WCxtuXF9YtEBrDKKsx2xiI_KIyNBCFukIfN0vPnYMmj2kR&_nc_ohc=rQ9dExbpCocAX8HYl-h&_nc_ht=scontent.fmid1-3.fna&oh=00_AfCGTrQrqfToWiAKAbz2qhdPthjdKuVCWmMQOEoHI3zmFw&oe=65578036"
    },
    {
      link: "https://scontent.fmid1-4.fna.fbcdn.net/v/t39.30808-6/401499955_223978987375388_7598998042059241658_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGuLGaKaMJSrHe-JM-eyrimV2PZXZjmzAZXY9ldmObMBvIwXaLGTThSFAuLsij8GDx44cuFWDVLJ5CHn48qsRjb&_nc_ohc=ev_SYCJ-LAgAX8-Pglo&_nc_oc=AQk5L25Yd93Qia3RTaUpYGZPyTLpCMUA8UOKAgtMoVgv_DhtxwvkWQ6jbl7hKOD65uY&_nc_ht=scontent.fmid1-4.fna&oh=00_AfBkBwQBPsblO4_T0s8xVky3Zl-NfM1faU9d8Bs_Ateq9Q&oe=65588AB6"
    },
    {
      link: "https://scontent.fmid1-3.fna.fbcdn.net/v/t39.30808-6/401842193_223920597381227_2893263105533320242_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFkIH7LD0yKsa3_Unu7KJ0KH6qqlwgNtc8fqqqXCA21z5dui0OREElVrH7q_fz8eRRKkJV67A-2StLn2JNlTDYY&_nc_ohc=eM2o1tI0zBYAX9OM5aq&_nc_ht=scontent.fmid1-3.fna&oh=00_AfC0lThlpeYBAoz2GZhSKpTlq7gcIQueFaSxjYYUdrv-DA&oe=655838AC"
    },
    {
      link: "https://scontent.fmid1-4.fna.fbcdn.net/v/t39.30808-6/400807932_223504400756180_7642750596720615715_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHjQ5qwvgeQZnzL5sXbqO5djQ5J0iCEXpONDknSIIRek2Wxg2bkrOo7a43KeFE6HXJgPymQXaZArd4v-zk0nQp8&_nc_ohc=0FIt52pndhMAX_hzi2Z&_nc_ht=scontent.fmid1-4.fna&oh=00_AfA1zdl9J7gcFML5LDQ2ncKEcK9i81gmgujpxekjSqHBKg&oe=655886E3"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "imagen": "https://scontent.fmid1-3.fna.fbcdn.net/v/t39.30808-6/350975952_514236867474399_3146924486109421848_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFi34o-gocXgFSLl6nWts7HKcCXB6pDowUpwJcHqkOjBTY3PY_GgStCShzt2_SLQsPt0b34_wP9Agioj0-2XfLj&_nc_ohc=0lCe9bQHQWIAX9-mE6m&_nc_ht=scontent.fmid1-3.fna&oh=00_AfDHHwzLPnoAiEBgFguo6oQom62zuFR8c_QFYCnoJfhv8A&oe=6557D9E8", "link": "https://www.facebook.com/profile.php?id=100092898635950", "nombre": "p\xE1gina oficial de conoce el sur de Veracruz" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/", "nombre": "Inicio" })}${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/galeria", "nombre": "Galeria" })}` })}${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Galery", $$Galery, {}, { "default": ($$result4) => renderTemplate`${imagenes.map((x) => renderTemplate`${renderComponent($$result4, "GaleryImg", $$GaleryImg, { "link": x.link })}`)}` })}` })}${renderComponent($$result2, "Footer", $$Footer, { "link": "https://www.facebook.com/profile.php?id=100092898635950", "nombre": "p\xE1gina oficial de conoce el sur de Veracruz" })}` })}`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/galeria.astro", void 0);

const $$file = "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/galeria.astro";
const $$url = "/galeria";

const galeria = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Galeria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Navbar as $, $$NavOption as a, $$Container as b, $$Footer as c, $$Layout as d, galeria as g };
