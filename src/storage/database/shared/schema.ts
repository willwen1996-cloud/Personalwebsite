import { pgTable, serial, timestamp, varchar, text, jsonb, index } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"


export const healthCheck = pgTable("health_check", {
	id: serial().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});

// 文章表
export const articles = pgTable(
  "articles",
  {
    id: serial().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    summary: text("summary").notNull(),
    content: text("content").notNull(),
    publish_time: varchar("publish_time", { length: 20 }).notNull(),
    tags: jsonb("tags").notNull().default(sql`'[]'::jsonb`),
    source: varchar("source", { length: 50 }).notNull(),
    source_link: varchar("source_link", { length: 500 }),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
  },
  (table) => [
    index("articles_created_at_idx").on(table.created_at),
    index("articles_source_idx").on(table.source),
  ]
);
