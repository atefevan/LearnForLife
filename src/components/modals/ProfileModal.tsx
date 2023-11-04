import * as React from "react";
// import ModalWrapper, { ModalProps } from "../ModalWrapper";
import C_Button from "../atoms/C_Button";
import useColorScheme from "../../hooks/useColorScheme";
import C_Typography from "../atoms/C_Typography";
import C_Card from "../atoms/C_Card";
import { Avatar, Badge, Dialog, SxProps, Theme, Tooltip } from "@mui/material";
import { fontSizes } from "../../constants/sizes";
import CreateIcon from "@mui/icons-material/Create";
import C_IconButton from "../atoms/C_IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  onClose: () => void;
  width?: string | number;
  visible?: any;
  clientEmail?: string;
  clientLogo?: string;
  clientCompanyShortName?: string;
  clientPaidMonth?: string;
  clientPaidExpire?: string;
  clientPaidStatusColor?: string;
  borderRadius?: string | number;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  position?: any;
  style?: SxProps<Theme>;
}

const ProfileModal: React.FC<Props> = ({
  visible,
  style,
  clientEmail,
  clientLogo,
  clientCompanyShortName,
  clientPaidMonth,
  clientPaidExpire,
  clientPaidStatusColor,
  position = "absolute",
  width = "450px",
  left = "75%",
  bottom = "56.5vh",
  borderRadius = "15px",
  right = "0px",
  top = "0px",
  onClose,
}) => {
  const { colorscheme } = useColorScheme();
  return (
    <Dialog
      open={visible}
      sx={{
        position: position,
        bottom: bottom,
        left: left,
        width: width,
        right: right,
        top: top,
        // right:"20px",
        "& .MuiDialog-paper": {
          borderRadius: borderRadius,
        },
        ...style,
      }}
      onClose={onClose}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          margin: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "90px" }} />
          <C_Typography
            text={clientEmail}
            custom_color={colorscheme.black}
            lineHeight={3}
          />
          <div style={{ marginLeft: "30px" }}>
            <C_IconButton muiIcon={<CloseIcon />} onClick={onClose} />
          </div>
        </div>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <Avatar
              sx={{
                bgcolor: colorscheme.white,
                maxHeight: "15px",
                width: "15px",
                marginTop: "4px",
                marginLeft: "3px",
              }}
            >
              <CreateIcon sx={{ width: "12px", color: "black" }} />
            </Avatar>
          }
        >
          <Avatar alt="RFL" src={clientLogo} />
        </Badge>
        <C_Typography
          text={clientCompanyShortName}
          custom_color={colorscheme.black}
          lineHeight={2}
        />
        <C_Button
          width={"70%"}
          label={"Manage Company Credentials"}
          variant={"outlined"}
          size={"medium"}
          fontColor={colorscheme.blue500}
          cornerRadius={25}
        />
        <C_Card
          bg_color={colorscheme.white}
          borderRadius={50}
          width={"85%"}
          height={"40px"}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            paddingLeft: "20px",
            paddingRight: "20px",
            alignItems: "center",
          }}
        >
          <C_Typography
            text={"Payment Status"}
            custom_color={colorscheme.black}
            fontSize={fontSizes.xs}
          />
          <Tooltip
            title={
              <div
                style={{
                  width: "110px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "2px",
                  }}
                >
                  <C_Typography
                    text={"Month"}
                    fontSize={fontSizes.xs}
                    custom_color={colorscheme.white}
                  />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Avatar
                      sx={{
                        bgcolor: clientPaidStatusColor,
                        maxHeight: "10px",
                        width: "10px",
                        marginTop: "4px",
                        marginRight: "3px",
                        marginLeft: "3px",
                      }}
                    >
                      {" "}
                    </Avatar>
                    <C_Typography
                      text={clientPaidMonth}
                      fontSize={fontSizes.xs}
                      custom_color={colorscheme.white}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "2px",
                  }}
                >
                  <C_Typography
                    text={"Expiry"}
                    fontSize={fontSizes.xs}
                    custom_color={colorscheme.white}
                  />
                  <C_Typography
                    text={clientPaidExpire}
                    fontSize={fontSizes.xs}
                    custom_color={colorscheme.white}
                  />
                </div>
              </div>
            }
            arrow
          >
            <Avatar
              sx={{
                bgcolor: colorscheme.success,
                maxHeight: "20px",
                width: "20px",
              }}
            >
              {" "}
            </Avatar>
          </Tooltip>
        </C_Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "70%",
            marginBottom: "8px",
            marginTop: "12px",
          }}
        >
          <C_Button
            label={"Privacy Policy"}
            variant={"text"}
            size={"medium"}
            fontColor={colorscheme.black}
            width={"45%"}
          />
          <C_Typography
            text={"."}
            fontSize={fontSizes.rg}
            custom_color={colorscheme.black}
            lineHeight={0}
            marginTop={8}
          />
          <C_Button
            label={"Logout"}
            variant={"text"}
            size={"small"}
            fontColor={colorscheme.black}
            onClick={onClose}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default ProfileModal;
