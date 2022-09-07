drop database if exists employees_db;
create database employees_db;
use employees_db;

create table departments(
    departmentID int not null,
    department varchar(50) not null,
    primary key (departmentID)
);

create table roles(
    roleID int not null,
    jobTitle varchar(50) not null,
ADDTHEREFERENCETO THE departmentID TOKNOWWHEREITSCOMINGFROM
    departmentID int not null, 
    salary int not null
    primary key (roleID)
);


create table employeeProfile(
    id int not null,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    jobTitle varchar(50) not null,
    manager varchar(50) ,
    roleID int not null,
    primary key (id)
);
