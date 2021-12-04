import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = () => {
	return {
		status: 200,
		body: {
			message: 'Hello World'
		}
	};
};
