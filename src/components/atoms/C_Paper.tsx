import { Paper, SxProps, Theme } from "@mui/material";
import useColorScheme from "../../hooks/useColorScheme";
interface Props {
  height?: string;
  width?: string;
  paperColor?: string;
  cornerRadius?: boolean;
  allRadius?: string;
  shadow?: number;
  children?: React.JSX.Element[] | React.ReactNode;
  display?:
    | "block"
    | "inline-block"
    | "none"
    | "flex"
    | "grid"
    | "absolute"
    | "relative"
    | "flow-root"
    | "inline-grid";

  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: string;
  style?: SxProps<Theme>;
}

const Bg_Paper = ({
  children,
  height,
  width,
  paperColor,
  cornerRadius,
  shadow,
  allRadius,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  style,
}: Props) => {
  const { colorscheme } = useColorScheme();
  return (
    <Paper
      sx={{
        height: height ? height : "10vh",
        width: width ? width : "10vh",
        display: display ? display : "flex",
        flexDirection: flexDirection ? flexDirection : "column",
        justifyContent: justifyContent ? justifyContent : "center",
        alignItems: alignItems ? alignItems : "center",
        bgcolor: paperColor ? paperColor : colorscheme.beige100,
        borderRadius: cornerRadius ? allRadius : "5px",
        ...style,
      }}
      elevation={shadow ? shadow : 3}
    >
      {children}
    </Paper>
  );
};

export default Bg_Paper;
