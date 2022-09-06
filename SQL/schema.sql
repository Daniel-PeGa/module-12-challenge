drop database if exists employees_db;
create database employees_db;
use employees_db;

create table employeeProfile(
    id int not null,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    jobTitle varchar(50) not null,
    salary int not null,
    manager varchar(50) ,
    department varchar(50) not null,
    employeeRole varchar(50) not null

);

create table departments(
    departmentID int not null,
    department varchar(50) not null
);

create table roles(
    roleID int not null,
    employeeRole varchar(50) not null,
    jobTitle varchar(50) not null,
    department varchar(50) not null,
    salary int not null
);

