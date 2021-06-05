import React from "react";

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
      <fieldset>
        <input
          name="name"
          id="nameInput"
          className={this.renderInputError("name")}
          type="text"
          required
          placeholder="Name"
          value={namevalue}
          onChange={handleChanges}
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
        />
        <span>{surNameErrorMessage}</span>
        <input
          name="birthDate"
          id="birthDate"
          className={this.renderInputError("birthDate")}
          type="date"
          required
          placeholder="birthDate"
          value={birthDateValue}
          onChange={handleChanges}
        />
        <span>{birthDateErrorMessage}</span>
      </fieldset>
    );
  }
}

export default SecondStep;
