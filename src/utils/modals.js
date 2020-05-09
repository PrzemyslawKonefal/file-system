export const toggleBasicModalState = (currentState, incomingModalData) => {
  const open = !currentState.open;
  const modalData = currentState.open ? {} : incomingModalData;
  return { open, modalData };
};
