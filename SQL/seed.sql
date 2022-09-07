insert into departments(department)
values ('Sales'),
        ('Finance'),
        ('Employee_Services'),
        ('Human Resources'),
        ('Manufacture');

insert into roles(jobTitle, salary, departmentID)
values ('SalesMan', 100000, 1),
        ('Manager', 50000, 3),
        ('Accountant', 75000, 2),
        ('HRLady', 50000, 4),
        ('Manufacturer', 75000, 5);

insert into employeeProfile(firstName, lastName, jobTitle, managerID, roleID)
values ('Daniel', 'Perez Garnica', 'SalesMan' , null, 1),
        ('Kyle', 'Murphy', 'Manager', null, 1),
        ('Joe', 'Mama', 'HRLady', 2, 4),
        ('Candice', 'Dickens', 'Accountant', 2, 3),
        ('Diz', 'Nutz', 'Manufacturer', 2, 5);