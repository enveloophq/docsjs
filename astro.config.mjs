// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeMermaid from 'rehype-mermaid';

// https://astro.build/config
export default defineConfig({
	base: '/docs',
	redirects: {
		'/': '/getting-started/introduction-to-enveloop',
	},
	integrations: [
		starlight({

			title: 'Enveloop Docs',
			social: [{ icon: 'github', label: 'GitHub Repo', href: 'https://github.com/enveloophq/docsjs' }],
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started'},
				},
				{
					label: 'Product Guides',
					autogenerate: { directory: 'product-guides' },
				},
				{
					label: 'Settings',
					autogenerate: { directory: 'settings' },
				},
				{
					label: 'Enveloop API',
					autogenerate: { directory: 'enveloop-api' },
				},
				{
					label: 'Integrations',
					autogenerate: { directory: 'integrations' },
				},
				{
					label: 'Company',
					autogenerate: { directory: 'company' },
				},
			],
		}),
	],
	markdown: {
		rehypePlugins: [rehypeMermaid],
	},
});
