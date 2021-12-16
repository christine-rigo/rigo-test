import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		adapter: adapter(),

		vite: {
			optimizeDeps: {
				include: ['clsx']
			},
			resolve: {
				alias: {
					$: new URL('./src/', import.meta.url).pathname
				}
			}
		}
	}
};

export default config;
