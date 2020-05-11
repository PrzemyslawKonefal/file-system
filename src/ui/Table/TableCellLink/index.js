import React from "react";
import PropTypes from "prop-types";
import { ExternalLink } from "../../Links/ExternalLink";
import { InternalLink } from "../../Links/InternalLink";

const TableCellLink = ({ isExternalUrl, to, children }) => {
  if (isExternalUrl) return <ExternalLink href={to}>{children}</ExternalLink>;
  return <InternalLink to={to}>{children}</InternalLink>;
};

TableCellLink.defaultProps = {
  isExternalUrl: false,
};

TableCellLink.propTypes = {
  isExternalUrl: PropTypes.bool,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TableCellLink;
