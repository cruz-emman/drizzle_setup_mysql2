import { drizzle } from 'drizzle-orm/mysql2'
import { migrate } from 'drizzle-orm/mysql2/migrator'
import mysql2 from 'mysql2/promise'
import path from 'path'



const doMigrate = async () =>{
    try {
        const dbConnection = await mysql2.createConnection({
            host: "localhost",
            port: 3306,
            user: "admin",
            password: "admin",
            database: "drizzle"
        })

        const dbMigrator = drizzle(dbConnection)
        
        migrate(dbMigrator, {
            migrationsFolder: path.resolve("drizzle",'migrations')
        })
        console.log("migration done")
        process.exit(0)
    } catch (error) {
        console.log("migration error: ", error)
        process.exit(0);
    }
}

doMigrate()