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
    if(answers.initialPrompt == 'Update Employee') {
      updateEmployee();
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

function updateEmployee() {
  let updatedEmployee = 1;
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'chosenEmployee',
        message: 'Which employee do you wanna update??',
        choices: ['Daniel Perez Garnica', 'Kyle Myrphy', 'Joe Mama', 'Candice Dickens', 'Diz Nutz'],
      },
    ]). then(answers => {
      console.log(answers);
    })
  db.query(`UPDATE employeeProfile SET employeeProfile WHERE id = ?`, updatedEmployee, (err, results) => {
    if (err) {
      console.log(err);
    }
    console.table(results)
  } )
}