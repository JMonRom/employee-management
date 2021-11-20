const logo = require("asciiart-logo");
const db = require("./db")
const { prompt } = require("inquirer");
require("console.table");



// load prompts and display text using ASCII-art Logo
let init = () => {
  const logoText = logo({ name: "Employee Manager"}).render();

  console.log(logoText);

  mainPrompt();
} 

let mainPrompt = () => {
  prompt([
    {
      message: "What would you like to do?",
      type: "list",
      name: "optionChoice",
      choices: [
        {name: "View All Employees", value: "VIEW_EMP"},
        {name: "Add Employee", value: "ADD_EMPLOYEE"},
        {name: "Update Employee Role", value: "UPDATE_EMP_ROLE"},
        {name: "View All Roles", value: "VIEW_ROLES"},
        {name: "Add Role", value: "ADD_ROLE"},
        {name: "View All Departments", value: "VIEW_DEPARTMENTS"},
        {name: "Add Department", value: "ADD_DEPARTMENT"}, {name:"Quit", value: "QUIT"}
      ]
    }
  ]).then(answers => {
    let choice = answers.optionChoice;
    switch(choice) {
      case "VIEW_EMP":
        return viewEmployees();
        break;
      case "VIEW_DEPARTMENTS": 
        return viewDepartments();
        break;
      default: 
        quit();
    }
  });
}

function viewEmployees() {
  db.findEmployees()
  .then(([rows]) => {
    let employees = rows;
    console.log()
    console.table(employees);
  })
  .then(() => mainPrompt());
}

function quit() {
  console.log('BYE!');
  proecess.exit();
}

init();



