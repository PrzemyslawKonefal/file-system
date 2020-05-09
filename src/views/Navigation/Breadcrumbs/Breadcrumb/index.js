import React from "react";
import PropTypes from "prop-types";

import { Link } from "../../../../ui/Link";

const Breadcrumb = ({ folderName, path }) => {
  return <Link to={path}>{folderName}</Link>;
};

Breadcrumb.propTypes = {
  folderName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default Breadcrumb;
