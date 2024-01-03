import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// site: 'https://docs.afoo.me',
	integrations: [
		starlight({
			title: 'fuqiang docs',
			logo: {
				src: './src/assets/logo.svg',
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			social: {
				twitter: 'https://x.com/fujohnwang',
				github: 'https://github.com/fujohnwang',
				youtube: 'https://youtube.com/@afoo',
				email: 'mailto: fujohnwang+starlight@gmail.com',
				rss: 'https://afoo.me/feeds.xml',
			},
			sidebar: [
				{
					label: 'Guides/指导文档',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference/参考手册',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
