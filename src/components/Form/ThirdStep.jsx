import React from "react";

class ThirdStep extends React.Component {
  render() {
    const {
      values: { fullAddress },
      handleChanges,
    } = this.props;

    return (
      <div>
        <input
          name="fullAddress"
          id="fullAddress"
          type="text"
          required
          placeholder="Full Address"
          value={fullAddress}
          onChange={handleChanges}
        />
      </div>
    );
  }
}

export default ThirdStep;
