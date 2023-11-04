import { useState } from "react";
import C_Typography from "../../../atoms/C_Typography";
import { fontSizes } from "../../../../constants/sizes";
import C_TextField from "../../../atoms/C_TextField";
import C_Button from "../../../atoms/C_Button";
import UserInfoTable from "../../../tables/UserInfoTable";

type FormData = object | {};
interface Props {}
const SkillForm = ({}: Props) => {
  const [formData, setFormData] = useState<FormData>({});
  const [skillsRow, setSkillsRow] = useState<FormData[]>([]);
  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;
    setFormData({ ...formData, ...obj });
  };
  const skillsColumn = [
    {
      name: "Skill English",
      selector: (row: any) => row.skills_english,
      sortable: true,
    },
    {
      name: "Skill Bangla",
      selector: (row: any) => row.skills_bangla,
      sortable: true,
    },
    {
      name: "Eficiency",
      selector: (row: any) => row.eficiency,
      sortable: true,
    },
    {
      name: "machine",
      selector: (row: any) => row.machine,
      sortable: true,
    },
  ];
  return (
    <>
      <div>
        {/* Form title */}
        <div style={{ display: "flex", justifyContent: "center", padding: 10 }}>
          <C_Typography text={"Skills"} fontSize={fontSizes.rg} />
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
            <C_TextField
              id="skills_english"
              name="skills_english"
              type="text"
              label="Skill English"
              placeHolder="In English..."
              style={{ margin: 0.5 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="skills_bangla"
              name="skills_bangla"
              type="text"
              label="Skill Bangla"
              placeHolder="In Bangla..."
              style={{ margin: 0.5 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="eficiency"
              name="eficiency"
              type="text"
              label="Eficiency"
              placeHolder="Eficiency..."
              style={{ margin: 0.5 }}
              fieldOnChange={handleFormDataInput}
            />
            <C_TextField
              id="machine"
              name="machine"
              type="text"
              label="Machine"
              placeHolder="Machine..."
              style={{ margin: 0.5 }}
              fieldOnChange={handleFormDataInput}
            />
          </div>
          <C_Button
            label={"Submit"}
            variant={"contained"}
            marginTop={2}
            size={"large"}
            onClick={() => setSkillsRow([...skillsRow, formData])}
          />
        </div>
        <UserInfoTable
          style={{
            marginTop: "20px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
          rows={skillsRow}
          columns={skillsColumn}
          tableTitle={"Employee Skills"}
        />
      </div>
    </>
  );
};

export default SkillForm;
