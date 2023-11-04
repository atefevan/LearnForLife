import { Box, SxProps, Theme } from "@mui/material";
import useColorScheme from "../hooks/useColorScheme";

interface Props {
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
  bgColor?: string;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  display?: string;
  padding?: number;
  children?: React.JSX.Element[] | React.ReactNode;
  styles?: SxProps<Theme>;
}
const Background = ({
  padding,
  position,
  bgColor,
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
  display,
  children,
  styles,
}: Props) => {
  const {colorscheme}= useColorScheme();
  return (
    <Box
      sx={{
        bgcolor: bgColor ? bgColor : colorscheme.beige,
        position: position ? position : "absolute",
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        display: display ? display : "flex",
        p: padding ? padding : 0,
        ...styles,
      }}
    >
      {children}
    </Box>
  );
};

export default Background;
