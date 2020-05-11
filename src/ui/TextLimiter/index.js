import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";

const cutText = (text, maxChar) => {
  const dotsLength = 3;
  return text.length > maxChar && text.length > dotsLength ? `${text.substring(0, maxChar - dotsLength)}...` : text;
};

const TextLimiter = ({ text, maxChar }) =>
  typeof text === "string" && (
    <Tooltip title={text}>
      <span>{cutText(text, maxChar)}</span>
    </Tooltip>
  );

TextLimiter.defaultProps = {
  text: "",
  maxChar: 30,
};

TextLimiter.propTypes = {
  text: PropTypes.string,
  maxChar: PropTypes.number,
};

export { TextLimiter, cutText };
