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
        <div className="form__input__container">
          <input
            name="email"
            id="emailInput"
            className={`form__input ${this.renderInputError("email")}`}
            type="email"
            placeholder="Email"
            value={emailvalue}
            onChange={handleChanges}
            onBlur={(e) => checkInput(e, emailCheck, emailvalue)}
          />
          <span className="form__input--error__message">{emailErrorMessage}</span>
        </div>
        <div className="form__input__container">
          <input
            name="password"
            id="passwordInput"
            className={`form__input ${this.renderInputError("password")}`}
            type="password"
            placeholder="Password"
            value={passwordValue}
            onChange={handleChanges}
            onBlur={(e) => checkInput(e, passwordCheck, passwordValue)}
          />
          <span className="form__input--error__message">{passwordErrorMessage}</span>
        </div>
        <div className="form__input__container">
          <input
            name="passwordConfirmation"
            id="confirmPassword"
            className={`form__input ${this.renderInputError("passwordConfirmation")}`}
            type="password"
            placeholder="Confirm your Password"
            value={passwordConfirmationValue}
            onChange={handleChanges}
            onBlur={(e) => checkInput(e, passwordCheck, passwordValue, passwordConfirmationValue)}
          />
          <span className="form__input--error__message">{passwordConfirmationErrorMessage}</span>
        </div>
      </fieldset>
    );
  }
}

export default FirstStep;
