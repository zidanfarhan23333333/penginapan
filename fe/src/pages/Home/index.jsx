import React from "react";
import beachVid from "../../assets/beachVid.mp4";

const index = () => {
  return (
    <div>
      <video src={beachVid} autoPlay loop muted></video>
    </div>
  );
};

export default index;
