import { useState } from "react";
import InnerLayer from "../../components/InnerLayer";
import C_DatePicker from "../../components/atoms/C_DatePicker";
import C_Select from "../../components/atoms/C_Select";
import C_Switch from "../../components/atoms/C_Switch";
import Calendar from "../../components/calendar/Calendar";
import useColorScheme from "../../hooks/useColorScheme";
import C_CheckBox from "../../components/atoms/C_CheckBox";
import C_Typography from "../../components/atoms/C_Typography";
import { fontSizes } from "../../constants/sizes";
import CRUDStates from "../../components/CRUDStates";
import UserInfoTable from "../../components/tables/UserInfoTable";
const FestivalHolidayPlanPage = () => {
  const [checked, setChecked] = useState(false);
  const rosterGroup = [
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
  ];
  const festivalHolidayRow = [
    {
      FestivalHoliday: "Eid-Ui-Fitr",
      FromDate: "Dec 12,2023",
      ToDate: "Dec 12,2023",
      Duration: "1 Month",
      FullOtCount: "5 days",
      EffectedEMployeeCount: " 6 days",
    },
    {
      FestivalHoliday: "Eid-Ui-Azha",
      FromDate: "Dec 12,2023",
      ToDate: "Dec 12,2023",
      Duration: "1 Month",
      FullOtCount: "5 days",
      EffectedEMployeeCount: " 6 days",
    },
  ];
  const festivalHolidayColumn = [
    {
      name: "Festival Holiday",
      selector: (row: any) => row.FestivalHoliday,
      sortable: true,
    },
    { name: "From Date", selector: (row: any) => row.FromDate, sortable: true },
    { name: "To Date", selector: (row: any) => row.FromDate, sortable: true },
    { name: "Duration", selector: (row: any) => row.FromDate, sortable: true },
    {
      name: "Full Ot Count",
      selector: (row: any) => row.FromDate,
      sortable: true,
    },
    {
      name: "Effected Employee Count",
      selector: (row: any) => row.FromDate,
      sortable: true,
    },
  ];
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const [fulldayOtCount, setFullDayOtCount] = useState<boolean>(false);
  const { colorscheme } = useColorScheme();
  return (
    <InnerLayer>
      <div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
            <C_Select
              id="festival_holiday"
              key="festival_holiday"
              name="festival_holiday"
              label="Festival Holiday"
              defaultValue={""}
              style={{
                paddingBottom: 2,
                padding: 1,
                height: "55px",
                width: "250px",
                borderRadius: 4,
              }}
              items={[""]}
              // onChange={handleFormDataInput}
            />
          </div>
          <div style={{ display: "flex", flex: 1 }}>
            <C_DatePicker
              id="start_date"
              label="Start Date"
              dateFormat="DD-MMM-YYYY"
              // value={startDate}
              style={{ margin: 0.5, width: "250px" }}
              onChange={(event) => {
                // setFormData({
                //   ...formData,
                //   increment_issue: event["$d"].toDateString(),
                // });
                // setStartDate(event["$d"].toDateString());
              }}
            />
          </div>
          <div style={{ display: "flex", flex: 1 }}>
            <C_DatePicker
              id="end_date"
              label="End Date"
              dateFormat="DD-MMM-YYYY"
              // value={startDate}
              style={{ margin: 0.5, width: "250px" }}
              onChange={(event) => {
                // setFormData({
                //   ...formData,
                //   increment_issue: event["$d"].toDateString(),
                // });
                // setStartDate(event["$d"].toDateString());
              }}
            />
          </div>
          <div style={{ display: "flex", flex: 1, marginBottom: 10 }}>
            <C_Switch
              id="fullday_ot_count"
              name="fullday_ot_count"
              label="Fullday OT Count"
              style={{ marginLeft: 1 }}
              labelAlign="start"
              color={colorscheme.success}
              onChange={() => {
                setFullDayOtCount(!fulldayOtCount);
              }}
            />
          </div>
        </div>
        <Calendar />
        <div style={{ display: "flex", height: "300px" }}>
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "green",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "25px",
                backgroundColor: "gray",
                alignItems: "center",
                margin: 1,
              }}
            >
              <C_CheckBox
                isChecked={checked}
                onChange={handleChange}
                customSize={24}
              />
              <C_Typography
                text={`Roster Grp(${0}) ${0}`}
                custom_color="black"
                fontSize={fontSizes.xs}
              />
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: "#E0F4FF",
                flex: 1,
                flexDirection: "column",
                overflowX: "hidden",
                overflowY: "auto",
                overflow: "scroll",
              }}
            >
              {rosterGroup.map((roster) => (
                <div style={{}}>
                  <div style={{ display: "flex" }}>
                    <C_CheckBox
                      isChecked={checked}
                      onChange={handleChange}
                      customSize={24}
                      style={{ marginRight: 1 }}
                    />
                    <C_Typography text={roster} fontSize={17} />
                  </div>
                  <div
                    style={{
                      backgroundColor: "gray",
                      display: "flex",
                      // flex: 1,
                      // marginLeft: 1,
                      // marginRight: 1,
                      width: "150px",
                      height: "1px",
                      alignSelf: "center",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "orange",
              flexDirection: "column",
              overflowX: "hidden",
              overflowY: "auto",
              overflow: "scroll",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "25px",
                backgroundColor: "gray",
                alignItems: "center",
                margin: 1,
              }}
            >
              <C_CheckBox
                isChecked={checked}
                onChange={handleChange}
                customSize={24}
              />
              <C_Typography
                text={`Religion(${0}) ${1}`}
                custom_color="black"
                fontSize={fontSizes.xs}
              />
            </div>
            Religion
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "pink",
              flexDirection: "column",
              overflowX: "hidden",
              overflowY: "auto",
              overflow: "scroll",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "25px",
                backgroundColor: "gray",
                alignItems: "center",
                margin: 1,
              }}
            >
              <C_CheckBox
                isChecked={checked}
                onChange={handleChange}
                customSize={24}
              />
              <C_Typography
                text={`Staff. Cat.(${0}) ${0}`}
                custom_color="black"
                fontSize={fontSizes.xs}
              />
            </div>
            Staff Category
          </div>
          <div
            style={{
              display: "flex",
              flex: 2,
              backgroundColor: "green",
              flexDirection: "column",
              overflowX: "hidden",
              overflowY: "auto",
              overflow: "scroll",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "25px",
                backgroundColor: "gray",
                alignItems: "center",
                margin: 1,
              }}
            >
              <C_CheckBox
                isChecked={checked}
                onChange={handleChange}
                customSize={24}
              />
              <C_Typography
                text={`Department(${0}) ${0}`}
                custom_color="black"
                fontSize={fontSizes.xs}
              />
            </div>
            Department
          </div>
          <div
            style={{
              display: "flex",
              flex: 2,
              backgroundColor: "violet",
              flexDirection: "column",
              overflowX: "hidden",
              overflowY: "auto",
              overflow: "scroll",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "25px",
                backgroundColor: "gray",
                alignItems: "center",
                margin: 1,
              }}
            >
              <C_CheckBox
                isChecked={checked}
                onChange={handleChange}
                customSize={24}
              />
              <C_Typography
                text={`Designation(${0}) ${0}`}
                custom_color="black"
                fontSize={fontSizes.xs}
              />
            </div>
            Designation
          </div>
          <div
            style={{
              display: "flex",
              flex: 3,
              backgroundColor: "red",
              flexDirection: "column",
              overflowX: "hidden",
              overflowY: "auto",
              overflow: "scroll",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "25px",
                backgroundColor: "gray",
                alignItems: "center",
                margin: 1,
              }}
            >
              <C_CheckBox
                isChecked={checked}
                onChange={handleChange}
                customSize={24}
              />
              <C_Typography
                text={`Employee(${0}) ${0}`}
                custom_color="black"
                fontSize={fontSizes.xs}
              />
            </div>
            Employee
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <CRUDStates />
        </div>
        <div>
          <UserInfoTable
            label={"Festival Holiday Chart"}
            rows={festivalHolidayRow}
            columns={festivalHolidayColumn}
          />
        </div>
      </div>
    </InnerLayer>
  );
};

export default FestivalHolidayPlanPage;
