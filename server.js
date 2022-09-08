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

// Add your db.queries aqui pls
inquirer
  .prompt([
    {
      type: 'list',
      name: 'initialPrompt',
      message: 'What do you wanna do??',
      choices: ['View all employees', 'View all roles', 'View all departments'],
    },
  ]) .then(answers => {
    console.log(answers);
    if (answers.initialPrompt == 'View all employees') {
      console.log('employees');
    }
    if (answers.initialPrompt == 'View all roles') {
      console.log('roles');
    }
    if (answers.initialPrompt == 'View all departments') {
      seeDepartments();
    }
  })

  // create ur finctions aqui pls

function seeDepartments() {
  db.query('SELECT * FROM departments', (err, results) => {
    if (err) {
      console.log('error');
    } 
    console.table(results);
    console.log(results);
  })
}