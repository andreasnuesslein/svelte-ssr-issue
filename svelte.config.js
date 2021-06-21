import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		vite: {
			server: {
				host: "0.0.0.0",
				proxy: {"/api": "http://localhost:8000"}
			}
		}
	}
};

export default config;
