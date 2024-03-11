import { Button } from "@material-tailwind/react";
import React from "react";

const CustomButton = ({
  children,  
  className = "",
  loading,
  onClick,
  color,
  type,
}) => {
  return (
    <Button
      className={`${className} ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      color={color}
      type={type}
      disabled={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
