CREATE DATABASE heroku_635e6d7eed5b116;
USE heroku_635e6d7eed5b116;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);