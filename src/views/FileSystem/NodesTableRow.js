import React from "react";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const NodesTableRow = ({
  node: { fileName, isFolder, extension, updatedAt, createdAt },
  onEditStart,
  onDeleteStart
}) => (
  <TableRow>
    <TableCell>{fileName}</TableCell>
    <TableCell>{isFolder}</TableCell>
    <TableCell>{extension}</TableCell>
    <TableCell>{updatedAt}</TableCell>
    <TableCell>{createdAt}</TableCell>
    <TableCell>{fileName}</TableCell>
    <TableCell align="right">
      <button onClick={onEditStart}>Edit</button>
      <button onClick={onDeleteStart}>Delete</button>
    </TableCell>
  </TableRow>
);

NodesTableRow.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    isFolder: PropTypes.bool.isRequired,
    extension: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  }).isRequired,
  onEditStart: PropTypes.func.isRequired,
  onDeleteStart: PropTypes.func.isRequired
};

export default NodesTableRow;
