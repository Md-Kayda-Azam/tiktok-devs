import React from "react";
import Footer from "../../Footer/Footer";
import Discover from "./Discover/Discover";
import FollowingAccount from "./FollowingAccount/FollowingAccount";
import "./HomeInfoSection.scss";
import SuggestionAccount from "./SuggestionAccount/SuggestionAccount";

const HomeInfoSection = ({ ll, changll }) => {
  return (
    <>
      <div className={`home-info-section ${ll}`}>
        <div className={`home-info-section-wraper  ${ll}`}>
          <div className="for-you-following">
            <div className="item">
              <svg
                width="32"
                data-e2e=""
                height="32"
                viewBox="0 0 48 48"
                fill="rgba(254, 44, 85, 1)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"
                ></path>
              </svg>
              <span>For You</span>
            </div>
            <div className="item">
              <svg
                width="32"
                data-e2e=""
                height="32"
                viewBox="0 0 48 48"
                fill="rgba(22, 24, 35, 1)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 12.5C15.5897 12.5 13.5849 14.5018 13.5849 17.0345C13.5849 19.5672 15.5897 21.569 18 21.569C20.4103 21.569 22.4151 19.5672 22.4151 17.0345C22.4151 14.5018 20.4103 12.5 18 12.5ZM10.5849 17.0345C10.5849 12.9017 13.8766 9.5 18 9.5C22.1234 9.5 25.4151 12.9017 25.4151 17.0345C25.4151 21.1673 22.1234 24.569 18 24.569C13.8766 24.569 10.5849 21.1673 10.5849 17.0345ZM18 29.8793C14.0801 29.8793 10.7403 32.5616 9.69697 36.2673C9.5473 36.7989 9.03833 37.1708 8.49337 37.0811L7.50662 36.9189C6.96166 36.8292 6.58837 36.3131 6.72325 35.7776C8.00732 30.6788 12.5509 26.8793 18 26.8793C23.449 26.8793 27.9927 30.6788 29.2767 35.7776C29.4116 36.3131 29.0383 36.8292 28.4934 36.9189L27.5066 37.0811C26.9617 37.1708 26.4527 36.7989 26.303 36.2673C25.2597 32.5616 21.9199 29.8793 18 29.8793Z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33 31.5371C32.2445 31.5371 31.5198 31.668 30.8447 31.9093C30.3246 32.0951 29.7189 31.9243 29.4549 31.4392L28.9769 30.5608C28.713 30.0757 28.8907 29.463 29.4009 29.2516C30.513 28.791 31.7285 28.5371 33 28.5371C37.4554 28.5371 41.1594 31.6303 42.2706 35.7812C42.4135 36.3147 42.0386 36.8308 41.4935 36.9196L40.5065 37.0804C39.9614 37.1692 39.4546 36.7956 39.2894 36.2686C38.4217 33.5 35.91 31.5371 33 31.5371Z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33 18.5C31.6193 18.5 30.5 19.6193 30.5 21C30.5 22.3807 31.6193 23.5 33 23.5C34.3807 23.5 35.5 22.3807 35.5 21C35.5 19.6193 34.3807 18.5 33 18.5ZM27.5 21C27.5 17.9624 29.9624 15.5 33 15.5C36.0376 15.5 38.5 17.9624 38.5 21C38.5 24.0376 36.0376 26.5 33 26.5C29.9624 26.5 27.5 24.0376 27.5 21Z"
                ></path>
              </svg>
              <span>Following</span>
            </div>
          </div>
          <div className={`divider ${ll}`}></div>
          <div className={`login-info ${ll}`}>
            <p>Log in to follow creators, like videos, and view comments.</p>
            <button>Login</button>
          </div>
          <SuggestionAccount ll={ll} />
          <FollowingAccount />
          <div className={`divider ${ll}`}></div>
          <Discover ll={ll} />
          <div className={`create-effect ${ll}`}>
            <div className={`img-sec ${ll}`}>
              <img
                src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/045b2fc7c278b9a30dd0.png"
                alt=""
              />
              <div className={`t-sec ${ll}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  width="1em"
                  height="1em"
                  class="tiktok-onk6is-StyledEHLogo el3hfgg12"
                >
                  <path
                    fill="black"
                    d="M0 18V9a9 9 0 0118 0v9H0zm15.75-2.25V9a6.75 6.75 0 00-9.978-5.93 6.744 6.744 0 016.619 2.971A4.483 4.483 0 0113.5 9v6.75h2.25zM6.502 5.257A4.5 4.5 0 002.25 9.75v6H4.5V9c0-1.56.795-2.936 2.002-3.743zm4.096 2.16A2.25 2.25 0 006.75 9v6.75h4.5v-6a4.48 4.48 0 00-.652-2.333z"
                  ></path>
                </svg>
                <span>Create effect</span>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeInfoSection;
