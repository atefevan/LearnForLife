import { Box } from "@mui/material";
import C_Typography from "../../components/atoms/C_Typography";
import { cardSize } from "../../constants/sizes";
import C_Card from "../../components/atoms/C_Card";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";

import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import InnerLayer from "../../components/InnerLayer";
import useColorScheme from "../../hooks/useColorScheme";
import C_IconButton from "../../components/atoms/C_IconButton";
import C_DatePicker from "../../components/atoms/C_DatePicker";

const HomePage = () => {
  // const { darkMode } = useContext<any>(SettingsContext);
  const { colorscheme } = useColorScheme();
  return (
    <InnerLayer>
      <div
        style={{
          // backgroundColor: colorscheme.red,
          flex: 1,
        }}
      >
        <h1>
          <Box
            sx={{
              display: "flex",
              ml: 2,
              justifyContent: "start",
              mr: 2,
            }}
          >
            <C_Card
              height={`${cardSize.xs}vh`}
              // bg_color={colorscheme.red}
              width={`${cardSize.md}vh`}
              borderColor={colorscheme.gray}
              borderRadius={cardSize.xs}
              variant="outlined"
              style={{ p: 2 }}
            >
              <div
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                {/* Top Bar */}

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <C_Typography text="Total Customers" variant="h6" />
                  </Box>
                  <Box>
                    <C_IconButton
                      muiIcon={
                        <GroupsOutlinedIcon
                          style={{ color: colorscheme.black }}
                        />
                      }
                      onClick={() => console.log("Groups  Clicked")}
                    />
                  </Box>
                </Box>
                <Box>
                  <C_Typography text="26.57" variant="h4" />
                </Box>
                <Box sx={{ mb: 2, display: "flex" }}>
                  <TrendingUpOutlinedIcon
                    sx={{ color: colorscheme.green500 }}
                  />
                  <C_Typography
                    marginLeft={1}
                    text="+15%"
                    variant="body1"
                    // text_color={colorscheme.green500}
                  />
                  <C_Typography
                    text="from last month"
                    variant="body1"
                    marginLeft={5}
                  />
                </Box>
              </div>
            </C_Card>
            <C_Card
              height={`${cardSize.xs}vh`}
              width={`${cardSize.md}vh`}
              borderColor={colorscheme.gray500}
              borderRadius={cardSize.xs}
              variant="outlined"
              style={{ p: 2, ml: 2 }}
            >
              <div
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                {/* Top Bar */}

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <C_Typography text="Total Customers" variant="h6" />
                  </Box>
                  <Box>
                    <C_IconButton
                      muiIcon={
                        <GroupsOutlinedIcon
                          style={{ color: colorscheme.black }}
                        />
                      }
                      onClick={() => console.log("Groups  Clicked")}
                    />
                  </Box>
                </Box>
                <Box>
                  <C_Typography text="26.57" variant="h4" />
                </Box>
                <Box sx={{ mb: 2, display: "flex" }}>
                  <TrendingDownOutlinedIcon sx={{ color: colorscheme.red }} />
                  <C_Typography marginLeft={1} text="-15%" variant="body1" />
                  <C_Typography
                    text="from last month"
                    variant="body1"
                    marginLeft={5}
                  />
                </Box>
              </div>
            </C_Card>
          </Box>
          <div>
          </div>
        </h1>
      </div>
    </InnerLayer>
  );
};
export default HomePage;
