import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-sec">
        <div className="item-list">
          <div className="first">
            <a href="#">About</a>
            <a href="#">Newsroom</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">ByteDance</a>
          </div>
          <div className="first">
            <a href="#">TikTok for Good</a>
            <a href="#">Advertise</a>
            <a href="#">Developers</a>
            <a href="#"> Transparency</a>
            <a href="#"> TikTok Rewards</a>
            <a href="#"> TikTok Embeds</a>
          </div>
          <div className="first">
            <a href="#"> Safety</a>
            <a href="#"> Help</a>
            <a href="#"> Terms</a>
            <a href="#"> Privacy</a>
            <a href="#"> Creator Portal</a>
            <a href="#">Community Guidelines</a>
          </div>
          <p>© 2023 TikTok</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
