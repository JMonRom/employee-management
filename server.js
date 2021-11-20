const logo = require("asciiart-logo");
const db = require("./db/index")
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
      choices: ["View", "Add", "Edit", "Remove", "Quit"]
    }
  ]).then(answers => {
    switch(answers.optionChoice) {
      case "View":
        return viewPrompt();
      case "VIEW_EMPLOYEES":
        return viewEmployees();
      case "Add":
        return createPrompt();
      case "Edit":
        return updatePrompt();
      case "Remove":
        return removePrompt();
      case "Quit":
        return quitPrompt();
    }
  });
}

function viewPrompt() {
  prompt([
    {
      message: "View:",
      type: "list",
      name: "table_name",
      choices: [
        {name: "All Employees", value: "employee"}, 
        {name: "All Departments", value: "department"}, 
        {name: "All Roles", value: "role"}]
    }
  ]).then(answers => {
    db.showAll(answers.table_name, callPrompt)
  });
}

function callPrompt() {
  mainPrompt();
}

init();

