import React, { useState } from "react";
import song from "../../../_asset/Icon/song.png";
import share from "../../../_asset/Icon/share.png";
import comment from "../../../_asset/Icon/comment.png";
import video1 from "../../../_asset/Icon/video1.mp4";
import bike from "../../../_asset/Icon/bike.mp4";
import make from "../../../_asset/Icon/make.mp4";
import ProfileHIfo from "../../../components/HomeComponents/ProfileHIfo/ProfileHIfo";
import "./PostSecArea.scss";
import { suggestionData } from "../../../fackApi/suggestionAccount";

const PostSecArea = () => {
  const [dataIndex, setDataIndex] = useState("");

  const [show, setShow] = useState(false);

  const handleShow = (index) => {
    setDataIndex(index);
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  return (
    <>
      <div className="post-section-area">
        <div className="post-section-area-wraper">
          <div className="post">
            {suggestionData.map((item, index) => {
              return (
                <div className="post-item" key={index}>
                  <div className="post-info">
                    <img className="pro-img" src={item.img} alt="" />
                    <div className="info-sec">
                      <div
                        className="name-sec-t-h"
                        onMouseOver={() => handleShow(index)}
                      >
                        <a href="#">
                          {item.nikeName}
                          <svg
                            class="tiktok-shsbhf-StyledVerifyBadge e1aglo370"
                            width="14"
                            data-e2e=""
                            height="14"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="24"
                              cy="24"
                              r="24"
                              fill="#20D5EC"
                            ></circle>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z"
                              fill="white"
                            ></path>
                          </svg>
                        </a>
                        <a href="#" className="nikname">
                          {item.name}
                        </a>
                      </div>
                      <p className="sec-tiktok">
                        <a href="#">#সাদিয়া</a> মেরি জান এই গানটা শুধু তোমার
                        জন্য <a href="#">#💔💔💔💔💔💔💔</a>{" "}
                        <a href="#">#foryoupage</a> <a href="#">#foryou</a>{" "}
                        <a href="#newtrend"></a> <a href="#">#viral</a>{" "}
                        <a href="#">#😂😂😂😂😂</a> <a href="#">#🤙🤙🤙🤙 </a>{" "}
                        <a href="#">#viral</a>
                      </p>
                      <div className="original-sound-sec">
                        <img src={song} alt="" />
                        <a href="#">original sound - @ghumbabu55</a>
                      </div>
                    </div>
                    <div className="btn-sec">
                      <button>Follow</button>
                    </div>
                  </div>
                  <div className="post-video-sec">
                    <video width="282" height="500" controls>
                      <source src={make} type="video/mp4" />
                    </video>

                    <div className="info">
                      <div className="item">
                        <svg
                          width="24"
                          data-e2e=""
                          height="24"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#LikeRedShadowColor_filter0_d)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15 4.5C21 4.5 24 8.5 24 8.5C24 8.5 27 4.5 33 4.5C40 4.5 45 9.99998 45 17C45 25 38.4622 32.1314 32.5 37.5C28.8191 40.8144 26 43 24 43C22 43 19.101 40.7978 15.5 37.5C9.63898 32.1325 3 25 3 17C3 9.99998 8 4.5 15 4.5Z"
                              fill="#FE2C55"
                            ></path>
                          </g>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.80371 24.3995C7.17815 29.3932 11.5185 33.8538 15.4999 37.4999C19.1009 40.7978 21.9999 42.9999 23.9999 42.9999C25.9999 42.9999 28.819 40.8144 32.4999 37.4999C38.4621 32.1314 44.9999 24.9999 44.9999 16.9999C44.9999 16.8252 44.9968 16.6513 44.9906 16.4785C41.1344 27.3238 27.3575 37 23.5001 37C20.6255 37 11.2219 31.6262 4.80371 24.3995Z"
                            fill="black"
                            fill-opacity="0.03"
                          ></path>
                          <defs>
                            <filter
                              id="LikeRedShadowColor_filter0_d"
                              x="0.6"
                              y="3.3"
                              width="46.8"
                              height="43.3"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              ></feFlood>
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              ></feColorMatrix>
                              <feOffset dy="1.2"></feOffset>
                              <feGaussianBlur stdDeviation="1.2"></feGaussianBlur>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow"
                              ></feBlend>
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow"
                                result="shape"
                              ></feBlend>
                            </filter>
                          </defs>
                        </svg>
                        <p> 2,541K</p>
                      </div>
                      <div className="item">
                        <img src={comment} alt="" />
                        <p>2,541K</p>
                      </div>
                      <div className="item">
                        <img src={share} alt="" />
                        <p>2,541K</p>
                      </div>
                    </div>
                  </div>
                  {index === dataIndex && show && (
                    <ProfileHIfo hidePro={handleHide} data={item} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostSecArea;
