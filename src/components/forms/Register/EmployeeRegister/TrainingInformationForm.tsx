import { useState } from "react";
import C_Typography from "../../../atoms/C_Typography";
import { fontSizes } from "../../../../constants/sizes";
import UserInfoTable from "../../../tables/UserInfoTable";

type FormData = object | {};
interface Props {}
const TrainingInformationForm = ({}: Props) => {
  const [formData, setFormData] = useState<FormData>({});
  const [trainingInformationRow, setTrainingInformationRow] = useState<
    FormData[]
  >([]);
  //   const handleFormDataInput = (e: any) => {
  //     e.preventDefault();
  //     let obj: any = {};
  //     const key: string = e.target.id ? e.target.id : e.target.name;
  //     obj[key] = e.target.value;
  //     setFormData({ ...formData, ...obj });
  //   };
  const TrainingInformationColumn = [
    {
      name: "Training",
      selector: (row: any) => row.training_name,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row: any) => row.date,
      sortable: true,
    },
    {
      name: "Training Type",
      selector: (row: any) => row.training_type,
      sortable: true,
    },
    {
      name: "Instructor",
      selector: (row: any) => row.instructor,
      sortable: true,
    },
  ];
  return (
    <>
      <div>
        {/* Form title */}
        <div style={{ display: "flex", justifyContent: "center", padding: 10 }}>
          <C_Typography text={"Training Inforation"} fontSize={fontSizes.rg} />
        </div>
        {/* Form body */}
        <UserInfoTable
          style={{
            marginTop: "20px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
          rows={trainingInformationRow}
          columns={TrainingInformationColumn}
          label={"Training Informations"}
          emptyRecordsTitle={"No training Found !"}
        />
      </div>
    </>
  );
};

export default TrainingInformationForm;
