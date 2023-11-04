import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import {
  LinearProgress,
  LinearProgressProps,
  SxProps,
  Theme,
} from "@mui/material";
import C_Typography from "./C_Typography";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        {...props}
        size={60}
        sx={{
          circle: {
            strokeLinecap: "round",
          },
          // opacity:0.5,
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <C_Typography text={`${Math.round(props.value)}%`} variant="caption" />
      </Box>
    </Box>
  );
}
interface Props {
  value?: any;
  color?: string;
  size?: number | string;
  thickNess?: number;
  style?: SxProps<Theme>;
}
export default function C_CircularProgress({
  value,
  color,
  size,
  thickNess,
  style,
}: Props) {
  return (
    <div style={{ color: color }}>
      <CircularProgressWithLabel
        value={value}
        color={"inherit"}
        sx={{ ...style }}
        size={size}
        thickness={thickNess}
      />
    </div>
  );
}
function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{ height: 10, borderRadius: 5 }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <C_Typography text={`${Math.round(props.value)}%`} />
      </Box>
    </Box>
  );
}
export function C_LinerProgress({ value, color, style }: Props) {
  return (
    <div style={{ color: color }}>
      <LinearProgressWithLabel
        value={value}
        color={"inherit"}
        sx={{ opacity: 10.5 }}
      />
    </div>
  );
}
