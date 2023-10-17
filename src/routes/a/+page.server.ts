import type {PageServerLoad} from './$types';
import {SECRET_URI} from '$env/static/private';

export const load = (async () => {
        return {
            "wow wee ": SECRET_URI, "Value": "Hello World!"
        }
    }
) satisfies PageServerLoad;
