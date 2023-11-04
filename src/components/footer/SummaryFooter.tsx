import { Link } from "@mui/material";
import { fontSizes } from "../../constants/sizes";
import useColorScheme from "../../hooks/useColorScheme";
import C_Typography from "../atoms/C_Typography";

interface Props {
  style?: any;
}
const SummaryFooter = ({ style }: Props) => {
  const { colorscheme }: any = useColorScheme();
  return (
    <>
      <div
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: colorscheme.primary,
          display: "flex",
          justifyContent: "space-between",
          height: "20px",
          textOverflow: "ellipsis",
          ...style,
        }}
      >
        <div
          style={{
            display: "flex",
            maxHeight: "20px",
            overflowX: "scroll",
            // overflowY: "auto",
            textOverflow:"ellipsis",
            whiteSpace:"nowrap"
          }}
        >
          <C_Typography
            text={`Active : null Waiting : null Male : null(null3%) Female : null(null%)
        Muslim : null(null%) Hindu : null(null%) Christian : null(null%) Other :
        null(null%) Confirmation : null New join : null Left Out : null Daycare : null P :
        0(0.00%) AB : null(null%) L : null(null%)`}
            custom_color={colorscheme.text}
            fontSize={fontSizes.xs}
          />
        </div>
        <div style={{marginLeft:"40px"}}>
          <Link href="google.com" underline="hover">
            <C_Typography
              text={"www.venux.io"}
              fontSize={fontSizes.xs}
              custom_color={colorscheme.text}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SummaryFooter;
