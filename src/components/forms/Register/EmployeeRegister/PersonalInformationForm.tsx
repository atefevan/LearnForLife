import { useState } from "react";
import C_Typography from "../../../atoms/C_Typography";
import { fontSizes } from "../../../../constants/sizes";
import C_TextField from "../../../atoms/C_TextField";
import C_Select from "../../../atoms/C_Select";
import { digitValidator } from "../../../../utils/validator";

interface Props {}
const PersonalInformationForm = ({}: Props) => {
  const [formData, setFormData] = useState<{}>();

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
      <div>
        {/* Form title */}
        <div style={{ display: "flex", justifyContent: "center", padding: 10 }}>
          <C_Typography text={"Personal Information"} fontSize={fontSizes.rg} />
        </div>
        {/* Form body */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
              //   backgroundColor:colorscheme.brown500,
            }}
          >
            <C_TextField
              id="father_name_english"
              name="father_name_english"
              type="text"
              label="Father Name"
              placeHolder="Name..."
              style={{ paddingBottom: 2 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="father_name_bangla"
              name="father_name_bangla"
              type="text"
              label="পিতার নাম"
              placeHolder="নাম..."
              style={{ paddingBottom: 2 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="mother_name_english"
              name="mother_name_english"
              type="text"
              label="Mother Name"
              placeHolder="Name...."
              style={{ paddingBottom: 2 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="mother_name_bangla"
              name="mother_name_bangla"
              type="text"
              label="মাতার নাম"
              placeHolder="নাম..."
              style={{ paddingBottom: 2 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_Select
              id="religion"
              name="religion"
              key="religion"
              label="Religion"
              isRequired={true}
              defaultValue={"Islam"}
              style={{ paddingBottom: 2 }}
              items={["Islam", "Hindu", "Budhist", "Chirstain"]}
              onChange={handleFormDataInput}
            />
            <C_Select
              id="nationality"
              name="nationality"
              key="nationality"
              label="Nationality"
              isRequired={true}
              defaultValue={"Bangladeshi"}
              style={{ paddingBottom: 2 }}
              items={["Bangladeshi", "Indian", "Pakistani", "American"]}
              onChange={handleFormDataInput}
            />
            <C_Select
              id="language"
              name="language"
              key="language"
              label="Language"
              isRequired={true}
              defaultValue={"N/A"}
              style={{ paddingBottom: 2 }}
              items={["N/A"]}
              onChange={handleFormDataInput}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
              marginLeft: 10,
              //   backgroundColor:colorscheme.brown500,
            }}
          >
            <C_TextField
              id="nid_no"
              name="nid_no"
              label="NID No."
              placeHolder="NID No."
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.nid_no)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="birth_reg_no"
              name="birth_reg_no"
              label="Birth Reg. No."
              placeHolder="number"
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.birth_reg_no)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="driving_license_no"
              name="driving_license_no"
              label="Driving License No."
              placeHolder="License No"
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.driving_license_no)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="passport_no"
              name="passport_no"
              label="Passport No."
              placeHolder="Passport No."
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.passport_no)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="tin_no"
              name="tin_no"
              label="Tin No."
              placeHolder="Tin no."
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.tin_no)}
              fieldOnChange={handleFormDataInput}
            />
            <C_Select
              id="detection_symbol"
              name="detection_symbol"
              key="detection_symbol"
              label="Detection Symbol"
              isRequired={true}
              defaultValue={"N/A"}
              style={{ paddingBottom: 2 }}
              items={["N/A"]}
              onChange={handleFormDataInput}
            />
            <C_Select
              id="resident"
              name="resident"
              key="resident"
              label="Resident"
              isRequired={true}
              defaultValue={"Rental"}
              style={{ paddingBottom: 2 }}
              items={["Rental", "Own House"]}
              onChange={handleFormDataInput}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
              marginLeft: 10,
              //   backgroundColor:colorscheme.brown500,
            }}
          >
            <C_TextField
              id="present_address_english"
              name="present_address_english"
              label="Present Address"
              placeHolder="Address ...."
              type="text"
              style={{ paddingBottom: 2 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="present_address_bangla"
              name="present_address_bangla"
              label="বর্তমান ঠিকানা"
              placeHolder="ঠিকানা ..."
              type="text"
              style={{ paddingBottom: 2 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="permanent_address_english"
              name="permanent_address_english"
              label="Permanent Address"
              placeHolder="Address ...."
              type="text"
              style={{ paddingBottom: 2 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="permanent_address_bangla"
              name="permanent_address_bangla"
              label="স্থায়ী ঠিকানা"
              placeHolder="ঠিকানা ..."
              type="text"
              style={{ paddingBottom: 2 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_Select
              id="permanent_district"
              name="permanent_district"
              key="permanent_district"
              label="Permanent District"
              isRequired={true}
              defaultValue={"N/A"}
              style={{ paddingBottom: 2 }}
              items={[
                "permanent-1",
                "permanent-2",
                "permanent-3",
                "permanent-4",
              ]}
              onChange={handleFormDataInput}
            />
            <C_Select
              id="present_district"
              name="present_district"
              key="present_district"
              label="Present District"
              isRequired={true}
              defaultValue={"N/A"}
              style={{ paddingBottom: 2 }}
              items={["N/A"]}
              onChange={handleFormDataInput}
            />
            <C_Select
              id="present_zone"
              name="present_zone"
              key="present_zone"
              label="Present Zone"
              isRequired={true}
              defaultValue={"N/A"}
              style={{ paddingBottom: 2 }}
              items={["N/A"]}
              onChange={handleFormDataInput}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
              marginLeft: 10,
              //   backgroundColor:colorscheme.brown500,
            }}
          >
            <C_TextField
              id="height"
              name="height"
              label="Height"
              placeHolder="height"
              style={{ paddingBottom: 2 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="weight"
              name="weight"
              label="Weight"
              placeHolder="weight"
              suffixText="KG"
              style={{ paddingBottom: 2 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_Select
              id="origin"
              name="origin"
              key="origin"
              label="Origin"
              isRequired={true}
              defaultValue={"Bangladesh"}
              style={{ paddingBottom: 2 }}
              items={["Bangladesh", "India", "Pakistan", "USA"]}
              onChange={handleFormDataInput}
            />
            <C_Select
              id="pace_graduate"
              name="pace_graduate"
              key="pace_graduate"
              label="Pace Graduate"
              defaultValue={"N/A"}
              style={{ paddingBottom: 2 }}
              items={["N/A", "Yes", "No"]}
              onChange={handleFormDataInput}
            />
            <C_Select
              id="blood_group"
              name="blood_group"
              key="blood_group"
              label="Blood Group"
              defaultValue={"N/A"}
              isRequired={true}
              style={{ paddingBottom: 2 }}
              items={["N/A"]}
              onChange={handleFormDataInput}
            />
            <C_Select
              id="napkin_user"
              name="napkin_user"
              key="napkin_user"
              label="Napkin User"
              defaultValue={""}
              style={{ paddingBottom: 2 }}
              items={["N/A", "Fabric", "Napkin", "Stopped", "Method"]}
              onChange={handleFormDataInput}
            />
            <C_Select
              id="covid19_vaccinated"
              name="covid19_vaccinated"
              key="covid19_vaccinated"
              label="Covid19 Vaccinated"
              defaultValue={""}
              style={{ paddingBottom: 2 }}
              items={[
                "YES",
                "NO",
                "REGISTERED",
                "1ST DOSE",
                "2ND DOSE",
                "3RD DOSE",
              ]}
              onChange={handleFormDataInput}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInformationForm;
