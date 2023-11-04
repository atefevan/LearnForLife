import { Checkbox, SxProps, Theme, checkboxClasses } from "@mui/material";
import useColorScheme from "../../hooks/useColorScheme";
interface Props {
  checkedIcon?: React.ReactNode; // any
  uncheckedIcon?: React.ReactNode; // any
  padding?: string | number;
  isChecked?: boolean;
  isRequired?:boolean;
  size?: "small" | "medium";
  customSize?: number;
  custom_color?: string;
  onChange?: (event: any) => void;
  style?: SxProps<Theme>;
}
const C_CheckBox = ({
  size = "medium",
  isRequired = false,
  custom_color = useColorScheme().colorscheme.text,
  customSize,
  checkedIcon,
  uncheckedIcon,
  isChecked = false,
  padding = 0,
  style,

  onChange,
}: Props) => {
  return (
    <>
      <div>
        <Checkbox
          icon={uncheckedIcon}
          checkedIcon={checkedIcon}
          checked={isChecked}
          size={size}
          required={isRequired}
          color="warning"
          onChange={onChange}
          sx={{
            padding: padding,
            "& .MuiSvgIcon-root": { fontSize: customSize },
            [`&.${checkboxClasses.checked}`]: {
              color: custom_color,
            },
            [`&, &.${checkboxClasses.checked}`]: {
              color: custom_color,
            },
            ...style,
          }}
          //   inputProps={{ "aria-label": "controlled" }}
        />
      </div>
    </>
  );
};

export default C_CheckBox;
