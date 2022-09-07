drop database if exists employees_db;
create database employees_db;
use employees_db;

create table departments(
    departmentID int not null auto_increment,
    department varchar(30) not null,
    primary key (departmentID)
);

create table roles(
    roleID int not null auto_increment primary key,
    jobTitle varchar(30) not null,
    salary decimal not null,
    departmentID int, 
    foreign key (departmentID)
    references departments(departmentID)
    on delete set null
);


create table employeeProfile(
    id int not null auto_increment primary key,
    firstName varchar(30) not null,
    lastName varchar(30) not null,
    jobTitle varchar(30) not null,
    managerID int,
    roleID int,
    foreign key (roleID)
    references roles(roleID)
    on delete set null

);
