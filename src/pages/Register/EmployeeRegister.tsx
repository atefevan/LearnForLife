import InnerLayer from "../../components/InnerLayer";
// // import { socket } from "../../api";
import C_Item from "../../components/atoms/C_Item";
import EmployeeRegisterForm from "../../components/forms/Register/EmployeeRegister/EmployeeRegisterForm";
import * as React from "react";
import OfficialInformationForm from "../../components/forms/Register/EmployeeRegister/OfficialInformation";
import PersonalInformationForm from "../../components/forms/Register/EmployeeRegister/PersonalInformationForm";
import ReferenceAndOthersForm from "../../components/forms/Register/EmployeeRegister/ReferenceAndOthersForm";
import SalaryAllowancesForm from "../../components/forms/Register/EmployeeRegister/SalaryAllowancesForm";
import JobExperienceForm from "../../components/forms/Register/EmployeeRegister/JobExperienceForm";
import EducationalQualificationForm from "../../components/forms/Register/EmployeeRegister/EducationalQualificationForm";
import SkillForm from "../../components/forms/Register/EmployeeRegister/SkillForm";
import TrainingInformationForm from "../../components/forms/Register/EmployeeRegister/TrainingInformationForm";
import ActionDateForm from "../../components/forms/Register/EmployeeRegister/ActionDateForm";

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
  "Action Date",
];
const EmployeeRegisterPage = () => {
  const [selected, setSelected] = React.useState<string>("Basic Info");
  return (
    <>
      <InnerLayer>
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
            {ITEMS.map((item: any, index: number) => (
              <C_Item
                label={item}
                onClick={() => setSelected(item)}
                focused={selected}
              />
            ))}
          </div>
        </div>

        {selected === "Basic Info" ? (
          <EmployeeRegisterForm />
        ) : selected === "Official Information" ? (
          <OfficialInformationForm />
        ) : selected === "Personal Information" ? (
          <PersonalInformationForm />
        ) : selected === "Reference & Other" ? (
          <ReferenceAndOthersForm />
        ) : selected === "Salary Allowances" ? (
          <SalaryAllowancesForm />
        ) : selected === "Job Experience" ? (
          <JobExperienceForm />
        ) : selected === "Educational Qualification" ? (
          <EducationalQualificationForm />
        ) : selected === "Skill" ? (
          <SkillForm />
        ) : selected === "Training Information" ? (
          <TrainingInformationForm />
        ) : selected === "Action Date" ? (
          <ActionDateForm />
        ) : (
          <ActionDateForm />
        )}
      </InnerLayer>
    </>
  );
};

export default EmployeeRegisterPage;
