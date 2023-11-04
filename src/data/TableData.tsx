import { Button } from "@mui/material";
import C_Button from "../components/atoms/C_Button";
import useColorScheme from "../hooks/useColorScheme";

export const row = [
  {
    id: 1,
    name: "Atef",
    email: "aa@gmail.com",
    age: 23,
  },
  {
    id: 2,
    name: "Evan",
    email: "bb@gmail.com",
    age: 26,
  },
  {
    id: 3,
    name: "Nishat",
    email: "cc@gmail.com",
    age: 27,
  },
  {
    id: 4,
    name: "Jannat",
    email: "dd@gmail.com",
    age: 29,
  },
  {
    id: 5,
    name: "Rita",
    email: "ee@gmail.com",
    age: 30,
  },
  {
    id: 6,
    name: "Sadik",
    email: "ff@gmail.com",
    age: 31,
  },
  {
    id: 7,
    name: "Mariam",
    email: "gg@gmail.com",
    age: 32,
  },
  {
    id: 8,
    name: "Sanad",
    email: "ss@gmail.com",
    age: 22,
  },
  {
    id: 9,
    name: "Rabid",
    email: "rr@gmail.com",
    age: 20,
  },
  {
    id: 10,
    name: "Lisa",
    email: "ll@gmail.com",
    age: 25,
  },
  {
    id: 11,
    name: "Nitu",
    email: "nn@gmail.com",
    age: 40,
  },
  {
    id: 12,
    name: "Niha",
    email: "haha@gmail.com",
    age: 42,
  },
];
export const column = [
  { name: "Name", selector: (row: any) => row.name, sortable: true },
  { name: "Email", selector: (row: any) => row.email, sortable: true },
  {
    name: "Age",
    selector: (row: any) => row.age,
    sortable: true,
    // conditionalCellStyles: [
    //   {
    //     when: (row: any) => row.age > 25,
    //     style: {
    //       backgroundColor: "rgba(63, 195, 128, 0.9)",
    //       color: "white",
    //       "&:hover": {
    //         cursor: "pointer",
    //       },
    //     },
    //   },
    // ],
  },
  {
    name: "Acitons",
    cell: (row: any) => (
      <div style={{ display: "flex" }}>
        <C_Button
          label="View"
          variant="contained"
          color="primary"
          size="medium"
          fontColor={useColorScheme().colorscheme.white}
          style={{ margin: "5px", width: "70px" }}
          onClick={() => handleView(row)}
        />
        <C_Button
          variant="contained"
          label="Edit"
          color="success"
          size="medium"
          fontColor={useColorScheme().colorscheme.white}
          style={{ margin: "5px", width: "70px" }}
          onClick={() => handleEdit(row)}
        />
        <C_Button
          variant="contained"
          color="error"
          label="Delete"
          size="medium"
          fontColor={useColorScheme().colorscheme.white}
          style={{ margin: "5px", width: "90px" }}
          onClick={() => handleDelete(row)}
        />
      </div>
    ),
  },
];
const handleView = (item: any) => {
  console.log("VIEW :: ", item);
};
const handleEdit = (item: any) => {
  console.log("EDIT ::", item);
};
const handleDelete = (item: any) => {
  console.log("DELETE ::", item);
};
