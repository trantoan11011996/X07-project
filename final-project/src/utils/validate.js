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

const whiteSpaceCheck = /\s/g
export const isTitle = (title)=>{
  if(!title){
    return false
  }
  return true
}
export const isPosition = (position)=>{
  if(!position){
    return false
  }
  return true
}
export const isType = (type)=>{
  if(!type){
    return false
  }
  return true
}
export const isLevel = (level)=>{
  if(!level){
    return false
  }
  return true
}

export const isAge = (ageFrom,ageTo)=>{
  if(!ageFrom || whiteSpaceCheck.test(ageFrom)){
    return false
  }
  return true
}
export const isExperience = (experience)=>{
  if(!experience){
    return false
  }
  return true
}
export const isSalary = (salary)=>{
  if(!salary || whiteSpaceCheck.test(salary)){
    return false
  }
  return true
}

export const isNumberApplicant = (numberApplicant) =>{
  if(!numberApplicant){
    return false
  }
  return true
}
export const isLocation = (location)=>{
  if(!location){
    return false
  }
  return true
}

export const isCategory = (category)=>{
  if(!category){
    return false
  }
  return true
}
export const isDescription = (description)=>{
  if(!description){
    return false
  }
  return true
}
export const isCreateAt = (createAt) =>{
  if(!createAt) {
    return false
  }
  return true
}
export const isDeadline = (deadline) =>{
  if(!deadline) {
    return false
  }
  return true
}