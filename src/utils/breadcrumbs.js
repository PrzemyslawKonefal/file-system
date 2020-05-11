export const deriveFoldersFromPath = path => {
  if (!path || path === "/") return [];
  const pathChunks = path.split("/");
  const currentFolder = {
    path,
    folderName: pathChunks.pop()
  };
  return [currentFolder, ...deriveFoldersFromPath(pathChunks.join("/"))];
};
