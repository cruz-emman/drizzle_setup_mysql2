import type {Config} from 'drizzle-kit'

export default {
    schema: "./src/db/schema",
    out: "./drizzle/migrations",
    driver: 'mysql2',
    dbCredentials: {
        host: "localhost",
        port: 3306,
        user: "admin",
        password: "admin",
        database: "drizzle"     
     }} satisfies Config