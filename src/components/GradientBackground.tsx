import React from "react";

interface Props {
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
  bgColor?: string;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  display?: string;
  padding?: number;
  styles?: React.CSSProperties | undefined;
  children?: React.JSX.Element[] | React.ReactNode;
}
const GradientBackground = ({
  padding,
  position,
  bgColor,
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
  display,
  children,
  styles,
}: Props) => {
  return (
    <div
      className="gradient"
      style={{
        background: bgColor,
        position: position ? position : "absolute",
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        display: display ? display : "flex",
        padding: padding ? padding : 0,
        ...styles,
      }}
    >
      {children}
    </div>
  );
};

export default GradientBackground;
