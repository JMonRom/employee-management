const connection = require("./connection")

class DB {
  constructor(connection) {
    this.connection = connection;
  }
}

let showAll = (table_name, callback ) => {
  let query = "";
  if (table_name === "employees") {
    query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, 
    CONCAT(manager.first_name,' ', manager.last_name) AS manager 
    FROM employee 
    LEFT JOIN role on employee.role_id = role.id 
    LEFT JOIN department on role.department_id = department.id 
    LEFT JOIN employee manager on manager.id = employee.manager_id`
  } else if (table_name === "roles") {
    query = `SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;`
  } else if (table_name === "departments") {
    query = `SELECT department.id, department.name FROM department `
  }
  connection.query(query, table_name, (err, res) => {
    if (err) throw err;
    console.log('\n');
    console.table(res);
    callback();
  })
} 

module.exports = new DB(connection)