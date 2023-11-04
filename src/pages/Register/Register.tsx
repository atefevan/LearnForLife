import { Box } from "@mui/material";
import GradientBackground from "../../components/GradientBackground";
import C_TextField from "../../components/atoms/C_TextField";
import C_Button from "../../components/atoms/C_Button";
import CreateIcon from "@mui/icons-material/Create";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import { appStrings } from "../../constants/strings";
import { useState } from "react";
import { nameValidator, passwordValidator } from "../../utils/validator";
import { IAuthdata } from "../../utils/varification";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import C_Typography from "../../components/atoms/C_Typography";
import useColorScheme from "../../hooks/useColorScheme";

const Register = () => {
  const { colorscheme } = useColorScheme();
  /// Name states
  const [nameValue, setNameValue] = useState<string>("");
  const [isValidName, setValidName] = useState<boolean>(false);
  const [errorNameMsg, setErrorNameMsg] = useState<string>("");

  /// Register states
  const [registerValue, setRegisterValue] = useState<string>("");
  const [isValidRegister, setValidRegister] = useState<boolean>(false);
  const [errorRegisterMsg, setErrorRegisterMsg] = useState<string>("");
  // const [isSent, setIsSent] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleOnSubmit = (body: any) => {
    if (!body.company && !body.key) {
      return enqueueSnackbar("Fill the Input Values !", {
        variant: "error",
      });
    }
    const entryResponse = IAuthdata(body);

    entryResponse.status
      ? enqueueSnackbar(entryResponse.message, {
          variant: "success",
        })
      : enqueueSnackbar(entryResponse.message, {
          variant: "error",
        });
    entryResponse.status ? navigate("/login") : null;
  };

  return (
    <GradientBackground
      styles={{ alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          bgcolor: colorscheme.primary,
          height: "80vh",
          width: "45vw",
          borderRadius: 5,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            marginInline: 10,
            alignItems: "center",
            display: "flex",
            flexDirection: "Column",
          }}
        >
          <C_Typography
            text={appStrings?.baseName}
            variant="h2"
            align="center"
            marginBottom={3}
          />
          <C_Typography
            text="Register"
            variant="h5"
            align="center"
            marginBottom={2}
          />
          <C_Typography
            text={appStrings?.reg_motivation}
            variant="subtitle1"
            align="center"
            marginBottom={4}
          />

          {/* Company Name */}
          <C_TextField
            fullwidth
            id="outlined-start-adornment"
            label="Company"
            type="text"
            required={true}
            helperText={errorNameMsg}
            isError={isValidName}
            fieldOnChange={(event) => {
              setNameValue(event.target.value);
              const entryResponse = nameValidator(event.target.value);
              const { status, message } = entryResponse;
              setErrorNameMsg(message);
              setValidName(!nameValue?.length || status);
            }}
            prefixIcon={<CreateIcon />}
          />
          {/* AuthKey Field */}
          <C_TextField
            id="outlined-adornment-password"
            fullwidth
            prefixIcon={<KeyOutlinedIcon />}
            label="Registered Key"
            type="password"
            required={true}
            helperText={errorRegisterMsg}
            isError={isValidRegister}
            style={{ marginTop: "15px", marginBottom: "15px" }}
            fieldOnChange={(event) => {
              setRegisterValue(event.target.value);
              const entryResponse = passwordValidator(event.target.value);
              const { status, message } = entryResponse;
              setErrorRegisterMsg(message);
              setValidRegister(!registerValue?.length || status);
            }}
          />
          <C_Button
            height="30%"
            width="30%"
            label="Register"
            variant="contained"
            size={"medium"}
            bgColor={colorscheme.limegreen500}
            style={{ justifyContent: "center", alignSelf: "center" }}
            onSubmit={() =>
              handleOnSubmit({ company: nameValue, key: registerValue })
            }
          />
        </Box>
      </Box>
    </GradientBackground>
  );
};

export default Register;
