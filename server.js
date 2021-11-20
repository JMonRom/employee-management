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

// loads main questions to navigate
let mainPrompt = () => {
  prompt([
    {
      message: "What would you like to do?",
      type: "list",
      name: "optionChoice",
      choices: [
        {name: "View All Employees", value: "VIEW_EMP"},
        {name: "Add Employee", value: "ADD_EMP"},
        {name: "Update Employee Role", value: "UPDATE_EMP_ROLE"},
        {name: "View All Roles", value: "VIEW_ROLES"},
        {name: "Add Role", value: "ADD_ROLE"},
        {name: "View All Departments", value: "VIEW_DEPARTMENTS"},
        {name: "Add Department", value: "ADD_DEPARTMENT"}, {name:"Quit", value: "QUIT"}
      ]
    }
  ]).then(answers => {
    let choice = answers.optionChoice;
    // returns back user option
    switch(choice) {
      case "VIEW_EMP":
        return viewEmployees();
        break;
      case "ADD_EMP":
        return 
      case "VIEW_DEPARTMENTS": 
        return viewDepartments();
        break;
      default: 
        quit();
    }
  });
}

// finds employees to display
function viewEmployees() {
  db.findEmployees()
  .then(([rows]) => {
    let employees = rows;
    console.log()
    console.table(employees);
  })
  .then(() => mainPrompt());
}

// allows user to add an employee
function addEmployee() { 
  prompt([
    {
      name: "first_name",
      message: "What is employee's first name?"
    },
    {
      name: "last_name",
      message: "What is employee's last name?"
    }
  ])
  .then(res => {
    let firstName = res.first_name;
    let lastName = res.first_name;


    db.findRole()
    .then(([rows]) => {
      let roles = rows;
      const roleOptions = role.map(({id, title }) => ({
        name: title,
        value: id,
      }));
      prompt({
        type: "list",
        name: "roleID",
        message: "What is the role of employee?",
        choices: roleOptions
      }).then(answers => {
        let roleID = answers.roleID;
        db.findEmployees()
        .then(([rows]) => {
          let employees = rows;
          const managerOptions = employees.map(({id, first_name, last_name }) => ({
            name: `${firstName} ${lastName}`,
            value: id,
          }));

          prompt({
            type: "list",
            name: "managerID",
            message: "Who is employee's manager?"
          })
          .then(answers => {
            let employee = {
              manager_id: answers.managerID,
              role_id: roleID,
              first_name: firstName,
              last_name: lastName
            }

            db.createEmployee(employee);
          }).then(() => console.log(
            `Added ${firstName} ${lastName} to database`
          ))
          .then(() => mainPrompt())
      })
    })
  })
})   
  
}
 

    
    // let roles = rows;
    // const roleOptions = roles.map(({ id, title}) => 
    // ({
    //   name: title,
    //   value: id,
  

  //   prompt({ 
  //     type: "list",
  //     name: "roleID",
  //   })
  // })
  // }}

function quit() {
  console.log('BYE!');
  proecess.exit();
}

init();



