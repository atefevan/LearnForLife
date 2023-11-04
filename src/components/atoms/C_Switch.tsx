import { FormControlLabel, Switch, SxProps, Theme } from "@mui/material";
import C_Typography from "./C_Typography";
import useColorScheme from "../../hooks/useColorScheme";

interface Props {
  id?: string;
  name?: string;
  label?: string;
  labelAlign?: "top" | "bottom" | "end" | "start";
  color?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  labelFontSize?: string | number;
  isChecked?: boolean;
  // uncheckedIcon?: React.ReactNode;
  // checkedIcon?: React.ReactNode;
  size?: "small" | "medium";
  mode?: string;
  style?: SxProps<Theme>;
  onChange?: (e: any) => void;
}

const C_Switch = ({
  id,
  name,
  label,
  color = "primary",
  size,
  isDisabled,
  isRequired,
  isChecked,
  // checkedIcon,
  // uncheckedIcon,
  labelAlign,
  labelFontSize,
  onChange,
  style,
}: Props) => {
  const { colorscheme } = useColorScheme();
  return (
    <>
      <FormControlLabel
        control={
          <Switch
            id={id}
            name={name}
            defaultChecked
            size={size}
            required={isRequired}
            disabled={isDisabled}
            checked={isChecked}
            // icon={uncheckedIcon}
            // checkedIcon={checkedIcon}
            onChange={onChange}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: color,
                "&:hover": {
                  backgroundColor: colorscheme.transparent,
                },
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: color,
              },
              ...style,
            }}
          />
        }
        label={<C_Typography text={label} fontSize={labelFontSize} />}
        labelPlacement={labelAlign}
      />
    </>
  );
};

export default C_Switch;
