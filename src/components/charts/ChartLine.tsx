import {
  LineChart,
  Line,
  XAxis,
  // YAxis,ß
  // CartesianGrid,
  Tooltip,
  LabelList,
  // Legend,
} from "recharts";
import C_Typography from "../atoms/C_Typography";
import { Box } from "@mui/material";
import { fonts } from "../../constants/fonts";
import { fontSizes } from "../../constants/sizes";
import useColorScheme from "../../hooks/useColorScheme";
interface Props {
  width?: number;
  chartPadding?: string | number;
  height?: number;
  data: any;
  dataStyles?: {};
  lineColor?: string;
  dotsRadius?: number;
  dotsbgColor?: string;
  lineDotsColor?: string;
  chartLabel?: any;
  barHoverColor?: string;
  lineWidth?: number;
  chartBorderRadius?: number;
  chartBorderWidth?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
}
const ChartLine = ({
  height = 200,
  width = 300,
  dotsRadius = 4,
  dotsbgColor,
  lineDotsColor = useColorScheme().colorscheme.pink500,
  data,
  lineColor,
  chartPadding = "20px",
  lineWidth = 1,
  chartLabel,
  chartBorderRadius = 1,
  chartBorderWidth = 1,
  ml = 20,
  mr = 20,
  mt = 20,
  mb = 5,
}: Props) => {
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
        <LineChart
          width={width}
          height={height}
          data={data}
          margin={{
            right: mr,
            left: ml,
            bottom: mb,
            top: mt,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          {/* <YAxis dataKey="value" /> */}
          <Tooltip
            cursor={false}
            labelStyle={{
              fontFamily: fonts?.default,
              fontSize: fontSizes?.xs,
            }}
            itemStyle={{
              fontFamily: fonts?.default,
              fontSize: fontSizes?.xs,
              color: colorscheme.black,
            }}
          />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="value"
            stroke={lineColor}
            activeDot={{ r: dotsRadius }}
            dot={{
              stroke: lineDotsColor,
              strokeWidth: lineWidth,
              r: dotsRadius,
              color: dotsbgColor,
            }}
          >
            <LabelList
              dataKey="value"
              position="top"
              style={{
                fontSize: fontSizes?.xs,
                fontFamily: fonts?.default,
              }}
            />
          </Line>
        </LineChart>
      </Box>
    </>
  );
};

export default ChartLine;
