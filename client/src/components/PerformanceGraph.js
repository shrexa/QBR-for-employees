import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const PerformanceGraph = ({ data }) => {
  // Use actual data if available, else use mock data for testing
  const chartData = data?.performance || [
    { month: 'January', tasksCompleted: 10, tasksPending: 5 },
    { month: 'February', tasksCompleted: 8, tasksPending: 7 },
    { month: 'March', tasksCompleted: 12, tasksPending: 4 },
    { month: 'April', tasksCompleted: 11, tasksPending: 2 },

  ];

  return (
    <LineChart width={600} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="tasksCompleted" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="tasksPending" stroke="#82ca9d" />
    </LineChart>
  );
};

export default PerformanceGraph;


// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const PerformanceGraph = ({ data }) => {
//   const chartData = data?.performance || [];
//   return (
//     <LineChart width={600} height={300} data={chartData}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="month" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Line type="monotone" dataKey="tasksCompleted" stroke="#8884d8" activeDot={{ r: 8 }} />
//       <Line type="monotone" dataKey="tasksPending" stroke="#82ca9d" />
//     </LineChart>
//   );
// };
// export default PerformanceGraph;
