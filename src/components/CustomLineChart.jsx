import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Dropdown from "./Dropdown";

const data = [
  { hour: "0 Hr", value1: 4000, value2: 2400, value3: 6000, value4: 5500 },
  { hour: "2 Hr", value1: 3500, value2: 1500, value3: 5800, value4: 2200 },
  { hour: "4 Hr", value1: 3000, value2: 8500, value3: 4500, value4: 6300 },
  { hour: "6 Hr", value1: 4500, value2: 5100, value3: 3400, value4: 4000 },
  { hour: "8 Hr", value1: 4200, value2: 4500, value3: 5600, value4: 5000 },
  { hour: "10 Hr", value1: 5200, value2: 3800, value3: 3500, value4: 4700 },
  { hour: "12 Hr", value1: 6200, value2: 4600, value3: 4800, value4: 5500 },
];

const handleApply = (selectedOptions) => {
  console.log("Selected Options:", selectedOptions);
};

const handleCancel = () => {
  console.log("Selection canceled.");
};

const CustomLineChart = () => (
  <div className="customCard">
    <div className="customCardHeader">
      <div className="headerLeft">
        <h2>Performance Chart</h2>
        <p>Key Metrics for Dayparting Schedule Performance Evaluation</p>
      </div>
      <div className="headerRight">
        <Dropdown
          title="Select Metrics"
          options={["Spend", "Revenue", "Impressions", "Clicks", "CPM", "CTR"]}
          onApply={handleApply}
          onCancel={handleCancel}
        />
      </div>
    </div>
    <div className="customCardBody" style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="hour"
            tick={{ fontSize: 12, fill: "#9D9D9D" }} // Set font size and color
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#9D9D9D" }} // Set font size and color
            tickFormatter={(value) => `₹${(value / 1000).toFixed(1)}k`} // Format as ₹x.xk
          />
          <Tooltip
            formatter={(value) => `₹${(value / 1000).toFixed(1)}k`} // Format in tooltip
          />
          <Line
            type="monotone"
            dataKey="value1"
            stroke="#8884d8"
            strokeWidth={3} // Set thickness of the line
          />
          <Line
            type="monotone"
            dataKey="value2"
            stroke="#82ca9d"
            strokeWidth={3} // Set thickness of the line
          />
          <Line
            type="monotone"
            dataKey="value3"
            stroke="#5932ea"
            strokeWidth={3} // Set thickness of the line
          />
          <Line
            type="monotone"
            dataKey="value4"
            stroke="#000"
            strokeWidth={3} // Set thickness of the line
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default CustomLineChart;
