import React from "react";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";

import nodeDataSctructure from "../../constants/data-structures/node";

const {
  fileName,
  isFolder,
  extension,
  updatedAt,
  createdAt
} = nodeDataSctructure;

const NodesTableHeaders = ({ onSort }) => {
  const onFileTypeSort = () => onSort(isFolder.fieldName);
  const onFileNameSort = () => onSort(fileName.fieldName);
  const onExtensionSort = () => onSort(extension.fieldName);
  const onUpdatedAtSort = () => onSort(updatedAt.fieldName);
  const onCreatedAtSort = () => onSort(createdAt.fieldName);

  return (
    <>
      <TableCell onClick={onFileTypeSort} />
      <TableCell onClick={onFileNameSort}>Name</TableCell>
      <TableCell onClick={onExtensionSort} align="right">
        Extension
      </TableCell>
      <TableCell onClick={onUpdatedAtSort} align="right">
        Updated at
      </TableCell>
      <TableCell onClick={onCreatedAtSort} align="right">
        Created at
      </TableCell>
    </>
  );
};

NodesTableHeaders.propTypes = {
  onSort: PropTypes.func.isRequired
};

export default NodesTableHeaders;
