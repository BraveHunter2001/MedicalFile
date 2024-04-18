import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import IconButton from "./IconButton";

const LoadingButton = ({
  size,
  color,
  caption,
  className,
  isLoading,
  classNameIcon,
  onClick,
}) => {
  return (
    <IconButton
      size={size}
      color={color}
      caption={caption}
      className={className}
      onClick={onClick}
      icon={
        isLoading && (
          <FontAwesomeIcon
            icon={faSpinner}
            spin={isLoading}
            className={classNameIcon}
          />
        )
      }
    />
  );
};

export default LoadingButton;
