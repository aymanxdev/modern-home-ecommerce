import React from "react";
import Announceement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";

const Success = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <Announceement />
      <Navbar />
      <div>Payment successful</div>
      <Link to="/">Go back to home page</Link>
      <Footer />
    </div>
  );
};

export default Success;
