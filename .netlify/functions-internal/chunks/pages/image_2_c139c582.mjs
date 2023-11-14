/* empty css                             */import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro/server_d07ed82c.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"link":"https://scontent.fmid1-4.fna.fbcdn.net/v/t39.30808-6/401499955_223978987375388_7598998042059241658_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGuLGaKaMJSrHe-JM-eyrimV2PZXZjmzAZXY9ldmObMBvIwXaLGTThSFAuLsij8GDx44cuFWDVLJ5CHn48qsRjb&_nc_ohc=ev_SYCJ-LAgAX8-Pglo&_nc_oc=AQk5L25Yd93Qia3RTaUpYGZPyTLpCMUA8UOKAgtMoVgv_DhtxwvkWQ6jbl7hKOD65uY&_nc_ht=scontent.fmid1-4.fna&oh=00_AfBkBwQBPsblO4_T0s8xVky3Zl-NfM1faU9d8Bs_Ateq9Q&oe=65588AB6"};
				const file = "C:/Users/DIF/Desktop/PROGRAMAS DESARROLLADOS/PAGINA-DE-FACEBOOK/conoce-el-sur-de-Veracruz/src/pages/images/image_2.md";
				const url = "/images/image_2";
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
