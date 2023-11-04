import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
  Theme,
} from "@mui/material";
import useColorScheme from "../../hooks/useColorScheme";
interface Props {
  label?: string;
  key?: string;
  style?: SxProps<Theme>;
  id?: string;
  items?: any[];
  defaultValue?: any;
  isRequired?: boolean;
  isError?: boolean;
  isDisabled?: boolean;
  errorHelperText?: string;
  size?: "small" | "medium";
  variant?: "filled" | "standard" | "outlined";
  onClick?: () => void;
  onChange?: (e: any) => void;
  value?: string;
  placeHolder?: string;
  name?: string;
}

const C_Select = ({
  label,
  key,
  items,
  id,
  defaultValue,
  isError,
  isRequired,
  style,
  size,
  variant,
  errorHelperText,
  isDisabled,
  placeHolder,
  onClick,
  value,
  name,
  onChange,
}: Props) => {
  const { colorscheme } = useColorScheme();
  return (
    <Box sx={{ ...style }}>
      <FormControl
        fullWidth
        error={isError}
        size={size}
        required={isRequired}
        variant={variant}
        disabled={isDisabled}
        sx={{
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderColor: "blue",
          },
        }}
      >
        <InputLabel
          id={id}
          sx={{
            color: colorscheme.text,
            "&.Mui-focused": {
              color: colorscheme.text,
            },
          }}
        >
          {label}
        </InputLabel>
        <Select
          key={key}
          labelId={id}
          id={id}
          value={value}
          name={name}
          color="secondary"
          label={label}
          placeholder={placeHolder}
          defaultValue={defaultValue}
          autoWidth={false}
          onChange={onChange}
          onClick={onClick}
          sx={{
            color: colorscheme.text,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: colorscheme.text,
            },
            "& .MuiSvgIcon-root": {
              color: colorscheme.text,
            },
            "&:hover": {
              "&& fieldset": {
                border: `2px solid ${colorscheme.text}`,
              },
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: colorscheme.text,
            },
            "& .MuiInputLabel-outlined .MuiOutlinedInput-notchedOutline": {
              color: colorscheme.text,
            },
            ...style,
          }}
        >
          {items?.map((e) => (
            <MenuItem value={e}>{e}</MenuItem>
          ))}
        </Select>
        {isError ? <FormHelperText>{errorHelperText}</FormHelperText> : null}
      </FormControl>
    </Box>
  );
};

export default C_Select;
