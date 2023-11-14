/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro/server_86b13b6c.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Navbar, a as $$NavOption, b as $$Container, c as $$Footer, d as $$Layout } from './galeria_12921496.mjs';

const $$Astro$1 = createAstro();
const $$Article = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Article;
  const { imagen = "", titulo = "", descripcion = "", link = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="items-center mb-4 justify-center w-full rounded bg-gray-50 dark:bg-gray-800"><a${addAttribute(link, "href")} target="_blank"><img class="rounded w-full"${addAttribute(imagen, "src")} alt=""></a><div class="p-5"><a${addAttribute(link, "href")} target="_blank"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${titulo}</h5></a><p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${descripcion}</p><a${addAttribute(link, "href")} target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Ver a detalle
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></div></div>`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/components/Article.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const articulos = [
    {
      link: "https://www.facebook.com/photo/?fbid=224090970697523&set=a.175179608921993",
      imagen: "https://scontent.fmid1-3.fna.fbcdn.net/v/t39.30808-6/401085519_224091037364183_1954866231995672563_n.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHSTA5W6xwFT0MTDaZ8WG6AVm9zouOVgsZWb3Oi45WCxtuXF9YtEBrDKKsx2xiI_KIyNBCFukIfN0vPnYMmj2kR&_nc_ohc=rQ9dExbpCocAX8HYl-h&_nc_ht=scontent.fmid1-3.fna&oh=00_AfCGTrQrqfToWiAKAbz2qhdPthjdKuVCWmMQOEoHI3zmFw&oe=65578036",
      titulo: "Postal de minatitlan",
      descripcion: "\u{1F3ED} Se ve chido \u{1F30A} Malec\xF3n ribere\xF1o y Refiner\xEDa de Minatitl\xE1n, Veracruz; como para ir y echarse un esquite mientras miras el r\xEDo Coatzacoalcos"
    },
    {
      link: "https://www.facebook.com/photo?fbid=223978960708724&set=a.175179608921993",
      imagen: "https://scontent.fmid1-4.fna.fbcdn.net/v/t39.30808-6/401499955_223978987375388_7598998042059241658_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGuLGaKaMJSrHe-JM-eyrimV2PZXZjmzAZXY9ldmObMBvIwXaLGTThSFAuLsij8GDx44cuFWDVLJ5CHn48qsRjb&_nc_ohc=ev_SYCJ-LAgAX8-Pglo&_nc_oc=AQk5L25Yd93Qia3RTaUpYGZPyTLpCMUA8UOKAgtMoVgv_DhtxwvkWQ6jbl7hKOD65uY&_nc_ht=scontent.fmid1-4.fna&oh=00_AfBkBwQBPsblO4_T0s8xVky3Zl-NfM1faU9d8Bs_Ateq9Q&oe=65588AB6",
      titulo: "Al bote\u{1F693}",
      descripcion: "\u{1F534}Vinculado a proceso como presunto responsable del delito de homicidio doloso calificado Coatzacoalcos, Ver., 13 de noviembre de 2023.- La Fiscal\xEDa Regional Coatzacoalcos obtuvo vinculaci\xF3n a proceso en contra de Josu\xE9 \u201CN\u201D como presunto responsable del delito de homicidio doloso calificado cometido en agravio de la v\xEDctima L.A.D.L.S.R. El Juez dict\xF3 como medida cautelar prisi\xF3n preventiva justificada por un a\xF1o, dentro del proceso penal 922/2023."
    },
    {
      link: "https://www.facebook.com/permalink.php?story_fbid=223920647381222&id=100092898635950&ref=embed_post",
      imagen: "https://scontent.fmid1-3.fna.fbcdn.net/v/t39.30808-6/401842193_223920597381227_2893263105533320242_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFkIH7LD0yKsa3_Unu7KJ0KH6qqlwgNtc8fqqqXCA21z5dui0OREElVrH7q_fz8eRRKkJV67A-2StLn2JNlTDYY&_nc_ohc=eM2o1tI0zBYAX9OM5aq&_nc_ht=scontent.fmid1-3.fna&oh=00_AfC0lThlpeYBAoz2GZhSKpTlq7gcIQueFaSxjYYUdrv-DA&oe=655838AC",
      titulo: "Se lo hecharon\u{1F3F3}\uFE0F\u200D\u{1F308}",
      descripcion: "HALLAN SIN VIDA A MAGISTRADO DEL TRIBUNAL ELECTORAL DE AGUASCALIENTES \u{1F6A8}\u{1F6A8}\u{1F6A8} El magistrade del Tribunal Electoral del Estado de Aguascalientes, Jes\xFAs Ociel Baena Saucedo, fue localizado sin vida al interior de su domicilio en el fraccionamiento Punta del Cielo, al poniente de la ciudad de Aguascalientes. Ociel Baena se encontraba acompa\xF1ade de su pareja, tambi\xE9n sin vida. Fuentes de la Secretar\xEDa de Seguridad P\xFAblica indicaron en primera instancia que no se observan indicios de violencia en el sitio. Hasta el momento no se han dado m\xE1s detalles sobre las causas de su fallecimiento. Informaci\xF3n en proceso"
    },
    {
      link: "https://www.facebook.com/photo?fbid=223504264089527&set=pcb.223504380756182",
      imagen: "https://scontent.fmid1-4.fna.fbcdn.net/v/t39.30808-6/400807932_223504400756180_7642750596720615715_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHjQ5qwvgeQZnzL5sXbqO5djQ5J0iCEXpONDknSIIRek2Wxg2bkrOo7a43KeFE6HXJgPymQXaZArd4v-zk0nQp8&_nc_ohc=0FIt52pndhMAX_hzi2Z&_nc_ht=scontent.fmid1-4.fna&oh=00_AfA1zdl9J7gcFML5LDQ2ncKEcK9i81gmgujpxekjSqHBKg&oe=655886E3",
      titulo: "Se pasaron los verdes \u{1FA96}",
      descripcion: "\u{1F534}Detienen a militares en #Minatitl\xE1n La noche del s\xE1bado fueron detenidos seis elementos de la Secretaria de la Defensa Nacional en #Minatitl\xE1n. La detenci\xF3n se registr\xF3 luego de que el personal de la SEDENA presuntamente realizaron detonaciones al aire libre y conduc\xEDan en estado de ebriedad. Lo anterior fue reportado por vecinos de la calle Berl\xEDn en la colonia Miguel Hidalgo lo que provoc\xF3 despliegue de polic\xEDas municipales y estatales."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "imagen": "https://scontent.fmid1-3.fna.fbcdn.net/v/t39.30808-6/350975952_514236867474399_3146924486109421848_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFi34o-gocXgFSLl6nWts7HKcCXB6pDowUpwJcHqkOjBTY3PY_GgStCShzt2_SLQsPt0b34_wP9Agioj0-2XfLj&_nc_ohc=0lCe9bQHQWIAX9-mE6m&_nc_ht=scontent.fmid1-3.fna&oh=00_AfDHHwzLPnoAiEBgFguo6oQom62zuFR8c_QFYCnoJfhv8A&oe=6557D9E8", "link": "https://www.facebook.com/profile.php?id=100092898635950", "nombre": "p\xE1gina oficial de conoce el sur de Veracruz" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/", "nombre": "Inicio" })}${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/galeria", "nombre": "Galeria" })}` })}${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">${articulos.map((x) => renderTemplate`<div class="flex justify-between px-32 mx-auto max-w-screen-xl">${renderComponent($$result3, "Article", $$Article, { "link": x.link, "imagen": x.imagen, "titulo": x.titulo, "descripcion": x.descripcion })}</div>`)}</main>` })}${renderComponent($$result2, "Footer", $$Footer, { "link": "https://www.facebook.com/profile.php?id=100092898635950", "nombre": "p\xE1gina oficial de conoce el sur de Veracruz" })}` })}`;
}, "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/index.astro", void 0);

const $$file = "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
