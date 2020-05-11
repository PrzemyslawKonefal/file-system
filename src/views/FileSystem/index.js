import React, { useState } from "react";

import Table from "../../ui/Table";
import { NodesTableHeader } from "./NodesTableHeader";
import { NodesTableRow } from "./NodesTableRow/index";
import { SORT_DIRECTIONS } from "../../constants/table";
import NODE_DATA_STRUCTURE from "../../constants/data-structures/node";
import { toggleBasicModalState } from "../../utils/modals";
import { ConfirmationModal } from "../../ui/Modals";

import initModalState from "../../constants/initialValues/modal";
import useNodes from "../../utils/hooks/useNodes";
import { Navigation } from "../Navigation";
import content from "../../constants/content";
import { NoContentMessage } from "../../ui/NoContentMessage";
import { NodeNameModal } from "../Navigation/Actions/NodeNameModal";

const FileSystem = () => {
  // TODO handle entering not-existing folder path
  const { currentFolderNodes, editNode, deleteNode, addNode } = useNodes();
  const [deleteModal, setDeleteModal] = useState(initModalState);
  const [editModal, setEditModal] = useState(initModalState);
  const [sortParams, setSortParams] = useState({
    name: NODE_DATA_STRUCTURE.updatedAt,
    direction: SORT_DIRECTIONS.desc,
  });

  const handleTableSort = fieldName => {
    const direction = (() => {
      const isSameFieldName = fieldName === sortParams.name;
      const isCurrentSortDescending = sortParams.direction === SORT_DIRECTIONS.desc;
      if (!isSameFieldName) return SORT_DIRECTIONS.desc;
      if (isCurrentSortDescending) return SORT_DIRECTIONS.asc;
      return SORT_DIRECTIONS.desc;
    })();
    const newSortValue = { name: fieldName, direction };
    setSortParams(newSortValue);
  };

  const handleEditToggle = node => setEditModal(toggleBasicModalState(editModal, node));
  const handleDeleteToggle = node => setDeleteModal(toggleBasicModalState(deleteModal, node));

  const handleDeleteConfirm = () => {
    deleteNode(deleteModal.modalData.id);
    handleDeleteToggle();
  };
  const handleEditConfirm = () => {
    editNode(editModal.modalData);
    handleEditToggle();
  };

  const tableHeaders = <NodesTableHeader onSort={handleTableSort} />;
  const tableRows = currentFolderNodes.map(node => (
    <NodesTableRow key={node.id} node={node} onEditStart={() => handleEditToggle(node)} onDeleteStart={() => handleDeleteToggle(node)} />
  ));

  const handleNameChange = ({ target: { value } }) => {
    const newEditModal = {
      ...editModal,
      modalData: { ...editModal.modalData, fileName: value },
    };
    setEditModal(newEditModal);
  };

  const isFolderEmpty = currentFolderNodes.length === 0;
  return (
    <>
      <Navigation onNodeAdd={addNode} />
      {isFolderEmpty ? (
        <NoContentMessage>{content.fileSystem.table.emptyFolder}</NoContentMessage>
      ) : (
        <Table rows={tableRows} headers={tableHeaders} />
      )}

      <NodeNameModal
        onChange={handleNameChange}
        value={editModal.modalData.fileName || ""}
        onCancel={handleEditToggle}
        open={editModal.open}
        onConfirm={handleEditConfirm}
        title={content.fileSystem.editNode}
      />
      <ConfirmationModal
        onCancel={handleDeleteToggle}
        open={deleteModal.open}
        onConfirm={handleDeleteConfirm}
        title={content.fileSystem.deleteNode}
      >
        {content.general.deleteConfirm(deleteModal.modalData.fileName)}
      </ConfirmationModal>
    </>
  );
};

export { FileSystem };
