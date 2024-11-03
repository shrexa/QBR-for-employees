import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PerformanceGraph from './PerformanceGraph';
import './Dashboard.css';
// import { useParams } from 'react-router-dom';
// import { useEmployee } from './EmployeeContext';

const Dashboard = () => {
  
  const [month, setMonth] = useState('October 2024');
  const [data, setData] = useState(null);
  const employeeId = 1;
  // const { employeeId } = useParams();
  // const { employeeId } = useEmployee();
  // const employeeId = localStorage.getItem("employeeId");
// console.log("Employee ID from localStorage:", employeeId);

// useEffect(() => {
//   setEmployeeId(localStorage.getItem("employeeId"));
// }, []); 


useEffect(() => {
  const fetchData = async () => {
    if (!employeeId) return; // Ensure employeeId exists
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/data`, {
        params: { employeeId, month },
      });
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  fetchData();
}, [month, employeeId]);

  
  return (
    <div className="dashboard-container">
      <h2>Employee Dashboard- Monthly data</h2>
      
      
      <div className="select-month">
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="October 2024">October 2024</option>
          <option value="November 2024">November 2024</option>
          <option value="December 2024">December 2024</option>
          <option value="January 2024">January 2025</option>
          {/* Add other months as options */}
        </select>
      </div>

      <div className="data-section">
        <h3>EmployeeID</h3>
        <p> ID 
          {/* {data?.employeeId || "No data"} */}
               {/* <p>{data?.Month || "No data"}</p>   */}
        
          </p>
      </div>
      

      <div className="data-section">
        <h3>Progress on Present Goals</h3>
        <p>{data?.GoalsProgress || "No data"}</p>
      </div>

      <div className="data-section">
        <h3>Future Goals</h3>
        <p>{data?.FutureGoals || "No data"}</p>
      </div>

      <div className="data-section">
        <h3>Tasks Cleared</h3>
        <p>{data?.TasksCleared || "No data"}</p>
      </div>

      <div className="data-section">
        <h3>Change in Plans</h3>
        <p>{data?.ChangeInPlans || "No data"}</p>
      </div>

      <div className="data-section">
        <h3>Attendance</h3>
        <p>{data?.DaysPresent || "No data"}</p>
        {/* <p>{data?.month || "No data"}</p> */}
      </div>

      <div className="performance-graph">
      <h3>Performance in Graph</h3>
     <p>
        {/* Render Performance Graph if there's data */}
        <PerformanceGraph data={data} />
        </p>
        </div>
    </div>
  );
};

export default Dashboard;
