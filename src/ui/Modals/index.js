import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import {
  DialogTitle,
  DialogActions,
  DialogContent,
  Dialog
} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmationModal = ({
  title,
  onCancel,
  onConfirm,
  confirmLabel,
  cancelLabel,
  children,
  confirmDisabled,
  ...rest
}) => {
  const dialogContent = children && <DialogContent>{children}</DialogContent>;

  return (
    <Dialog
      onBackdropClick={onCancel}
      TransitionComponent={Transition}
      onEscapeKeyDown={onCancel}
      {...rest}
    >
      <DialogTitle>{title}</DialogTitle>
      {dialogContent}
      <DialogActions>
        <Button onClick={onCancel} cv="grey50">
          {cancelLabel}
        </Button>
        <Button onClick={onConfirm} disabled={confirmDisabled}>
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmationModal.defaultProps = {
  confirmLabel: "Ok",
  cancelLabel: "Cancel",
  children: null,
  confirmDisabled: false
};

ConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.node,
  confirmDisabled: PropTypes.bool
};

export { ConfirmationModal };
