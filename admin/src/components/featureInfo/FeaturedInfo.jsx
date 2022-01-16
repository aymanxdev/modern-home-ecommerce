import React, { useState, useEffect } from "react";
import "./featuredInfo.styles.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { adminRequest } from "../../adminRequestMethods";

function FeaturedInfo() {
  const [revenue, setRevenue] = useState([]);
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    const getRevenue = async () => {
      try {
        const res = await adminRequest.get("/orders/incomestats");
        setRevenue(res.data);
        console.log(res.data);
        setDifference((res.data[1].total * 100) / (res.data[0].total - 100));
        console.log(difference);
      } catch (error) {
        console.log(error);
      }
    };
    getRevenue();
  }, [difference]);
  return (
    <div className="featured-container">
      <div className="featured-item">
        <span className="featured-title">Revenue</span>
        <div className="featuredMoney-container">
          <span className="featuredMoney-title">£{revenue[1]?.total}</span>
          <span className="featuredMoney-rate">
            %{Math.floor(difference)}
            {difference < 0 ? (
              <ArrowDownward className="featured-icon negative" />
            ) : (
              <ArrowUpward className="featured-icon " />
            )}
          </span>
        </div>
        <span className="featured-subtitle"> Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featuredMoney-container">
          <span className="featuredMoney-title">2,480</span>
          <span className="featuredMoney-rate">
            %+2.0 <ArrowUpward className="featured-icon " />
          </span>
        </div>
        <span className="featured-subtitle"> Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featuredMoney-container">
          <span className="featuredMoney-title">£3000</span>
          <span className="featuredMoney-rate">
            %-6.7 <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-subtitle"> Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
