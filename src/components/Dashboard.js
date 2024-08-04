import React from 'react';
import '../css/Dashboard.css';
import data from '../Data/data.json';
import OrderStatus from './OrderStatus';
import NetProfit from './Netprofit';
import ActivityChart from './ActivityChart';
import Content from './ContentItems';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <OrderStatus orders={data.orders} />
      <NetProfit net={data.netprofit} />
      <ActivityChart activity={data.activity} />
     <Content/>
     <RecentOrders recentOrders={data.recentOrders} />
     <CustomerFeedback feedback={data.feedback} />
    </div>
  );
};

export default Dashboard;