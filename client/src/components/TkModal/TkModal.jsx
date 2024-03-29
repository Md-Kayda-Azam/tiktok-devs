import React from "react";
import "./TkModal.scss";
import "react-responsive-modal/styles.css";
const TkModal = ({ children, title, close, mShowHide }) => {
  const handleModal = () => {
    mShowHide((prev) => ({
      ...prev,
      reportModal: false,
      blockModal: false,
    }));
    mShowHide(false);
  };

  return (
    <>
      <div className="tk-modal" ref={close}>
        <div className="wraper-tk-modal">
          <div className="tk-mds">
            <div className="modal-header">
              <div className="title">{title}</div>

              {title && (
                <button className="btn" onClick={handleModal}>
                  <svg
                    width="14"
                    data-e2e=""
                    height="14"
                    viewBox="0 0 9 10"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.35299 0.792837L4.49961 3.93944L7.64545 0.792566C7.8407 0.597249 8.15733 0.597223 8.35262 0.792508L8.70669 1.14658C8.90195 1.34184 8.90195 1.65842 8.70669 1.85368L5.56027 5.0001L8.70672 8.14655C8.90198 8.34181 8.90198 8.65839 8.70672 8.85366L8.35316 9.20721C8.1579 9.40247 7.84132 9.40247 7.64606 9.20721L4.49961 6.06076L1.35319 9.20719C1.15793 9.40245 0.841345 9.40245 0.646083 9.20719L0.292629 8.85373C0.0973708 8.65847 0.0973653 8.3419 0.292617 8.14664L3.43895 5.0001L0.292432 1.85357C0.0972034 1.65834 0.0971656 1.34182 0.292347 1.14655L0.645801 0.792924C0.841049 0.597582 1.1577 0.597543 1.35299 0.792837Z"></path>
                  </svg>
                </button>
              )}
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TkModal;
