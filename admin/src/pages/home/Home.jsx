import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featureInfo/FeaturedInfo";
import "./home.styles.css";
import { salesData, ActiveUsersData } from "../../tempData";
import SmallWidget from "../../components/small-widget/SmallWidget";
import LargeWidget from "../../components/large-widget/LargeWidget";

const Home = () => {
  return (
    <div className="home-container">
      <FeaturedInfo />
      <div className="chartsHome-container">
        <Chart
          data={salesData}
          dataKey="Monthly Sales"
          grid
          title="Monthly Sales"
        />
        <Chart
          data={ActiveUsersData}
          dataKey="Active Users"
          grid
          title="Active Users"
        />
      </div>

      <div className="home-widgets">
        <SmallWidget />
        <LargeWidget />
      </div>
    </div>
  );
};

export default Home;
