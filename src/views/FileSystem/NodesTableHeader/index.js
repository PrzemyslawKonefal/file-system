import React from "react";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";

import NODE_DATA_STRUCTURE from "../../../constants/data-structures/node";
import content from "../../../constants/content";

const NodesTableHeader = ({ onSort }) => {
  const onFileTypeSort = () => onSort(NODE_DATA_STRUCTURE.isFolder);
  const onFileNameSort = () => onSort(NODE_DATA_STRUCTURE.fileName);
  const onUpdatedAtSort = () => onSort(NODE_DATA_STRUCTURE.updatedAt);
  const onCreatedAtSort = () => onSort(NODE_DATA_STRUCTURE.createdAt);

  return (
    <>
      <TableCell onClick={onFileTypeSort} align="left" />
      <TableCell onClick={onFileNameSort}>{content.fileSystem.table.name}</TableCell>
      <TableCell onClick={onUpdatedAtSort}>{content.fileSystem.table.createdAt}</TableCell>
      <TableCell onClick={onCreatedAtSort}>{content.fileSystem.table.updatedAt}</TableCell>
      <TableCell align="right" />
    </>
  );
};

NodesTableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
};

export { NodesTableHeader };
