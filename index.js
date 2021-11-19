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

function createPrompt(table_name) {
  if (table_name === false) {
  prompt([
    {
      message: "What would you like to add?",
      type: "list",
      name: "table_name",
      choices: [
        {
          name: "New Employee",
          value: "employees"
        },
        {
          name: "New Role",
          value: "roles"
        },
        {
          name: "New Department",
          value: "departments"
        },
        {
          name: "Back to Main Menu",
          value: "menu"
        },
      ]
    }
  ]).then(answers => {
    if (answers.table_name === "menu") return mainPrompt;
    return createPrompt(answers.table_name)
  })
  }

  if (table_name === "employees") {
    let questions = [
      {
        message: "First Name:",
        name: "firstName"
      },
      {
        message: "Last Name: ",
        name: "lastName"
      }
    ]
    }

}

init();

