CREATE TABLE Employees (
  EmployeeID INT PRIMARY KEY,
  Name VARCHAR(100),
  Role VARCHAR(100)
);


CREATE TABLE MonthlyData (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  EmployeeID INT,
  Month VARCHAR(50),
  GoalsProgress TEXT,
  FutureGoals TEXT,
  TasksCleared INT,
  ChangeInPlans TEXT,
  FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
);

CREATE TABLE Attendance (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  EmployeeID INT,
  Month VARCHAR(50),
  DaysPresent INT,
  FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
);


-- Inserting dummy data into the Employees table
INSERT INTO Employees (EmployeeID, Name, Role) VALUES
(1, 'Alice Smith', 'Software Engineer'),
(2, 'Bob Johnson', 'Product Manager'),
(3, 'Charlie Brown', 'Data Analyst'),
(4, 'Diana Prince', 'UX Designer'),
(5, 'Ethan Hunt', 'Project Manager');

-- Inserting dummy data into the MonthlyData table
INSERT INTO MonthlyData (EmployeeID, Month, GoalsProgress, FutureGoals, TasksCleared, ChangeInPlans) VALUES
(1, 'October 2024', 'Completed initial project phase', 'Implement additional features', 5, 'Revised deadlines for some tasks'),
(2, 'October 2024', 'Finalized product requirements', 'Prepare for user testing', 3, 'Added new requirements based on feedback'),
(3, 'October 2024', 'Analyzed data trends', 'Develop new reporting dashboard', 4, 'Shifted focus to urgent data requests'),
(4, 'October 2024', 'Conducted user research', 'Create wireframes for new features', 2, 'Changed approach based on user feedback'),
(5, 'October 2024', 'Coordinated team meetings', 'Launch new project phase', 6, 'Adjusted timelines based on team input');

-- Inserting dummy data into the Attendance table
INSERT INTO Attendance (EmployeeID, Month, DaysPresent) VALUES
(1, 'October 2024', 20),
(2, 'October 2024', 22),
(3, 'October 2024', 18),
(4, 'October 2024', 21),
(5, 'October 2024', 19);

SELECT * FROM Employees;
