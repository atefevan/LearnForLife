import { CircularProgress, SxProps, Theme } from "@mui/material";
interface Props {
  color?:
    | "success"
    | "error"
    | "info"
    | "inherit"
    | "primary"
    | "secondary"
    | "warning";
  custom_color?: string;
  size?: number | string;
  style?: SxProps<Theme>;
}
const C_Loader = ({
  color = "inherit",
  custom_color,
  size = 40,
  style,
}: Props) => {
  return (
    <div style={{ display: "flex", color: custom_color }}>
      <CircularProgress color={color} sx={{ ...style }} size={size} />
    </div>
  );
};

export default C_Loader;
