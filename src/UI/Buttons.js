import React from 'react';
import { colors } from "./style";

const Buttons = (props) => {
  const { link } = props
  return <a href={link} target="_blank" style={{
    textDecoration: "none",
    boxSizing: "border-box",
    padding: "10px 20px",
    background: props.inverse ? "transparent" : colors.primaryColor,
    color: props.inverse ? colors.primaryColor : "#fff",
    display: "inline-block",
    borderRadius: "20px",
    boxShadow: props.inverse ? "none" : "#416341 0px 0px 10px 0px",
    border: "1px solid",
    borderColor: props.inverse ? colors.primaryColor : "transparent",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: "1px"
  }} rel="noreferrer">{props.label}</a>;
};

export default Buttons;