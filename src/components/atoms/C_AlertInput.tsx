import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import C_Button from "./C_Button";
import C_TextField from "./C_TextField";
import useColorScheme from "../../hooks/useColorScheme";
import EmailIcon from "@mui/icons-material/Email";
interface Props {
  title?: string;
  textFieldLabel?: string;
  children?: React.ReactNode;
  onCancel?: () => void;
  onAccept?: () => void;
  setValue?: (value: any) => void;
  value?: any;
  textFieldFocusColor?: string;
}
const C_AlertInput = ({
  title,
  textFieldLabel,
  value,
  children,
  onAccept,
  onCancel,
  textFieldFocusColor = useColorScheme().colorscheme.black,
  setValue,
}: Props) => {
  const { colorscheme } = useColorScheme();
  return (
    <>
      <div>
        <Dialog
          open={value}
          onClose={onCancel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            {children}
            <C_TextField
              prefixIcon={<EmailIcon sx={{color:textFieldFocusColor}}/>}
              focuseColor={textFieldFocusColor}
              focuseColorUnderline={textFieldFocusColor}
              fontColor={textFieldFocusColor}
              label={textFieldLabel}
              type={"text"}
              variant="standard"
              style={{
                width: "100%",
                marginTop: 4,
              }}
              isError={false}
              fieldOnChange={(value) => {
                console.log(value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <C_Button
              label="Disagree"
              variant="text"
              size="medium"
              bgColor={colorscheme.error}
              onClick={onCancel}
            />
            <C_Button
              label="Agree"
              variant="text"
              bgColor={colorscheme.success}
              size="medium"
              onClick={onAccept}
            />
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default C_AlertInput;
