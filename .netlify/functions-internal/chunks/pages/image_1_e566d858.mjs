/* empty css                             */import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro/server_d07ed82c.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"link":"https://scontent.fmid1-3.fna.fbcdn.net/v/t39.30808-6/401085519_224091037364183_1954866231995672563_n.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHSTA5W6xwFT0MTDaZ8WG6AVm9zouOVgsZWb3Oi45WCxtuXF9YtEBrDKKsx2xiI_KIyNBCFukIfN0vPnYMmj2kR&_nc_ohc=rQ9dExbpCocAX8HYl-h&_nc_ht=scontent.fmid1-3.fna&oh=00_AfCGTrQrqfToWiAKAbz2qhdPthjdKuVCWmMQOEoHI3zmFw&oe=65578036"};
				const file = "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/images/image_1.md";
				const url = "/images/image_1";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
