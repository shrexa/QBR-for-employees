const db = require('../config/db');

// Controller function to get employee monthly data
const getEmployeeMonthlyData = async (req, res) => {
  try {
    // Extract employeeId and month from query parameters
    const { employeeId, month } = req.query;

    // Check if both employeeId and month are provided
    if (!employeeId || !month) {
      return res.status(400).json({ error: 'Employee ID and month are required' });
    }

    // Query for employee monthly data
    const [monthlyData] = await db.query(
      `SELECT GoalsProgress, FutureGoals, TasksCleared, ChangeInPlans FROM MonthlyData WHERE EmployeeID = ? AND Month = ?`,
      [employeeId, month]
    );

    // Query for attendance data
    const [attendanceData] = await db.query(
      `SELECT DaysPresent FROM Attendance WHERE EmployeeID = ? AND Month = ?`,
      [employeeId, month]
    );

    // Check if data was found for both queries
    if (!monthlyData || !attendanceData) {
      return res.status(404).json({ error: 'No data found for this employee and month' });
    }

    // Merge both data sets and send as response
    const responseData = {
      Month: month,
      GoalsProgress: monthlyData.GoalsProgress,
      FutureGoals: monthlyData.FutureGoals,
      TasksCleared: monthlyData.TasksCleared,
      ChangeInPlans: monthlyData.ChangeInPlans,
      DaysPresent: attendanceData.DaysPresent,
    };

    res.json(responseData);
  } catch (error) {
    console.error("Error fetching employee monthly data:", error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
};

module.exports = {
  getEmployeeMonthlyData,
};


// exports.getMonthlyData = (req, res) => {
//   const { employeeID, month } = req.query;
//   db.query(
//     'SELECT * FROM MonthlyData WHERE EmployeeID = ? AND Month = ?',
//     [employeeID, month],
//     (err, results) => {
//       if (err) throw err;
//       res.status(200).json(results[0] || {});
//     }
//   );
// };
// const getMonthlyData = async (req, res) => {
//   const { employeeID, month } = req.query;
//   try {
//     const data = await db.query(
//       `SELECT DaysPresent, Month, EmployeeID FROM employee_data WHERE EmployeeID = ? AND Month = ?`,
//       [employeeID, month]
//     );
//     res.json(data[0]); // Adjust as needed based on your database query structure
//   } catch (error) {
//     console.error("Error fetching data", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
