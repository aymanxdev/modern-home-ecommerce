import React from "react";
import "./featuredInfo.styles.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

function FeaturedInfo() {
  return (
    <div className="featured-container">
      <div className="featured-item">
        <span className="featured-title">Revenue</span>
        <div className="featuredMoney-container">
          <span className="featuredMoney-title">£300</span>
          <span className="featuredMoney-rate">
            -30 <ArrowDownward className="featured-icon negative" />{" "}
          </span>
        </div>
        <span className="featured-subtitle"> Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featuredMoney-container">
          <span className="featuredMoney-title">2,480</span>
          <span className="featuredMoney-rate">
            +2.0 <ArrowUpward className="featured-icon " />
          </span>
        </div>
        <span className="featured-subtitle"> Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featuredMoney-container">
          <span className="featuredMoney-title">£3000</span>
          <span className="featuredMoney-rate">
            -6.7 <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-subtitle"> Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
