import React from "react";
import budur from "../../assets/budur.mp4";

const index = () => {
  return (
    <div>
      <video src={budur} autoPlay loop muted></video>
    </div>
  );
};

export default index;
