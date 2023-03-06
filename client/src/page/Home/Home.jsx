import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import HomeInfoSection from "../../components/HomeComponents/HomeInfoSection/HomeInfoSection";
import PostSecArea from "../../components/HomeComponents/PostSecArea/PostSecArea";
import TkModal from "../../components/TkModal/TkModal";

const Home = () => {
  return (
    <>
      <div className="tiktok-home-sec">
        <Header swerf="swerf" />
        <div className="home-body-section">
          <div className="home-body-section-wraper">
            <HomeInfoSection ll="change" />
            <PostSecArea />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
