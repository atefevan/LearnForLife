import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  SxProps,
  TextField,
  Theme,
} from "@mui/material";
import { useState } from "react";
import { fonts } from "../../constants/fonts";
import useColorScheme from "../../hooks/useColorScheme";
import C_Typography from "./C_Typography";
import { fontSizes } from "../../constants/sizes";

interface Props {
  prefixIcon?: any;
  name?: string;
  prefixText?: string;
  icon_color?: string;
  suffixIcon?: React.ReactNode;
  suffixText?: string;
  label?: string;
  id?: string;
  placeHolder?: string;
  type?: string;
  required?: boolean;
  helperText?: string;
  _disabled?: boolean;
  isError?: boolean;
  fullwidth?: boolean;
  value?: string | number;
  variant?: "standard" | "outlined" | "filled";
  style?: SxProps<Theme>;
  font?: string;
  borderColor?:
    | "error"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning";
  hiddenLabel?: boolean;
  focused?: boolean;
  size?: "small" | "medium";
  focuseColor?: string;
  focuseColorUnderline?: string;
  focuseBorderColor?: string;
  fontColor?: string;
  defaultValue?: string | number;
  fieldOnChange: (value: any) => void;
  validator?: any;
}

const C_TextField = ({
  label,
  id,
  name,
  variant,
  required = false,
  isError,
  _disabled,
  type = "text",
  helperText,
  prefixIcon,
  prefixText,
  value,
  suffixText,
  suffixIcon,
  placeHolder,
  style,
  focused,
  borderColor,
  font = fonts.default,
  fieldOnChange,
  fullwidth,
  hiddenLabel,
  defaultValue,
  focuseColor = useColorScheme().colorscheme.text,
  focuseColorUnderline = useColorScheme().colorscheme.text,
  fontColor = useColorScheme().colorscheme.text,
  focuseBorderColor = useColorScheme().colorscheme.text,
  size,
  validator,
}: Props) => {
  const [showPassword, setShowPassword] = useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const { colorscheme } = useColorScheme();
  return (
    <>
      <TextField
        fullWidth={fullwidth}
        hiddenLabel={hiddenLabel}
        focused={focused}
        size={size}
        defaultValue={defaultValue}
        name={name}
        sx={{
          // color:"white",
          "& label.Mui-focused": {
            color: focuseColor,
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: focuseColorUnderline,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: focuseBorderColor,
            },
            "&:hover fieldset": {
              borderColor: focuseBorderColor,
            },
            "&.Mui-focused fieldset": {
              borderColor: focuseBorderColor,
            },
          },
          ".MuiInputLabel-root": {
            color: focuseColor,
          },
          ...style,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ color: colorscheme.text }}>
              {prefixText ? prefixText : prefixIcon ? prefixIcon : null}
            </InputAdornment>
          ),

          endAdornment: (
            <InputAdornment position="end" sx={{ color: colorscheme.text }}>
              {suffixText ? suffixText : suffixIcon ? suffixIcon : null}
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                edge="end"
                sx={{ color: colorscheme.text }}
              >
                {type === "password" ? (
                  showPassword ? (
                    <VisibilityOff sx={{ color: colorscheme.text }} />
                  ) : (
                    <Visibility sx={{ color: colorscheme.text }} />
                  )
                ) : null}
              </IconButton>
            </InputAdornment>
          ),
          style: {
            fontFamily: font,
            color: fontColor,
          },
        }}
        id={id}
        label={label}
        value={value}
        type={showPassword ? type : "text"}
        placeholder={placeHolder}
        disabled={_disabled}
        error={validator?.condition}
        color={borderColor}
        variant={variant}
        required={required ? required : false}
        onChange={fieldOnChange}
        helperText={
          <C_Typography
            text={validator?.message}
            custom_color={colorscheme.red500}
            fontSize={fontSizes.xs}
          />
        }
      />
    </>
  );
};

export default C_TextField;
