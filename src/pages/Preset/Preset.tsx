import { useEffect, useState } from "react";
import InnerLayer from "../../components/InnerLayer";
import C_Select from "../../components/atoms/C_Select";
import C_Switch from "../../components/atoms/C_Switch";
import ChartBar from "../../components/charts/BarChart";
import ChartLine from "../../components/charts/ChartLine";
import ChartPie from "../../components/charts/ChartPie";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import C_Typography from "../../components/atoms/C_Typography";
import C_CircularProgress, {
  C_LinerProgress,
} from "../../components/atoms/C_ProgressIndicator";
import { Avatar, DialogContentText } from "@mui/material";
import C_TextField from "../../components/atoms/C_TextField";
import C_Button from "../../components/atoms/C_Button";
import C_Loader from "../../components/atoms/C_Loader";
import C_AlertInput from "../../components/atoms/C_AlertInput";
import C_Alert from "../../components/atoms/C_Alert";
import { fontSizes } from "../../constants/sizes";
import useColorScheme from "../../hooks/useColorScheme";
import C_Chip from "../../components/atoms/C_Chip";
import UserInfoTable from "../../components/tables/UserInfoTable";
import { column, row } from "../../data/TableData";
import C_DatePicker from "../../components/atoms/C_DatePicker";

const PresetPage = () => {
  const { colorscheme } = useColorScheme();
  // /// Bar Config
  // const barChartLabel = "Employee Counter on 21 May";
  const barData = [
    {
      label: "A",
      value: 4000,
    },
    {
      label: "B",
      value: 3000,
    },
    {
      label: "C",
      value: 2000,
    },
    {
      label: "D",
      value: 3908,
    },
    {
      label: "E",
      value: 4800,
    },
    {
      label: "F",
      value: 2390,
    },
    {
      label: "G",
      value: 4300,
    },
  ];

  // /// Line Config
  // const lineChartLabel = "Employee Counter on 21 May";
  // const data = [
  //   {
  //     name: "A",
  //     value: 2400,
  //   },
  //   {
  //     name: "B",
  //     value: 1398,
  //   },
  //   {
  //     name: "C",
  //     value: 9800,
  //   },
  //   {
  //     name: "D",
  //     value: 3908,
  //   },
  //   {
  //     name: "E",
  //     value: 4800,
  //   },
  //   {
  //     name: "F",
  //     value: 3800,
  //   },
  //   {
  //     name: "G",
  //     value: 4300,
  //   },
  //   {
  //     name: "H",
  //     value: 10300,
  //   },
  // ];
  // const lineColor = colors?.cream_pink;

  // /// Pie Config ....
  // const pieColors = [
  //   colors?.aqua,
  //   colors?.teal,
  //   colors?.gray,
  //   colors?.cream_pink,
  // ];
  const [progress, setProgress] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [openInputAlert, setOpenInputAlert] = useState<boolean>(false);
  const handleOnAccept = () => {
    setOpenInputAlert(!openInputAlert);
  };

  const handleOnCancel = () => {
    setOpenInputAlert(!openInputAlert);
  };
  return (
    <InnerLayer>
      <div>
        {/* <ChartBar
          chartLabel={barChartLabel}
          data={barData}
          barGap={1}
          barWidth={20}
        /> */}
        {/* //       <ChartLine
          chartLabel={lineChartLabel}
          chartPadding={3}
          width={300}
          height={200}
          data={data}
          lineColor={lineColor}
          lineDotsColor={lineColor}
          dotsRadius={4}
          lineWidth={2}
          dotsbgColor={colors?.aqua}
          chartBorderRadius={2}
          chartBorderWidth={1}
        /> */}
        {/* //       <ChartPie
          data={data}
          chartLabel={lineChartLabel}
          pieColors={pieColors}
          pieXaxis={"14vw"}
          pieYaxis={"10vh"}
        /> */}
        {/* <C_Switch label="Venux" color={colors?.green} /> */}

        <C_CircularProgress value={progress} color={colorscheme.red} />
        <C_LinerProgress value={progress} color={colorscheme.info} />
        <C_Button
          label="Input Alert"
          variant={"outlined"}
          size={"medium"}
          onClick={setOpenInputAlert}
        />
        {openInputAlert && (
          <C_AlertInput
            title="Agree to Test Venux HRM ?"
            textFieldLabel="Email Address"
            value={openInputAlert}
            setValue={setOpenInputAlert}
            onAccept={handleOnAccept}
            onCancel={handleOnCancel}
            children={
              <div>
                <DialogContentText id="alert-dialog-description">
                  Let Google help apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running. Google help apps determine location. This means
                  sending anonymous location data to Google, even when no apps
                  are running.
                </DialogContentText>
              </div>
            }
          />
        )}
        {/* <C_Button
          label="Alert Dialog"
          variant={"outlined"}
          size={"medium"}
          onClick={setOpenInputAlert}
        />
        {openInputAlert && (
          <C_Alert
            title="Agree to Test Venux HRM ?"
            value={openInputAlert}
            setValue={setOpenInputAlert}
            onAccept={handleOnAccept}
            onCancel={handleOnCancel}
            children={
              <div>
                <DialogContentText id="alert-dialog-description">
                  Let Google help apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running. Google help apps determine location. This means
                  sending anonymous location data to Google, even when no apps
                  are running.
                </DialogContentText>
              </div>
            }
          />
        )} */}
        {/* <C_Button
          label="Alert"
          variant={"outlined"}
          size={"medium"}
          onClick={setOpen}
        />
        {open && (
          <C_AlertInput
            title="Agree to Test Venux HRM ?"
            textFieldLabel="Email Address"
            value={open}
            setValue={setOpen}
            onAccept={handleOnAccept}
            onCancel={handleOnCancel}
            children={
              <div>
                <DialogContentText id="alert-dialog-description">
                  Let Google help apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running. Google help apps determine location. This means
                  sending anonymous location data to Google, even when no apps
                  are running.
                </DialogContentText>
              </div>
            }
          />
        )} */}
        <C_Loader style={{ padding: 2 }} custom_color={colorscheme.warning} />
        <C_Typography
          text={"Test 1"}
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: fontSizes?.lg,
          }}
        />
        <C_Chip
          variant="filled"
          chipColor={colorscheme.limegreen800}
          avatar={<Avatar>Ev</Avatar>}
          suffixIcon={
            <EmailRoundedIcon style={{ color: colorscheme.primary }} />
          }
          onDelete={() => console.log("Delete")}
        />
        <C_Chip
          label={"From Last month"}
          variant="outlined"
          chipColor={colorscheme.primary}
          avatar={<Avatar>Ev</Avatar>}
          suffixIcon={
            <EmailRoundedIcon style={{ color: colorscheme.secondary }} />
          }
          onDelete={() => console.log("Delete")}
        />

        <UserInfoTable
          rows={row}
          columns={column}
          tableTitle="Atef's Information"
        />
      </div>
    </InnerLayer>
  );
};
export default PresetPage;
