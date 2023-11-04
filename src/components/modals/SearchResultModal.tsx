import { Dialog } from "@mui/material";
import * as React from "react";
// import ModalWrapper, { ModalProps } from "../ModalWrapper";

interface Props {
  visible?:any;
  state: any;
  setState?: React.Dispatch<React.SetStateAction<any>>;
}

const SearchResultModal: React.FC<Props> = ({
  state,
  setState,
  visible,
  // width,
}) => {
  return (
    // <ModalWrapper visible={visible} width={width} axis={"39vw"}>
    <Dialog open={visible}>
    <div>
      {state.split("").map((item: any) => (
        <div
          style={{
            marginBlock: 2,
            borderBottomColor: "grey",
            borderBottomWidth: 1,
          }}
          onClick={() => alert(`Pressed ${item}`)}
        >
          <h3>{item}</h3>
        </div>
      ))}
    </div>
    </Dialog>
  );
};

export default SearchResultModal;
