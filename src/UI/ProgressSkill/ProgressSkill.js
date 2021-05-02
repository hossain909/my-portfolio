import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import "./ProgressSkill.css";
const ProgressSkill = (props) => {
  return (
    <div className="col-md-6  flexRow align-center mtb-10">
      <div className="progContainer">
        <CircularProgressbar
          value={props.value}
          text={`${props.value}%`}
          styles={buildStyles({
            textColor: props.textColor,
            pathColor: props.pathColor,
          })}
        />
      </div>
      <div className="mlr-10">
        <p className="font-16 bold-500 textColor mtb-10">{props.skillName}</p>
        <p className="font-14 textColor mtb-10 gray">{props.desc}</p>
      </div>
    </div>
  );
};

export default ProgressSkill;