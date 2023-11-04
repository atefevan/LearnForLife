import { Box } from "@mui/material";
import C_Image from "../../components/atoms/C_Image";
import GradientBackground from "../../components/GradientBackground";
import logo from "../../assets";
import C_TextField from "../../components/atoms/C_TextField";
import React, { useState } from "react";
import C_Button from "../../components/atoms/C_Button";
import EmailIcon from "@mui/icons-material/Email";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import { enqueueSnackbar } from "notistack";
import { emailValidator, passwordValidator } from "../../utils/validator";
import { useNavigate } from "react-router-dom";
import C_Typography from "../../components/atoms/C_Typography";
import { fontSizes } from "../../constants/sizes";
import useColorScheme from "../../hooks/useColorScheme";
import { signin } from "../../api/auth";
const Login = () => {
  const { colorscheme } = useColorScheme();
  const [selected, setSelected] = React.useState<string>("Create Account");
  /// Email states
  const [emailValue, setEmailValue] = useState<string>("");
  const [isValidEmail, setValidEmail] = useState<boolean>(false);
  const [errorEmailMsg, setErrorEmailMsg] = useState<string>("");

  /// Password states
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isValidPassword, setValidPassword] = useState<boolean>(false);
  const [errorPasswordMsg, setErrorPasswordMsg] = useState<string>("");

  const navigate = useNavigate();

  const handleOnSubmit = async (body: any) => {
    if (!body.email && !body.password) {
      return enqueueSnackbar("Fill the Input Values !", {
        variant: "error",
      });
    }
    signin(body).then((res: any) => {
      console.log(res);
      if (res.data) {
        navigate("/home");
      }
      enqueueSnackbar(res.message, {
        variant: res.status,
      });
    });
    // const entryResponse = IAuthLoginData(body, selected);

    // entryResponse.status
    //   ? enqueueSnackbar(entryResponse.message, {
    //       variant: "success",
    //     })
    //   : enqueueSnackbar(entryResponse.message, {
    //       variant: "error",
    //     });
    // entryResponse.status ? navigate("/home") : null;
  };
  return (
    <GradientBackground
      styles={{ alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          bgcolor: colorscheme.white,
          height: "75vh",
          width: "75vw",
          borderRadius: 10,
          display: "flex",
        }}
      >
        <Box flex={2} display={"flex"} justifyContent={"center"}>
          <C_Image
            borderRadius={5}
            imgPath={logo.logo_venux}
            style={{ alignSelf: "center", justifyContent: "center" }}
          />
        </Box>
        <Box
          flex={1}
          display={"flex"}
          flexDirection={"column"}
          sx={{
            alignItems: "center",
            justifyContent: "left",
            marginInline: 15,
            borderColor: colorscheme.black,
            border: 3,
            borderRadius: 5,
            mt: 6,
            mb: 6,
            p: 2,
          }}
        >
          <Box
            display={"flex"}
            bgcolor={colorscheme.gray800}
            height={50}
            width={"22vw"}
            sx={{
              alignItems: "center",
              justifyContent: "space-evenly",
              borderRadius: 15,
              mb: 6,
            }}
          >
            <C_Button
              label={"Login"}
              variant={selected === "Login" ? "contained" : "text"}
              // variant={"text"}
              size={"small"}
              marginLeft={1}
              cornerRadius={5}
              bgColor={
                selected === "Login" ? colorscheme.beige : colorscheme.gray800
              }
              width="10vw"
              onClick={() => setSelected("Login")}
              onSubmit={() => {
                setEmailValue("");
                setPasswordValue("");

                setValidEmail(false);
                setValidPassword(false);
              }}
            />
            <C_Button
              label={"Create Account"}
              variant={selected !== "Login" ? "contained" : "text"}
              // variant="text"
              size={"small"}
              width="15vw"
              cornerRadius={5}
              isHidden={true}
              bgColor={
                selected === "Create Account"
                  ? colorscheme.beige
                  : colorscheme.gray800
              }
              marginRight={1}
              onClick={() => setSelected("Create Account")}
              onSubmit={() => {
                setEmailValue("");
                setPasswordValue("");

                setValidEmail(false);
                setValidPassword(false);
              }}
            />
          </Box>
          <C_Typography
            text={selected}
            fontSize={fontSizes.md}
            marginBottom={2}
            marginTop={2}
          />
          <C_TextField
            fullwidth
            label={"Email"}
            placeHolder={"Email"}
            id={""}
            value={emailValue}
            prefixIcon={<EmailIcon sx={{ color: colorscheme.black }} />}
            type={"text"}
            required={true}
            helperText={errorEmailMsg}
            isError={isValidEmail}
            focuseBorderColor={colorscheme.black}
            focuseColor={colorscheme.black}
            focuseColorUnderline={colorscheme.black}
            fontColor={colorscheme.black}
            fieldOnChange={(event) => {
              setEmailValue(event.target.value);
              const entryResponse = emailValidator(event.target.value);
              const { status, message } = entryResponse;
              setErrorEmailMsg(message);
              setValidEmail(!emailValue?.length || status);
            }}
          />
          <C_TextField
            fullwidth
            label={"Password"}
            placeHolder={"Password"}
            id={""}
            value={passwordValue}
            required={true}
            prefixIcon={<KeyOutlinedIcon sx={{ color: colorscheme.black }} />}
            type={"password"}
            helperText={errorPasswordMsg}
            isError={isValidPassword}
            focuseBorderColor={colorscheme.black}
            focuseColor={colorscheme.black}
            focuseColorUnderline={colorscheme.black}
            fontColor={colorscheme.black}
            style={{ marginTop: "15px", marginBottom: "15px" }}
            fieldOnChange={(event) => {
              setPasswordValue(event.target.value);
              const entryResponse = passwordValidator(event.target.value);
              const { status, message } = entryResponse;
              setErrorPasswordMsg(message);
              setValidPassword(!passwordValue?.length || status);
            }}
          />
          {/* <C_Typography text={}/> */}
          <C_Button
            width={selected !== "Login" ? "70%" : "30%"}
            label={selected !== "Login" ? "Create Account" : "Login"}
            variant="contained"
            size={"medium"}
            style={{ justifyContent: "center", alignSelf: "center" }}
            // onSubmit={() => {
            //   // handleOnSubmit({ email: emailValue, password: passwordValue });
            //   alert("pressed ");
            // }}
            onClick={() =>
              handleOnSubmit({ email: emailValue, password: passwordValue })
            }
          />
        </Box>
      </Box>
    </GradientBackground>
  );
};

export default Login;
