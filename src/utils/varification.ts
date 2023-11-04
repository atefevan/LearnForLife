import { appStrings } from "../constants/strings";

export interface IAuthdata {
  status: boolean;
  message: string;
}

export const IAuthdata = (data: any): IAuthdata => {
  const condition: boolean =
    data.company === appStrings?.client && data.key === appStrings?.auth_key;
  return {
    status: condition,
    message: condition ? "Registered Successfully" : "Invalid Credentials",
  };
};

export const IAuthLoginData = (data: any, state: string): IAuthdata => {
  console.log(state);
  const condition: boolean =
    data.email === appStrings?.email && data.password === appStrings?.password;

  return {
    status: condition,
    message: condition
      ? state === "Login"
        ? "Logged In Successfully !"
        : "Account Created Successfully !"
      : "Invalid Credentials",
  };
};
