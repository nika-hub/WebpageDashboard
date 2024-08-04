import React from 'react';
import '../css/RecentOrders.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const RecentOrders = ({ recentOrders }) => {
  return (
    <div className="recent-orders-container">
      <h3>Recent Orders</h3>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order, index) => (
            <tr key={index}>
               <td className="customer-cell">
               <span className="profile-icon-container">
                  <FontAwesomeIcon icon={faUser} className="profile-icon" />
                </span>
                 {order.customer}
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
