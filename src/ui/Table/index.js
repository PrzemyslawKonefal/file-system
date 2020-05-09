import React from "react";
import PropTypes from "prop-types";
import TableStyled from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Table = ({ headers, rows }) => {
  return (
    <TableContainer component={Paper}>
      <TableStyled>
        <TableHead>
          <TableRow>{headers}</TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </TableStyled>
    </TableContainer>
  );
};

Table.propTypes = {
  headers: PropTypes.element.isRequired,
  rows: PropTypes.element.isRequired
};

export default Table;
