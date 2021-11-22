const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  // all employee functions
findEmployees() {
  return this.connection.promise().query(
    `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;`
  );
}

createEmployee(employee) {
  return this.connection.promise().query(`INSERT INTO employee SET ?`, employee);
}

deleteEmployee(employeeID) {
  return this.connection.promise().query(`DELETE FROM employee WHERE id = ?`, employeeID
  );
}

// all role functions
findRole() {
  return this.connection.promise().query(
    `SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id`
  )
}

addRole(role) {
  return this.connection.promise().query(
    `INSERT INTO role SET ?`, role);
}

addEmployeeRole(employeeID, roleID) {
  return this.connection.promise().query(`UPDATE employee SET role_id = ? WHERE id = ?`, [roleID, employeeID]);
}

// all department functions
findDepartment() {
  return this.connection.promise().query(
    `SELECT department.id, department.name FROM department`
  );
}

addDepartment(department) {
  return this.connection.promise().query(
    `INSERT INTO department SET ?`, department
  );
}

}



module.exports = new DB(connection);