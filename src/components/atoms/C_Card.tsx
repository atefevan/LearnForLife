import { Card, SxProps, Theme } from "@mui/material";

interface Props {
  height?: number | string;
  width?: number | string;
  elevation?: number;
  border?: number | string;
  borderColor?: string;
  borderRadius?: number | string;
  borderWidth?: number;
  variant?: "elevation" | "outlined";
  bg_color?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  maxHeight?: string | number;
  minHeight?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  style?: SxProps<Theme>;
}

const C_Card = ({
  height,
  width,
  elevation,
  border,
  borderColor,
  borderWidth,
  borderRadius,
  variant,
  bg_color = "transparent",
  style,
  children,
  onClick,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth,
}: Props) => {
  return (
    <Card
      sx={{
        height: height,
        width: width,
        bgcolor: bg_color,
        borderRadius: { borderRadius },
        border: border,
        borderColor: borderColor,
        borderWidth: borderWidth,
        maxHeight: maxHeight,
        minHeight: minHeight,
        minWidth: minWidth,
        maxWidth:maxWidth,
        
        ...style,
      }}
      elevation={elevation}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Card>
  );
};

export default C_Card;
