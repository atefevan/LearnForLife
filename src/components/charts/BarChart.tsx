import {
  Bar,
  BarChart,
  Cell,
  // Legend,
  Tooltip,
  XAxis,
  // CartesianGrid,
  LabelList,
} from "recharts";
import { Box } from "@mui/material";
import C_Typography from "../atoms/C_Typography";
import { fonts } from "../../constants/fonts";
import { fontSizes } from "../../constants/sizes";
import { useState } from "react";
import useColorScheme from "../../hooks/useColorScheme";
interface Props {
  width?: number;
  chartPadding?: string | number;
  height?: number;
  barGap?: number;
  data: any;
  barColors?: any;
  barhoverColor?: string;
  chartLabel?: any;
  barHoverColor?: string;
  barWidth?: number;
  chartBorderRadius?: number;
  chartBorderWidth?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
}
const ChartBar = ({
  height = 200,
  barhoverColor = useColorScheme().colorscheme.black,
  width = 300,
  barGap,
  data = [
    {
      label: "A",
      value: 4000,
    },
    {
      label: "B",
      value: 3000,
    },
  ],
  barColors = [
    useColorScheme().colorscheme.skyblue500,
    useColorScheme().colorscheme.green,
    useColorScheme().colorscheme.gray,
    useColorScheme().colorscheme.red,
    useColorScheme().colorscheme.skyblue500,
    useColorScheme().colorscheme.green,
    useColorScheme().colorscheme.gray,
    useColorScheme().colorscheme.red,
    useColorScheme().colorscheme.skyblue500,
    useColorScheme().colorscheme.green,
    useColorScheme().colorscheme.gray,
    useColorScheme().colorscheme.red,
    useColorScheme().colorscheme.skyblue500,
    useColorScheme().colorscheme.green,
    useColorScheme().colorscheme.gray,
    useColorScheme().colorscheme.red,
  ],
  chartPadding = "1vw",
  barWidth = 1,
  chartLabel,
  chartBorderRadius = 1,
  chartBorderWidth = 1,
  ml,
  mr,
  mt,
  mb,
}: Props) => {
  const [focusBar, setFocusBar] = useState<any>();
  const [mouseLeave, setMouseLeave] = useState(true);
  const { colorscheme } = useColorScheme();
  return (
    <>
      <Box
        sx={{
          width: width,
          border: 1,
          borderColor: colorscheme.black,
          borderWidth: chartBorderWidth,
          p: chartPadding,
          borderRadius: chartBorderRadius,
        }}
      >
        <C_Typography text={chartLabel} />
        <BarChart
          width={width}
          height={height}
          data={data}
          barSize={barWidth}
          barGap={barGap}
          margin={{
            right: mr,
            left: ml,
            bottom: mb,
            top: mb,
          }}
          onMouseMove={(state) => {
            if (state.isTooltipActive) {
              setFocusBar(state.activeTooltipIndex);
              setMouseLeave(false);
            } else {
              setFocusBar(null);
              setMouseLeave(true);
            }
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="label"
            axisLine={{ stroke: "black" }}
            style={{
              fontSize: fontSizes?.xs,
              fontFamily: fonts?.default,
            }}
          />
          {/* <YAxis /> */}
          <Tooltip
            cursor={false}
            labelStyle={{
              fontFamily: fonts?.default,
              fontSize: fontSizes?.xs,
            }}
            itemStyle={{
              fontFamily: fonts?.default,
              fontSize: fontSizes?.xs,
            }}
          />
          <Bar dataKey={"value"}>
            {data.map((e: any, index: any) => (
              <Cell
                key={`cell-${index + 1}`}
                fill={
                  focusBar === index ? barhoverColor : `${barColors[index]}`
                }
              />
            ))}
            <LabelList
              dataKey="value"
              position="top"
              style={{
                fontSize: fontSizes?.xs,
                fontFamily: fonts?.default,
              }}
            />
          </Bar>
        </BarChart>
      </Box>
    </>
  );
};

export default ChartBar;
