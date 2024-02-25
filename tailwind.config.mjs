import { defineConfig } from 'astro/config';
import webmanifest from 'astro-webmanifest';

/** @type {import('tailwindcss').Config} */
export default {
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
		//   icon: 'src/images/your-icon.svg', // source for favicon & icons
	
		  short_name: 'Bergljots',
		  description: 'På vei ut døra i Bergljots',
		  start_url: '/',
		  theme_color: '#3367D6',
		  background_color: '#3367D6',
		  display: 'standalone',
		}),
	  ],
}
