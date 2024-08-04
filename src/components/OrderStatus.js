import React from 'react';
import '../css/OrderStatus.css';  

const OrderStatus = ({ orders }) => {
  const getArrow = (isUpward) => {
    return isUpward ? '▲' : '▼';
  };

  const getColorClass = (isUpward) => {
    return isUpward ? 'positive-change' : 'negative-change';
  };

  return (
    <div className="order-status-container">
      <div className="order-status-card">
        <h3>Total Orders</h3>
        <p>
          {orders.totalOrders} 
          <span className={getColorClass(true)}>
            {getArrow(true)} 3%
          </span>
        </p>
      </div>
      <div className="order-status-card">
        <h3>Total Delivered</h3>
        <p>
          {orders.totalDelivered} 
          <span className={getColorClass(false)}>
            {getArrow(false)} 3%
          </span>
        </p>
      </div>
      <div className="order-status-card">
        <h3>Total Cancelled</h3>
        <p>
          0{orders.totalCancelled} 
          <span className={getColorClass(true)}>
            {getArrow(true)} 3%
          </span>
        </p>
      </div>
      <div className="order-status-card">
        <h3>Total Revenue</h3>
        <p>
          {orders.totalRevenue} 
          <span className={getColorClass(false)}>
            {getArrow(false)} 3%
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderStatus;
