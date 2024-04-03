
import { db } from "./db/db";
import { UserTable } from "./db/schema/schema";

async function main(){

    const result = await db.query.UserTable.findMany({
        with: {
          name: true      
        },
      });

    // const result = await db.select().from(UserTable);


      console.log(result)
}

main()