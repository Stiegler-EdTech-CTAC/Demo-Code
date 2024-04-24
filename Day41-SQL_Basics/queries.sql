-- Introduction to SQL
-- SQL (Structured Query Language) is used for managing and manipulating relational databases.

-- Basic SQL Syntax example
-- SELECT statement used to retrieve data from a database
SELECT column1, column2 FROM table_name WHERE condition;

-- SQL Data Types
-- Creating a table with different data types
CREATE TABLE People (
    ID INT,  -- Integer data type
    Name VARCHAR(50),  -- String data type
    BirthDate DATE  -- Date data type
);

-- Operators in SQL
-- Using arithmetic and logical operators in a SELECT statement
SELECT * FROM Employees WHERE salary > 50000 AND department = 'IT';

-- DDL (Data Definition Language) Statements

-- CREATE: Creates a new table
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT
);

-- DROP: Deletes a table
DROP TABLE Employees;

-- ALTER: Modifies a table structure
ALTER TABLE Employees ADD COLUMN BirthDate DATE;

-- TRUNCATE: Deletes all rows in a table, without deleting the table itself
TRUNCATE TABLE Employees;

-- RENAME: Renames a table
RENAME TABLE Employees TO Staff;

-- DML (Data Manipulation Language) Statements

-- SELECT: Retrieves data from a database
SELECT * FROM Employees WHERE DepartmentID = 3;

-- INSERT INTO: Inserts new data into a table
INSERT INTO Employees (EmployeeID, FirstName, LastName) VALUES (1, 'John', 'Doe');

-- UPDATE: Updates data in a table
UPDATE Employees SET DepartmentID = 2 WHERE EmployeeID = 1;

-- DELETE: Deletes data from a table
DELETE FROM Employees WHERE EmployeeID = 1;

-- Aggregate Queries and Functions

-- Using COUNT(), AVG(), and other aggregate functions
SELECT COUNT(EmployeeID), AVG(Salary) FROM Employees WHERE DepartmentID = 3;

-- GROUP BY and HAVING clauses for grouping and filtering grouped data
SELECT DepartmentID, COUNT(EmployeeID), AVG(Salary) 
FROM Employees 
GROUP BY DepartmentID 
HAVING AVG(Salary) > 50000;

-- Data Constraints and Table Relationships

-- Creating a table with various constraints
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    DepartmentID INT,
    UNIQUE (FirstName, LastName),
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

-- Demonstrating table relationships with PRIMARY KEY and FOREIGN KEY
CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);
