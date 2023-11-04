import { useState } from "react";
import C_Typography from "../../../atoms/C_Typography";
import { fontSizes } from "../../../../constants/sizes";
import C_TextField from "../../../atoms/C_TextField";
import C_Select from "../../../atoms/C_Select";
import C_Button from "../../../atoms/C_Button";
import UserInfoTable from "../../../tables/UserInfoTable";
import { digitValidator } from "../../../../utils/validator";

type FormData = object | {};
interface Props {}
const EducationalQualificationForm = ({}: Props) => {
  const [formData, setFormData] = useState<FormData>({});
  const [educationalQualificationRow, setEducationalQualificationRow] =
    useState<FormData[]>([]);

  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;
    setFormData({ ...formData, ...obj });
  };
  //   console.log("EDUCATIONAL QUALIFICATION :: ", formData);

  const educationalQualificationColumn = [
    {
      name: "Course/Certificate Name",
      selector: (row: any) => row.course_or_certificate_name,
      sortable: true,
    },
    {
      name: "Institute",
      selector: (row: any) => row.institute,
      sortable: true,
    },
    {
      name: "Board",
      selector: (row: any) => row.board,
      sortable: true,
    },
    {
      name: "Passing Year",
      selector: (row: any) => row.passing_year,
      sortable: true,
    },
    {
      name: "Major",
      selector: (row: any) => row.major,
      sortable: true,
    },
    {
      name: "GPA/CGPA",
      selector: (row: any) => row.gpa_or_cgpa,
      sortable: true,
    },
  ];
  return (
    <>
      <div>
        {/* Form title */}
        <div style={{ display: "flex", justifyContent: "center", padding: 10 }}>
          <C_Typography
            text={"Educational Qualification"}
            fontSize={fontSizes.rg}
          />
        </div>
        {/* Form body */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              //   backgroundColor:colorscheme.brown500,
            }}
          >
            <C_Select
              id="course_or_certificate_name"
              name="course_or_certificate_name"
              key="course_or_certificate_name"
              label="Course/Certificate Name"
              defaultValue={""}
              style={{ margin: 0.5, width: "250px" }}
              items={["SSC", "HSC", "BSC", "MSC"]}
              onChange={handleFormDataInput}
            />
            <C_TextField
              id="institute"
              name="institute"
              label="Institute"
              placeHolder="Institute..."
              style={{ margin: 0.5 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="board"
              name="board"
              label="Board"
              placeHolder="Board..."
              style={{ margin: 0.5 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="passing_year"
              name="passing_year"
              label="Passing Year"
              placeHolder="Year..."
              style={{ margin: 0.5 }}
              validator={digitValidator(formData?.passing_year)}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="major"
              name="major"
              label="Major"
              placeHolder="major..."
              style={{ margin: 0.5 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="gpa_or_cgpa"
              name="gpa_or_cgpa"
              label="GPA/CGPA"
              placeHolder="GPA or CGPA..."
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
              setEducationalQualificationRow([
                ...educationalQualificationRow,
                formData,
              ])
            }
          />
        </div>
        <UserInfoTable
          style={{
            marginTop: "20px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
          rows={educationalQualificationRow}
          columns={educationalQualificationColumn}
          tableTitle={"Educational Qualification"}
        />
      </div>
    </>
  );
};

export default EducationalQualificationForm;
