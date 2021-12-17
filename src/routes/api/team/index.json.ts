import { PEOPLE } from '$/data/team';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = () => {
	return {
		status: 200,
		body: Object.entries(PEOPLE).map(([name, { title }]) => ({
			name,
			title
		}))
	};
};
