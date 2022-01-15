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

function Chart({ data, title, dataKey, grid }) {
  return (
    <div className="charts-container">
      <div className="chart-wrapper">
        <h3 className="chart-title">{title}</h3>
        <ResponsiveContainer width="100%" aspect={3 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#555" />
            <Line dataKey={dataKey} stroke="#555" type="monotone" />
            <Tooltip />
            {grid && <CartesianGrid stroke="lightgrey" strokeDasharray="3 3" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
