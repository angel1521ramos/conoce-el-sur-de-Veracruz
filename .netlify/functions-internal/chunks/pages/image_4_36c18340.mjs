/* empty css                             */import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro/server_d07ed82c.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"link":"https://scontent.fmid1-4.fna.fbcdn.net/v/t39.30808-6/400807932_223504400756180_7642750596720615715_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHjQ5qwvgeQZnzL5sXbqO5djQ5J0iCEXpONDknSIIRek2Wxg2bkrOo7a43KeFE6HXJgPymQXaZArd4v-zk0nQp8&_nc_ohc=0FIt52pndhMAX_hzi2Z&_nc_ht=scontent.fmid1-4.fna&oh=00_AfA1zdl9J7gcFML5LDQ2ncKEcK9i81gmgujpxekjSqHBKg&oe=655886E3"};
				const file = "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/images/image_4.md";
				const url = "/images/image_4";
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
