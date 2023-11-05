import * as React from "react";
import { Avatar, Box, Modal, Tooltip } from "@mui/material";
import Background from "../components/background";
import NavButton from "../components/NavButton";
import Container from "../components/Container";
import { useState } from "react";
import { fontSizes, space } from "../constants/sizes";
import { useNavigate, useLocation } from "react-router-dom";
import { pages } from "../constants/pages";
import C_Image from "./atoms/C_Image";
import { png } from "../assets";
import { SettingsContext } from "../context/AppSettings";
import useColorScheme from "../hooks/useColorScheme";
// import { socket } from "../api";
import Header from "./Header";
import { motion } from "framer-motion";
import { capitalize } from "../utils/Capitalize";
import { ArrowUpwardRounded, ChevronLeft } from "@mui/icons-material";
import SearchResultModal from "./modals/SearchResultModal";
import C_Typography from "./atoms/C_Typography";
import SummaryFooter from "./footer/SummaryFooter";

interface Props {
  children?: React.ReactNode;
}

const InnerLayer = ({ children }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [focused, setFocused] = useState<string>(
    location.pathname.slice(1) || "home"
  );
  const [parentRoute, setParentRoute] = React.useState<string>("home");
  const [visible, setVisible] = useState<boolean>(true);
  const { collapse, setCollapse, focusedIndex, setFocusedIndex, darkMode } =
    React.useContext<any>(SettingsContext);
  const { colorscheme } = useColorScheme();
  const [showCategories, setShowCategories] = React.useState<boolean>(false);
  const [isEnd, setIsEnd] = React.useState<boolean>(false);

  const topRef = React.useRef<any>(null);
  const bottomRef = React.useRef<any>(null);

  console.log("FFFF: ", focused, focused.split("/")[0]);

  React.useEffect(() => {
    let paths = location.pathname.slice(1).split("/");
    setParentRoute(paths[0]);
  }, [location]);

  const handleScroll = (e: any) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (bottom) {
      console.log("bottom");
      setIsEnd(true);
    }
  };

  // React.useEffect(() => {
  //   // Event handler for receiving messages from the server
  //   socket.on("message", (msg) => {
  //     console.log("SOCKET RESPONSE: ", msg);
  //     navigate("/");
  //   });
  // }, []);

  return (
    <Background>
      <Box
        display={"flex"}
        flexDirection={"row"}
        height={"100vh"}
        width={"100vw"}
        bgcolor={colorscheme.inner_layer}
        overflow={"fixed"}
      >
        <Tooltip title="Update Available" arrow>
          <div
            style={{
              position: "absolute",
              top: "96vh",
              left: 15,
              display: "flex",
              alignSelf: "end",
              // flexDirection:"column-reverse",
              // backgroundColor: "yellow",
            }}
          >
            <Avatar
              sx={{
                // position: "absolute",
                marginTop: "4px",
                bgcolor: colorscheme.warning,
                maxHeight: "10px",
                width: "10px",
              }}
            >
              {" "}
            </Avatar>
            <C_Typography
              text={"V0.0.1"}
              custom_color={colorscheme.white}
              fontSize={fontSizes.xs}
              marginLeft={5.5}
            />
          </div>
        </Tooltip>
        {/* Side Nav Bar */}
        <Box
          component={"div"}
          alignItems={"center"}
          sx={{
            paddingInline: 2,
            height: "75vh",
            alignSelf: "center",
          }}
          justifyContent={"space-between"}
          overflow={"scroll"}
          onScroll={handleScroll}
        >
          <motion.div
            style={{
              position: "absolute",
              top: "90vh",
              left: 30,
            }}
            onClick={() => {
              isEnd
                ? topRef.current.scrollIntoView({ behavior: "smooth" })
                : bottomRef.current.scrollIntoView({ behavior: "smooth" });

              setIsEnd(!isEnd);
            }}
            animate={{
              rotate: isEnd ? 90 : 270,
              transition: { duration: 0.5 },
            }}
          >
            <ChevronLeft htmlColor="#fff" />
          </motion.div>

          <Box
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            alignContent={"center"}
            justifyContent={"center"}
            rowGap={space.sm}
          >
            <div ref={topRef} />
            {pages.map((item, index) => (
              <NavButton
                title={capitalize(item?.route)}
                Icon={item?.icon}
                isFocused={parentRoute}
                isCollapsed={collapse}
                onClick={() => {
                  if (!showCategories) {
                    setCollapse(false);
                    setShowCategories(true);
                  } else {
                    setShowCategories(false);
                  }
                  setFocusedIndex(index);
                  // navigate(`/${item?.categories[0]?.route}`);
                }}
              />
            ))}
            <div ref={bottomRef} />
          </Box>
        </Box>
        <div
          style={{ display: "flex", flex: 1, flexDirection: "column-reverse" }}
        >
          <div style={{ display: "flex", flex: 1, width: "95vw" }}>
            {!collapse && (
              <>
                <Container style={{ width: "20%" }}>
                  <C_Typography
                    text={capitalize(pages[focusedIndex].route)}
                    fontWeight={"bold"}
                    variant="h5"
                    custom_color={
                      darkMode === "dark"
                        ? colorscheme.skyblue
                        : colorscheme.blue500
                    }
                    style={{
                      alignSelf: "center",
                      display: "flex",
                      justifyContent: "center",
                      flex: 1,
                      marginBlock: 1,
                    }}
                  />
                  {pages[focusedIndex]?.categories.map((item) => (
                    <NavButton
                      title={item.name}
                      isFocused={focused}
                      isCollapsed={collapse}
                      route={item?.route}
                      onClick={() => {
                        navigate(`/${item?.route}`);
                      }}
                      // style={{padding:2}}
                    />
                  ))}
                </Container>
              </>
            )}

            {/* Container  */}
            <Container
              style={{
                width: collapse ? "100%" : "80%",
                marginRight: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  overflow: "scroll",
                }}
              >
                {children}
              </div>
              <SummaryFooter />
            </Container>
          </div>

          <Header />
        </div>
      </Box>
    </Background>
  );
};

export default InnerLayer;
