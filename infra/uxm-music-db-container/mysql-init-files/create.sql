CREATE TABLE `seller` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(512) NOT NULL,
  `password` BINARY(60) NOT NULL,
  `metamask_address` VARCHAR(512) NOT NULL,
  `nickname` VARCHAR(31) NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL
);
CREATE TABLE `music` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `album_id` BIGINT NOT NULL,
  `signature_hash` VARCHAR(512) NULL,
  `name` VARCHAR(32) NULL,
  `file_cid` VARCHAR(512) NULL,
  `price` FlOAT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL
);
CREATE TABLE `album` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NULL
);
CREATE TABLE `music_owner` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `seller_id` BIGINT NOT NULL,
  `music_id` BIGINT NOT NULL,
  `role_id` BIGINT NOT NULL,
  `settlement_rate` BIGINT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL
);
CREATE TABLE `music_owner_role` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NULL
);
CREATE TABLE `buyer` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(512) NULL,
  `encoded_password` BINARY(60) NULL,
  `metamask_address` VARCHAR(512) NULL,
  `nickname` VARCHAR(31) NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL
);
CREATE TABLE `buy` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `buyer_id` BIGINT NOT NULL,
  `music_id` BIGINT NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL
);
CREATE TABLE `settle_history` (
  `owner_id` BIGINT NOT NULL,
  `music_id` BIGINT NOT NULL,
  `type` VARCHAR(16) NULL,
  `amount` FLOAT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL
);
-- alter table
ALTER TABLE `seller`
ADD CONSTRAINT `PK_SELLER` PRIMARY KEY (`id`);
ALTER TABLE `music`
ADD CONSTRAINT `PK_MUSIC` PRIMARY KEY (`id`);
ALTER TABLE `album`
ADD CONSTRAINT `PK_ALBUM` PRIMARY KEY (`id`);
ALTER TABLE `music_owner`
ADD CONSTRAINT `PK_MUSIC_OWNER` PRIMARY KEY (`id`);
ALTER TABLE `music_owner_role`
ADD CONSTRAINT `PK_MUSIC_OWNER_ROLE` PRIMARY KEY (`id`);
ALTER TABLE `buyer`
ADD CONSTRAINT `PK_BUYER` PRIMARY KEY (`id`);
ALTER TABLE `buy`
ADD CONSTRAINT `PK_BUY` PRIMARY KEY (`id`);
ALTER TABLE `settle_history`
ADD CONSTRAINT `PK_SETTLE_HISTORY` PRIMARY KEY (`owner_id`, `music_id`);
ALTER TABLE `settle_history`
ADD CONSTRAINT `FK_music_owner_TO_settle_history_1` FOREIGN KEY (`owner_id`) REFERENCES `music_owner` (`id`);
ALTER TABLE `settle_history`
ADD CONSTRAINT `FK_music_TO_settle_history_1` FOREIGN KEY (`music_id`) REFERENCES `music` (`id`);