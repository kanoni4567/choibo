import React from 'react';

const Input = props => {
  //console.log(props.value);
  return (
    <div className="form-group">
      <h3>{props.name}</h3>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
