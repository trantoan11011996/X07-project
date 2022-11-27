//check empty field
export const isEmpty = (value) => {
  if (!value) return true;
  return false;
};
//check email format
export const isEmail = (email) => {
  // eslint-disable-next-line
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

//check password
export const isPassword = (password) => {
  const re =
    /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;
  return re.test(password);
};

//check password length
export const isLength = (password) => {
  if (password.lenght < 6) return true;
  return false;
};

// check password match
export const isMatch = (password, confirmPassword) => {
  if (password === confirmPassword) return true;
  return false;
};

export const isCheckPassword = (newPassword) => {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(newPassword);
};

export const isMathUpdatePassword = (newPassword, confirmPassword) => {
  if (newPassword === confirmPassword) return true;
  return false;
};
//check phone format
export const isVietnamesePhoneNumberValid = (phone) => {
  return /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(phone);
};
