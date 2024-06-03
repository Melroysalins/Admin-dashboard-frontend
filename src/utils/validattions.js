export const loginValidation = (email, password, number) => {
  let message = "";
  const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passregex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const phoneregex = /^\+?1?\d{10,15}$/;

  if (!emailregex.test(email)) {
    message = "email is not valid";
  } else if (!passregex.test(password)) {
    message = "password is not valid";
  } else if (!phoneregex.test(number)) {
    message = "phone number is not valid";
  }
  return message;
};

export const PasswordValidation = (password) => {
  let message = "";

  const passregex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passregex.test(password)) {
    message = "password is not valid";
  }
  return message;
};

export const EmailandPhoneValidation = (email, number) => {
  let message = "";
  const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneregex = /^\+?1?\d{10,15}$/;

  if (!emailregex.test(email)) {
    message = "email is not valid";
  } else if (!phoneregex.test(number)) {
    message = "phone number is not valid";
  }
  return message;
};
