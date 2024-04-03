CREATE TABLE `category` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `category_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `postCategory` (
	`postId` int NOT NULL,
	`categoryId` int NOT NULL,
	CONSTRAINT `postCategory_postId_categoryId_pk` PRIMARY KEY(`postId`,`categoryId`)
);
--> statement-breakpoint
ALTER TABLE `post` ADD `title` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `postCategory` ADD CONSTRAINT `postCategory_postId_post_id_fk` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `postCategory` ADD CONSTRAINT `postCategory_categoryId_category_id_fk` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE no action ON UPDATE no action;