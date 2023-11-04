import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import C_Typography from "./atoms/C_Typography";
import { useContext, useState } from "react";
import { SettingsContext } from "../context/AppSettings";
import useColorScheme from "../hooks/useColorScheme";
import C_IconButton from "./atoms/C_IconButton";
import ApartmentIcon from "@mui/icons-material/Apartment";
import C_Image from "./atoms/C_Image";
import logo, { png } from "../assets";
import { fontSizes } from "../constants/sizes";
import SearchBar from "./ExpandableSearchBar";
import { motion } from "framer-motion";
import * as React from "react";
// import ModalWrapper from "./ModalWrapper";
import ProfileModal from "./modals/ProfileModal";

const Header = () => {
  const { darkMode, toggleMode, collapse, setCollapse } =
    useContext<any>(SettingsContext);
  const { colorscheme } = useColorScheme();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSearchResultModal, setShowSearchResultModal] =
    React.useState<boolean>(false);

  const [showProfileModal, setShowProfileModal] =
    React.useState<boolean>(false);

  console.log("Search Query: ", searchQuery);
  return (
    <>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: 10,
          margin: 5,
          justifyContent: "space-between",
          height:"4vh",
          // marginTop:50,
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            alignSelf: collapse ? "center" : "flex-start",
            right: "96.75%",
            top: 23,
          }}
          onClick={() => {
            setCollapse(!collapse);
          }}
          animate={{
            rotate: collapse ? 180 : 0,
            transition: { duration: 0.5 },
          }}
        >
          <C_Image
            imgPath={png.minimize}
            style={{
              alignSelf: "center",
              height: 30,
              width: 30,
            }}
          />
        </motion.div>
        <div
          style={{
            width: "15%",
            display: "flex",
            marginLeft: "1vw",
            minWidth: "130px",
          }}
        >
          <C_Image
            imgPath={logo.logo_venux}
            style={{
              height: 30,
              width: 30,
            }}
          />
          <C_Typography
            text={"Venux"}
            marginLeft={5}
            fontSize={fontSizes.rg}
            custom_color={colorscheme.white}
          />
        </div>
        <SearchBar state={searchQuery} setState={setSearchQuery} />
        <div
          style={{
            width: "25%",
            display: "flex",
            justifyContent: "end",
            minWidth: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "40%",
              justifyContent: "space-between",
              minWidth: "100px",
            }}
          >
            <C_IconButton
              muiIcon={
                darkMode === "dark" ? (
                  <DarkModeOutlinedIcon style={{ color: colorscheme.black }} />
                ) : (
                  <WbSunnyIcon style={{ color: colorscheme.black }} />
                )
              }
              onClick={toggleMode}
              style={{ marginRight: 1 }}
            />
            <C_IconButton
              muiIcon={
                <NotificationsNoneOutlinedIcon
                  style={{ color: colorscheme.black }}
                />
              }
              onClick={() => console.log("notificaiton Clicked")}
              style={{ marginRight: 1 }}
            />
            <C_IconButton
              muiIcon={<ApartmentIcon style={{ color: colorscheme.black }} />}
              onClick={() => setShowProfileModal(true)}
              style={{ marginRight: 1 }}
            />
          </div>
        </div>
      </div>
      {/* <SearchResultModal
        visible={searchQuery.length > 0}
        state={searchQuery}
        // width={"35vw"}
      /> */}
      <ProfileModal
        onClose={() => setShowProfileModal(false)}
        visible={showProfileModal}
        clientEmail={"atefevan1020@gmail.com"}
        clientLogo={png.rfl}
        clientCompanyShortName={"আরএফএল গ্রুপ"}
        clientPaidMonth={"OCT"}
        clientPaidExpire={"31/10/2023"}
        clientPaidStatusColor={colorscheme.success}
      />
    </>
  );
};

export default Header;
