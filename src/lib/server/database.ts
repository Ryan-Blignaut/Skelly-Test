import {PrismaClient} from '@prisma/client'

// 1. Import libSQL and the Prisma libSQL driver adapter
import {PrismaLibSQL} from '@prisma/adapter-libsql'
import {createClient} from '@libsql/client'
import {env} from "$env/dynamic/private";

// 2. Instantiate libSQL
const libsql = createClient({
    url: env.SECRET_TURSO_DATABASE_URL,
    authToken: env.SECRET_TURSO_DATABASE_URL,
})

// 3. Instantiate the libSQL driver adapter
const adapter = new PrismaLibSQL(libsql)
// Pass the adapter option to the Prisma Client instance
const prisma = new PrismaClient({adapter})


export default prisma