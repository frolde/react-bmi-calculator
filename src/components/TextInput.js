import React from "react";

const TextInput = (props) => {
  return (
    <div class="form-group">
      <input
        className="form-control form-control-lg"
        type="number"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default TextInput;
