import { PEOPLE } from '$/data/team';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = ({ params: { teamMemberSlug } }) => {
	const memberSlugToName = teamMemberSlug.replace('-', ' ');

	if (!(memberSlugToName in PEOPLE)) {
		return {
			status: 404,
			body: {
				message: `No member found with the slug "${teamMemberSlug}"`,
			},
		};
	}

	const names = Object.keys(PEOPLE);

	let next = names[names.indexOf(memberSlugToName as any) + 1];
	next = typeof next === 'undefined' ? ('our services' as typeof next) : next;

	return {
		status: 200,
		body: { name: memberSlugToName, ...PEOPLE[memberSlugToName], next },
	};
};
