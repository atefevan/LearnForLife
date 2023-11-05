import dayjs from "dayjs";
import { useState } from "react";
import useColorScheme from "../../../../hooks/useColorScheme";
import C_Typography from "../../../atoms/C_Typography";
import { fontSizes } from "../../../../constants/sizes";
import C_Select from "../../../atoms/C_Select";
import C_DatePicker from "../../../atoms/C_DatePicker";
import C_TextField from "../../../atoms/C_TextField";
import { phoneNumberValidator } from "../../../../utils/validator";

interface Props {}
const OfficialInformationForm = ({}: Props) => {
  const [formData, setFormData] = useState<{}>();
  const [confirmDate, setConfirmDate] = useState<any>(dayjs());
  const [seprationDate, setSeprationDate] = useState<any>(dayjs());
  const [appraisalDate, setAppraisalDate] = useState<any>(dayjs());
  const [transferDate, setTransferDate] = useState<any>(dayjs());
  const [pfEffectiveDate, setPfEffectiveDate] = useState<any>(dayjs());
  const [resignIssueDate, setResignIssueDate] = useState<any>(dayjs());

  const { colorscheme } = useColorScheme();

  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;
    setFormData({ ...formData, ...obj });
  };
  console.log(formData);
  return (
    <>
      {/* Form title */}
      <div style={{ display: "flex", justifyContent: "center", padding: 10 }}>
        <C_Typography text={"Official Information"} fontSize={fontSizes.rg} />
      </div>
      {/* Form Body */}
      <div style={{ display: "flex", justifyContent: "center",height:"60vh" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "310px",
            justifyContent:"space-evenly",
            //   backgroundColor:colorscheme.brown500,
          }}
        >
          <C_Select
            id="branch_unit"
            name="branch_unit"
            key="branch_unit"
            isRequired={true}
            label="Branch / Unit"
            defaultValue={""}
            items={[]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="department"
            name="department"
            key="department"
            label="Department"
            isRequired={true}
            defaultValue={"N/A"}
            items={["N/A"]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="section"
            name="section"
            key="section"
            label="Section"
            isRequired={true}
            defaultValue={"N/A"}
            items={["N/A"]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="designation"
            name="designation"
            key="designation"
            label="Designation"
            isRequired={true}
            defaultValue={"N/A"}
            items={["N/A"]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="designation_group"
            name="designation_group"
            key="designation_group"
            label="Desig. Group"
            isRequired={true}
            defaultValue={"N/A"}
            items={["N/A"]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="job_title"
            name="job_title"
            key="job_title"
            label="Job Title"
            isRequired={true}
            defaultValue={"N/A"}
            items={["N/A"]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="grade"
            name="grade"
            key="grade"
            label="Grade"
            isRequired={true}
            defaultValue={"N/A"}
            items={["N/A"]}
            onChange={handleFormDataInput}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "310px",
            marginLeft: 10,
            justifyContent:"space-evenly",
            //   backgroundColor:colorscheme.brown500,
          }}
        >
          <C_Select
            id="floor"
            name="floor"
            key="floor"
            label="Floor"
            isRequired={true}
            defaultValue={"N/A"}
            items={["N/A"]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="line"
            name="line"
            key="line"
            label="Line"
            isRequired={true}
            defaultValue={"N/A"}
            items={["N/A"]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="block"
            name="block"
            key="block"
            label="Block"
            isRequired={true}
            defaultValue={"N/A"}
            items={["N/A"]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="expertness"
            name="expertness"
            key="expertness"
            label="Expertness"
            isRequired={true}
            defaultValue={"N/A"}
            items={["N/A"]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="staff_category"
            name="staff_category"
            key="staff_category"
            label="Staff Category"
            isRequired={true}
            defaultValue={""}
            items={["N/A"]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="agreement"
            name="agreement"
            key="agreement"
            label="Agreement"
            isRequired={true}
            defaultValue={"N/A"}
            items={[
              "N/A",
              "Contractual",
              "Internship",
              "Permanent",
              "Provisional",
            ]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="legal_status"
            name="legal_status"
            key="legal_status"
            label="Legal Status"
            defaultValue={"N/A"}
            items={["N/A", "Long Absent", "Resign", "Termination"]}
            onChange={handleFormDataInput}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "310px",
            marginLeft: 10,
            justifyContent:"space-evenly",
            //   backgroundColor:colorscheme.brown500,
          }}
        >
          <C_DatePicker
            id="resign_issue_date"
            label="Resign Issue Date"
            dateFormat="MMM DD,YYYY"
            value={resignIssueDate}
            style={{width: "310px" }}
            onChange={(event) => {
              setFormData({
                ...formData,
                resign_issue_date: event["$d"].toDateString(),
              });
              setResignIssueDate(event["$d"]);
            }}
          />
          <C_Select
            id="membership_type"
            name="membership_type"
            key="membership_type"
            isRequired={true}
            label="Membership Type"
            defaultValue={"N/A"}
            items={["N/A"]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="roster_type"
            name="roster_type"
            key="roster_type"
            isRequired={true}
            label="Roster Type"
            defaultValue={"N/A"}
            items={[
              "N/A",
              "Group Roster",
              "Individual Roster",
              "Non-Roster",
              "Unplanned Roster",
            ]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="shift_plan"
            name="shift_plan"
            key="shift_plan"
            label="Shift Plan"
            isRequired={true}
            defaultValue={"General Shift"}
            items={["General Shift"]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="roster_group"
            key="roster_group"
            name="roster_group"
            label="Roster Group"
            isRequired={true}
            defaultValue={"N/A"}
            items={[
              "N/A",
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "Fr1",
              "Fr2",
              "G",
              "H",
              "I",
              "J",
              "Mo1",
              "Mo2",
              "Sa1",
              "Sa2",
              "Su1",
              "Su2",
              "Th1",
              "Th2",
              "Tu1",
              "Tu2",
              "We1",
              "We2",
            ]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="1st_weekend"
            key="1st_weekend"
            name="1st_weekend"
            label="1st Weekend"
            isRequired={true}
            defaultValue={"Friday"}
            items={[
              "N/A",
              "Saturday",
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thrusday",
              "Friday",
            ]}
            onChange={handleFormDataInput}
          />
          <C_Select
            id="2nd_weekend"
            key="2nd_weekend"
            name="2nd_weekend"
            label="2nd Weekend"
            isRequired={true}
            defaultValue={"N/A"}
            items={[
              "N/A",
              "Saturday",
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thrusday",
              "Friday",
            ]}
            onChange={handleFormDataInput}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "310px",
            marginLeft: 10,
            justifyContent:"space-evenly",
            //   backgroundColor:colorscheme.brown500,
          }}
        >
          <C_DatePicker
            id="confirm_date"
            label="Confirm Date"
            dateFormat="MMM DD,YYYY"
            value={confirmDate}
            style={{  width: "310px" }}
            onChange={(event) => {
              setFormData({
                ...formData,
                confirm_date: event["$d"].toDateString(),
              });
              setConfirmDate(event["$d"]);
            }}
          />
          <C_DatePicker
            id="sepration_date"
            label="Sepration Date"
            dateFormat="MMM DD,YYYY"
            value={seprationDate}
            style={{  width: "310px" }}
            onChange={(event) => {
              setFormData({
                ...formData,
                sepration_date: event["$d"].toDateString(),
              });
              setSeprationDate(event["$d"]);
            }}
          />
          <C_DatePicker
            id="appraisal_date"
            label="Appraisal Date"
            dateFormat="MMM DD,YYYY"
            value={appraisalDate}
            style={{  width: "310px" }}
            onChange={(event) => {
              setFormData({
                ...formData,
                appraisal_date: event["$d"].toDateString(),
              });
              setAppraisalDate(event["$d"]);
            }}
          />
          <C_DatePicker
            id="transfer_date"
            label="Transfer Date"
            dateFormat="MMM DD,YYYY"
            value={transferDate}
            style={{  width: "310px" }}
            onChange={(event) => {
              setFormData({
                ...formData,
                transfer_date: event["$d"].toDateString(),
              });
              setTransferDate(event["$d"]);
            }}
          />
          <C_TextField
            id="transfer_from"
            name="transfer_from"
            type="text"
            label="Transfer From"
            placeHolder=""
            fieldOnChange={handleFormDataInput}
          />
          <C_DatePicker
            id="pf_effective_date"
            label="PF Effective Date"
            dateFormat="MMM DD,YYYY"
            value={pfEffectiveDate}
            style={{ width: "310px" }}
            onChange={(event) => {
              setFormData({
                ...formData,
                pf_effective_date: event["$d"].toDateString(),
              });
              setPfEffectiveDate(event["$d"]);
            }}
          />
          <C_Select
            id="designation_2"
            name="designation_2"
            key="designation_2"
            label="Designation 2"
            defaultValue={"N/A"}
            items={["N/A"]}
            onChange={handleFormDataInput}
          />
        </div>
      </div>
    </>
  );
};

export default OfficialInformationForm;
