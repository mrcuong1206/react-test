import React from "react";
import "./Youtube.css";

const YoutubeItem = (props) => {
  return (
    // Add className
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-image">
        <img src={props.image} alt=""></img>
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt=""></img>
        <div className="youtube-info">
          <h3 className="youtube-title">
            {props.title || "This is of example title"}
          </h3>
          <h4 className="youtube-author">
            {props.author || "This is of example author name"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
