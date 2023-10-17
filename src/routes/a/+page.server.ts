import type {PageServerLoad} from './$types';
import {SECRET_TURSO_DATABASE_URL} from '$env/static/private';

export const load = (async () => {
        return {
            "wow wee ": SECRET_TURSO_DATABASE_URL, "Value": "Hello World!"
        }
    }
) satisfies PageServerLoad;
