const db = require('../config/db');

exports.login = (req, res) => {
  const { employeeID } = req.body;
  db.query('SELECT * FROM Employees WHERE EmployeeID = ?', [employeeID], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.status(200).json({ success: true, employee: results[0] });
    } else {
      res.status(401).json({ success: false, message: 'Invalid ID' });
    }
  });
};
