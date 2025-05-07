// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeMermaid from 'rehype-mermaid';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Enveloop Docs',
			social: [{ icon: 'github', label: 'GitHub Repo', href: 'https://github.com/enveloophq/docsjs' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction to Enveloop', slug: 'getting-started/introduction-to-enveloop' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	markdown: {
		rehypePlugins: [rehypeMermaid],
	},
});
