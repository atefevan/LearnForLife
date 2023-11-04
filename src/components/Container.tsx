import { Box } from "@mui/material";
import useColorScheme from "../../src/hooks/useColorScheme";

const Container = ({ children, style }: any) => {
  const { colorscheme } = useColorScheme();
  return (
    <Box
      bgcolor={colorscheme.primary}
      marginTop={"1px"}
      marginLeft={"5px"}
      marginRight={"5px"}
      borderRadius={5}
      sx={style}
      overflow={"scroll"}
      // padding={2}
      height={"90vh"}
      // marginTop={1}
      marginBottom={"2vh"}
      position={"relative"}
    >
      {children}
    </Box>
  );
};

export default Container;
