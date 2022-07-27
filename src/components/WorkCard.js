import "./WorkCardStyles.css";
import React from 'react';

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image1" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={props.view} target="_blank" rel="noreferrer"
            className="btn">
            Repo
          </a>
          <a href={props.app}
            target="_blank" rel="noreferrer"
            className="btn">
            App
          </a>
        </div>
      </div>

    </div>
  );
};

export default WorkCard;