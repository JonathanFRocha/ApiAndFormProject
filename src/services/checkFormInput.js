//            Checa se o email é valido e se algo foi digitado. Caso Contrário devolve uma mensagem que será usada como erro
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

//            Checa se a senha é maior que 7 digitos, além disso também checa se a senha bate com a senha de confirmação.
//            Caso Contrário devolve uma mensagem que será usada como erro
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

//            Checa se algo foi digitado no input name e surname.
//            Caso Contrário devolve uma mensagem que será usada como erro

export const stringCheck = (name, value) => {
  if (value.trim() === "") {
    return `${name} is required`;
  } else {
    return null;
  }
};

//            Checa se a data é anterior e data de HOJE.
//            Caso Contrário devolve uma mensagem que será usada como erro

export const birthdateCheck = (date) => {
  if (!date) return null;

  const currentDate = new Date();
  const informedDate = new Date(date);

  if (currentDate < informedDate) {
    return "birthdate in the future";
  }
  return null;
};

// Checa se o endereço foi digitado e se tem pelo menos 7 caractéres no input, caso contrário devolve uma mensagem que será usada como erro.

export const fullAddressCheck = (address) => {
  if (address.trim() === "") {
    return "Address is required";
  } else if (address.length < 6) {
    return "Address must have at least 7 characters";
  } else {
    return null;
  }
};
