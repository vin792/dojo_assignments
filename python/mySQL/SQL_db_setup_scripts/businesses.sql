-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema businesses
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `authors` ;

-- -----------------------------------------------------
-- Schema businesses
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `businesses` DEFAULT CHARACTER SET utf8 ;
USE `businesses` ;

-- -----------------------------------------------------
-- Table `businesses`.`states`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `businesses`.`states` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` CHAR(2) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `businesses`.`cities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `businesses`.`cities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `state_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cities_states_idx` (`state_id` ASC),
  CONSTRAINT `fk_cities_states`
    FOREIGN KEY (`state_id`)
    REFERENCES `businesses`.`states` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `businesses`.`businesses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `businesses`.`businesses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `cities_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_businesses_cities1_idx` (`cities_id` ASC),
  CONSTRAINT `fk_businesses_cities1`
    FOREIGN KEY (`cities_id`)
    REFERENCES `businesses`.`cities` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
