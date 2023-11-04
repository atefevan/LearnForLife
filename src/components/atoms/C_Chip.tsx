import { Chip } from "@mui/material";
import useColorScheme from "../../hooks/useColorScheme";
import { ReactElement } from "react";
import C_Typography from "./C_Typography";
interface Props {
  label?: string | number;
  variant?: "filled" | "outlined";
  size?: "small" | "medium";
  chipColor?: string;
  isClickable?: boolean;
  prefixIcon?: ReactElement<any, any>;
  suffixIcon?: ReactElement<any, string | React.JSXElementConstructor<any>>;
  avatar?: ReactElement<any, string | React.JSXElementConstructor<any>>;
  onClick?: () => void;
  onDelete?: () => void;
}
const C_Chip = ({
  label = "Sample Chip",
  variant = "filled",
  size = "medium",
  isClickable = false,
  onDelete,
  onClick,
  prefixIcon,
  suffixIcon,
  avatar,
  chipColor = useColorScheme().colorscheme.secondary,
}: Props) => {
  const { colorscheme } = useColorScheme();
  return (
    <>
      <Chip
        onDelete={onDelete}
        onClick={onClick}
        clickable={isClickable}
        label={<C_Typography text={label} />}
        variant={variant}
        size={size}
        icon={prefixIcon}
        deleteIcon={suffixIcon}
        avatar={avatar}
        sx={{ color: colorscheme.text, bgcolor: chipColor }}
      />
    </>
  );
};

export default C_Chip;
