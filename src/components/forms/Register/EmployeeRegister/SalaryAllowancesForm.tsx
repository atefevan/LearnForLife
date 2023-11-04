import { useEffect, useState } from "react";
import C_Typography from "../../../atoms/C_Typography";
import { fontSizes } from "../../../../constants/sizes";
import C_Select from "../../../atoms/C_Select";
import C_TextField from "../../../atoms/C_TextField";
import C_Switch from "../../../atoms/C_Switch";
import useColorScheme from "../../../../hooks/useColorScheme";
import { digitValidator } from "../../../../utils/validator";

interface Props {}
const SalaryAllowancesForm = ({}: Props) => {
  const [formData, setFormData] = useState<{}>();
  const [attendanceBonusStatus, setAttendanceBonusStatus] =
    useState<boolean>(false);
  const [otEntitledStatus, setOtEntitledStatus] = useState<boolean>(false);
  const { colorscheme } = useColorScheme();
  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;
    setFormData({ ...formData, ...obj });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      attendance_bonus_status: attendanceBonusStatus,
      ot_entitled_status: otEntitledStatus,
    });
  }, [attendanceBonusStatus, otEntitledStatus]);
  console.log(formData);
  return (
    <>
      <div>
        {/* Form title */}
        <div style={{ display: "flex", justifyContent: "center", padding: 10 }}>
          <C_Typography text={"Salary Allowance"} fontSize={fontSizes.rg} />
        </div>
        <C_Select
          id="salary_scheme"
          name="salary_scheme"
          key="salary_scheme"
          label="Salary Scheme"
          defaultValue={"GMT Industry Rules"}
          style={{ paddingBottom: 2, width: "200px",marginLeft:"2vw" }}
          items={["GMT Industry Rules"]}
          onChange={handleFormDataInput}
        />
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
              id="gross_salary"
              name="gross_salary"
              label="Gross Salary"
              defaultValue={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.gross_salary)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="currency"
              name="currency"
              label="Currency"
              value={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.currency)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="basic"
              name="basic"
              label="Basic"
              value={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.basic)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="house_rent"
              name="house_rent"
              type="tel"
              label="House Rent"
              value={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.house_rent)}
              fieldOnChange={handleFormDataInput}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", marginBottom: 10 }}>
                <C_Switch
                  id="attendance_bonus_status"
                  name="attendance_bonus_status"
                  label="Attend. Bonus"
                  labelFontSize={15}
                  isChecked={attendanceBonusStatus}
                  labelAlign="start"
                  style={{ marginRight: 1 }}
                  color={colorscheme.success}
                  onChange={() => {
                    setAttendanceBonusStatus(!attendanceBonusStatus);
                  }}
                />
              </div>
              <C_TextField
                _disabled={!attendanceBonusStatus}
                id="attendance_bonus"
                name="attendance_bonus"
                label=""
                defaultValue={0}
                validator={digitValidator(formData?.attendance_bonus)}
                style={{ paddingBottom: 2, width: "130px" }}
                fieldOnChange={handleFormDataInput}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "250px",
              }}
            >
              <div style={{ display: "flex", marginBottom: 10 }}>
                <C_Switch
                  id="ot_entitled_status"
                  name="ot_entitled_status"
                  label="OT Entitled"
                  labelFontSize={15}
                  isChecked={otEntitledStatus}
                  labelAlign="start"
                  style={{ marginRight: 1 }}
                  color={colorscheme.success}
                  onChange={() => {
                    setOtEntitledStatus(!otEntitledStatus);
                  }}
                />
              </div>
              <div>
                <C_TextField
                  _disabled={!otEntitledStatus}
                  id="ot_entitled"
                  name="ot_entitled"
                  label=""
                  defaultValue={0}
                  validator={digitValidator(formData?.ot_entitled)}
                  style={{ paddingBottom: 2, width: "110px" }}
                  fieldOnChange={handleFormDataInput}
                />
              </div>
            </div>
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
              id="income_tax"
              name="income_tax"
              label="Income Tax"
              defaultValue={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.income_tax)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="tax_rebate"
              name="tax_rebate"
              label="Tax Rebate"
              defaultValue={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.tax_rebate)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="pf_company"
              name="pf_company"
              label="PF Company"
              defaultValue={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.pf_company)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="pf_own"
              name="pf_own"
              label="PF Own"
              defaultValue={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.pf_own)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="food_allowance"
              name="food_allowance"
              label="Food Allowance"
              value={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.food_allowance)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="medical_allowance"
              name="medical_allowance"
              label="Medical Allowance"
              value={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.medical_allowance)}
              fieldOnChange={handleFormDataInput}
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
              id="transport_allowance"
              name="transport_allowance"
              label="Transport Allowance"
              value={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.transport_allowance)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="tiffin_allowance"
              name="tiffin_allowance"
              label="Tiffin Allowance"
              value={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.tiffin_allowance)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="dinner_allowance"
              name="dinner_allowance"
              label="Dinner Allowance"
              defaultValue={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.dinner_allowance)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="other_allowance"
              name="other_allowance"
              label="Other Allowance"
              defaultValue={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.other_allowance)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="laundry_allowance"
              name="laundry_allowance"
              label="Laundry Allowance"
              defaultValue={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.laundry_allowance)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="mobile_allowance"
              name="mobile_allowance"
              label="Mobile Allowance"
              defaultValue={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.mobile_allowance)}
              fieldOnChange={handleFormDataInput}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
              //   backgroundColor:colorscheme.brown500,
              marginLeft: 10,
            }}
          >
            <C_TextField
              id="night_allowance"
              name="night_allowance"
              label="Night Allowance"
              value={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.night_allowance)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="night_shift_allowance"
              name="night_shift_allowance"
              label="Night Shift Allowance"
              defaultValue={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.night_shift_allowance)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="holiday_allowance"
              name="holiday_allowance"
              label="Holiday Allowance"
              value={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.holiday_allowance)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="staff_od_allowance"
              name="staff_od_allowance"
              label="Staff OD Allowance"
              defaultValue={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.staff_od_allowance)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="dearness_allowance"
              name="dearness_allowance"
              label="Dearness Allowance"
              defaultValue={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.dearness_allowance)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="sba_allowance"
              name="sba_allowance"
              label="SBA Allowance"
              defaultValue={0}
              style={{ paddingBottom: 2 }}
              validator={digitValidator(formData?.sba_allowance)}
              fieldOnChange={handleFormDataInput}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SalaryAllowancesForm;
