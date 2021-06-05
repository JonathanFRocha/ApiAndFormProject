import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordConfirmation: "",

      name: "",
      surName: "",
      birthDate: "",

      fullAddress: "",
    };
  }

  render() {
    return (
      <div>
        <ul>
          <li>first step</li>
          <li>second step</li>
          <li>third step</li>
        </ul>
      </div>
    );
  }
}

export default Form;

// A primeira etapa deve solicitar:
// Email (obrigatório)
// Senha (obrigatório)
// Confirmação de senha (obrigatório)
// A segunda etapa deve solicitar:
// Nome (obrigatório)
// Sobrenome (obrigatório)
// Data de nacimento
// A terceira etapa deve solicitar:
// Endereço completo (obrigatório)
