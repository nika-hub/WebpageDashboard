import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../css/NetProfit.css';  

const NetProfit = ({net}) => {
    const getArrow = (isUpward) => {
        return isUpward ? '▲' : '▼';
      };
    
      const getColorClass = (isUpward) => {
        return isUpward ? 'positive-change' : 'negative-change';
      };
      const completionRateValue = parseFloat(net.completionRate.replace('%', ''));

  return (
    <div className="net-profit-container">
      <div className='net-profit-card '>
        <h3>Net Profit</h3>
        <p>
          {net.netProfit} 
          <span className={getColorClass(true)}>
            {getArrow(true)} 3%
          </span>
        </p>
        <div className="circular-progress-container">
          <CircularProgressbar
            value={completionRateValue}
            text={`${completionRateValue}%`}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#4557b6", 
              trailColor: "#666666", 
              strokeLinecap: 'round',
              textSize: '16px'
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default NetProfit;