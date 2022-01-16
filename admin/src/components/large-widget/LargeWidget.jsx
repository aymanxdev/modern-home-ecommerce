import React, { useState, useEffect } from "react";
import { adminRequest } from "../../adminRequestMethods";
import { format } from "timeago.js";
import "./largWidget.styles.css";

function LargeWidget() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await adminRequest.get("/orders");

        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);
  const Button = ({ type }) => {
    return <button className={"largeWidget-button " + type}>{type}</button>;
  };
  return (
    <div className="largeWidget-container">
      <h3 className="largeWidget-title">Latest Transactions</h3>
      <table className="largeWidget-table">
        <tbody>
          <tr className="largeWidget-tr">
            <th className="largeWidget-colTitle">Customer</th>
            <th className="largeWidget-colTitle">Date</th>
            <th className="largeWidget-colTitle">Amount</th>
            <th className="largeWidget-colTitle">Status</th>
          </tr>

          {orders.map((order) => (
            <tr className="largeWidget-tr" key={order._id}>
              <td className="largeWidget-user">
                <span className="largeWidget-userName">{order.userId}</span>
              </td>
              <td className="largeWidget-date">{format(order.createdAt)}</td>
              <td className="largeWidget-amount">{order.amount}</td>
              <td className="largeWidget-Status">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LargeWidget;
