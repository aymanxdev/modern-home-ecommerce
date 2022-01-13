import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featureInfo/FeaturedInfo";
import "./home.styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <FeaturedInfo />
      <Chart />
    </div>
  );
};

export default Home;
