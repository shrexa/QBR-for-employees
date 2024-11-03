const express = require('express');
const db = require('./db')
const app = express();
app.use(express.json());

// Mock login endpoint
app.post('/api/login', async (req, res) => {
    const { EmployeeID } = req.body;
    const employee = await db.query('SELECT * FROM Employees WHERE EmployeeID = ?', [EmployeeID]);

    if (employee.length > 0 ) {
        res.json({ success: true, EmployeeID: EmployeeID });
    } else {
        res.json({ success: false });
    }
});

// Fetch data based on month
app.get('/api/data', (req, res) => {
  const { month } = req.query;
  // Fetch data from your database here based on month
  res.json({
    goals: "Complete Project A",
    tasksCompleted: 5,
    performance: [
      { month: "January", tasksCompleted: 4, tasksPending: 6 },
      { month: "February", tasksCompleted: 5, tasksPending: 5 },
      // Add more months
    ]
  });
});

app.listen(5003, () => console.log("Server running on port 5003"));



