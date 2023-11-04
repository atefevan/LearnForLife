import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import useColorScheme from "../../hooks/useColorScheme";
import { SxProps, Theme } from "@mui/material";
import { enqueueSnackbar } from "notistack";

interface Props {
  dateFormat?: string;
  id?: string;
  label?: string;
  errorLabel?: string;
  value?: string;
  // setValue?: (e: any) => void;
  onChange?: (e: any) => void;
  disabled?: boolean;
  style?: SxProps<Theme>;
}
const C_DatePicker = ({
  dateFormat = "DD/MM/YYYY",
  id,
  label = "sample date",
  value,
  onChange,
  disabled = false,
  errorLabel,
  style,
}: Props) => {
  const { colorscheme } = useColorScheme();
  // const [value, setValue] = useState<any>(dayjs());

  // console.log(dayjs(value).format("MMM DD, YYYY"));

  return (
    <div
      id={id}
      onClick={() =>
        disabled
          ? enqueueSnackbar(errorLabel, {
              variant: "error",
            })
          : console.log("success")
      }
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disabled={disabled}
          format={dateFormat}
          label={label}
          value={value}
          // onChange={(event) => setValue(event["$d"])}
          onChange={onChange}
          closeOnSelect
          sx={{
            svg: { color: colorscheme.text },
            input: { color: colorscheme.text },
            label: { color: colorscheme.text },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: colorscheme.text,
              },
              "&:hover fieldset": {
                borderColor: colorscheme.text,
              },
              "&.Mui-focused fieldset": {
                borderColor: colorscheme.text,
              },
            },
            "& label.Mui-focused": {
              color: colorscheme.text,
            },
            ...style,
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default C_DatePicker;
