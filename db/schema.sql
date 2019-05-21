create database burgers_db;
use burgers_db;

create table burgers (
id INT (100) auto_increment not null,
burger_name VARCHAR (45) not null,
devoured BOOLEAN,
primary key(id)
);