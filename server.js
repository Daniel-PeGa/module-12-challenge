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
      'Add Department', 'Add Role', 'Add Employee', 'Update Employee', 'Log Out'],
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
    if (answers.initialPrompt == 'Add Employee') {
      addEmployee();
    } if (answers.initialPrompt == 'Update Employee') {
      updateEmployee();
    }
    else if (answers.initialPrompt === 'Log Out') {
      console.log("Thanks for ur Hard Work!!");
            db.end();
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

  function addEmployee() {
    db.query(`SELECT * FROM roles, employeeProfile`, (err, result) => {
      if (err) throw err;
      inquirer.prompt([
        {
          type: 'input',
          name: 'employeesName',
          message: 'Whats ur new employees name??',
          validate: employeesNameInput => {
            if (employeesNameInput) {
              return true;
            } else {
              console.log('Cmon he must have a name!!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'employeesLast',
        message: 'Whats ur employees last name??',
        validate: employeesLastInput => {
          if (employeesLastInput) {
            return true;
          } else {
            console.log('No one has no last name!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'employeesRole',
        message: 'Whats the role of ur new employee??',
        choices: () => {
          var array = [];
          for (var i = 0; i < result.length; i++) {
              array.push(result[i].jobTitle);
          }
          var newArray = [...new Set(array)];
          return newArray;
      }       
      },
      {
        type: 'input',
        name: 'manager',
        message: 'Whose ur new employees manager??',
        validate: managerInput => {
          if (managerInput) {
            console.log('Your employee works for ' + managerInput);
            return true;
          } else {
            console.log('he must work for someone');
            return false;
          }
        }
      }
    ]) .then ((answers) => {
      console.log(result + 'this are the result');
      console.log(answers + 'this are the answers')
    })
    })
  }

  function updateEmployee() {
    db.query(`SELECT * FROM employeeProfile, roles`, (err, result) => {
      if (err) throw err;
      inquirer.prompt([{
        type: 'list',
        name: 'updateEmployee',
        message: 'Which employee do you wanna update??',
        choices: () => {
          var array = [];
          for (var i = 0; i < result.length; i++) {
              array.push(result[i].lastName);
          }
          var employeeArray = [...new Set(array)];
          return employeeArray;
      }
      },
      {
        type: 'list',
        name: 'role',
        message: 'What role do you want to put him in??',
        choices: () => {
          var array = [];
          for (var i = 0; i < result.length; i++) {
              array.push(result[i].jobTitle);
          }
          var newArray = [...new Set(array)];
          return newArray;
      }
      }
    ]) .then((answers) => {
      for (var i = 0; i < result.length; i++) {
        if (result[i].last_name === answers.employeeProfile) {
            var name = result[i];
        }
    }

    for (var i = 0; i < result.length; i++) {
        if (result[i].title === answers.roles) {
            var role = result[i];
        }
    }

    db.query(`UPDATE employeeProfile SET ? WHERE ?`, [{roleId: role}, {lastName: name}], (err, result) => {
        if (err) throw err;
        console.log(`Updated ${answers.employeeProfile} role to the database.`);
        startALL();
    });
    })
    })
  }