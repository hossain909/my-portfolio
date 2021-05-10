import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import "./ProgressSkill.css";
const ProgressSkill = (props) => {
  return (
    <div className="my-2 m-auto">
      <div className="progContainer col-sm-12 mt-5">
        <CircularProgressbar
          value={props.value}
          text={`${props.value}%`}
          styles={buildStyles({
            textColor: props.textColor,
            pathColor: props.pathColor,
          })}
        />
        <p className="text-center text-uppercase mt-3">{props.skillName}</p>
      </div>
    </div>
  );
};

export default ProgressSkill;