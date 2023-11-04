import { SxProps, Theme, Typography } from "@mui/material";
import { fonts } from "../../constants/fonts";
import { space } from "../../constants/sizes";
import useColorScheme from "../../hooks/useColorScheme";

interface Props {
  text: any;
  component?: any;
  opacity?: number;
  custom_color?: string;
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  fontFamily?: string;
  fontWeight?: string | number;
  fontSize?: string | number;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  lineHeight?: string | number;
  bg_color?: string;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  paddingAll?: string | number;
  alignSelf?:string;
  style?: SxProps<Theme>;
}

const C_Typography = ({
  text,
  component,
  variant = "subtitle1",
  fontFamily = fonts.default,
  fontWeight,
  opacity,
  fontSize,
  custom_color = useColorScheme().colorscheme.text,
  align,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  paddingAll,
  lineHeight = space.xs,
  bg_color,
  alignSelf,
  style,
}: Props) => {
  return (
    <>
      <Typography
        variant={variant}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        fontSize={fontSize}
        lineHeight={lineHeight}
        color={custom_color}
        align={align}
        bgcolor={bg_color}
        alignSelf={alignSelf}
        component={component}
        
        sx={{
          mt: { marginTop },
          mb: { marginBottom },
          ml: { marginLeft },
          mr: { marginRight },
          p: { paddingAll },
          opacity: opacity,
          ...style,
        }}
      >
        {text}
      </Typography>
    </>
  );
};

export default C_Typography;
