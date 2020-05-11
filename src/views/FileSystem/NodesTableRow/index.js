import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useLocation } from "react-router-dom";

import fileSvg from "../../../assets/images/file.svg";
import folderSvg from "../../../assets/images/folder.svg";
import TableCellLink from "../../../ui/Table/TableCellLink";
import { formatDateAndTime } from "../../../utils/date";
import { TextLimiter } from "../../../ui/TextLimiter";
import content from "../../../constants/content";

const NodesTableRow = ({ node: { fileName, isFolder, url, updatedAt, createdAt }, onEditStart, onDeleteStart }) => {
  const { pathname } = useLocation();
  const nodePath = isFolder ? `${pathname === "/" ? "" : pathname}/${fileName}` : url;

  return (
    <TableRow>
      <TableCell align="left">
        <img src={isFolder ? folderSvg : fileSvg} alt={isFolder ? "folder" : "file"} />
      </TableCell>
      <TableCell>
        <TableCellLink to={nodePath} isExternalUrl={!isFolder}>
          <TextLimiter text={fileName} />
        </TableCellLink>
      </TableCell>
      <TableCell>
        <TableCellLink to={nodePath} isExternalUrl={!isFolder}>
          {formatDateAndTime(updatedAt)}
        </TableCellLink>
      </TableCell>
      <TableCell>
        <TableCellLink to={nodePath} isExternalUrl={!isFolder}>
          {formatDateAndTime(createdAt)}
        </TableCellLink>
      </TableCell>
      <TableCell align="right">
        <Button onClick={onEditStart}>{content.general.edit}</Button>
        <Button onClick={onDeleteStart}>{content.general.delete}</Button>
      </TableCell>
    </TableRow>
  );
};

NodesTableRow.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    isFolder: PropTypes.bool.isRequired,
    url: PropTypes.string,
    updatedAt: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  onEditStart: PropTypes.func.isRequired,
  onDeleteStart: PropTypes.func.isRequired,
};

export { NodesTableRow };
