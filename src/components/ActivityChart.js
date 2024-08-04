import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import '../css/Activity.css';

const ActivityChart = ({ activity }) => {
  const [timeFrame, setTimeFrame] = useState('weekly');

  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };
  return (
    <div className="activity-chart-container">
      <h3>Activity</h3>
      <select onChange={handleTimeFrameChange} value={timeFrame}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={activity}>
          <XAxis dataKey="day" tickFormatter={(tick) => (tick % 2 === 0 ? tick : '')} />
          <YAxis tickFormatter={(value) => `${value / 1000}k`} />
          <Bar dataKey="value" fill="#8884d8" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
