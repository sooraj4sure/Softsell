
import React from "react";

export const Button = ({ children, size = "md", variant = "solid", ...props }) => {
  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };

  const variantClasses = {
    solid: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
    ghost: "text-blue-600 hover:bg-blue-100",
  };

  return (
    <button
      className={`rounded-xl ${sizeClasses[size]} ${variantClasses[variant]} font-semibold focus:outline-none transition duration-300 ease-in-out`}
      {...props}
    >
      {children}
    </button>
  );
};
