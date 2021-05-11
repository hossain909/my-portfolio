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
      value: 80,
      textColor: colors.primaryColor,
      pathColor: "#dc4b25"
    },
    {
      skillName: "Javascript",
      desc: "Hands on experience in JavascriptES6",
      value: 75,
      textColor: colors.primaryColor,
      pathColor: "#fdca40"
    },
    {
      skillName: "ReactJS",
      desc: "Hands on experience in ReactJS",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#3797a4"
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
      value: 80,
      textColor: colors.primaryColor,
      pathColor: "#7853b2"
    },
    {
      skillName: "Sass",
      desc: "Hands on experience in Bootstrap5",
      value: 65,
      textColor: colors.primaryColor,
      pathColor: "#c76493"
    },
    {
      skillName: "NodeJS",
      desc: "Hands on experience in NodeJS",
      value: 65,
      textColor: colors.primaryColor,
      pathColor: "#71a760"
    },
    {
      skillName: "MongoDB",
      desc: "Hands on experience in MongoDB",
      value: 65,
      textColor: colors.primaryColor,
      pathColor: "#13a952"
    }
  ]
  return (
    <div className="container py-5">
      <Card style={{ backgroundColor: "#040c0c" }}>
        <SmallHeading text="What I do"></SmallHeading>
        <MediumHeading text="Specializing in"></MediumHeading>
        <div className="row mt-3" style={{ padding: "30px" }}>
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