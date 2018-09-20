-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS bartendApp;
-- Creates the "todolist" database --
CREATE DATABASE bartendApp;

CREATE TABLE contractors(
    ssn INT(9) NOT NULL PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    address VARCHAR(60) NOT NULL,
    email VARCHAR(45) NOT NULL,
    experience INT(3)
);

CREATE TABLE company(
ein INT(9) NOT NULL PRIMARY KEY,
companyName VARCHAR(50) NOT NULL,
address VARCHAR(60) NOT NULL,
email VARCHAR NOT NULL,
phone INT(10)
);

CREATE TABLE job(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
FOREIGN KEY(ein) REFERENCES company(ein),
description VARCHAR (255) NOT NULL,
availableDate DATETIME NOT NULL
)