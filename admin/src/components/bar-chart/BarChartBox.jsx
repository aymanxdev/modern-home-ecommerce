import React from "react";
import "./barChartBox.styles.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartBox = ({ data, title, dataKey, grid }) => {
  return (
    <div className="barChart-container">
      <div className="barChart-wrapper">
        <h3 className="chart-title">{title}</h3>
        {grid ? (
          <ResponsiveContainer width="100%" aspect={3 / 1}>
            <BarChart
              width={150}
              height={40}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey={dataKey} fill="#24A19C" />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p>No data available for this product</p>
        )}
      </div>
    </div>
  );
};

export default BarChartBox;
