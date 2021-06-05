export const emailCheck = (email) => {
  const re = /\S+@\S+\.\S+/;
  if (re.test(email)) {
    return null;
  }
  if (email.trim() === "") {
    return "Email is required";
  }
  return "Enter a valid email";
};

export const passwordCheck = (password, passwordConfirmation = "") => {
  if (!passwordConfirmation) {
    if (password.length >= 8) {
      return null;
    } else {
      return "password need have at least 8 characters";
    }
  } else {
    if (password === passwordConfirmation) {
      return null;
    } else {
      return "password and confirmation differs";
    }
  }
};

export const stringCheck = (name, value) => {
  if (value.trim() === "") {
    return `${name} is required`;
  } else {
    return null;
  }
};

export const birthdateCheck = (date) => {
  if (!date) return null;

  const currentDate = new Date();
  const informedDate = new Date(date);

  if (currentDate < informedDate) {
    return "birthdate in the future";
  }
  return null;
};

export const fullAddressCheck = (address) => {
  if (address.trim() === "") {
    return "Address is required";
  } else if (address.length < 6) {
    return "Address must have at least 7 characters";
  } else {
    return null;
  }
};
