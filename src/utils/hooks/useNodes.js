import { useLocation } from "react-router-dom";
import { useState } from "react";
import { findDirectoryByPath, replaceDirectoriesList } from "../nodes";

export default () => {
  const [allNodes, setAllNodes] = useState([]);

  const { pathname } = useLocation();

  const currentFolderNodes = (() => {
    if (!pathname || pathname === "/") return allNodes;
    const nestedDirectory = findDirectoryByPath(allNodes, pathname);
    return nestedDirectory ? nestedDirectory.children : [];
  })();

  const addNode = node => {
    const newCurrentNodes = [...currentFolderNodes, node];
    setAllNodes(replaceDirectoriesList(allNodes, pathname, newCurrentNodes));
  };

  const editNode = editedNode => {
    const newNode = { ...editedNode, updatedAt: new Date().toISOString() };
    const newCurrentNodes = currentFolderNodes.map(node => (node.id === newNode.id ? newNode : node));
    setAllNodes(replaceDirectoriesList(allNodes, pathname, newCurrentNodes));
  };

  const deleteNode = deleteNodeId => {
    const newCurrentNodes = currentFolderNodes.filter(({ id }) => id !== deleteNodeId);
    const newNodesList = replaceDirectoriesList(allNodes, pathname, newCurrentNodes);
    setAllNodes(newNodesList);
  };

  return { currentFolderNodes, editNode, deleteNode, addNode };
};
