import React from "react";
import { fullAddressCheck } from "../../services/checkFormInput";

class ThirdStep extends React.Component {
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
        fullAddress: { value: fullAddressvalue, message: fullAddressErrorMessage },
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
            name="fullAddress"
            id="fullAddress"
            className={`form__input ${this.renderInputError("fullAddress")}`}
            type="text"
            placeholder="please enter your full address"
            value={fullAddressvalue}
            onChange={handleChanges}
            onBlur={(e) => checkInput(e, fullAddressCheck, fullAddressvalue)}
          />
          <span className="form__input--error__message">{fullAddressErrorMessage}</span>
        </div>
      </fieldset>
    );
  }
}

export default ThirdStep;
