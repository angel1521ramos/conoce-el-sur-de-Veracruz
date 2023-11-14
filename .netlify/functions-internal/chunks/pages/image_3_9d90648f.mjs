/* empty css                             */import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro/server_d07ed82c.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"link":"https://scontent.fmid1-3.fna.fbcdn.net/v/t39.30808-6/401842193_223920597381227_2893263105533320242_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFkIH7LD0yKsa3_Unu7KJ0KH6qqlwgNtc8fqqqXCA21z5dui0OREElVrH7q_fz8eRRKkJV67A-2StLn2JNlTDYY&_nc_ohc=eM2o1tI0zBYAX9OM5aq&_nc_ht=scontent.fmid1-3.fna&oh=00_AfC0lThlpeYBAoz2GZhSKpTlq7gcIQueFaSxjYYUdrv-DA&oe=655838AC"};
				const file = "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/images/image_3.md";
				const url = "/images/image_3";
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
