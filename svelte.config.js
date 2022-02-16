import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				exhibitions: 'src/routes/exhibitions/_layout.svelte'
			}
		})
	],
	
};

export default config;
