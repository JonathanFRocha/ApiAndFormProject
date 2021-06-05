import React from "react";

class FirstStep extends React.Component {
  render() {
    const {
      values: { email, password, passwordConfirmation },
      handleChanges,
    } = this.props;

    return (
      <div>
        <input
          name="email"
          id="emailInput"
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={handleChanges}
        />

        <input
          name="password"
          id="passwordInput"
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={handleChanges}
        />

        <input
          name="passwordConfirmation"
          id="confirmPassword"
          type="password"
          required
          placeholder="Confirm your Password"
          value={passwordConfirmation}
          onChange={handleChanges}
        />
      </div>
    );
  }
}

export default FirstStep;
