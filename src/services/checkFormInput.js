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
