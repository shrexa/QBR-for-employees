// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 5001;

// // Assuming you have a database connection set up
// app.get('/api/data', async (req, res) => {
//   const { employeeId, month } = req.query;

//   try {
//     // Fetch data from the database based on employeeId and month
//     const query = `
//       SELECT e.Name, m.GoalsProgress, m.FutureGoals, m.TasksCleared, m.ChangeInPlans,
//              a.DaysPresent
//       FROM Employees e
//       JOIN MonthlyData m ON e.EmployeeID = m.EmployeeID
//       JOIN Attendance a ON e.EmployeeID = a.EmployeeID
//       WHERE e.EmployeeID = ? AND m.Month = ?;
//     `;
//     const [rows] = await db.execute(query, [employeeId, month]);

//     // Format and send the response
//     res.json(rows[0]); // Send back the first (and only) result
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error fetching data' });
//   }
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const cors = require('cors');
// const mysql = require('mysql');
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const PORT = process.env.PORT || 5003;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

app.get('/api/login', (req, res) => {
    res.send("API is working!");
  });

  app.post('/api/login', (req, res) => {
    const { EmployeeID } = req.body;
    // console.log("employye id done");
    // Authenticate using EmployeeID
    if (EmployeeID) {
      console.log("Employee ID received:", EmployeeID);
      res.json({ success: true, message: "Employee authenticated" });
  } else {
    res.status(400).json({ success: false, message: "Employee ID is required" });
    }
  });
 

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

