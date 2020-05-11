import { isArray } from "./contracts";

export const findDirectoryByPath = (directories, pathToDirectory) => {
  if (!isArray(directories)) return [];
  const invalidPath = typeof pathToDirectory !== "string" || !pathToDirectory || pathToDirectory === "/";
  if (invalidPath) return directories.children;

  const chunkedPathNames = pathToDirectory.split("/").filter(el => !!el);
  const currentSearchedElementName = chunkedPathNames.shift();

  const currentSearchedElement = directories.find(dir => dir.fileName === currentSearchedElementName);

  const pathFromCurrentFolder = `/${chunkedPathNames.join("/")}`;

  return chunkedPathNames.length ? findDirectoryByPath(currentSearchedElement.children, pathFromCurrentFolder) : currentSearchedElement;
};

export function replaceDirectoriesList(directories, pathToDirListToReplace, newDirectoriesList) {
  const isPathEmptyOrInvalid = !pathToDirListToReplace || pathToDirListToReplace === "/";
  if (isPathEmptyOrInvalid) return newDirectoriesList;

  const chunkedPathNames = pathToDirListToReplace.split("/").filter(el => !!el);
  const currentSearchedElementName = chunkedPathNames.shift();
  const currentSearchedElement = directories.find(dir => dir.fileName === currentSearchedElementName);
  const pathToNextElementDownTheTree = `/${chunkedPathNames.join("/")}`;

  return directories.map(dir =>
    dir.fileName === currentSearchedElementName
      ? {
          ...dir,
          children: replaceDirectoriesList(currentSearchedElement.children, pathToNextElementDownTheTree, newDirectoriesList),
        }
      : dir,
  );
}
