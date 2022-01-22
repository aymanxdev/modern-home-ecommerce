import React, { useState, useEffect, useMemo } from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featureInfo/FeaturedInfo";
import "./home.styles.css";
import { salesData, ActiveUsersData } from "../../tempData";
import SmallWidget from "../../components/small-widget/SmallWidget";
import LargeWidget from "../../components/large-widget/LargeWidget";
import { adminRequest } from "../../adminRequestMethods";
import Alert from "@mui/material/Alert";

const Home = () => {
  // const [usersStats, setUsersStats] = useState([]);
  // const MONTHS = useMemo(
  //   () => [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "June",
  //     "July",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ],
  //   []
  // );

  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //       const res = await adminRequest.get("/users/stats");
  //       res.data.map((stat) =>
  //         setUsersStats((prev) => [
  //           ...prev,
  //           { name: MONTHS[stat._id - 1], "Active Users": stat.total },
  //         ])
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getStats();
  // }, [MONTHS]);

  return (
    <div className="home-container">
      <Alert severity="info">
        If you don't see the data after you login, please{" "}
        <strong>refresh</strong> the page. I'm currently working to fix this.
        Thank you!
      </Alert>
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
