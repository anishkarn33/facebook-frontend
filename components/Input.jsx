import React from "react";

const Input = ({ className, ...otherProps }) => {
  return (
    <input
      className={`p-3 border rounded-md hover:border-gray-300 border-gray-200 group-even:${
        className ? className : ""
      }`}
      {...otherProps}
    />
  );
};

export default Input;
