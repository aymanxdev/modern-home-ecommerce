import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featureInfo/FeaturedInfo";
import "./home.styles.css";
import { TempData } from "../../tempData";
import SmallWidget from "../../components/small-widget/SmallWidget";
import LargeWidget from "../../components/large-widget/LargeWidget";

const Home = () => {
  return (
    <div className="home-container">
      <FeaturedInfo />
      <Chart
        data={TempData}
        dataKey1="Monthly Sales"
        dataKey2="Active Users"
        grid
      />
      <div className="home-widgets">
        <SmallWidget />
        <LargeWidget />
      </div>
    </div>
  );
};

export default Home;
