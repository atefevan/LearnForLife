import { useEffect, useState } from "react";
// import useColorScheme from "../../../../hooks/useColorScheme";
import C_Typography from "../../../atoms/C_Typography";
import { fontSizes } from "../../../../constants/sizes";
import C_TextField from "../../../atoms/C_TextField";
import C_DatePicker from "../../../atoms/C_DatePicker";
import dayjs from "dayjs";
import UserInfoTable from "../../../tables/UserInfoTable";
import C_Button from "../../../atoms/C_Button";

type FormData = object | {};

interface Props {}
const JobExperienceForm = ({}: Props) => {
  const [formData, setFormData] = useState<FormData>({});
  const [fromDate, setFromDate] = useState<any>(dayjs());
  const [toDate, setToDate] = useState<any>(dayjs());
  const [expYear, setExpYear] = useState<number>(0);
  const [expMonth, setExpMonth] = useState<number>(0);
  const [jobExperienceRow, setJobExperienceRow] = useState<FormData[]>([]);

  // const { colorscheme } = useColorScheme();

  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;
    setFormData({ ...formData, ...obj });
  };
  // console.log(jobExperienceRow);
  // console.log(formData);
  // console.log("FROM DATE :: ", fromDate["$d"].toString());

  useEffect(() => {
    const exp_year = Math.abs(
      new Date(fromDate).getFullYear() - new Date(toDate).getFullYear()
    );
    const exp_month = Math.abs(
      new Date(fromDate).getMonth() - new Date(toDate).getMonth()
    );

    setExpYear(exp_year);
    setExpMonth(exp_month);
  }, [fromDate, toDate]);

  useEffect(() => {
    setFormData({
      ...formData,
      from_date: fromDate["$d"].toString(),
      to_date: toDate["$d"].toString(),
    });
  }, []);
  

  const jobExperienceColumn = [
    {
      name: "Company Name",
      selector: (row: any) => row.company_name,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row: any) => row.department,
      sortable: true,
    },
    {
      name: "Designation",
      selector: (row: any) => row.designation,
      sortable: true,
    },
    {
      name: "From Date",
      selector: (row: any) => row.from_date,
      sortable: true,
    },
    { name: "To Date", selector: (row: any) => row.to_date, sortable: true },
    {
      name: "Exp. Year",
      selector: (row: any) => row.experience_year,
      sortable: true,
    },
    {
      name: "Exp. Month",
      selector: (row: any) => row.experience_month,
      sortable: true,
    },
    {
      name: "Responsibilities",
      selector: (row: any) => row.responsibilities,
      sortable: true,
    },
  ];
  // const jobExperienceRow = [
  //   {
  //     company_name: "Walton",
  //     department: "Web Dev ",
  //     designation: "Intern",
  //     from_date: "01.01.2023",
  //     to_date: "30.04.2023",
  //     // experience_year: "1",
  //     // experience_month: "3",
  //     responsibilities: "capable",
  //   },
  //   // formData,
  // ];
  return (
    <>
      <div>
        {/* Form title */}
        <div style={{ display: "flex", justifyContent: "center", padding: 10 }}>
          <C_Typography text={"Job Experience"} fontSize={fontSizes.rg} />
        </div>
        {/* Form body */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems:"center"
            }}
          >
            <div
              style={{
                display: "flex",
                //   backgroundColor:colorscheme.brown500,
              }}
            >
              <C_TextField
                id="company_name"
                name="company_name"
                type="text"
                label="Company Name"
                placeHolder="Name..."
                style={{ margin: 0.5 }}
                fieldOnChange={handleFormDataInput}
              />
              <C_TextField
                id="department"
                name="department"
                type="text"
                label="Department"
                placeHolder="Department..."
                style={{ margin: 0.5 }}
                fieldOnChange={handleFormDataInput}
              />
              <C_TextField
                id="designation"
                name="designation"
                type="text"
                label="Designation."
                placeHolder="Designation..."
                style={{ margin: 0.5 }}
                fieldOnChange={handleFormDataInput}
              />
              <C_DatePicker
                id="from_date"
                label="From Date"
                dateFormat="MMM DD,YYYY"
                value={fromDate}
                style={{ margin: 0.5 }}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    from_date: event["$d"].toDateString(),
                  });
                  setFromDate(event["$d"]);
                }}
              />
              <C_DatePicker
                id="to_date"
                label="To Date"
                dateFormat="MMM DD,YYYY"
                value={toDate}
                style={{ margin: 0.5 }}
                onChange={(event) => {
                  setFormData({ ...formData, to_date: event["$d"].toDateString() });
                  setToDate(event["$d"]);
                }}
              />
              <C_TextField
                id="experience_year"
                name="experience_year"
                type="text"
                label="Experience Year."
                value={expYear}
                placeHolder="Year..."
                style={{ margin: 0.5 }}
                fieldOnChange={handleFormDataInput}
              />
              <C_TextField
                id="experience_month"
                name="experience_month"
                type="text"
                value={expMonth}
                label="Experience Month"
                placeHolder="Month..."
                style={{ margin: 0.5 }}
                fieldOnChange={handleFormDataInput}
              />
              <C_TextField
                id="responsibilities"
                name="responsibilities"
                type="text"
                label="Responsibilities."
                placeHolder="Responsibilities..."
                style={{ margin: 0.5 }}
                fieldOnChange={handleFormDataInput}
              />
            </div>
            <C_Button
              label={"Submit"}
              variant={"contained"}
              marginTop={2}
              size={"large"}
              onClick={() =>
                setJobExperienceRow([...jobExperienceRow, formData])
              }
            />
            
          </div>
          <UserInfoTable
              style={{
                marginTop: "20px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
              rows={jobExperienceRow}
              columns={jobExperienceColumn}
              label={"Job Experiences"}
            />
      </div>
    </>
  );
};

export default JobExperienceForm;
