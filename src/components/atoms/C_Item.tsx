import { useContext } from "react";
import useColorScheme from "../../hooks/useColorScheme";
import C_Card from "./C_Card";
import C_Typography from "./C_Typography";
import { SettingsContext } from "../../context/AppSettings";
import CheckIcon from "@mui/icons-material/Check";

interface Props {
  label?: string;
  width?: string;
  bgColor?: string;
  hoverColor?: string;
  focusColor?: string;
  focused?: string;
  minWidth?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  onClick?: () => void;
}
const C_Item = ({
  label,
  maxWidth = "500px",
  minWidth = "205px",
  bgColor = useColorScheme().colorscheme.transparent,
  maxHeight = 50,
  focused,
  onClick,
}: Props) => {
  const { colorscheme } = useColorScheme();
  const { darkMode } = useContext<any>(SettingsContext);
  return (
    <C_Card
      minWidth={minWidth}
      // bg_color={bgColor}
      onClick={onClick}
      borderColor={darkMode === "light" ? colorscheme.black : colorscheme.white}
      maxHeight={maxHeight}
      border={1}
      borderWidth={1}
      maxWidth={maxWidth}
      borderRadius={20}
      style={{
        ":hover": {
          backgroundColor:
            darkMode === "light" ? colorscheme.gray100 : "#3E434C",
        },
        margin: 2,
        background:
          focused === label
            ? darkMode === "light"
              ? colorscheme.silver500
              : colorscheme.silver800
            : bgColor,
      }}
    >
      <div
        style={{
          borderRadius: 15,
          textAlign: "center",
          color: "white",
          margin: 10,
        }}
      >
        {focused === label ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <CheckIcon sx={{ height: "20px", color: colorscheme.text }} />
            <C_Typography text={label} variant="subtitle2" />
          </div>
        ) : (
          <C_Typography text={label} variant="subtitle2" />
        )}
      </div>
    </C_Card>
  );
};
export default C_Item;
