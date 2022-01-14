import React from "react";
import "./largWidget.styles.css";

function LargeWidget() {
  const Button = ({ type }) => {
    return <button className={"largeWidget-button " + type}>{type}</button>;
  };
  return (
    <div className="largeWidget-container">
      <h3 className="largeWidget-title">Latest Transactions</h3>
      <table className="largeWidget-table">
        <tr className="largeWidget-tr">
          <th className="largeWidget-colTitle">Customer</th>
          <th className="largeWidget-colTitle">Date</th>
          <th className="largeWidget-colTitle">Amount</th>
          <th className="largeWidget-colTitle">Status</th>
        </tr>
        <tr className="largeWidget-tr">
          <td className="largeWidget-user">
            <span className="largeWidget-userName">Ian Anderson</span>
          </td>
          <td className="largeWidget-date">2022-01-20</td>
          <td className="largeWidget-amount">£ 599</td>
          <td className="largeWidget-Status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default LargeWidget;
