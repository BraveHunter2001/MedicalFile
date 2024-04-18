import React from "react";
import { Button } from "reactstrap";

const IconButton = ({ size, color, caption, className, icon, onClick }) => {
  return (
    <Button size={size} color={color} className={className} onClick={onClick}>
      {icon}
      {caption}
    </Button>
  );
};

export default IconButton;
