CREATE TABLE `post` (
	`id` int AUTO_INCREMENT NOT NULL,
	`averageRating` real NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()),
	`authorId` int NOT NULL,
	CONSTRAINT `post_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `userPreferences` (
	`id` int AUTO_INCREMENT NOT NULL,
	`emailUpdates` boolean NOT NULL DEFAULT false,
	`userId` int NOT NULL,
	CONSTRAINT `userPreferences_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `emailIndex` UNIQUE(`email`);--> statement-breakpoint
ALTER TABLE `users` ADD `age` int NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `email` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `userRole` enum('ADMIN','BASIC') DEFAULT 'BASIC' NOT NULL;--> statement-breakpoint
ALTER TABLE `post` ADD CONSTRAINT `post_authorId_users_id_fk` FOREIGN KEY (`authorId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `userPreferences` ADD CONSTRAINT `userPreferences_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;