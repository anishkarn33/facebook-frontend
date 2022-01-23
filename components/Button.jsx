import React from "react";

const Button = ({ children, className, ...otherProps }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white ${
        className ? className : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
