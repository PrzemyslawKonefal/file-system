import React from "react";
import PropTypes from "prop-types";
import LinkStyle from "@material-ui/core/Link";
import { Link as LinkUtility } from "react-router-dom";

const Link = ({ children, ...linkProps }) => {
  return (
    <LinkStyle>
      <LinkUtility {...linkProps}>{children}</LinkUtility>
    </LinkStyle>
  );
};

Link.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired
};

export { Link };
