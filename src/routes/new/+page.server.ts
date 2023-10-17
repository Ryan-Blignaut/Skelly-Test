import type {PageServerLoad} from './$types';
import prisma from "$lib/server/database";

export const load: PageServerLoad = async () => {
    const user = await prisma.user.create({
        data: {
            name: "test",
            email: "wow",
        }
    });
    console.log(user)
    return {};
};
