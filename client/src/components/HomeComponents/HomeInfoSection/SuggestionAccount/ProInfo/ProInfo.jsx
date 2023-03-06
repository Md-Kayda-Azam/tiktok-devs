import React from "react";
import "./ProInfo.scss";

const ProInfo = ({ hidePro, data, ll }) => {
  return (
    <>
      <div className="pro-info-show-sugg" onMouseLeave={hidePro}>
        <div className={`wraper ${ll}`}>
          <div className="item-sec-pp ">
            <img src={data.img} alt="" />
            <button>Follow</button>
          </div>
          <div className="item-sec-pp name-sec-t">
            <div className="name-sec">
              <a href="#" className="name">
                {data.nikeName}
              </a>
              <svg
                class="tiktok-shsbhf-StyledVerifyBadge e1aglo370"
                width="14"
                data-e2e=""
                height="14"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#20D5EC"></circle>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <a href="#" className="nikname">
              {data.name}
            </a>
          </div>
          <div className="item-sec-pp f-l">
            <span>
              <b>5.4M</b> Followers
            </span>
            <span>
              <b>92.8M</b> Likes
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProInfo;
