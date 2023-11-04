import { Avatar, Box } from "@mui/material";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SearchIcon from "@mui/icons-material/Search";
import Background from "../../components/background";
import NavButton from "../../components/NavButton";
import Container from "../../components/Container";
import { useState } from "react";
import { fontSizes, space } from "../../constants/sizes";
import C_TextField from "../../components/atoms/C_TextField";
import C_Typography from "../../components/atoms/C_Typography";
import { useNavigate } from "react-router-dom";
import useColorScheme from "../../hooks/useColorScheme";

const Root = () => {
  const [collapse, setCollapse] = useState<boolean>(true);
  const [focused, setFocused] = useState<string>("home");
  const [visible, setVisible] = useState<boolean>(true);
  const { colorscheme } = useColorScheme();
  const navigate = useNavigate();

  return (
    <Background>
      <Box
        display={"flex"}
        flexDirection={"row"}
        height={"100vh"}
        width={"100vw"}
      >
        {/* Side Nav Bar */}
        <Box
          flex={collapse ? 1 : 2}
          display={"flex"}
          flexDirection={"column"}
          alignItems={collapse ? "center" : "flex-start"}
          marginLeft={collapse ? 0 : 4}
          justifyContent={"space-between"}
          // paddingY={10}
        >
          {/* some component */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // marginTop: `${space.lg}px`,
              // marginTop: `50px`,
            }}
          >
            <Box
              sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}
            >
              <Avatar
                alt="D"
                src="https://th.bing.com/th/id/R.ef6551d7882e1234725b6b2050dca3cc?rik=DUMz6AxOaweFXQ&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f18500000%2ftom-cruise-tom-cruise-18576244-1280-960.jpg&ehk=G3yNrHqmtWUo3aZ9XVlRXrGPyRAov%2fDAuXJv5D8Kqu0%3d&risl=&pid=ImgRaw&r=0"
              />
              <Box sx={{ display: collapse ? "none" : "block" }}>
                <C_Typography text="Evan" fontSize={fontSizes.sm} />
              </Box>
              <div
                style={{
                  alignSelf: "end",
                  display: collapse ? "none" : "block",
                }}
                onClick={() => {
                  setCollapse(!collapse);
                }}
              >
                <div>
                  <KeyboardDoubleArrowLeftOutlinedIcon
                    sx={{
                      color: "white",
                      height: 50,
                      width: 50,
                      alignSelf: "end",
                    }}
                  />
                </div>
              </div>
            </Box>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <div
                  onClick={() => {
                    setCollapse(!collapse);
                    setVisible(!visible); // false
                  }}
                >
                  <SearchIcon
                    sx={{
                      color: "white",
                      height: 40,
                      width: 40,
                      display: collapse ? "center" : "none",
                      marginTop: "40px",
                    }}
                  />
                </div>
                <C_TextField
                  hiddenLabel={true}
                  id="filled-hidden-label-small"
                  type="text"
                  prefixIcon={<SearchIcon sx={{ color: colorscheme.info }} />}
                  borderColor={"success"}
                  style={{
                    display: collapse ? "none" : "center",
                    marginTop: "20px",
                    marginRight: "20px",
                  }}
                  focused={true}
                  isError={false}
                  fieldOnChange={() => {}}
                />
              </div>
            </div>
          </Box>
          <Box
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            alignContent={"center"}
            justifyContent={"center"}
            rowGap={space.sm}
          >
            <NavButton
              Icon={HomeRoundedIcon}
              isCollapsed={collapse}
              title={"Home"}
              isFocused={focused}
              onClick={() => setFocused("home")}
            />
            <NavButton
              Icon={EmailRoundedIcon}
              isCollapsed={collapse}
              title={"Report"}
              isFocused={focused}
              onClick={() => setFocused("report")}
            />
            <NavButton
              Icon={SettingsRoundedIcon}
              isCollapsed={collapse}
              title={"Preset"}
              isFocused={focused}
              // onClick={() => setFocused("preset")}
              onClick={() => navigate("/preset")}
            />
          </Box>
          <Box sx={{ pb: 5 }}>
            <NavButton
              Icon={LogoutRoundedIcon}
              isCollapsed={collapse}
              title={"logout"}
              // isFocused={focused}
              onClick={() => {
                // setFocused("logout");
                alert("Successfully Logged out!");
              }}
            />
          </Box>
        </Box>

        {/* Container  */}
        <Container>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <Header /> */}
          </div>
        </Container>
      </Box>
    </Background>
  );
};

export default Root;
