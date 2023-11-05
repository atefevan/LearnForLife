import DataTable, { Alignment, Direction } from "react-data-table-component";
// import DataTableExtensions from "react-data-table-component-extensions";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import React, { useState } from "react";
import { Paper, SxProps, Theme } from "@mui/material";
import C_TextField from "../atoms/C_TextField";
import C_Typography from "../atoms/C_Typography";
import { fontSizes } from "../../constants/sizes";
import useColorScheme from "../../hooks/useColorScheme";

interface Props {
  paginationPerPage?: number;
  paginationRowsPerPageOptions?: number[];
  isStriped?: boolean;
  isExpandable?: boolean;
  isDesnsable?: boolean;
  stripedColor?: string;
  hoverColor?: string;
  headerColor?: string;
  tableDataDirection?: Direction;
  fixedHeaderHeight?: string;
  isHighlightOnHover?: boolean;
  // paginaitonLastIcon?: React.ReactNode;
  // paginaitonFirstIcon?: React.ReactNode;
  isRowsSelectable?: boolean;
  label?: string;
  rows: any;
  columns: any;
  emptyRecordsTitle?: String;
  style?: SxProps<Theme>;
}
const UserInfoTable = ({
  headerColor = useColorScheme().colorscheme.tableHead,
  emptyRecordsTitle = "No Records Found !",
  hoverColor = "#D2E0FB",
  label = "sample table",
  isStriped = true,
  // isExpandable = false,
  tableDataDirection = Direction.LTR,
  paginationPerPage = 5,
  fixedHeaderHeight = "300px",
  isHighlightOnHover = true,
  isRowsSelectable = true,
  isDesnsable = true,
  paginationRowsPerPageOptions = [5, 10, 15, 20, 25],
  rows,
  columns,
  style,
}: Props) => {
  React.useEffect(() => {
    setRecords(rows);
  }, [rows]);
  const [records, setRecords] = useState<any>();
  const [value, setValue] = useState<string>("");
  const { colorscheme } = useColorScheme();
  const tableCustomStyles = {
    headCells: {
      style: {
        // paddingLeft: "8px", // override the cell padding for head cells
        // paddingRight: "8px",
        color: useColorScheme().colorscheme.text,
      },
    },
    headRow: {
      style: {
        // color: "#223336",
        backgroundColor: headerColor,
        // fontWeight:"bold",
        fontSize: 14,
        fontFamily: "Arial",
        // width:"5px"
      },
    },

    rows: {
      style: {
        // color: "transparent",
        minHeight: "72px",
        backgroundColor: useColorScheme().colorscheme.tableHead,
        color: useColorScheme().colorscheme.text,
        fontSize: 12,
        fontFamily: "Arial",
        // width: "93vw",
      },
      cells: {
        style: {
          // paddingLeft: "8px",
          // paddingRight: "8px",
          fontSize: 12,
          backgroundColor: "green",
          color: "green",
        },
      },
      stripedStyle: {
        color: useColorScheme().colorscheme.text,
        fontSize: 12,
        fontFamily: "Arial",
        backgroundColor: useColorScheme().colorscheme.tableStripe,
      },
      highlightOnHoverStyle: {
        backgroundColor: hoverColor,
      },
      selectedHighlightStyle: {
        backgroundColor: "#191969",
      },
      denseStyle: {
        // padding: "5px",
      },
    },
    pagination: {
      style: {
        color: colorscheme.text,
        backgroundColor: "transparent",
        fontSize: "14px", // Set your desired font size
        fontFamily: "Arial",
      },
      pageButtonsStyle: {
        color: "pink",
        // fontSizes:400,
      },
    },
  };
  const conditionalRowStyles = [
    {
      when: (row: any) => row.age === 22,
      style: (row: any) => ({
        backgroundColor: row.age === 22 ? "pink" : "inerit",
        "&:hover": {
          cursor: "pointer",
        },
      }),
    },
  ];
  const handleChange = (_: any) => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log("Selected Rows: ", _.selectedRows);
  };
  const selectProps = {
    indeterminate: (isIndeterminate: any) => isIndeterminate,
  };
  const paginationComponentOptions = {
    rowsPerPageText: "Rows per page",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
    paginationComponentOptions: {
      nextIcon: (
        <SkipNextRoundedIcon sx={{ backgroundColor: colorscheme.text }} />
      ),
      prevIcon: <SkipPreviousRoundedIcon />,
    },
  };
  const CustomSelectionControl = ({ checked, onClick }: any) => {
    return (
      <div onClick={onClick} style={{ cursor: "pointer" }}>
        {checked ? (
          <CheckBoxRoundedIcon />
        ) : (
          <CheckBoxOutlineBlankRoundedIcon />
        )}
      </div>
    );
  };
  // const keys: string[] = [];

  // for (const [key, _value] of Object.entries(rows[0])) {
  //   keys.push(key);
  // }

  // console.log("KEYS: ", keys);

  React.useEffect(() => {
    console.log("VALUES :: ", value);

    if (!rows.length) {
      return;
    }

    let newData: any[] = [];
    rows.map((item: any) => {
      //return (
      // item.company_name.toLowerCase().includes(value.toLowerCase()) ||
      // item.department.toLowerCase().includes(value.toLowerCase()) ||
      // item.designation.toLowerCase().includes(value.toLowerCase()) ||
      // item.from_date.toString().toLowerCase().includes(value.toLowerCase()) ||
      // item.to_date.toString().toLowerCase().includes(value.toLowerCase()) ||
      // item.responsibilities.toLowerCase().includes(value.toLowerCase())
      //keys.map((key) => item[key].toLowerCase().includes(value.toLowerCase()))

      // keys.forEach((key) => {
      //   console.log("LOL", item[key], value);
      //   return item[key].toLowerCase().includes(value.toLowerCase());
      // });
      console.log("write: ", value);
      for (const [key, _] of Object.entries(item)) {
        // console.log(
        //   item[key],
        //   item[key].toLowerCase().includes(value.toLowerCase())
        // );
        if (item[key].toLowerCase().includes(value.toLowerCase())) {
          newData.push(item);
          return;
        }
      }

      //newData = [];

      //);
    });
    setRecords(newData);
  }, [value]);
  return (
    <>
      <div>
        <Paper sx={{ backgroundColor: "transparent", ...style }}>
          <div
            style={{
              fontSize: "24px",
              fontFamily: "Arial",
              padding: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <C_Typography text={label} fontSize={fontSizes.rg} />
            <div>
              <C_TextField
                type="text"
                fieldOnChange={(event: any) =>
                  //handleFilter(event?.target.value)
                  setValue(event.target.value)
                }
                size="small"
                placeHolder="Search...."
                style={{ margin: "5px" }}
              />
            </div>
          </div>
          <DataTable
            columns={columns}
            data={records}
            // expandableRows={isExpandable}
            // expandableRowsComponent={ExpandableRowsComponent}
            direction={tableDataDirection}
            fixedHeaderScrollHeight={fixedHeaderHeight}
            highlightOnHover={isHighlightOnHover}
            paginationIconLastPage={
              <SkipNextRoundedIcon sx={{ color: colorscheme.text }} />
            }
            paginationIconFirstPage={
              <SkipPreviousRoundedIcon sx={{ color: colorscheme.text }} />
            }
            selectableRowsComponentProps={selectProps}
            selectableRowsComponent={CustomSelectionControl}
            noHeader
            paginationIconNext={
              <NavigateNextOutlinedIcon sx={{ color: colorscheme.text }} />
            }
            paginationIconPrevious={
              <ChevronLeftOutlinedIcon sx={{ color: colorscheme.text }} />
            }
            noDataComponent={
              <C_Typography
                variant="h6"
                text={emptyRecordsTitle}
                custom_color={colorscheme.black}
              />
            }
            sortIcon={<NorthRoundedIcon sx={{ color: "white" }} />}
            dense={isDesnsable}
            paginationPerPage={paginationPerPage}
            selectableRowsHighlight={isRowsSelectable}
            pagination
            paginationRowsPerPageOptions={paginationRowsPerPageOptions}
            pointerOnHover
            responsive
            selectableRows={isRowsSelectable}
            striped={isStriped}
            subHeaderAlign={Alignment.LEFT}
            subHeaderWrap
            onSelectedRowsChange={handleChange}
            customStyles={tableCustomStyles}
            conditionalRowStyles={conditionalRowStyles}
            // paginationComponent={CustomPagination}
            paginationComponentOptions={paginationComponentOptions}
          />
        </Paper>
      </div>
    </>
  );
};

export default UserInfoTable;
