import React from "react";
import FirstStep from "../components/Form/FirstStep";
import SecondStep from "../components/Form/SecondStep";
import ThirdStep from "../components/Form/ThirdStep";

import "./Form.css";

const INITIAL_STATE = {
  email: {
    value: "",
    error: false,
    message: "",
  },
  password: {
    value: "",
    error: false,
    message: "",
  },
  passwordConfirmation: {
    value: "",
    error: false,
    message: "",
  },
  name: {
    value: "",
    error: false,
    message: "",
  },
  surName: {
    value: "",
    error: false,
    message: "",
  },
  birthDate: {
    value: "",
    error: false,
    message: "",
  },
  fullAddress: {
    value: "",
    error: false,
    message: "",
  },
  step: 1,
};

class Form extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
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

  checkIfStepHasErrors = (...args) => {
    let hasError = false;
    args.forEach(({ error }) => {
      if (error) hasError = true;
    });
    return hasError;
  };

  handleChanges = ({ target: { name, value } }) => {
    this.setState((prevState) => {
      return {
        [name]: { ...prevState[name], value },
      };
    });
  };

  setInputError = (event, check, ...params) => {
    const errorMessage = check(...params);

    const { name } = event.target;
    if (errorMessage) {
      this.setState((prevState) => {
        return {
          [name]: { ...prevState[name], error: true, message: errorMessage },
        };
      });
    } else {
      this.setState((prevState) => {
        console.log(prevState[name]);
        return {
          [name]: { ...prevState[name], error: false, message: "" },
        };
      });
    }
  };

  renderFormStep = () => {
    const { step, email, password, passwordConfirmation, name, surName, birthDate, fullAddress } =
      this.state;
    const firstStepHasError = this.checkIfStepHasErrors(email, password, passwordConfirmation);

    switch (step) {
      case 1:
        return (
          <FirstStep
            checkInput={this.setInputError}
            handleChanges={this.handleChanges}
            stepHasError={firstStepHasError}
            values={this.state}
          />
        );
      case 2:
        return (
          <SecondStep
            checkInput={this.setInputError}
            handleChanges={this.handleChanges}
            values={this.state}
          />
        );
      case 3:
        return (
          <ThirdStep
            checkInput={this.setInputError}
            handleChanges={this.handleChanges}
            values={this.state}
          />
        );
      default:
        break;
    }
  };

  render() {
    const currentForm = this.renderFormStep();
    const { email, password, passwordConfirmation, name, surName, birthDate, fullAddress } =
      this.state;
    const firstStepHasError = this.checkIfStepHasErrors(email, password, passwordConfirmation);

    return (
      <div>
        <ul>
          <li>
            <button
              className={`form__changeStepBtn ${
                firstStepHasError ? "form__changeStepBtn--error" : "form__changeStepBtn--ok"
              }`}
              onClick={() => this.changeStep(1)}
            >
              first step
            </button>
          </li>
          <li>
            <button onClick={() => this.changeStep(2)}>second step</button>
          </li>
          <li>
            <button onClick={() => this.changeStep(3)}> third step</button>
          </li>
        </ul>
        <form action="#">
          <div>{currentForm}</div>
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
