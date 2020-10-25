import React from "react";

const TextInput = ({ value, onChange }) => {
  return (
    <div>
      <input onChange={onChange} value={value} />
    </div>
  );
};

export default TextInput;
