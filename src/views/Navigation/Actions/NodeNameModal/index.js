import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";

import { validateNodeName } from "../../../../utils/validations";
import { ConfirmationModal } from "../../../../ui/Modals";
import content from "../../../../constants/content";

const NodeNameModal = ({ value, onChange, open, onConfirm, ...modalProps }) => {
  // TODO handle node with the same name already exists
  const [error, setError] = useState(false);

  const handleFormConfirm = () => {
    const formError = !validateNodeName(value);
    setError(formError);
    if (!formError) onConfirm();
  };

  const resetError = () => {
    setError(false);
  };

  useEffect(resetError, [open]);

  return (
    <ConfirmationModal {...modalProps} open={open} onConfirm={handleFormConfirm}>
      <Input
        fullWidth
        required
        type="text"
        value={value}
        onChange={onChange}
        autoFocus
        placeholder={content.fileSystem.nodeNameRequired}
        error={!!error}
      />
    </ConfirmationModal>
  );
};

NodeNameModal.defaultProps = {
  value: "",
};

NodeNameModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export { NodeNameModal };
