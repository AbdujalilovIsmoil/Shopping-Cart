import React from "react";
import "./Loader.css";

const index = () => {
  return (
    <>
      <div className="wrapper">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default index;
