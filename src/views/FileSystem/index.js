import React, { useState } from "react";

import Table from "../../ui/Table";
import NodesTableHeaders from "./NodesTableHeaders";
import { SORT_DIRECTIONS } from "../../constants/table";
import nodeDataSctructure from "../../constants/data-structures/node";
import { sortAlpha } from "../../utils/sort";
import { toggleBasicModalState } from "../../utils/modals";
import NodesTableRow from "./NodesTableRow";

const {
  fileName,
  isFolder,
  extension,
  updatedAt,
  createdAt
} = nodeDataSctructure;

const sortNodesFunctions = {
  fileName: sortAlpha,
  isFolder: sortByBoolean,
  extension: sortAlpha,
  updatedAt: sortByDate,
  createdAt: sortByDate
};

const FileSystem = () => {
  const [deleteModal, setDeleteModal] = useState({});
  const [sortParams, setSortParams] = useState({
    name: updatedAt,
    direction: SORT_DIRECTIONS.desc
  });

  const currentFolderNodesList = [];

  const handleTableSort = fieldName => {
    const direction = (() => {
      const isSameFieldName = fieldName === sortParams.name;
      const isCurrentSortDescending =
        sortParams.direction === SORT_DIRECTIONS.desc;
      if (!isSameFieldName) return SORT_DIRECTIONS.desc;
      if (isCurrentSortDescending) return SORT_DIRECTIONS.asc;
      return SORT_DIRECTIONS.desc;
    })();
    const newSortValue = { name: fieldName, direction };
    setSortParams(newSortValue);
  };

  const handleEditStart = node =>
    setDeleteModal(toggleBasicModalState(deleteModal, node));
  const handleDeleteStart = node =>
    setDeleteModal(toggleBasicModalState(deleteModal, node));

  const sortedNodes = sortNodesFunctions[
    sortParams.name
  ](currentFolderNodesList, { ...sortParams });

  const tableHeaders = <NodesTableHeaders onSort={handleTableSort} />;
  const tableRows = sortedNodes.map(node => (
    <NodesTableRow
      key={node.id}
      node={node}
      onEditStart={() => handleEditStart(node)}
      onDeleteStart={() => handleDeleteStart(node)}
    />
  ));

  return <Table rows={tableRows} headers={tableHeaders} />;
};

export { FileSystem };
