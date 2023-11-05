import C_Item from "./atoms/C_Item";
import * as React from "react";

interface Props {
  onClick: () => void;
  selected: string;
}

const ITEMS = [
  "Basic Info",
  "Official Information",
  "Personal Information",
  "Reference & Other",
  "Salary Allowances",
  "Job Experience",
  "Educational Qualification",
  "Skill",
  "Training Information",
];
const Slider: React.FC<Props> = ({ onClick, selected }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          maxHeight: "150px",
          overflowX: "auto",
          // maxWidth: "450px",
          overflow: "scroll",
          borderRadius: 20,
        }}
      >
        {ITEMS.map((item: any) => (
          <C_Item label={item} onClick={onClick} focused={selected}  />
        ))}
      </div>
    </div>
  );
};

export default Slider;
