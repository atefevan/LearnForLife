import { useState } from "react";
import C_Typography from "../../../atoms/C_Typography";
import { fontSizes } from "../../../../constants/sizes";
import C_Select from "../../../atoms/C_Select";
import C_TextField from "../../../atoms/C_TextField";
import C_DatePicker from "../../../atoms/C_DatePicker";
import C_ImageTextField from "../../../atoms/C_ImageTextField";
import PercentIcon from "@mui/icons-material/Percent";
import {
  digitValidator,
  phoneNumberValidator,
} from "../../../../utils/validator";

interface Props {}
const ReferenceAndOthersForm = ({}: Props) => {
  const [formData, setFormData] = useState<any>();

  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;
    setFormData({ ...formData, ...obj });
  };
  // console.log(formData);
  return (
    <>
      <div>
        {/* Form title */}
        <div style={{ display: "flex", justifyContent: "center", padding: 10 }}>
          <C_Typography text={"Reference & Other"} fontSize={fontSizes.rg} />
        </div>
        {/* Form body */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "67vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
              justifyContent:"space-evenly",
              //   backgroundColor:colorscheme.brown500,
            }}
          >
            <C_Select
              id="marital_status"
              name="marital_status"
              key="marital_status"
              label="Marital Status"
              defaultValue={"Married"}
              items={["Married", "Unmarried", "Divorced", "Widow"]}
              onChange={handleFormDataInput}
            />
            <C_TextField
              id="spouse_id_card_no"
              name="spouse_id_card_no"
              label="Spouse ID Card No."
              placeHolder="Card No..."
              validator={digitValidator(formData?.spouse_id_card_no)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="spouse_name"
              name="spouse_name"
              label="Spouse Name"
              placeHolder="Spouse Name..."
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="husband_or_wife_name_bangla"
              name="husband_or_wife_name_bangla"
              label="স্বামী / স্ত্রী নাম"
              placeHolder="নাম..."
              fieldOnChange={handleFormDataInput}
            />
            <C_Select
              id="spouse_rel"
              name="spouse_rel"
              key="spouse_rel"
              label="Spouse Rel."
              defaultValue={""}
              items={["Husband", "Wife"]}
              onChange={handleFormDataInput}
            />
            <C_Select
              id="spouse_profession"
              name="spouse_profession"
              key="spouse_profession"
              label="Spouse Prof."
              defaultValue={"N/A"}
              items={["N/A"]}
              onChange={handleFormDataInput}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                
              }}
            >
              <C_TextField
                id="no_of_child"
                name="no_of_child"
                label="No. of Child"
                defaultValue={0}
                placeHolder="No. of child"
                validator={digitValidator(formData?.no_of_child)}
                fieldOnChange={handleFormDataInput}
              />
              <div onClick={() => console.log("Children List")}>
                <C_Typography text={"List"} />
              </div>
            </div>
            <C_TextField
              id="child_description"
              name="child_description"
              type="text"
              label="Child Description"
              placeHolder="Description"
              fieldOnChange={handleFormDataInput}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
              justifyContent:"space-evenly",
              //   backgroundColor:colorscheme.brown500,
              marginLeft: 10,
            }}
          >
            <C_TextField
              id="service_book"
              name="service_book"
              type="text"
              label="Service Book"
              placeHolder="services..."
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="insurance_info"
              name="insurance_info"
              type="text"
              label="Insurance Info "
              placeHolder="info..."
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="referer_english"
              name="referer_english"
              label="Referer"
              placeHolder="referer..."
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="referer_bangla"
              name="referer_bangla"
              label="রেফারার"
              placeHolder="রেফারার..."
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="referer_phone"
              name="referer_phone"
              label="Referer Phone"
              placeHolder="Phone No..."
              validator={phoneNumberValidator(formData?.referer_phone)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="referer_address"
              name="referer_address"
              label="Referer Address"
              placeHolder="Address..."
              fieldOnChange={handleFormDataInput}
            />
            <C_DatePicker
              disabled={true}
              id="entry_date"
              label="Entry Date"
              dateFormat="MMM DD, YYYY" /// DD-MM-YYYY
              // value={inactiveDate}
              errorLabel="Fill Values Properly"
              style={{ width: "250px", paddingBottom: 2 }}
              onChange={(event) => {
                // console.log(dayjs(event["$d"]).format("MMM DD, YYYY"));
                setFormData({
                  ...formData,
                  entry_date: event["$d"].toDateString(),
                });
              }}
            />
            <C_TextField
              id="working_hour"
              name="working_hour"
              label="Working Hour"
              defaultValue={0}
              placeHolder="Hours..."
              validator={digitValidator(formData?.working_hour)}
              fieldOnChange={handleFormDataInput}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
              height:"55vh",
              justifyContent:"space-evenly",
              //   backgroundColor:colorscheme.brown500,
              marginLeft: 10,
              marginTop:4,
            }}
          >
            <C_ImageTextField
              id="employee_profile_picture"
              name="employee_profile_picture"
              label="Rizvi"
              defaultValue={"Insert Profile Picture"}
              prefixImage={
                "https://img.etimg.com/thumb/msid-98416802,width-300,height-225,imgsize-5374,,resizemode-75/andrew-tate-health-update-andrew-tates-manager-claims-he-has-lung-cancer-trolled-on-social-media.jpg"
              }
            />
            <C_ImageTextField
              id="employee_signature"
              name="employee_signature"
              label="Evan"
              defaultValue={"Insert Profile Picture"}
              prefixImage={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB"
              }
            />
            <C_TextField
              id="nominee_name_english"
              name="nominee_name_english"
              label="Nominee"
              defaultValue={0}
              placeHolder="Nominee..."
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="nominee_name_bangla"
              name="nominee_name_bangla"
              label="মনোনীত ব্যক্তি"
              defaultValue={0}
              placeHolder="মনোনীত ব্যক্তি..."
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="nominee_relation"
              name="nominee_relation"
              label="Nomin. Relation"
              defaultValue={0}
              placeHolder="Relation..."
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="nominee_phone_no"
              name="nominee_phone_no"
              label="Nominee Phone"
              defaultValue={0}
              placeHolder="Phone Number..."
              validator={phoneNumberValidator(formData?.nominee_phone_no)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="nominee_address_english"
              name="nominee_address_english"
              label="Nominee Address"
              defaultValue={0}
              placeHolder="Address..."
              fieldOnChange={handleFormDataInput}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
              height:"56vh",
              justifyContent:"space-evenly",
              marginLeft: 10,
            }}
          >
            <C_TextField
              id="nominee_address_bangla"
              name="nominee_address_bangla"
              label="মনোনীত ব্যক্তির ঠিকানা"
              defaultValue={0}
              placeHolder="ঠিকানা..."
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="old_card_no"
              name="old_card_no"
              label="Old Card No."
              defaultValue={0}
              placeHolder="Old Card no..."
              fieldOnChange={handleFormDataInput}
            />
            <C_Select
              id="salary_based_on"
              name="salary_based_on"
              key="salary_based_on"
              label="Salary Based On"
              isRequired={true}
              defaultValue={"Attendance Based"}
              items={["N/A", "Attendance Based", "Production Based"]}
              onChange={handleFormDataInput}
            />
            <C_TextField
              id="joining_salary"
              name="joining_salary"
              label="Joining Salary"
              defaultValue={0}
              placeHolder="Joining Salary..."
              validator={digitValidator(formData?.joining_salary)}
              fieldOnChange={handleFormDataInput}
            />
            <C_Select
              id="payment_terms"
              name="payment_terms"
              key="payment_terms"
              label="Payment Terms"
              defaultValue={"N/A"}
              items={["N/A"]}
              onChange={handleFormDataInput}
            />
            <C_TextField
              id="priority_percent"
              name="priority_percent"
              label="Priority Percent"
              placeHolder="Priority on Percentage..."
              suffixIcon={<PercentIcon />}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="payment_priority"
              name="payment_priority"
              label="Payment Priority"
              placeHolder="On Percentage %..."
              validator={digitValidator(formData?.payment_priority)}
              fieldOnChange={handleFormDataInput}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferenceAndOthersForm;
