import React from "react";
import { useLocation } from "react-router-dom";
import BreadcrumbsStyled from "@material-ui/core/Breadcrumbs";
import Breadcrumb from "./Breadcrumb";

const filterOutEmptyPaths = path => !!path;

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const foldersData = pathname.split("/");
  const homeBreadcrumb = <Breadcrumb folderName="home" path="/" />;

  return <BreadcrumbsStyled>{homeBreadcrumb}</BreadcrumbsStyled>;
};

export { Breadcrumbs };
