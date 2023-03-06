import React from "react";
import Header from "../Header/Header";
import HomeInfoSection from "../HomeComponents/HomeInfoSection/HomeInfoSection";
import PostSecArea from "../HomeComponents/PostSecArea/PostSecArea";
import "./UserHome.scss";

const UserHome = () => {
  return (
    <>
      <div className="tiktok-home-sec">
        <Header />
        <div className="home-body-section">
          <div className="home-body-section-wraper">
            <HomeInfoSection />
            <PostSecArea />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHome;
