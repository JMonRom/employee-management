DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

DROP TABLE IF EXISTS department;

CREATE TABLE department {
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30)
};

DROP TABLE IF EXISTS role; 

CREATE TABLE role {

}

DROP TABLE IF EXISTS employees;

CREATE TABLE employees {
  id INT NOT NUll AUTO_INCREMENT,
  firstName VARCHAR(30),
  lastName VARCHAR(30),
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id) 
}

