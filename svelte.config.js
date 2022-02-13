import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import fontMagician from 'postcss-font-magician';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: {
			plugins: [autoprefixer(), fontMagician()]
		}
	}),

	kit: {
		adapter: adapter(),
		vite: defineConfig({
			plugins: [, /*legacy({ targets: ['last 2 versions', '>0.2%', 'not dead'] })*/ imagetools()]
		})
	}
};

export default config;
