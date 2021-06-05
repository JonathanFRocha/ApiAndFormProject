import React from "react";
import { emailCheck, passwordCheck } from "../../services/checkFormInput";
import "./FirstStep.css";

class FirstStep extends React.Component {
  constructor() {
    super();
    this.state = {
      email: {
        error: false,
        message: "",
      },
      password: {
        error: false,
        message: "",
      },
      passwordConfirmation: {
        error: false,
        message: "",
      },
    };
  }

  // renderInputError = (inputName) => {
  //   const inputHasError = this.state[inputName].error;
  //   console.log(inputHasError);
  //   if (inputHasError) {
  //     return "input--error";
  //   }
  //   return "noErrorClass";
  // };

  render() {
    const {
      values: {
        email: { value: emailvalue },
        password: { value: passwordValue },
        passwordConfirmation: { value: passwordConfirmationValue },
      },
      handleChanges,
      checkInput,
    } = this.props;

    return (
      <div>
        <input
          name="email"
          id="emailInput"
          // className={this.renderInputError("email")}
          type="email"
          placeholder="Email"
          value={emailvalue}
          onChange={handleChanges}
          onBlur={(e) => checkInput(e, emailCheck, emailvalue)}
        />
        <input
          name="password"
          id="passwordInput"
          // className={this.renderInputError("password")}
          type="password"
          placeholder="Password"
          value={passwordValue}
          onChange={handleChanges}
          onBlur={(e) => checkInput(e, passwordCheck, passwordValue)}
        />
        <input
          name="passwordConfirmation"
          id="confirmPassword"
          // className={this.renderInputError("passwordConfirmation")}
          type="password"
          placeholder="Confirm your Password"
          value={passwordConfirmationValue}
          onChange={handleChanges}
          onBlur={(e) => checkInput(e, passwordCheck, passwordValue, passwordConfirmationValue)}
        />
      </div>
    );
  }
}

export default FirstStep;
