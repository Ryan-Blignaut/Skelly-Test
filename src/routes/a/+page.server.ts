import type {PageServerLoad} from './$types';
import {API_KEY} from '$env/static/private';

export const load = (async () => {
        return {
            "wow wee ": API_KEY, "Value": "Hello World!"
        }
    }
) satisfies PageServerLoad;
