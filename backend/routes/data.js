// routes/data.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Route to get employee data by employeeId and month
router.get('/', async (req, res) => {
  const { employeeId, month } = req.query;

  try {
    // Query to get employee monthly data
    const [monthlyData] = await db.promise().query(
      'SELECT GoalsProgress, FutureGoals, TasksCleared, ChangeInPlans FROM MonthlyData WHERE EmployeeID = ? AND Month = ?',
      [employeeId, month]
    );

    // Query to get employee attendance data
    const [attendanceData] = await db.promise().query(
      'SELECT DaysPresent FROM Attendance WHERE EmployeeID = ? AND Month = ?',
      [employeeId, month]
    );

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
