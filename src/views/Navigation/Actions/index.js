import React, { useState } from "react";
import Proptypes from "prop-types";
import Button from "@material-ui/core/Button";

import { NodeNameModal } from "./NodeNameModal";
import initModalState from "../../../constants/initialValues/modal";
import initFolderState from "../../../constants/initialValues/folder";
import initFileState from "../../../constants/initialValues/file";
import content from "../../../constants/content";
import { InputLabel } from "./NodeNameModal/styles";

const Actions = ({ onNodeAdd }) => {
  const [showNodeModal, setNodeModal] = useState(initModalState);

  const handleNodeModalStart = () => setNodeModal({ open: true, modalData: initFolderState() });
  const handleNodeModalClose = () => setNodeModal(initModalState);
  const handleNodeModalConfirm = () => {
    onNodeAdd(showNodeModal.modalData);
    handleNodeModalClose();
  };
  const handleFolderNameChange = ({ target: { value } }) =>
    setNodeModal({ ...showNodeModal, modalData: { ...showNodeModal.modalData, fileName: value } });

  const handleFileAdd = e => {
    const [file] = e.target.files;
    if (file) {
      onNodeAdd(initFileState(file));
    }
  };

  return (
    <div>
      <Button mr={6}>
        <InputLabel htmlFor="upload">
          {content.navigation.addFile}
          <input id="upload" type="file" onChange={handleFileAdd} style={{ display: "none" }} />
        </InputLabel>
      </Button>
      <Button onClick={handleNodeModalStart}>{content.navigation.addFolder}</Button>
      <NodeNameModal
        title={content.navigation.newFolder}
        open={showNodeModal.open}
        onConfirm={handleNodeModalConfirm}
        onCancel={handleNodeModalClose}
        value={showNodeModal.modalData.fileName}
        onChange={handleFolderNameChange}
      />
    </div>
  );
};

Actions.propTypes = {
  onNodeAdd: Proptypes.func.isRequired,
};

export { Actions };
