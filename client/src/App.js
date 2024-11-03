import React, { useState } from 'react';
// import { EmployeeProvider } from './components/EmployeeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
 
  return (
    // <EmployeeProvider>
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/dashboard/:employeeId" element={<Dashboard />} /> */}
      <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/" element={loggedIn ? <Dashboard /> : <Login setLoggedIn={setLoggedIn} />} /> */}
      </Routes>
    </Router>
    // </EmployeeProvider>
  );
}

export default App;



