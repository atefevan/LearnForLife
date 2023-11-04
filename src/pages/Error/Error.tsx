import { Box } from "@mui/material";
import C_Image from "../../components/atoms/C_Image";
import { svg } from "../../assets";
import InnerLayer from "../../components/InnerLayer";
import C_Typography from "../../components/atoms/C_Typography";

const ErrorPage = () => {
  return (
    <>
      <InnerLayer>
        <Box
          sx={{
            display: "flex",
          }}
          marginTop={"130px"}
        >
          <Box sx={{ flex: 1, marginTop: "13vh" }}>
            <Box marginLeft={"5vw"}>
              <C_Typography
                text={"OOPS!"}
                variant="h1"
                fontWeight={700}
                align="left"
                style={{ alignSelf: "left" }}
              />
              <C_Typography
                text={"Page Not Found"}
                variant="h3"
                fontWeight={600}
                align="left"
                style={{ alignSelf: "left" }}
              />
              <div
                style={{
                  alignSelf: "self-start",
                }}
              >
                <C_Typography
                  opacity={0.5}
                  text={
                    "The page you are looking for doesn’t exist or any other error occurred, go back to home page."
                  }
                  variant="h6"
                  style={{ alignSelf: "left" }}
                />
              </div>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                // bgcolor: colorscheme.beige,
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                marginTop: "60px",
              }}
            >
              <C_Image
                imgPath={svg.error404}
                height="600px"
                width="950px"
                style={{ display: "flex" }}
              />
            </Box>
          </Box>
        </Box>
      </InnerLayer>
    </>
  );
};

export default ErrorPage;
