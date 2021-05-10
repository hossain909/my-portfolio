import React from 'react';
import "react-circular-progressbar/dist/styles.css";
import Card from '../../../UI/Card/Card';
import MediumHeading from '../../../UI/MediumHeading';
import ProgressSkill from '../../../UI/ProgressSkill/ProgressSkill';
import SmallHeading from '../../../UI/SmallHeading';
import { colors } from "../../../UI/style";
const Specialization = (props) => {
  const skills = [
    {
      skillName: "Html/CSS3",
      desc: "Hands on experience in Html/Css",
      value: 85,
      textColor: colors.primaryColor,
      pathColor: "#ff8303"
    },
    {
      skillName: "Javascript",
      desc: "Hands on experience in JavascriptES6",
      value: 80,
      textColor: colors.primaryColor,
      pathColor: "#ffcc29"
    },
    {
      skillName: "ReactJS",
      desc: "Hands on experience in ReactJS",
      value: 75,
      textColor: colors.primaryColor,
      pathColor: "#62dafb"
    },
    {
      skillName: "Material UI",
      desc: "Hands on experience in JQuery",
      value: 60,
      textColor: colors.primaryColor,
      pathColor: "#0c69ad"
    },
    {
      skillName: "Bootstrap5",
      desc: "Hands on experience in Bootstrap5",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#7853b2"
    },
    {
      skillName: "NodeJS",
      desc: "Hands on experience in NodeJS",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#71a760"
    },
    {
      skillName: "MongoDB",
      desc: "Hands on experience in MongoDB",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#13a952"
    }
  ]
  return (
    <div className="container py-5">
      <Card style={{ padding: "50px", backgroundColor: "#040c0c" }}>
        <SmallHeading text="What I do"></SmallHeading>
        <MediumHeading text="Specializing in"></MediumHeading>
        <div className="row" style={{ padding: "30px" }}>
          {
            skills.map((skill, index) => <ProgressSkill
              key={index}
              skillName={skill.skillName}
              desc={skill.desc}
              value={skill.value}
              textColor={colors.primaryColor}
              pathColor={skill.pathColor}
            ></ProgressSkill>)
          }
        </div>
      </Card>
    </div>
  );
};

export default Specialization;