import React from "react";

class SecondStep extends React.Component {
  render() {
    const {
      values: { name, surName, birthDate },
      handleChanges,
    } = this.props;

    return (
      <div>
        <input
          name="name"
          id="nameInput"
          type="text"
          required
          placeholder="Name"
          value={name}
          onChange={handleChanges}
        />

        <input
          name="surName"
          id="surName"
          type="text"
          required
          placeholder="Surname"
          value={surName}
          onChange={handleChanges}
        />

        <input
          name="birthDate"
          id="birthDate"
          type="date"
          required
          placeholder="birthDate"
          value={birthDate}
          onChange={handleChanges}
        />
      </div>
    );
  }
}

export default SecondStep;
