import React from "react";
import { stringCheck, birthdateCheck } from "../../services/checkFormInput";

import "./allSteps.css";
class SecondStep extends React.Component {
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
        name: { value: namevalue, message: nameErrorMessage },
        surName: { value: surNameValue, message: surNameErrorMessage },
        birthDate: { value: birthDateValue, message: birthDateErrorMessage },
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
          name="name"
          id="nameInput"
          className={this.renderInputError("name")}
          type="text"
          required
          placeholder="Name"
          value={namevalue}
          onChange={handleChanges}
          onBlur={(e) => checkInput(e, stringCheck, "Name", namevalue)}
        />
        <span>{nameErrorMessage}</span>
        <input
          name="surName"
          id="surName"
          className={this.renderInputError("surName")}
          type="text"
          required
          placeholder="Surname"
          value={surNameValue}
          onChange={handleChanges}
          onBlur={(e) => checkInput(e, stringCheck, "Surname", surNameValue)}
        />
        <span>{surNameErrorMessage}</span>
        <input
          name="birthDate"
          id="birthDate"
          className={this.renderInputError("birthDate")}
          type="date"
          required
          placeholder="dd/mm/yyyy"
          value={birthDateValue}
          onChange={handleChanges}
          onBlur={(e) => checkInput(e, birthdateCheck, birthDateValue)}
        />
        <span>{birthDateErrorMessage}</span>
      </fieldset>
    );
  }
}

export default SecondStep;
