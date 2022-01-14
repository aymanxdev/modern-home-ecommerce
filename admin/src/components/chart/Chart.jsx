import React from "react";
import "./chart.styles.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart({ data, title, dataKey1, dataKey2, grid }) {
  return (
    <div className="charts-container">
      <div className="chart-left">
        <h3 className="chart-title">Sales Analytics</h3>
        <ResponsiveContainer width="100%" aspect={3 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#555" />
            <Line dataKey={dataKey1} stroke="#555" type="monotone" />
            <Tooltip />
            {grid && <CartesianGrid stroke="lightgrey" strokeDasharray="3 3" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-right">
        <h3 className="chart-title">Active Users</h3>
        <ResponsiveContainer width="100%" aspect={3 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#555" />
            <Line dataKey={dataKey2} stroke="#555" type="monotone" />
            <Tooltip />
            {grid && <CartesianGrid stroke="lightgrey" strokeDasharray="3 3" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
