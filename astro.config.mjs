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
						{ label: 'Core Features', slug: 'getting-started/core-features' },
						{ label: 'Creating a Template', slug: 'getting-started/creating-a-template' },
						{ label: 'Deploying Your First Message', slug: 'getting-started/deploying-your-first-message' },
						{ label: 'Formatting Dynamic Content', slug: 'getting-started/formatting-dynamic-content' },
						{ label: 'Adding a Sending Domain', slug: 'getting-started/adding-a-sending-domain' },
					],
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
