-- Create Tables based on CSV data
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT
);

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);

-- Example queries using Employees and Departments data

-- INNER JOIN to fetch employee details along with department names
SELECT e.EmployeeID, e.FirstName, e.LastName, d.DepartmentName
FROM Employees e
INNER JOIN Departments d ON e.DepartmentID = d.DepartmentID;
-- This query links employees with their respective departments.

-- LEFT JOIN to list all employees and their department names (if any)
SELECT e.EmployeeID, e.FirstName, e.LastName, d.DepartmentName
FROM Employees e
LEFT JOIN Departments d ON e.DepartmentID = d.DepartmentID;
-- This query ensures all employees are listed, even if they do not belong to a department.

-- Aggregate function combined with JOIN to count employees in each department
SELECT d.DepartmentName, COUNT(e.EmployeeID) AS NumberOfEmployees
FROM Departments d
LEFT JOIN Employees e ON d.DepartmentID = e.DepartmentID
GROUP BY d.DepartmentName;
-- This query demonstrates how to count employees in each department, showcasing the use of GROUP BY.

-- Window function example to number employees within each department
SELECT e.FirstName, e.LastName, e.DepartmentID,
       ROW_NUMBER() OVER (PARTITION BY e.DepartmentID ORDER BY e.EmployeeID) AS EmployeeNumber
FROM Employees e;
-- This query assigns a unique number to each employee within their department.

-- Subquery example in WHERE clause to find employees in the IT department
SELECT *
FROM Employees
WHERE DepartmentID IN (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'IT');
-- This query finds all employees who are in the IT department using a subquery.

-- Remember to populate the tables with the CSV data before running these queries
-- Use your SQL database management tool's import function to load data from Employees.csv and Departments.csv into the respective tables.
