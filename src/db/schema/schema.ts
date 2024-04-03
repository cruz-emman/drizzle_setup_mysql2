import { relations } from 'drizzle-orm'
import { boolean, index, int, mysqlEnum, mysqlTable, primaryKey, real, timestamp, unique, varchar } from 'drizzle-orm/mysql-core'


export const UserTable = mysqlTable('users',{
    id: int('id').primaryKey().autoincrement(),
    name: varchar('name', {length: 255}).notNull(),
    age: int("age").notNull(),
    email: varchar("email", {length: 255}).notNull(), 
    roll: mysqlEnum('userRole',["ADMIN","BASIC"]).default("BASIC").notNull(),
}, table => {
    return {
        emailIndex: unique("emailIndex").on(table.email)
    }
})

export const UserPreferenceTable = mysqlTable("userPreferences", {
    id: int('id').primaryKey().autoincrement(),
    emailUpdates: boolean("emailUpdates").notNull().default(false),
    userId: int("userId").references(() => UserTable.id).notNull()

})

export const PostTable = mysqlTable("post", {
    id: int('id').primaryKey().autoincrement(),
    title: varchar("title", {length: 255}).notNull(),
    avarageRating: real("averageRating").notNull().default(0),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
    authorId: int("authorId").references(() => UserTable.id).notNull()
})

export const CategoryTable = mysqlTable('category',{
    id: int("id").primaryKey().autoincrement(),
    name: varchar("name", {length: 255}).notNull(),

})

export const PostCategoryTable = mysqlTable('postCategory',{
    postId: int("postId").references(() => PostTable.id),
    categoryId: int("categoryId").references(() => CategoryTable.id).notNull()
}, table => {
    return {
        pk: primaryKey({columns: [table.postId, table.categoryId]})
    }
})




//RELATIONS

export const UserTableRelations = relations(UserTable, ({one,many}) => {
    return {
        preferences: one(UserPreferenceTable),
        posts: many(PostTable)
    }
})