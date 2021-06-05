import React from "react";
import { emailCheck, passwordCheck } from "../../services/checkFormInput";
import "./allSteps.css";

class FirstStep extends React.Component {
  renderInputError = (inputName) => {
    const inputHasError = this.props.values[inputName].error;

    if (inputHasError) {
      return "input--error";
    }
    return "noErrorClass";
  };

  render() {
    const {
      values: {
        email: { value: emailvalue, message: emailErrorMessage },
        password: { value: passwordValue, message: passwordErrorMessage },
        passwordConfirmation: {
          value: passwordConfirmationValue,
          message: passwordConfirmationErrorMessage,
        },
      },
      handleChanges,
      checkInput,
      stepHasError,
    } = this.props;

    return (
      <fieldset
        className={`form__fieldset ${
          stepHasError ? "form__fieldset--error" : "form__fieldset--ok"
        }`}
      >
        <input
          name="email"
          id="emailInput"
          className={this.renderInputError("email")}
          type="email"
          placeholder="Email"
          value={emailvalue}
          onChange={handleChanges}
          onBlur={(e) => checkInput(e, emailCheck, emailvalue)}
        />
        <span>{emailErrorMessage}</span>
        <input
          name="password"
          id="passwordInput"
          className={this.renderInputError("password")}
          type="password"
          placeholder="Password"
          value={passwordValue}
          onChange={handleChanges}
          onBlur={(e) => checkInput(e, passwordCheck, passwordValue)}
        />
        <span>{passwordErrorMessage}</span>
        <input
          name="passwordConfirmation"
          id="confirmPassword"
          className={this.renderInputError("passwordConfirmation")}
          type="password"
          placeholder="Confirm your Password"
          value={passwordConfirmationValue}
          onChange={handleChanges}
          onBlur={(e) => checkInput(e, passwordCheck, passwordValue, passwordConfirmationValue)}
        />
        <span>{passwordConfirmationErrorMessage}</span>
      </fieldset>
    );
  }
}

export default FirstStep;
