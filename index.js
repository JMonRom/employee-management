const {prompt} = require("inquirer");
const logo = require("asciiart-logo");
const sequelize = require('./db/connection')

// load prompts and display text using ASCII-art Logo
let init = () => {
  const logoText = logo({ name: "Employee Manager"}).render();

  console.log(logoText);
} 