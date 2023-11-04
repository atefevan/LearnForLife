import {
  Dialog,
  IconButton,
  InputAdornment,
  TextField,
  SxProps,
  Theme,
} from "@mui/material";
import { useState } from "react";
import { fonts } from "../../constants/fonts";
import useColorScheme from "../../hooks/useColorScheme";
import CloseIcon from "@mui/icons-material/Close";
import C_ImageDragDrop from "./C_ImageDragDrop";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import C_Button from "./C_Button";

interface Props {
  prefixImage?: any;
  name?: string;
  label?: string;
  id?: string;
  // placeHolder?: string;
  type?: string;
  required?: boolean;
  // helperText?: string;
  _disabled?: boolean;
  isError?: boolean;
  fullwidth?: boolean;
  value?: string;
  variant?: "standard" | "outlined" | "filled";
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
  // fieldOnChange: (value: any) => void;
  style?: SxProps<Theme>;
}
const C_ImageTextField = ({
  prefixImage,
  name,
  label = "name",
  id,
  type = "text",
  required = false,
  _disabled,
  isError,
  fullwidth,
  value,
  variant = "outlined",
  font,
  borderColor,
  focused,
  size,
  focuseColor = useColorScheme().colorscheme.text,
  focuseColorUnderline = useColorScheme().colorscheme.text,
  focuseBorderColor = useColorScheme().colorscheme.text,
  fontColor = useColorScheme().colorscheme.text,
  hiddenLabel,
  defaultValue = "Insert Profile Picture",
  style,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const { colorscheme } = useColorScheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <TextField
          fullWidth={fullwidth}
          hiddenLabel={hiddenLabel}
          focused={focused}
          size={size}
          defaultValue={defaultValue}
          name={name}
          id={id}
          label={label}
          type={type}
          variant={variant}
          required={required ? required : false}
          onClick={handleClickOpen}
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
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <img src={prefixImage} height={"35px"} width={"auto"} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={{ color: colorscheme.text }}>
                <LibraryAddIcon sx={{ color: colorscheme.text }} />
              </InputAdornment>
            ),
            style: {
              fontFamily: font,
              color: fontColor,
            },
          }}
        />
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          sx={{ width: "100vw", height: "100vh" }}
        >
          <div
            onClick={handleClose}
            style={{ display: "flex", padding: "5px", alignSelf: "flex-end" }}
          >
            <IconButton aria-label="delete" size="small">
              <CloseIcon fontSize="small" sx={{ color: "black" }} />
            </IconButton>
          </div>
          <C_ImageDragDrop width={"550px"} height={"auto"} />
          <C_Button
            label={"Upload"}
            onClick={handleClose}
            variant={"contained"}
            size={"small"}
            style={{ margin: 1, alignSelf: "center" }}
            width={"100px"}
          />
          {/* <DialogActions>
            
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>
    </>
  );
};

export default C_ImageTextField;
