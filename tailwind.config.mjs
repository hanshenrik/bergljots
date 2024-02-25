import { defineConfig } from 'astro/config';
import webmanifest from 'astro-webmanifest';

export default defineConfig({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	integrations: [
		webmanifest({
		  /**
		   * required
		   **/
		  name: 'Bergljots',
	
		  /**
		   * optional
		   **/
		  icon: 'public/favicon.svg', // source for favicon & icons
	
		  short_name: 'Bergljots',
		  description: 'På vei ut døra i Bergljots',
		  start_url: '/',
		  theme_color: '#3367D6',
		  background_color: '#3367D6',
		  display: 'standalone',
		}),
	  ],
});
