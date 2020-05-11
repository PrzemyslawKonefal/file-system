import React from "react";
import PropTypes from "prop-types";

import { InternalLink } from "../../../../ui/Links/InternalLink";

const Breadcrumb = ({ folderName, path }) => {
  return <InternalLink to={path}>{folderName}</InternalLink>;
};

Breadcrumb.propTypes = {
  folderName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default Breadcrumb;
