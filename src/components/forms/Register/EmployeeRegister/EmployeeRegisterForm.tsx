import { useState } from "react";
import { fontSizes } from "../../../../constants/sizes";
import C_TextField from "../../../atoms/C_TextField";
import C_Typography from "../../../atoms/C_Typography";
import C_Select from "../../../atoms/C_Select";
import C_Switch from "../../../atoms/C_Switch";
import useColorScheme from "../../../../hooks/useColorScheme";
import C_DatePicker from "../../../atoms/C_DatePicker";
import dayjs from "dayjs";
import * as React from "react";
import CRUDStates from "../../../CRUDStates";
import {
  digitValidator,
  emailValidator,
  phoneNumberValidator,
} from "../../../../utils/validator";

interface Props {}

const EmployeeRegisterForm = ({}: Props) => {
  const [formData, setFormData] = useState<any>({});
  const [employeeStatus, setEmployeeStatus] = useState<boolean>(true);
  const [inactiveDate, setInactiveDate] = useState<any>(dayjs());
  const [birthday, setBirthday] = useState<any>("");
  const [joiningDate, setJoiningDate] = useState<any>(dayjs());
  const [idIssueDate, setIdIssueDate] = useState<any>(dayjs());
  const [employeeAge, setEmployeeAge] = useState<string>("");
  const [serviceLength, setServiceLength] = useState<string>("");
  const { colorscheme } = useColorScheme();

  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;
    setFormData({ ...formData, ...obj });
  };

  React.useEffect(() => {
    setFormData({
      ...formData,
      employee_status: employeeStatus,
      inactive_date: employeeStatus ? null : new Date().toString(),
      birth_day: birthday["$d"]?.toString(),
      joining_date: joiningDate["$d"].toString(),
      id_issue_date: idIssueDate["$d"].toString(),
    });
  }, [employeeStatus]);

  React.useEffect(() => {
    const curr = new Date();
    const b_year = curr.getFullYear() - new Date(birthday).getFullYear();
    const b_month = Math.abs(curr.getMonth() - new Date(birthday).getMonth());

    const s_year = curr.getFullYear() - new Date(joiningDate).getFullYear();
    const s_month = Math.abs(
      curr.getMonth() - new Date(joiningDate).getMonth()
    );

    setEmployeeAge(`${b_year} years ${b_month} months`);
    setServiceLength(`${s_year} years ${s_month} months`);
  }, [birthday, joiningDate]);

  // console.log("Age: ", employeeAge);
  console.log(formData);
  // console.log(employeeStatus);

  // console.log("Today :: ", new Date().getDate()

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          // backgroundColor: "orange",
        }}
      >
        {/* Form title */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 15,
            // paddingTop: "15",
          }}
        >
          <C_Typography text={"Employee Register"} fontSize={fontSizes.rg} />
        </div>
        {/* Form Body */}
        {/* <div style={{ display: "grid" }}> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "310px",
              //   backgroundColor:colorscheme.brown500,
            }}
          >
            <C_TextField
              id="id_card_no"
              name="id_card_no"
              label="ID Card No"
              placeHolder="Card No"
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.id_card_no)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="employee_name_english"
              name="employee_name_english"
              label="Employee Name"
              required={true}
              placeHolder="Employee Name"
              style={{ paddingBottom: 2 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="employee_name_bangla"
              name="employee_name_bangla"
              label="কর্মচারীর নাম"
              required={true}
              placeHolder="নাম..."
              style={{ paddingBottom: 2 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="rf_fp_face_id"
              name="rf_fp_face_id"
              label="RF / FP / Face ID"
              placeHolder="RF / FP / Face ID"
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.rf_fp_face_id)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="personal_cell_no"
              name="personal_cell_no"
              label="Phone"
              placeHolder="Phone Number"
              style={{ paddingBottom: 2 }}
              validator={phoneNumberValidator(formData?.personal_cell_no)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              placeHolder="Type Email"
              style={{ paddingBottom: 2 }}
              validator={emailValidator(formData?.email)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="crop_mob_no"
              name="crop_mob_no"
              label="Crop. Mob. No."
              placeHolder="Type Number"
              style={{ paddingBottom: 2 }}
              validator={phoneNumberValidator(formData?.crop_mob_no)}
              fieldOnChange={handleFormDataInput}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "310px",
              marginLeft: 10,
              //   backgroundColor:colorscheme.brown500,
            }}
          >
            <C_TextField
              id="rocket_bkash_nagad_no"
              name="rocket_bkash_nagad_no"
              label="Rocket / Bkash / Nagad"
              placeHolder="Type Number"
              style={{ paddingBottom: 2 }}
              validator={phoneNumberValidator(formData?.rocket_bkash_nagad_no)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="bank_ac_no"
              name="bank_ac_no"
              label="Bank A/C No"
              placeHolder="Banck A/C No"
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.bank_ac_no)}
              fieldOnChange={handleFormDataInput}
            />
            <C_Select
              id="bank_name"
              name="bank_name"
              key="bank_name"
              label="Bank Name"
              isRequired={true}
              defaultValue={"N/A"}
              style={{ paddingBottom: 2 }}
              items={["N/A"]}
              onChange={handleFormDataInput}
            />
            <C_TextField
              id="second_bank_ac_no"
              name="second_bank_ac_no"
              label="2nd Bank A/C"
              placeHolder="2nd Bank A/C"
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.second_bank_ac_no)}
              fieldOnChange={handleFormDataInput}
            />
            <C_Select
              id="2nd_bank_name"
              key="2nd_bank_name"
              name="2nd_bank_name"
              label="2nd Bank Name"
              isRequired={true}
              defaultValue={"N/A"}
              style={{ paddingBottom: 2 }}
              items={["N/A"]}
              onChange={handleFormDataInput}
            />
            {/* slider || Switch */}
            <div style={{ display: "flex", marginBottom: 10 }}>
              <C_Switch
                id="employee_status"
                name="employee_status"
                label="Employee Status"
                style={{ marginLeft: 1 }}
                labelAlign="start"
                color={colorscheme.success}
                onChange={() => {
                  setEmployeeStatus(!employeeStatus);
                }}
              />
            </div>
            {/* will be disable if employee status active ++ datePicker*/}
            <C_DatePicker
              disabled={employeeStatus}
              id="inactive_date"
              label="Inactive Date"
              dateFormat="MMM DD, YYYY"
              value={inactiveDate}
              errorLabel="Employee Status is Disabled !"
              style={{ width: "310px" }}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  inactive_date: event["$d"].toString(),
                });
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "310px",
              marginLeft: 10,
              //   backgroundColor:colorscheme.brown500,
            }}
          >
            <C_DatePicker
              id="start_date"
              label="Start Date"
              dateFormat="DD-MMM-YYYY"
              //value={startDate}
              style={{ margin: 0.5, width: "250px" }}
              onChange={(event) => {
                // setFormData({
                //   ...formData,
                //   increment_issue: event["$d"].toDateString(),
                // });
                //setStartDate(event["$d"].toDateString());
              }}
            />
            {/* <C_DatePicker
              // disabled={employeeStatus}
              id="birth_day"
              label="Date of Birth"
              dateFormat="MMM DD, YYYY"
              value={""}
              style={{ paddingBottom: 2, width: "310px" }}
              onChange={(event) => {
                setBirthday(event["$d"]);
                setFormData({
                  ...formData,
                  birth_day: event["$d"].toString(),
                });
              }}
            /> */}
            {/* auto generated age eg. 17 years 9 months*/}
            <C_TextField
              id="employee_age"
              name="employee_age"
              label="Employee Age"
              value={employeeAge}
              placeHolder="Employee Age"
              style={{ paddingBottom: 2, width: "310px" }}
              fieldOnChange={() => {
                handleFormDataInput;
              }}
            />
            {/* Joining Date => DatePicker */}
            <C_DatePicker
              id="joining_date"
              label="Joining Date"
              dateFormat="MMM DD, YYYY"
              value={joiningDate}
              style={{ paddingBottom: 2, width: "310px" }}
              onChange={(event) => {
                setJoiningDate(event["$d"]);
                setFormData({
                  ...formData,
                  joining_date: event["$d"].toString(),
                });
              }}
            />
            {/* Service Length auto generated */}
            <C_TextField
              id="service_length"
              name="service_length"
              label="Service Length"
              value={serviceLength}
              placeHolder="Service Length"
              style={{ paddingBottom: 2 }}
              fieldOnChange={handleFormDataInput}
            />
            {/* Select Gender */}
            <C_Select
              id="employee_gender"
              key="employee_gender"
              name="employee_gender"
              label="Gender"
              isRequired={true}
              defaultValue={"Male"}
              style={{ paddingBottom: 2 }}
              items={["Male", "Female"]}
              onChange={handleFormDataInput}
            />
            {/* ID Issue Date => DatePicker */}
            <C_DatePicker
              id="id_issue_date"
              label="ID Issue Date"
              dateFormat="MMM DD, YYYY"
              value={idIssueDate}
              style={{ width: "310px" }}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  id_issue_date: event["$d"].toString(),
                });
              }}
            />
          </div>
        </div>
        <CRUDStates />
      </div>
    </>
  );
};

export default EmployeeRegisterForm;
