// src/pages/Dashboard.jsx
import React from "react";
import AppLayout from "../../layouts/AppLayout";
import CustomLineChart from "../../components/CustomLineChart";
import HeatMap from "../../components/HeatMap";

const Dashboard = () => (
  <AppLayout>
    <CustomLineChart />
    <HeatMap />
  </AppLayout>
);

export default Dashboard;
