const logo = require("asciiart-logo");
const sequelize = require('./db/connection');
const { prompt } = require("inquirer");

// load prompts and display text using ASCII-art Logo
let init = () => {
  const logoText = logo({ name: "Employee Manager"}).render();

  console.log(logoText);
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
        {name: "All Employees", value: "employees"}, 
        {name: "All Departments", value: "departments"}, 
        {name: "All Roles", value: "roles"}]
    }
  ]).then(answers => {
    db.showAll(answers.table_name)
  });
}