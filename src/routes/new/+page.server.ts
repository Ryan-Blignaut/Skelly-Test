import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request, platform }) => {
	return request;
};
