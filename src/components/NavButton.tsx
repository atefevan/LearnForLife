import { SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import useColorScheme from "../../src/hooks/useColorScheme";
import { motion } from "framer-motion";
import C_Typography from "./atoms/C_Typography";

interface Props {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> | any;
  isCollapsed: boolean;
  title: string;
  isFocused?: string;
  onClick?: () => void;
  route?: string;
  style?: any;
}

const NavButton = ({
  Icon,
  isCollapsed,
  title,
  onClick,
  isFocused,
  route,
  style,
}: Props) => {
  const isCurrent: boolean = isFocused === title.toLowerCase();
  const { colorscheme } = useColorScheme();

  const focusedColor = route?.includes("/")
    ? colorscheme.black
    : colorscheme.success;

  return (
    <div
      style={{
        backgroundColor:
          isFocused === route
            ? colorscheme.secondarySelect
            : colorscheme.transparent,
        border: 2,
        borderRadius: 40,
        cursor:"pointer",
        marginLeft:10,
        marginRight:10,
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: !Icon ? 15 : 12,
          height: !Icon ? 15 : 10,
        }}
        onClick={onClick}
      >
        {Icon && (
          <Icon
            sx={{
              color: isCurrent ? focusedColor : colorscheme.gray500,
              height: 30,
              width: 30,
            }}
          />
        )}
        <Typography
          component={motion.p}
          color={isCurrent ? focusedColor : colorscheme.gray500}
          alignSelf={!Icon ? "start" : "center"}
          animate={{
            scale: isCollapsed ? 0 : 1,
            transition: { duration: 0.3 },
          }}
        >
          {!isCollapsed && (
            <C_Typography
              text={title}
              custom_color={Icon ? "" : colorscheme.text}
              fontSize={Icon ? 10 : 14}
            />
          )}
        </Typography>
      </div>
    </div>
  );
};

export default NavButton;
