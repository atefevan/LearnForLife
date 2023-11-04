import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import C_Button from "./C_Button";
interface Props {
  title?: string;
  component?: any;
  children?: React.ReactNode;
  onCancel?: () => void;
  onAccept?: () => void;
  setValue?: (value: any) => void;
  value?: any;
}
const C_Alert = ({
  title,
  value,
  component,
  children,
  onAccept,
  onCancel,
  setValue,
}: Props) => {
  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  return (
    <>
      <div>
        <Dialog
          open={value}
          onClose={onCancel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          component={component}
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>{children}</DialogContent>
          <DialogActions>
            <C_Button
              label="Disagree"
              variant="text"
              size="medium"
              onClick={onCancel}
            />
            <C_Button
              label="Agree"
              variant="text"
              size="medium"
              onClick={onAccept}
            />
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default C_Alert;
