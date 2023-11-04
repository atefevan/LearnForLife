import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  SxProps,
  Theme,
} from "@mui/material";
import C_Button from "./C_Button";
import React, { useState } from "react";
interface Props {
  title?: string;
  children?: React.ReactNode;
  onCancel?: () => void;
  onAccept?: () => void;
  setValue?: (value: any) => void;
  value?: any;
  style?: SxProps<Theme>;
}
const C_AlertDialog = ({
  title,
  value,
  children,
  onAccept,
  onCancel,
  style,
  setValue,
}: Props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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

export default C_AlertDialog;
