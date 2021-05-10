import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import "./ProgressSkill.css";
const ProgressSkill = (props) => {
  return (
    <div className="col-sm-12 col-md-4 text-center">
      <div className="progContainer mt-4">
        <CircularProgressbar
          value={props.value}
          text={`${props.value}%`}
          styles={buildStyles({
            textColor: props.textColor,
            pathColor: props.pathColor,
          })}
        />
      </div>
      <div className="mt-2">
        <p className="text-uppercase">{props.skillName}</p>
      </div>
    </div>
  );
};

export default ProgressSkill;