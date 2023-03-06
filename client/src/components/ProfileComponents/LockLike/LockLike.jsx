import React from "react";
import "./LockLike.scss";
const LockLike = () => {
  return (
    <>
      <div className="lock-like-sec">
        <div className="wraper-liked">
          <svg
            width="90"
            data-e2e=""
            height="90"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 8.5C20.9624 8.5 18.5 10.9624 18.5 14V18.5H29.5V14C29.5 10.9624 27.0376 8.5 24 8.5ZM32.5 18.5V14C32.5 9.30558 28.6944 5.5 24 5.5C19.3056 5.5 15.5 9.30558 15.5 14V18.5H11C9.61929 18.5 8.5 19.6193 8.5 21V40C8.5 41.3807 9.61929 42.5 11 42.5H37C38.3807 42.5 39.5 41.3807 39.5 40V21C39.5 19.6193 38.3807 18.5 37 18.5H32.5ZM11.5 21.5V39.5H36.5V21.5H11.5Z"
            ></path>
          </svg>
          <div className="text-sec">
            <h2>This user's liked videos are private</h2>
            <p>Videos liked by freelancerafridi are currently hidden</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LockLike;
