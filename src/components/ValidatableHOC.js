import React, { useState } from "react";

const ValidatableHOC = (Component) => {
  const HocInputValidator = ({ regExp, onChange, ...props }) => {
    const [state, setState] = useState("");

    const onHandleChange = (event) => {
      if (regExp.test(event.target.value)) {
        setState(event.target.value);
        onChange && onChange(event.target.value);
      }
    };

    return <Component {...props} onChange={onHandleChange} value={state} />;
  };

  return HocInputValidator;
};

export default ValidatableHOC;
