import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import { fonts } from "../../constants/fonts";
import { fontSizes } from "../../constants/sizes";
import { Box } from "@mui/material";
import C_Typography from "../atoms/C_Typography";
import useColorScheme from "../../hooks/useColorScheme";
interface Props {
  pieWidth?: number;
  pieHeight?: number;
  chartWidth?: number;
  chartHeight?: number;
  chartPadding?: string | number;
  data: any;
  pieXaxis: string;
  pieYaxis: string;
  pieColors?: any;
  piehoverColor?: string;
  chartLabel?: any;
  chartLabelAlign?: any;
  chartLabelMarginTop?: number | string;
  chartLabelMarginBottom?: number | string;
  chartLabelMarginLeft?: number | string;
  chartLabelMarginRight?: number | string;
  chartBorderRadius?: number;
  pieRadius?: string | number;
  chartBorderWidth?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
}
const pieDefaultColor: string = "#8884d8";
let pieData: any;
let total;
const RADIAN = Math.PI / 180;
const renderCustomTooltip = ({ active, payload }: any) => {
  const { colorscheme } = useColorScheme();
  if (active) {
    total = pieData.reduce((sum: any, entry: any) => sum + entry.value, 0);
    const percentage = ((payload[0].value / total) * 100).toFixed(2) + "%";
    return (
      <Box
        sx={{
          backgroundColor: colorscheme.white,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          p: 1,
          border: 1,
          borderColor: "black",
        }}
      >
        <p style={{ color: colorscheme.black, margin: 0 }}>{payload[0].name}</p>
        <p style={{ color: colorscheme.black, margin: 0 }}>{percentage}</p>
      </Box>
    );
  }
  return null;
};
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const { colorscheme } = useColorScheme();

  return (
    <text
      x={x}
      y={y}
      fill={colorscheme.white}
      textAnchor="start"
      fontSize={10}
      fontFamily={fonts.default}
    >
      {/* {`${data[index].name} ${(percent * 100).toFixed(0)}%`} */}
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function ChartPie({
  pieWidth = 300,
  chartPadding,
  pieHeight = 210,
  data,
  pieColors,
  pieXaxis = "14vw",
  pieYaxis = "10vh",
  piehoverColor,
  chartLabel,
  pieRadius = "90",
  chartLabelAlign,
  chartLabelMarginTop = "2vh",
  chartLabelMarginBottom,
  chartLabelMarginLeft = "2vw",
  chartLabelMarginRight,
  chartBorderRadius = 2,
  chartBorderWidth,
  ml,
  mr,
  mt,
  mb,
}: Props) {
  pieData = data;
  return (
    <Box
      sx={{
        width: "20vw",
        alignSelf: "center",
        border: 1,
        height: "30vh",
        borderWidth: 1,
        borderRadius: chartBorderRadius,
        borderColor: "black",
      }}
    >
      <C_Typography
        text={chartLabel}
        align={chartLabelAlign}
        marginTop={chartLabelMarginTop}
        marginLeft={chartLabelMarginLeft}
      />
      <PieChart
        width={pieWidth}
        height={pieHeight}
        margin={{
          top: mt,
          bottom: mb,
          left: ml,
          right: mr,
        }}
      >
        <Legend layout="vertical" verticalAlign="middle" align="right" />
        <Pie
          data={data}
          cx={pieXaxis}
          cy={pieYaxis}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={pieRadius}
          fill={pieDefaultColor}
          dataKey="value"
        >
          {data.map((e: any, index: number) => (
            <Cell
              key={`cell-${index}${e}`}
              fill={pieColors[index % pieColors.length]}
              style={{ outline: "none" }}
            />
          ))}
        </Pie>
        <Tooltip content={renderCustomTooltip} />
      </PieChart>
    </Box>
  );
}
