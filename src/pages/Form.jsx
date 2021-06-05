import React from "react";
import FirstStep from "../components/Form/FirstStep";
import SecondStep from "../components/Form/SecondStep";
import ThirdStep from "../components/Form/ThirdStep";

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

      step: 1,
    };
  }

  changeStep = (nextStep = false) => {
    const currentStep = this.state.step;
    if (nextStep) {
      this.setState({ step: nextStep });
    } else if (currentStep === 3) {
      this.setState({ step: 1 });
    } else {
      this.setState({ step: currentStep + 1 });
    }
  };

  handleChanges = ({ target: { name, value } }) => {
    console.log(name);
    this.setState({ [name]: value });
  };

  renderFormStep = () => {
    const { step } = this.state;

    switch (step) {
      case 1:
        return <FirstStep handleChanges={this.handleChanges} values={this.state} />;
      case 2:
        return <SecondStep handleChanges={this.handleChanges} values={this.state} />;
      case 3:
        return <ThirdStep handleChanges={this.handleChanges} values={this.state} />;
      default:
        break;
    }
  };

  render() {
    const currentForm = this.renderFormStep();
    return (
      <div>
        <ul>
          <li>
            <button onClick={() => this.changeStep(1)}>first step</button>
          </li>
          <li>
            <button onClick={() => this.changeStep(2)}>second step</button>
          </li>
          <li>
            <button onClick={() => this.changeStep(3)}> third step</button>
          </li>
        </ul>
        <form action="#">
          <fieldset>{currentForm}</fieldset>
          <div>
            <button onClick={() => this.changeStep()} type="button">
              Next
            </button>
            <button type="submit">Send</button>
          </div>
        </form>
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
