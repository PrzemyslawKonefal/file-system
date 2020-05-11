import React from "react";
import { useLocation } from "react-router-dom";
import BreadcrumbsStyled from "@material-ui/core/Breadcrumbs";
import Breadcrumb from "./Breadcrumb";
import { deriveFoldersFromPath } from "../../../utils/breadcrumbs";

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const ancestorFolders = deriveFoldersFromPath(pathname);

  const breadcrumbsList = ancestorFolders
    .map(folder => <Breadcrumb key={folder.path} {...folder} />)
    .reverse();

  const homeBreadcrumb = <Breadcrumb folderName="home" path="/" />;

  return (
    <BreadcrumbsStyled>
      {homeBreadcrumb}
      {breadcrumbsList}
    </BreadcrumbsStyled>
  );
};

export { Breadcrumbs };
