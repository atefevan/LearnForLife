export interface IValidResponse {
  status: boolean;
  message: string;
}

export const nameValidator = (data: string): IValidResponse => {
  // const length_condition: boolean = data?.length === 0;
  if (data?.length === 0)
    return { status: true, message: "Enter Company Name" };
  // const vaildCharRegex: RegExp = /^[0-9a-zA-Z]+$/;
  // if(!vaildCharRegex.test(data)){
  //   return { status: true, message: "Enter letter between a-z 0-9 A-Z" };
  // }
  const vaildCharRegex: RegExp = /^[0-9a-zA-Z]+$/;
  const condition: boolean = !vaildCharRegex.test(data);

  return {
    status: condition,
    message: condition
      ? "Enter letter between a-z 0-9 A-Z"
      : "Company not Registered",
  };
};

export const registerValidator = (data: string): IValidResponse => {
  /// Regex Setup
  const vaildCharRegex: RegExp = /^[0-9a-zA-Z]+$/;
  if (data.length >= 11)
    return { status: true, message: "Key must be in 10 digit" };

  const condition: boolean = !vaildCharRegex.test(data);

  return {
    status: condition,
    message: condition ? "Enter key between a-z 0-9 A-Z" : "Invalid Auth Key",
  };
};
export const emailValidator = (data: string): IValidResponse => {
  /// Regex Setup
  const vaildEmailRegex: RegExp =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const condition: boolean = !vaildEmailRegex.test(data);
  
  if (!data?.length) return { status: true, message: "" };

  return {
    status: condition,
    message: condition ? "Enter a valid Email Address" : "",
  };
};

export const passwordValidator = (data: string): IValidResponse => {
  /// Regex Setup
  const vaildCharRegex: RegExp = /^[0-9a-zA-Z]+$/;
  if (data.length >= 11)
    return { status: true, message: "Key must be in 10 digit" };

  const condition: boolean = !vaildCharRegex.test(data);

  return {
    status: condition,
    message: condition ? "Enter key between a-z 0-9 A-Z" : "Invalid Auth Key",
  };
};

export const phoneNumberValidator = (data: string): IValidResponse => {
  /// Regex Setup
  const bangladeshiPhoneRegex = /^(?:\+?880|0)(\d{10})$/;

  const condition: boolean = !bangladeshiPhoneRegex.test(data);

  if (!data?.length) return { status: true, message: "" };

  return {
    status: condition,
    message: condition ? "Enter a valid phone number" : "",
  };
};

export const digitValidator = (data: string): IValidResponse => {
  const numericRegex = /^[0-9]+$/;

  const condition: boolean = !numericRegex.test(data);

  if (!data?.length) return { status: true, message: "" };

  return {
    status: condition,
    message: condition ? "Enter only digits" : "",
  };
};
