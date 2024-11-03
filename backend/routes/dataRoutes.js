const express = require('express');
const router = express.Router();
const db = require('../config/db');
// const { getEmployeeMonthlyData } = require('../controllers/dataController');

// Define route to fetch employee monthly data based on employeeId and month
// router.get('/', getEmployeeMonthlyData);

// Route to get employee data by employeeId and month
router.get('/', async (req, res) => {
  const { employeeId, month } = req.query;

  try {
    // Query to get the employee's monthly data
    const [monthlyData] = await db.promise().query(
      'SELECT GoalsProgress, FutureGoals, TasksCleared, ChangeInPlans FROM MonthlyData WHERE EmployeeID = ? AND Month = ?',
      [employeeId, month]
    );

    // Query to get the employee's attendance data
    const [attendanceData] = await db.promise().query(
      'SELECT DaysPresent FROM Attendance WHERE EmployeeID = ? AND Month = ?',
      [employeeId, month]
    );

    // Check if data exists for this employee and month
    if (monthlyData.length && attendanceData.length) {
      const employeeData = {
        GoalsProgress: monthlyData[0].GoalsProgress,
        FutureGoals: monthlyData[0].FutureGoals,
        TasksCleared: monthlyData[0].TasksCleared,
        ChangeInPlans: monthlyData[0].ChangeInPlans,
        DaysPresent: attendanceData[0].DaysPresent,
      };
      res.json(employeeData);
    } else {
      res.status(404).json({ message: "No data found for this employee and month." });
    }
  } catch (error) {
    console.error("Error fetching employee data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
