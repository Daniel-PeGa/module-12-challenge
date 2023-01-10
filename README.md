# MySQL Employee Tracker

## Project Description

This project was designed for building and managing a database to keep track of employees, their roles, and the departments they work at. The project was based on the use of mySQL, as well as inquirer, and the console table. 

Throughout the process, my main challenge besides being past the due date, was the different ways to make use of inquirer and take the best advantage possible.

## Technologies used

* MySQL
* Inquirer
* Node.js
* Console.table

## Install and run

To make use of this application, you do need to clone it in your personal computer, and once it has been opened on your code editor, you open the integrated terminal and type in the following commands:

```
npm i
mysql -u root
```
MySQL should open now and you type in the following:
```
SOURCE SQL/schema.sql;
SOURCE SQL/seed.sql;
```
Once your database information has been seeded you should just type in the following command:
```
node server.js
```
And some prompts should pop up for you on the terminal, givving you the freedom to view all departments in the database, employees, and their info. You also have the option to update their status, and add departments, employees, etc. You can also simply log out and thats all about it!

## Video

https://youtu.be/DLTufh9XmOg


## User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Screenshot

<img width="1470" alt="Screenshot 2023-01-09 at 6 19 00 PM" src="https://user-images.githubusercontent.com/106125888/211434099-3a4e2c8a-6ae6-4cbb-8aa5-057203744785.png">

