DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

DROP TABLE IF EXISTS department;

CREATE TABLE department(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(30)
);

DROP TABLE IF EXISTS role;

CREATE TABLE role(
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title VARCHAR(30),
  department_id INT,
  salary DECIMAL(10),
);

DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
  id INT PRIMARY KEY NOT NUll AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id) 
);

