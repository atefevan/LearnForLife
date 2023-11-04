import useColorScheme from "../hooks/useColorScheme";
import C_Button from "./atoms/C_Button";
import CheckIcon from "@mui/icons-material/Check"; // Save
import SaveAltIcon from "@mui/icons-material/SaveAlt"; // Update
import DeleteIcon from "@mui/icons-material/Delete"; // Delete
import CachedIcon from "@mui/icons-material/Cached"; // Reload
import BackHandIcon from "@mui/icons-material/BackHand"; // Attendance
import AttachFileIcon from "@mui/icons-material/AttachFile"; // Attachment
const CRUDStates = () => {
  const { colorscheme } = useColorScheme();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // backgroundColor: "yellowgreen",
      }}
    >
      <div style={{ display: "flex", flex: 3 }}>
        <div
          style={{
            display: "flex",
            marginLeft: "50px",
            width: "35vw",
            justifyContent: "space-evenly",
          }}
        >
          <C_Button
            label={"Save"}
            width={"75px"}
            variant={"contained"}
            bgColor={colorscheme.pink}
            size={"medium"}
            endIcon={<CheckIcon sx={{ color: colorscheme.text }} />}
          />
          <C_Button
            label={"Update"}
            width={"90px"}
            variant={"contained"}
            bgColor={colorscheme.pink}
            size={"medium"}
            endIcon={<SaveAltIcon sx={{ color: colorscheme.text }} />}
          />
          <C_Button
            label={"Delete"}
            width={"90px"}
            variant={"contained"}
            bgColor={colorscheme.pink}
            size={"medium"}
            endIcon={<DeleteIcon sx={{ color: colorscheme.text }} />}
          />
          <C_Button
            label={"Refresh"}
            width={"90px"}
            variant={"contained"}
            bgColor={colorscheme.pink}
            size={"medium"}
            endIcon={<CachedIcon sx={{ color: colorscheme.text }} />}
          />
        </div>
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <div
          style={{
            display: "flex",
            marginRight: "50px",
            width: "15vw",
            justifyContent: "space-between",
          }}
        >
          <C_Button
            label={"Attendance"}
            width={"100px"}
            variant={"contained"}
            bgColor={colorscheme.pink}
            size={"medium"}
            endIcon={<BackHandIcon sx={{ color: colorscheme.text }} />}
          />
          <C_Button
            label={"Attachment"}
            width={"100px"}
            variant={"contained"}
            bgColor={colorscheme.pink}
            size={"medium"}
            endIcon={<AttachFileIcon sx={{ color: colorscheme.text }} />}
          />
        </div>
      </div>
    </div>
  );
};

export default CRUDStates;
