const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);
startALL();
// Add your db.queries aqui pls
function startALL() {
inquirer
  .prompt([
    {
      type: 'list',
      name: 'initialPrompt',
      message: 'What do you wanna do??',
      choices: ['View all employees', 'View all roles', 'View all departments', 
      'Add Department', 'Add Role', 'Add Employee', 'Update Employee'],
    },
  ]) .then(answers => {
    console.log(answers);
    if (answers.initialPrompt == 'View all employees') {
      console.log('employees');
      seeEmployeeProfile();
    }
    if (answers.initialPrompt == 'View all roles') {
      console.log('roles');
      seeRoles();
    }
    if (answers.initialPrompt == 'View all departments') {
      seeDepartments();
    }
    if(answers.initialPrompt == 'Add Department') {
      addDepartment();
    }
    if(answers.initialPrompt == 'Add Role') {
      addRole();
    }
  })

  // create ur finctions aqui pls

function seeDepartments() {
  db.query('SELECT * FROM departments', (err, results) => {
    if (err) {
      console.log('error');
    } 
    console.table(results);
    startALL();
  })
}

function seeRoles() {
  db.query('SELECT * FROM roles', (err, results) => {
    if (err) {
      console.log('error');
    }
    console.table(results);
    startALL();
  })
}
}

function seeEmployeeProfile() {
  db.query('SELECT * FROM employeeProfile', (err, results) => {
    if (err) {
      console.log('error');
    }
    console.table(results);
    startALL();
  })
}

function addDepartment() {
  inquirer
    .prompt([
      {
      type: 'input',
      name: 'departments',
      message: 'Whats ur new departments name??',
      validate: departmentsInput => {
        if (departmentsInput) {
          return true;
        } else { 
          console.log('what?');
          return false;}
      }
      }
    ]). then((answers) => {
      db.query(`INSERT INTO departments (department) VALUES (?)`, [answers.departments], (err, result) => {
        if (err) throw err;
        console.log(`${answers.departments} has been added to your departments table`);
        startALL();
      });
    });
};

function addRole() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'RoleDetails',
        choices: ['Role Name', 'Salary', 'Department'],
      },
    ]) .then(answers => {
      if (answers.RoleDetails == 'Role Name') {
        inquirer.prompt([{
          type: 'input',
          name: 'RoleName',
          message: 'Whats the name of the new role?',
          validate: RoleName => {
            if (RoleName) {
              return true;
            } else {
              console.log('huh??');
              return false;
            }
          }
        }]) .then((answers) => {
          var newrolesname = answers;
          console.log(newrolesname);
          addRole();
        })
      }
      if (answers.RoleDetails == 'Salary') {
        inquirer.prompt([{
          type: 'input',
          name: 'salary',
          message: 'How much will the role make??',
          validate: newSalary => {
            if (newSalary) {
              return true;
            } else {
              console.log('Cmon uve gotta pay them!!');
              return false;
            }
          }
        }]) .then((answers) => {
          var salary = answers;
          console.log(salary);
          addRole();
        })
      } 
      if (answers.RoleDetails == 'Department') {
        inquirer.prompt([{
          type: 'list',
          name: 'department',
          message: 'What department will this new role belong to??',
          choices: ['Sales', 'Finance', 'Employee_Services', 'Human Resources', 'Manufacture'],
        }]) .then(answers => {
          if (answers.department == 'Sales') {
          }
          if (answers.departments == 'Finance') {
          }
          if (answers.departments == 'Employee_Services') {
          }
          if (answers.departments == 'Human Resources') {
          }
          if (answers.departments == 'Manufacture') {
          }
          var department = answers;
          console.log(department);
          startALL();
        })
      }
    }) 
}