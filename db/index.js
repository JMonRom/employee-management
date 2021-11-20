const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

findEmployees() {
  return this.connection.promise().query(
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, '', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;");
}
}

// let showAll = (table_name, callback ) => {
//   let query = "";
//   if (table_name === "employee") {
//     query = `SELECT emp.id, emp.first_name AS 'First Name', emp.last_name AS 'Last Name', title AS 'Title', name AS 'Department', salary AS 'Salary, 
//     GROUP_CONCAT(DISTINCT manager.first_name,' ', manager.last_name) AS 'Manager' 
//     FROM employee emp
//     JOIN role ON emp.role_id = role.id 
//     JOIN department ON role.department_id = department.id 
//     LEFT JOIN employee manager ON emp.manager_id = manager.id
//     GROUP BY emp.id
//     ORDER BY emp.last_name ASC`;
//   } else if (table_name === "role") {
//     query = `SELECT title AS 'Position', name as 'Department', salary AS 'Salary', COUNT(employees.role_id) AS 'Total Employees' FROM role LEFT OUTER JOIN department ON role.department_id = department.id LEFT OUTER JOIN employee ON employee.role_id = role.id
//     GROUP BY role.id
//     ORDER BY title ASC`;
//   } else if (table_name === "department") {
//     query = `SELECT name as 'Department', COUNT(role.department_id) AS 'Total Roles' FROM department LEFT OUTER JOIN role ON role.department_id = department.id GROUP BY department.id ORDER BY name ASC`;
//   }
//   connection.query(query, table_name, (err, res) => {
//     if (err) throw err;
//     console.log('\n');
//     console.table(res);
//     callback();
//   })
// } 

module.exports = new DB(connection);