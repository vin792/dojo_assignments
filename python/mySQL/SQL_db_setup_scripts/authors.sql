-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema authors
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema authors
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `authors` DEFAULT CHARACTER SET utf8 ;
USE `authors` ;

-- -----------------------------------------------------
-- Table `authors`.`authors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `authors`.`authors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(255) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `authors`.`descriptions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `authors`.`descriptions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` TEXT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `author_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_descriptions_authors_idx` (`author_id` ASC),
  CONSTRAINT `fk_descriptions_authors`
    FOREIGN KEY (`author_id`)
    REFERENCES `authors`.`authors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `authors`.`books`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `authors`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `author_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_books_authors1_idx` (`author_id` ASC),
  CONSTRAINT `fk_books_authors1`
    FOREIGN KEY (`author_id`)
    REFERENCES `authors`.`authors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `authors`.`likes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `authors`.`likes` (
  `books_id` INT NOT NULL,
  `authors_id` INT NOT NULL,
  PRIMARY KEY (`books_id`, `authors_id`),
  INDEX `fk_books_has_authors_authors1_idx` (`authors_id` ASC),
  INDEX `fk_books_has_authors_books1_idx` (`books_id` ASC),
  CONSTRAINT `fk_books_has_authors_books1`
    FOREIGN KEY (`books_id`)
    REFERENCES `authors`.`books` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_books_has_authors_authors1`
    FOREIGN KEY (`authors_id`)
    REFERENCES `authors`.`authors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
