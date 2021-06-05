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
    required: true,
  },
  password: {
    value: "",
    error: false,
    message: "",
    required: true,
  },
  passwordConfirmation: {
    value: "",
    error: false,
    message: "",
    required: true,
  },
  name: {
    value: "",
    error: false,
    message: "",
    required: true,
  },
  surName: {
    value: "",
    error: false,
    message: "",
    required: true,
  },
  birthDate: {
    value: "",
    error: false,
    message: "",
    required: false,
  },
  fullAddress: {
    value: "",
    error: false,
    message: "",
    required: true,
  },
  step: 1,
};

class Form extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }
  // altera o estado Step baseado de onde veio o click. Caso venha dos botões superiores, então a função é passada com um número "step".
  // caso contrário, se vier do botão "next" então verifica se o step e o 3 e atualiza para 1 ou atualiza para o estado anterior + 1
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
  // baseado nos estados passados, é feito uma iteração e verificação se o estado é required e se a chave "error" está como true
  checkIfStepHasErrors = (...args) => {
    let hasError = false;
    args.forEach((input) => {
      const error = input.error;
      const length = input.value.length;
      if (error) hasError = true;
      if (length === 0 && input.required) hasError = true;
    });
    return hasError;
  };
  // Atualiza o valores do estado.
  handleChanges = ({ target: { name, value } }) => {
    this.setState((prevState) => {
      return {
        [name]: { ...prevState[name], value },
      };
    });
  };

  // função responsável por verificar se há algum erro no onBlur. é passado o event para verificar quem tá chamando, a função cb de checagem de erros
  // e então todas os parâmetros para verificação dos inputs.
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

  // Renderiza o formulário baseado no número guardado no estado Step, além de passar todas as funções.
  // também verifica se há algum elemento com erro no estado e então passa essa informação para os respectivos componentes.
  renderFormStep = () => {
    const { step, email, password, passwordConfirmation, name, surName, birthDate, fullAddress } =
      this.state;
    const firstStepHasError = this.checkIfStepHasErrors(email, password, passwordConfirmation);
    const secondStepHasError = this.checkIfStepHasErrors(name, surName, birthDate);
    const thirdStepHasError = this.checkIfStepHasErrors(fullAddress);

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
            stepHasError={secondStepHasError}
            values={this.state}
          />
        );
      case 3:
        return (
          <ThirdStep
            checkInput={this.setInputError}
            handleChanges={this.handleChanges}
            stepHasError={thirdStepHasError}
            values={this.state}
          />
        );
      default:
        break;
    }
  };

  render() {
    const { email, password, passwordConfirmation, name, surName, birthDate, fullAddress, step } =
      this.state;

    //Verifica qual é o form atual
    const currentForm = this.renderFormStep();

    // Checa quais etapas tem erro e atualiza as classes dos elementos dentro do return
    const firstStepHasError = this.checkIfStepHasErrors(email, password, passwordConfirmation);
    const secondStepHasError = this.checkIfStepHasErrors(name, surName, birthDate);
    const thirdStepHasError = this.checkIfStepHasErrors(fullAddress);
    return (
      <div className="main__form">
        <ul className="form__stepBtnList">
          <li>
            <button
              className={`form__changeStepBtn ${
                firstStepHasError ? "form__changeStepBtn--error" : "form__changeStepBtn--ok"
              } ${step === 1 ? "form__changeStepBtn--active" : ""}`}
              onClick={() => this.changeStep(1)}
            >
              1
            </button>
          </li>
          <li>
            <button
              className={`form__changeStepBtn ${
                secondStepHasError ? "form__changeStepBtn--error" : "form__changeStepBtn--ok"
              } ${step === 2 ? "form__changeStepBtn--active" : ""}`}
              onClick={() => this.changeStep(2)}
            >
              2
            </button>
          </li>
          <li>
            <button
              className={`form__changeStepBtn ${
                thirdStepHasError ? "form__changeStepBtn--error" : "form__changeStepBtn--ok"
              } ${step === 3 ? "form__changeStepBtn--active" : ""}`}
              onClick={() => this.changeStep(3)}
            >
              3
            </button>
          </li>
        </ul>
        <form action="#">
          <div>{currentForm}</div>
          <div className="form__next-submit-btns__container">
            <button className="form__next-btn" onClick={() => this.changeStep()} type="button">
              Next
            </button>
            <button
              className="form__submit-btn"
              // Se não existir mais nenhum erro, então o disabled fica como false
              disabled={firstStepHasError || secondStepHasError || thirdStepHasError}
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
