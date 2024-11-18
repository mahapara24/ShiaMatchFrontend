import React from "react";

// Button component
const CustomButton = ({
  children, // Text or content to display inside the button
  color = "bg-gray-500", // Default color class (can be customized)
  textColor = "text-white", // Default text color
  customStyles = "", // Additional custom classes for styling
  ...props // Other props to spread onto the button element
}) => {
  return (
    <button
      className={`rounded-full px-4 py-2 ${color} ${textColor} ${customStyles} focus:outline-none hover:opacity-90 transition-opacity duration-200`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
