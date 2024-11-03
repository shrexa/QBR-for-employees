import React, { useState } from 'react';
// import axios from 'axios';
// import { useEmployee } from './EmployeeContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setLoggedIn }) => {
  const [employeeID, setEmployeeID] = useState('');
  // const { setEmployeeId } = useEmployee();
  const navigate = useNavigate(); // Initialize navigate
  // const [employeeID, setEmployeeId] = useState(localStorage.getItem("employeeId"));
  // const x=employeeID;
  // useEffect(() => {
  //   setEmployeeId(localStorage.getItem("employeeId"));
  // }, []); // Ensure this runs only on initial render
 
  const handleLogin = (e) => {
    e.preventDefault();
    if (employeeID) {
      // Save employee ID to localStorage
      localStorage.setItem("employeeId", employeeID);
      // Update context after successful login
      // setEmployeeId(employeeID);
      // Redirect to the dashboard or next step
      navigate('/dashboard');
    } else {
      console.error("Login failed");
    }
  };
  return (
     <form className="login-form" onSubmit={handleLogin}>
      <h2>Employee Login</h2>
      <input 
           type="number"
           value={employeeID}
           onChange={(e) => setEmployeeID(e.target.value)}
           placeholder="Enter Employee ID"
           required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
