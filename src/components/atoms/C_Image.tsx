import { Theme } from "@emotion/react";
import { SxProps, styled } from "@mui/material";
const StyledImg = styled("img")({});
interface Props {
  label?: string;
  width?: string;
  height?: string;
  imgPath: string;
  border?: number;
  borderRadius?: string | number;
  borderColor?: string;
  style?: SxProps<Theme>;
}
const C_Image = ({
  label = "Image Not Found !",
  width = "50%",
  height = "50%",
  imgPath,
  style,
  border,
  borderColor,
  borderRadius,
}: Props) => {
  return (
    <StyledImg
      src={imgPath}
      alt={label}
      sx={{
        width: width,
        height: height,
        border: border,
        borderRadius: borderRadius,
        borderColor: borderColor,
        ...style,
      }}
    />
  );
};

export default C_Image;
