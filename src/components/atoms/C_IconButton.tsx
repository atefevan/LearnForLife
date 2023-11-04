import { IconButton, SxProps, Theme } from "@mui/material";
import useColorScheme from "../../hooks/useColorScheme";
import { ReactElement } from "react";
interface Props {
  muiIcon: ReactElement<any, any>;
  hoverColor?: any;
  height?: string | number;
  bgColor?: string;
  style?: SxProps<Theme>;
  onClick?: () => void;
}
const C_IconButton = ({
  muiIcon,
  height = "40px",
  hoverColor = useColorScheme().colorscheme.gray500,
  bgColor = useColorScheme().colorscheme.gray100,
  style,
  onClick,
}: Props) => {
  return (
    <>
      <IconButton
        sx={{
          bgcolor: bgColor,
          height: height,
          "&:hover, &.Mui-focusVisible": {
            backgroundColor: hoverColor,
          },
          ...style,
        }}
        onClick={onClick}
      >
        {muiIcon}
      </IconButton>
    </>
  );
};

export default C_IconButton;
