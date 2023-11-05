import { Button, SxProps, Theme } from "@mui/material";
import C_Typography from "./C_Typography";
import { fonts } from "../../constants/fonts";
import { fontSizes } from "../../constants/sizes";
import useColorScheme from "../../hooks/useColorScheme";

interface BtnProps {
  id?: string;
  label: any;
  bgColor?: string;
  fontColor?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: string;
  cornerRadius?: number;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  width?: string | number;
  height?: string;
  variant: "text" | "contained" | "outlined";
  size: "small" | "medium" | "large";
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isDisabled?: boolean;
  ref?: any;
  isHidden?: boolean;
  textTransform?: any;
  style?: SxProps<Theme>;

  onClick?: (value: any) => void;
  onSubmit?: () => void;
}

const C_Button = ({
  id,
  label,
  fontSize = fontSizes.btn,
  fontWeight = 500,
  fontFamily = fonts?.default,
  variant = "contained",
  size = "medium",
  bgColor,
  width = "15%",
  height,
  color,
  cornerRadius,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  isDisabled = false,
  style,
  ref,
  fontColor = useColorScheme().colorscheme.text,
  startIcon,
  endIcon,
  onClick,
  isHidden = false,
  textTransform = "none",
  onSubmit,
}: BtnProps) => {
  const { colorscheme } = useColorScheme();
  return (
    <>
      <Button
        id={id}
        disabled={isDisabled}
        ref={ref}
        hidden={isHidden}
        sx={{
          width: `${width}px`,
          height: height,
          bgcolor: bgColor,
          borderRadius: cornerRadius,
          ml: marginLeft,
          mr: marginRight,
          mt: marginTop,
          mb: marginBottom,
          textTransform: textTransform,
          "&:hover": { bgcolor: bgColor },
          "&.MuiButton-outlined": {
            borderColor: colorscheme.black,
            borderWidth: 1,
          },
          ...style,
        }}
        variant={variant}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
        onSubmit={onSubmit}
        color={color}
      >
        <C_Typography
          text={label}
          // bg_color={fontColor}
          variant="subtitle1"
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          custom_color={fontColor}
        />
      </Button>
    </>
  );
};

export default C_Button;
